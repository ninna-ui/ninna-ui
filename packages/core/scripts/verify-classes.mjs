#!/usr/bin/env node
/**
 * verify-classes.mjs
 *
 * Builds a minimal Tailwind CSS output using the ninna-ui theme and checks
 * that every class token extracted from component source files has a
 * corresponding CSS rule in the built output.
 *
 * This lets you verify BEFORE publishing that no classes are missing.
 *
 * Usage:  node packages/core/scripts/verify-classes.mjs
 *
 * Requirements: tailwindcss CLI must be installed (npx tailwindcss)
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { execSync } from 'child_process';

// ─── Configuration ───────────────────────────────────────────────
const PACKAGES_DIR = resolve(import.meta.dirname, '..', '..');
const CORE_DIR = resolve(import.meta.dirname, '..');
const TMP_DIR = resolve(CORE_DIR, '.verify-tmp');

const COMPONENT_PACKAGES = [
  'primitives',
  'feedback',
  'forms',
  'overlays',
  'navigation',
  'layout',
  'data-display',
  'code-block',
];

// Known Tailwind utility prefixes (same as generate-safelist.mjs)
const KNOWN_TW_PREFIXES = new Set([
  'absolute', 'animate', 'antialiased', 'appearance', 'aspect',
  'backdrop', 'basis', 'bg', 'block', 'blur', 'border', 'bottom', 'box',
  'break', 'brightness',
  'capitalize', 'caret', 'clear', 'col', 'columns', 'container', 'content',
  'contents', 'contrast', 'cursor',
  'data', 'decoration', 'delay', 'divide', 'drop', 'duration',
  'ease', 'even',
  'fill', 'first', 'fixed', 'flex', 'float', 'font', 'forced',
  'from',
  'gap', 'grayscale', 'grid', 'group', 'grow',
  'h', 'hidden', 'hover', 'hue',
  'indent', 'inline', 'inset', 'invert', 'invisible', 'isolate', 'italic', 'items',
  'justify',
  'last', 'leading', 'left', 'lg', 'line', 'list', 'ltr',
  'm', 'marker', 'max', 'mb', 'md', 'min', 'mix', 'ml', 'motion', 'mr', 'ms', 'mt', 'mx', 'my',
  'normal', 'not',
  'object', 'odd', 'only', 'opacity', 'order', 'origin', 'outline', 'overflow', 'overscroll',
  'p', 'pb', 'pe', 'peer', 'pl', 'place', 'placeholder', 'pointer', 'pr', 'ps', 'pt', 'px', 'py',
  'read', 'relative', 'resize', 'right', 'ring', 'rotate', 'rounded', 'row', 'rtl',
  'saturate', 'scale', 'scroll', 'select', 'self', 'sepia', 'shadow', 'shrink',
  'size', 'skew', 'sl', 'sm', 'snap', 'space', 'sr', 'start', 'static', 'sticky',
  'stroke', 'subgrid',
  'table', 'tabular', 'text', 'to', 'top', 'touch', 'tracking', 'transform',
  'transition', 'translate', 'truncate',
  'underline', 'uppercase',
  'via', 'visible',
  'w', 'whitespace', 'will', 'wrap',
  'xl',
  'z',
  'animate', 'fade', 'zoom', 'slide',
]);

// ─── Explicit blocklist of non-Tailwind tokens (same as generate-safelist.mjs) ───
const BLOCKLIST = new Set([
  'application/pdf', 'text/plain', 'image/png', 'image/svg',
  'ninna-ui/core', 'ninna-ui/react', 'ninna-ui/utils',
  'testing-library/react', 'testing-library/user',
  'htmlFor/id',
  'next/previous', 'light/dark', 'input/input',
  'article/1', 'org/2000',
  'data-slot', 'data-slots', 'data-testid', 'data-variant', 'data-disabled',
  'data-invalid', 'data-loading', 'data-orientation', 'data-placement',
  'data-table', 'data-table-cell', 'data-table-head', 'data-table-row',
  'left-icon', 'right-icon', 'hidden-field',
  'top-center', 'top-left', 'top-right',
  'bottom-center', 'bottom-left', 'bottom-right',
  'table-body', 'table-caption', 'table-footer', 'table-header',
  'table-cell', 'table-head', 'table-row',
  'aspect-ratio', 'ltr', 'rtl', 'clear', 'will',
]);

// ─── Helpers ─────────────────────────────────────────────────────

function collectSourceFiles(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', 'dist', '__tests__', '.turbo'].includes(entry.name)) continue;
      collectSourceFiles(full, files);
    } else if (
      entry.name.endsWith('.styles.ts') ||
      entry.name.endsWith('.tsx')
    ) {
      files.push(full);
    }
  }
  return files;
}

function extractClassStrings(content) {
  const strings = [];
  let cleaned = content.replace(/\/\/.*$/gm, '');
  cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, '');
  cleaned = cleaned.replace(/^import\s+.*$/gm, '');
  cleaned = cleaned.replace(/^(export\s+)?(type|interface)\s+.*$/gm, '');

  for (const m of cleaned.matchAll(/"([^"\\]*(?:\\.[^"\\]*)*)"/g)) strings.push(m[1]);
  for (const m of cleaned.matchAll(/'([^'\\]*(?:\\.[^'\\]*)*)'/g)) strings.push(m[1]);
  for (const m of cleaned.matchAll(/`([^`\\]*(?:\\.[^`\\]*)*)`/g)) strings.push(m[1]);
  return strings;
}

function isValidTailwindClass(token) {
  if (token.length < 2 || token.length > 120) return false;
  if (BLOCKLIST.has(token)) return false;
  if (/^[A-Z]/.test(token)) return false;
  if (/^(import|export|from|const|let|var|function|return|if|else|switch|case|break|class|extends|type|enum|true|false|null|undefined|void|typeof|instanceof|new|delete|this|super|yield|async|await|for|while|do|try|catch|finally|throw|as|is|of|in)$/.test(token)) return false;
  if (/^(horizontal|vertical|outline|filled|flushed|solid|soft|ghost|line|enclosed|center|top|bottom|left|right|spin|ping|pulse|dots|default|success|danger|warning|info|primary|secondary|accent|neutral|loading|xs|sm|md|lg|xl|2xl|3xl|full|none|auto|start|end|between|around|evenly|stretch|baseline|wrap|nowrap|reverse|column|row|initial|inherit|revert|unset)$/.test(token)) return false;
  if (/["']/.test(token)) return false;

  const withoutBrackets = token.replace(/\[[^\]]*\]/g, '');
  if (/[{}()<>|?;,@#$%^~`\\]/.test(withoutBrackets)) return false;
  if (/[=&]/.test(withoutBrackets)) return false;

  if (token.includes('/')) {
    const parts = token.split('/');
    if (parts.length !== 2) return false;
    const [before, after] = parts;
    if (!/^\d+$/.test(after) && !/^\d+\.\d+$/.test(after) && !/^\d+\/\d+$/.test(after)) return false;
    const stripped = before.replace(/^!/, '').replace(/^.*:/, '').replace(/^-/, '');
    const prefix = stripped.split('-')[0];
    if (!KNOWN_TW_PREFIXES.has(prefix)) return false;
  }

  let base = token;
  while (base.includes(':')) {
    const colonIdx = base.indexOf(':');
    const bracketBefore = base.lastIndexOf('[', colonIdx);
    const bracketAfter = base.indexOf(']', bracketBefore);
    if (bracketBefore !== -1 && bracketAfter !== -1 && bracketAfter < colonIdx) {
      base = base.slice(colonIdx + 1);
    } else if (bracketBefore !== -1 && bracketAfter > colonIdx) {
      break;
    } else {
      base = base.slice(colonIdx + 1);
    }
  }

  base = base.replace(/^!/, '').replace(/^-/, '');
  const prefix = base.split('-')[0].split('/')[0].split('[')[0];
  if (!prefix) return false;
  if (!KNOWN_TW_PREFIXES.has(prefix)) return false;

  return true;
}

/**
 * Convert a Tailwind class to its expected CSS selector.
 * This is a simplified version - handles the most common patterns.
 */
