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
const minimum = { text: Infinity, control: Infinity };

// Guard against reintroducing unsupported aliases. Decorative icons and disabled
// controls may legitimately use opacity, so assess text opacity in rendered context.
function checkStyleFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory);
    if (entry.isDirectory()) {
      if (entry.name !== '__tests__') checkStyleFiles(file);
    } else if (entry.name.endsWith('.styles.ts')) {
      const source = readFileSync(file, 'utf8');
      assert.doesNotMatch(source, /\b(?:text|bg|border|ring|stroke|fill)-(?:primary|secondary|accent|neutral|success|danger|warning|info)-text\b/, `${file.pathname}: use native color utilities`);
    }
  }
}
for (const name of ['primitives', 'forms', 'feedback', 'overlays', 'navigation', 'data-display']) {
  checkStyleFiles(new URL(`../packages/${name}/src/`, import.meta.url));
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
  const kind = threshold === 3 ? 'control' : 'text';
  minimum[kind] = Math.min(minimum[kind], ratio);
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
    assert.equal(Object.keys(mode).length, 31, `${label}: keep the original small token schema`);
    assert.ok(!Object.keys(mode).some(token => token.endsWith('-text')), 'No separate semantic text API');
    for (const color of colors) {
      check(`${label}/${color}/solid`, mode[`${color}-content`], mode[color]);
      assert.ok(bridge.includes(`--color-${color}: var(--color-${color});`), `Native color mapping missing for ${color}`);
      const foreground = mode[color];
      for (const token of [color, color + '-content']) {
        assert.ok(new Color(mode[token]).to('srgb').coords.every(v => v >= -0.0001 && v <= 1.0001), `${label}/${token}: outside sRGB gamut`);
      }
      for (const surface of surfaces) {
        check(`${label}/${color}/${surface}/solid-hover`, mode[`${color}-content`], composite(mode[color], mode[surface], 0.9));
        // Transparent text/outline, soft/ghost rest and hover, stronger highlights.
        for (const alpha of [0, 0.1, 0.2]) {
          check(`${label}/${color}/${surface}/tint-${alpha}`, foreground, composite(mode[color], mode[surface], alpha));
        }
      }
    }
    for (const surface of surfaces) {
      check(`${label}/${surface}/body`, mode['base-content'], mode[surface]);
      check(`${label}/${surface}/secondary-text`, composite(mode['base-content'], mode[surface], 0.7), mode[surface]);
      for (const border of ['border', 'border-hover', 'border-active']) {
        check(`${label}/${surface}/${border}`, mode[border], mode[surface], 3);
      }
    }
    check(`${label}/switch-thumb-icon`, mode['base-content'], mode.border, 3);
  }
}

assert.deepEqual(failures, [], `Theme contrast failures:\n${failures.join('\n')}`);
console.log(`Theme contrast: ${checks} checks passed; text minimum ${minimum.text.toFixed(3)}:1; control boundary minimum ${minimum.control.toFixed(3)}:1.`);
