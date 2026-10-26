// CSS contrast cannot be checked by jsdom/axe. Measure the shipped token values
// in sRGB (including gamut mapping and alpha compositing) instead.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import Color from 'colorjs.io';

const theme = new URL('../packages/core/src/theme/', import.meta.url);
const bridge = readFileSync(new URL('tailwind.css', theme), 'utf8');
const colors = ['primary', 'secondary', 'accent', 'neutral', 'success', 'danger', 'warning', 'info'];
const surfaces = ['base-50', 'base-100', 'base-200'];
const failures = [];
let checks = 0;
let minimum = Infinity;

// Guard the original regression too: correct text tokens are ineffective if a
// component accidentally uses a vivid fill as its text color again.
function checkComponentRoles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory);
    if (entry.isDirectory()) {
      if (entry.name !== '__tests__') checkComponentRoles(file);
    } else if (/\.(ts|tsx)$/.test(entry.name) && !entry.name.includes('.test.')) {
      const rawText = readFileSync(file, 'utf8').match(/\btext-(primary|secondary|accent|neutral|success|danger|warning|info)(?![\w-])/g);
      assert.equal(rawText, null, `${file.pathname}: use a text tone or matching solid-content role, not ${rawText}`);
    }
  }
}

for (const name of ['core', 'primitives', 'feedback', 'forms', 'navigation', 'overlays', 'data-display']) {
  checkComponentRoles(new URL(`../packages/${name}/src/`, import.meta.url));
}

function srgb(color) {
  return new Color(color).to('srgb').toGamut();
}

function composite(foreground, background, alpha) {
  const front = srgb(foreground);
  const back = srgb(background);
  return new Color('srgb', front.coords.map((v, i) => v * alpha + back.coords[i] * (1 - alpha)));
}

function check(label, foreground, background, threshold = 4.5) {
  const ratio = srgb(foreground).contrastWCAG21(srgb(background));
  checks++;
  minimum = Math.min(minimum, ratio);
  if (ratio < threshold) failures.push(`${label}: ${ratio.toFixed(3)}:1 (requires ${threshold}:1)`);
}

for (const file of readdirSync(new URL('presets/', theme)).filter(file => file.endsWith('.css'))) {
  const css = readFileSync(new URL(`presets/${file}`, theme), 'utf8');
  // Each preset defines light, explicit dark, and system dark token blocks.
  const modes = [...css.matchAll(/\{([^{}]*--color-primary:[^{}]*)\}/g)];
  assert.equal(modes.length, 3, `${file} must retain light, dark and system dark`);
  const tokens = modes.map(match => Object.fromEntries(
    [...match[1].matchAll(/--color-([\w-]+):\s*([^;]+);/g)].map(token => [token[1], token[2]])
  ));
  assert.deepEqual(tokens[1], tokens[2], `${file}: system and explicit dark tokens must match`);

  for (const [index, mode] of tokens.slice(0, 2).entries()) {
    const label = `${file}/${index ? 'dark' : 'light'}`;
    for (const color of colors) {
      check(`${label}/${color}/solid`, mode[`${color}-content`], mode[color]);
      assert.ok(bridge.includes(`--color-${color}-text: var(--color-${color}-text, var(--color-${color}));`), `Missing text utility for ${color}`);
      const tone = mode[`${color}-text`];
      assert.ok(tone, `Missing preset text tone for ${color}`);
      const alias = tone.match(/^var\(--color-([\w-]+)\)$/);
      const foreground = alias ? mode[alias[1]] : tone;
      for (const surface of surfaces) {
        check(`${label}/${color}/${surface}/solid-hover`, mode[`${color}-content`], composite(mode[color], mode[surface], 0.9));
        // Transparent text/outline, soft/ghost rest and hover, stronger highlights.
        for (const alpha of [0, 0.1, 0.2]) {
          check(`${label}/${color}/${surface}/tint-${alpha}`, foreground, composite(mode[color], mode[surface], alpha));
        }
      }
    }
  }
}

assert.deepEqual(failures, [], `Theme contrast failures:\n${failures.join('\n')}`);
console.log(`Theme contrast: ${checks} pairs passed WCAG AA (minimum ${minimum.toFixed(3)}:1).`);