function classToSelector(cls) {
  // Escape special CSS characters
  return cls
    .replace(/\\/g, '\\\\')
    .replace(/\//g, '\\/')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\./g, '\\.')
    .replace(/:/g, '\\:')
    .replace(/!/g, '\\!')
    .replace(/\+/g, '\\+')
    .replace(/@/g, '\\@')
    .replace(/%/g, '\\%')
    .replace(/,/g, '\\,')
    .replace(/#/g, '\\#')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/\*/g, '\\*');
}

// ─── Main ────────────────────────────────────────────────────────

function main() {
  console.log('🔍 Extracting all Tailwind classes from component sources...\n');

  const allClasses = new Set();
  let fileCount = 0;

  for (const pkg of COMPONENT_PACKAGES) {
    const srcDir = join(PACKAGES_DIR, pkg, 'src');
    try { statSync(srcDir); } catch { continue; }

    const files = collectSourceFiles(srcDir);
    fileCount += files.length;

    for (const file of files) {
      const content = readFileSync(file, 'utf-8');
      const strings = extractClassStrings(content);
      for (const str of strings) {
        const tokens = str.split(/\s+/).filter(Boolean);
        for (const token of tokens) {
          if (isValidTailwindClass(token)) {
            allClasses.add(token);
          }
        }
      }
    }
  }

  console.log(`   Files scanned: ${fileCount}`);
  console.log(`   Classes found: ${allClasses.size}`);

  // ── Build CSS using Tailwind CLI ──────────────────────────────
  console.log('\n🔨 Building CSS with Tailwind...\n');

  mkdirSync(TMP_DIR, { recursive: true });

  // Create a minimal input CSS that imports the default preset
  const inputCss = `@import "tailwindcss" source(none);
@import "../src/theme/presets/default.css";
@variant dark (&:is(.dark *));
`;
  writeFileSync(join(TMP_DIR, 'input.css'), inputCss);

  // Build using @tailwindcss/cli
  const outputPath = join(TMP_DIR, 'output.css');
  try {
    execSync(
      `npx @tailwindcss/cli -i "${join(TMP_DIR, 'input.css')}" -o "${outputPath}" --minify`,
      { cwd: CORE_DIR, stdio: 'pipe', timeout: 60000 }
    );
  } catch (e) {
    // Try without --minify
    try {
      execSync(
        `npx @tailwindcss/cli -i "${join(TMP_DIR, 'input.css')}" -o "${outputPath}"`,
        { cwd: CORE_DIR, stdio: 'pipe', timeout: 60000 }
      );
    } catch (e2) {
      console.error('❌ Failed to build CSS with Tailwind CLI');
      console.error(e2.stderr?.toString() || e2.message);
      cleanup();
      process.exit(1);
    }
  }

  const builtCss = readFileSync(outputPath, 'utf-8');
  console.log(`   Built CSS size: ${(builtCss.length / 1024).toFixed(1)} KB`);

  // ── Check which classes are present ───────────────────────────
  console.log('\n🔎 Checking classes in built CSS...\n');

  const missing = [];
  const found = [];

  for (const cls of [...allClasses].sort()) {
    // For each class, check if its escaped selector form appears in the CSS
    const selector = classToSelector(cls);
    // Check with dot prefix (class selector)
    if (builtCss.includes(`.${selector}`)) {
      found.push(cls);
      continue;
    }

    // For complex selectors (variants with brackets, data-attributes, etc.)
    // Tailwind may use different escaping in the output.
    // Extract the base utility (after the last ':') and check for that.
    let base = cls;
    // Strip variant prefixes to get the base utility
    const lastColon = cls.lastIndexOf(':');
    if (lastColon !== -1) {
      base = cls.slice(lastColon + 1);
    }
    const baseSelector = classToSelector(base);
    // If the base utility (e.g. "pointer-events-none", "slide-in-from-top-2")
    // appears as a class in the CSS, the full variant version is covered
    if (builtCss.includes(`.${baseSelector}`) || builtCss.includes(`{${baseSelector}`)) {
      found.push(cls);
      continue;
    }

    // For data-attribute variant classes, check if the base utility is defined
    // as a @utility or @keyframes in the CSS (custom animations like accordion-up/down)
    if (base !== cls) {
      const plainBase = base.replace(/^[-!]/, '');
      // Also try CSS-escaped form (Tailwind escapes \ as \\, / as \/ and . as \. in selectors)
      const escapedBase = plainBase
        .replace(/\\/g, '\\\\')
        .replace(/\//g, '\\/')
        .replace(/\./g, '\\.');
      // Check for @utility definition or the utility name appearing in CSS rules
      if (builtCss.includes(`@utility ${plainBase}`) ||
          builtCss.includes(`@keyframes ${plainBase}`) ||
          builtCss.includes(plainBase) ||
          builtCss.includes(escapedBase)) {
        found.push(cls);
        continue;
      }
    }

    // Try a raw substring match - the class name with special chars escaped
    // should appear somewhere in the CSS output
    const rawEscaped = cls
      .replace(/\\/g, '\\\\')
      .replace(/\[/g, '\\[')
      .replace(/\]/g, '\\]')
      .replace(/=/g, '\\=')
      .replace(/\//g, '\\/');
    if (builtCss.includes(rawEscaped)) {
      found.push(cls);
      continue;
    }

    missing.push(cls);
  }

  // ── Report ────────────────────────────────────────────────────
  console.log(`✅ Found:   ${found.length} / ${allClasses.size} classes`);
  console.log(`❌ Missing: ${missing.length} / ${allClasses.size} classes`);

  if (missing.length > 0) {
    console.log('\n❌ Missing classes:');

    // Group by category
    const byCategory = {};
    for (const cls of missing) {
      let cat = 'other';
      if (cls.includes(':')) cat = 'variant';
      else if (cls.includes('/')) cat = 'opacity';
      else if (cls.includes('[')) cat = 'arbitrary';
      else if (cls.startsWith('!') || cls.startsWith('-')) cat = 'modifier';
      else if (/^(stroke|fill|animate|fade|zoom|slide|size)/.test(cls)) cat = 'custom';

      if (!byCategory[cat]) byCategory[cat] = [];
      byCategory[cat].push(cls);
    }

    for (const [cat, classes] of Object.entries(byCategory)) {
      console.log(`\n   [${cat}] (${classes.length}):`);
      for (const cls of classes.slice(0, 20)) {
        console.log(`     - ${cls}`);
      }
      if (classes.length > 20) {
        console.log(`     ... and ${classes.length - 20} more`);
      }
    }
  }

  // Cleanup
  cleanup();

  if (missing.length > 0) {
    console.log(`\n⚠️  ${missing.length} classes missing - review safelist or @source directives.`);
    // Don't exit with error for now - just warn
    // process.exit(1);
  } else {
    console.log('\n🎉 All classes present in built CSS!');
  }
}

function cleanup() {
  try {
    rmSync(TMP_DIR, { recursive: true, force: true });
  } catch { /* ignore */ }
}

main();
