#!/usr/bin/env node
/**
 * generate-safelist.mjs
 *
 * Scans all component .styles.ts and .tsx source files across every
 * @ninna-ui package, extracts Tailwind CSS class tokens, and writes
 * a complete @source inline() safelist into tailwind.css.
 *
 * This guarantees that every utility class used by ninna-ui components
 * is included when consumers import the theme CSS — regardless of
 * whether Tailwind's filesystem scanner can extract them from compiled JS.
 *
 * Usage:  node packages/core/scripts/generate-safelist.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';

// ─── Configuration ───────────────────────────────────────────────
const PACKAGES_DIR = resolve(import.meta.dirname, '..', '..');

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

const TAILWIND_CSS_PATH = resolve(
  import.meta.dirname,
  '..',
  'src',
  'theme',
  'tailwind.css'
);

// Marker comments in tailwind.css — everything between these is replaced
const SAFELIST_START = '/* === AUTO-GENERATED SAFELIST START === */';
const SAFELIST_END = '/* === AUTO-GENERATED SAFELIST END === */';

// ─── Helpers ─────────────────────────────────────────────────────

/**
 * Recursively collect all .styles.ts and .tsx files under a directory.
 */
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

/**
 * Extract className-context string literals from source code.
 * Targets: cva() arguments, Record<X, string> values, cn() arguments,
 * className={...} JSX attributes, and plain string literals in style objects.
 *
 * Strips import lines, type annotations, and JSDoc to avoid false positives.
 */
function extractClassStrings(content) {
  const strings = [];

  // Remove single-line comments
  let cleaned = content.replace(/\/\/.*$/gm, '');
  // Remove multi-line comments (but keep content for safety)
  cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, '');
  // Remove import statements (biggest source of false positives like '@ninna-ui/core')
  cleaned = cleaned.replace(/^import\s+.*$/gm, '');
  // Remove type/interface declarations
  cleaned = cleaned.replace(/^(export\s+)?(type|interface)\s+.*$/gm, '');

  // Match double-quoted strings: "..."
  for (const m of cleaned.matchAll(/"([^"\\]*(?:\\.[^"\\]*)*)"/g)) {
    strings.push(m[1]);
  }

  // Match single-quoted strings: '...'
  for (const m of cleaned.matchAll(/'([^'\\]*(?:\\.[^'\\]*)*)'/g)) {
    strings.push(m[1]);
  }

  // Match template literal parts
  for (const m of cleaned.matchAll(/`([^`\\]*(?:\\.[^`\\]*)*)`/g)) {
    strings.push(m[1]);
  }

  return strings;
}

// ─── Explicit blocklist of non-Tailwind tokens ──────────────────
const BLOCKLIST = new Set([
  // MIME types / content types
  'application/pdf', 'text/plain', 'image/png', 'image/svg',
  // Import paths / package names
  'ninna-ui/core', 'ninna-ui/react', 'ninna-ui/utils',
  'testing-library/react', 'testing-library/user',
  // HTML attributes that look like classes
  'htmlFor/id',
  // JS expressions
  'next/previous', 'light/dark', 'input/input',
  // Misc non-classes
  'article/1', 'org/2000',
  // HTML data-attributes used as attribute names (not Tailwind classes)
  'data-slot', 'data-slots', 'data-testid', 'data-variant', 'data-disabled',
  'data-invalid', 'data-loading', 'data-orientation', 'data-placement',
  'data-table', 'data-table-cell', 'data-table-head', 'data-table-row',
  // Component prop values / layout position tokens (not Tailwind utilities)
  'left-icon', 'right-icon', 'hidden-field',
  'top-center', 'top-left', 'top-right',
  'bottom-center', 'bottom-left', 'bottom-right',
  // HTML table element names used in data-slot context
  'table-body', 'table-caption', 'table-footer', 'table-header',
  'table-cell', 'table-head', 'table-row',
  // Misc non-utility tokens
  'aspect-ratio', 'ltr', 'rtl', 'clear', 'will',
]);

// Known Tailwind utility prefixes (first segment before the hyphen)
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
  // Custom ninna-ui utilities
  'animate', 'fade', 'zoom', 'slide',
]);

/**
 * Validate a candidate token as a real Tailwind CSS class.
 */
function isValidTailwindClass(token) {
  // Length check
  if (token.length < 2 || token.length > 120) return false;

  // Explicit blocklist
  if (BLOCKLIST.has(token)) return false;

  // Must not start with uppercase (component names)
  if (/^[A-Z]/.test(token)) return false;

  // Must not be a bare JS keyword / variant key
  if (/^(import|export|from|const|let|var|function|return|if|else|switch|case|break|class|extends|type|enum|true|false|null|undefined|void|typeof|instanceof|new|delete|this|super|yield|async|await|for|while|do|try|catch|finally|throw|as|is|of|in)$/.test(token)) return false;

  // Must not be a bare variant/color key (used as object keys, not classes)
  if (/^(horizontal|vertical|outline|filled|flushed|solid|soft|ghost|line|enclosed|center|top|bottom|left|right|spin|ping|pulse|dots|default|success|danger|warning|info|primary|secondary|accent|neutral|loading|xs|sm|md|lg|xl|2xl|3xl|full|none|auto|start|end|between|around|evenly|stretch|baseline|wrap|nowrap|reverse|column|row|initial|inherit|revert|unset)$/.test(token)) return false;

  // Must not contain characters that don't appear in Tailwind classes
  // But allow =, &, >, _ inside [] brackets (data-[state=open]:..., [&>svg]:..., [&_tr]:...)
  const withoutBrackets = token.replace(/\[[^\]]*\]/g, '');
  if (/[{}()<>|?;,@#$%^~`\\]/.test(withoutBrackets)) return false;
  // Reject = and & outside of brackets
  if (/[=&]/.test(withoutBrackets)) return false;
  // Reject tokens containing quotes (e.g. before:content-[""] — breaks @source inline() CSS parsing)
  if (/["']/.test(token)) return false;

  // If it contains a slash, the parts before and after must look like TW patterns
  // e.g., bg-primary/10 is valid, but ninna-ui/core is not
  if (token.includes('/')) {
    const parts = token.split('/');
    if (parts.length !== 2) return false;
    const [before, after] = parts;
    // After the slash should be a number (opacity) or a known fraction
    if (!/^\d+$/.test(after) && !/^\d+\.\d+$/.test(after)) return false;
    // Before the slash should start with a known TW prefix
    const stripped = before.replace(/^!/, '').replace(/^.*:/, '');
    const prefix = stripped.split('-')[0];
    if (!KNOWN_TW_PREFIXES.has(prefix)) return false;
  }

  // Strip variant prefixes to check the base utility
  let base = token;
  // Handle variant chains like: data-[state=open]:animate-in, hover:bg-primary
  while (base.includes(':')) {
    const colonIdx = base.indexOf(':');
    // Check if this is a data-[...]: or peer-[...]: variant
    const bracketBefore = base.lastIndexOf('[', colonIdx);
    const bracketAfter = base.indexOf(']', bracketBefore);
    if (bracketBefore !== -1 && bracketAfter !== -1 && bracketAfter < colonIdx) {
      // The colon is after a bracket-variant, strip up to it
      base = base.slice(colonIdx + 1);
    } else if (bracketBefore !== -1 && bracketAfter > colonIdx) {
      // Colon is inside brackets — not a variant separator
      break;
    } else {
      base = base.slice(colonIdx + 1);
    }
  }

  // Strip important prefix
  base = base.replace(/^!/, '');

  // Strip negative prefix
  base = base.replace(/^-/, '');

  // The base utility must start with a known TW prefix
  const prefix = base.split('-')[0].split('/')[0].split('[')[0];
  if (!prefix) return false;
  if (!KNOWN_TW_PREFIXES.has(prefix)) return false;

  return true;
}

/**
 * ALL classes are safelisted.
 *
 * The @source filesystem directives that point to sibling package dist
 * files do NOT work reliably when the CSS is consumed from node_modules
 * (Tailwind v4 skips node_modules by default, and @source inside
 * @import'ed CSS from node_modules is not consistently followed).
 *
 * The only reliable approach is to safelist every class via @source inline().
 * This guarantees consumers get all needed CSS with just:
 *   @import "@ninna-ui/core/theme/presets/default.css";
 */
function needsSafelist(_cls) {
  return true;
}

// ─── Main ────────────────────────────────────────────────────────

function main() {
  console.log('🔍 Scanning component source files...\n');

  const allClasses = new Set();
  const safelistClasses = new Set();
  let fileCount = 0;

  for (const pkg of COMPONENT_PACKAGES) {
    const srcDir = join(PACKAGES_DIR, pkg, 'src');
    try {
      statSync(srcDir);
    } catch {
      console.warn(`  ⚠ Skipping ${pkg} — src directory not found`);
      continue;
    }

    const files = collectSourceFiles(srcDir);
    console.log(`  📦 ${pkg}: ${files.length} source files`);
    fileCount += files.length;

    for (const file of files) {
      const content = readFileSync(file, 'utf-8');
      const strings = extractClassStrings(content);

      for (const str of strings) {
        // Split by whitespace — each part is a potential class
        const tokens = str.split(/\s+/).filter(Boolean);
        for (const token of tokens) {
          if (isValidTailwindClass(token)) {
            allClasses.add(token);
            if (needsSafelist(token)) {
              safelistClasses.add(token);
            }
          }
        }
      }
    }
  }

  console.log(`\n📊 Results:`);
  console.log(`   Files scanned:    ${fileCount}`);
  console.log(`   Total classes:    ${allClasses.size}`);
  console.log(`   Need safelist:    ${safelistClasses.size}`);
  console.log(`   Scanner handles:  ${allClasses.size - safelistClasses.size}`);

  // ── Generate @source inline() directives ──────────────────────
  // Group classes by prefix pattern for readable output
  const sorted = [...safelistClasses].sort();

  // Split into logical groups
  const groups = {
    'Semantic color bases + content': [],
    'Opacity modifiers': [],
    'Variant prefixes (hover, focus, focus-visible, disabled, etc.)': [],
    'Data-attribute variants (Radix)': [],
    'Peer/group variants': [],
    'Custom animations': [],
    'Stroke/fill utilities': [],
    'Arbitrary values & important overrides': [],
    'Negative values': [],
    'Other (size-*, bg-current, etc.)': [],
  };

  for (const cls of sorted) {
    if (/^data-\[/.test(cls) || /^data-\[/.test(cls.replace(/^[\w-]+:/, ''))) {
      groups['Data-attribute variants (Radix)'].push(cls);
    } else if (/^(peer|group)-/.test(cls) || /^(peer|group)-/.test(cls.replace(/^[\w-]+:/, ''))) {
      groups['Peer/group variants'].push(cls);
    } else if (/^(animate-in|animate-out|fade-|zoom-|slide-)/.test(cls)) {
      groups['Custom animations'].push(cls);
    } else if (/^(stroke|fill)-/.test(cls)) {
      groups['Stroke/fill utilities'].push(cls);
    } else if (cls.startsWith('!')) {
      groups['Arbitrary values & important overrides'].push(cls);
    } else if (cls.startsWith('-') || /:-translate/.test(cls)) {
      groups['Negative values'].push(cls);
    } else if (cls.includes('/') && !cls.includes(':')) {
      groups['Opacity modifiers'].push(cls);
    } else if (cls.includes(':')) {
      // Has variant prefix - check for negative translate first
      if (/-translate/.test(cls)) {
        groups['Negative values'].push(cls);
      } else {
        const variant = cls.split(':')[0];
        if (['hover', 'focus', 'focus-visible', 'disabled', 'read-only', 'placeholder', 'motion-reduce'].includes(variant)) {
          groups['Variant prefixes (hover, focus, focus-visible, disabled, etc.)'].push(cls);
        } else if (variant.startsWith('data-') || variant.startsWith('peer') || variant.startsWith('group')) {
          if (variant.startsWith('peer') || variant.startsWith('group')) {
            groups['Peer/group variants'].push(cls);
          } else {
            groups['Data-attribute variants (Radix)'].push(cls);
          }
        } else {
          groups['Variant prefixes (hover, focus, focus-visible, disabled, etc.)'].push(cls);
        }
      }
    } else if (/^size-/.test(cls) || cls === 'bg-current') {
      groups['Other (size-*, bg-current, etc.)'].push(cls);
    } else {
      groups['Other (size-*, bg-current, etc.)'].push(cls);
    }
  }

  // Build the safelist block
  const lines = [];
  lines.push(SAFELIST_START);
  lines.push('/*');
  lines.push(' * Auto-generated by generate-safelist.mjs');
  lines.push(` * ${safelistClasses.size} classes safelisted from ${fileCount} source files`);
  lines.push(' *');
  lines.push(' * DO NOT EDIT MANUALLY — run: node scripts/generate-safelist.mjs');
  lines.push(' */');
  lines.push('');

  for (const [groupName, classes] of Object.entries(groups)) {
    if (classes.length === 0) continue;
    lines.push(`/* --- ${groupName} (${classes.length}) --- */`);

    // Emit @source inline() — batch into reasonable line lengths
    // Each @source inline() can hold multiple space-separated classes
    const BATCH_SIZE = 15;
    for (let i = 0; i < classes.length; i += BATCH_SIZE) {
      const batch = classes.slice(i, i + BATCH_SIZE);
      lines.push(`@source inline("${batch.join(' ')}");`);
    }
    lines.push('');
  }

  lines.push(SAFELIST_END);

  const safelistBlock = lines.join('\n');

  // ── Write to tailwind.css ─────────────────────────────────────
  let css = readFileSync(TAILWIND_CSS_PATH, 'utf-8');

  const startIdx = css.indexOf(SAFELIST_START);
  const endIdx = css.indexOf(SAFELIST_END);

  if (startIdx !== -1 && endIdx !== -1) {
    // Replace existing safelist block
    css = css.slice(0, startIdx) + safelistBlock + css.slice(endIdx + SAFELIST_END.length);
    console.log('\n✅ Replaced existing safelist block in tailwind.css');
  } else {
    // Insert before @theme inline — find the right spot
    // Look for the old manual safelist section or insert before @theme
    const themeIdx = css.indexOf('@theme inline');
    if (themeIdx !== -1) {
      // Find a good insertion point — right before @theme inline
      // Look backward for a blank line
      let insertIdx = themeIdx;
      while (insertIdx > 0 && css[insertIdx - 1] !== '\n') insertIdx--;
      css = css.slice(0, insertIdx) + safelistBlock + '\n\n' + css.slice(insertIdx);
      console.log('\n✅ Inserted new safelist block in tailwind.css (before @theme)');
    } else {
      console.error('❌ Could not find insertion point in tailwind.css');
      process.exit(1);
    }
  }

  writeFileSync(TAILWIND_CSS_PATH, css, 'utf-8');

  // ── Print summary ─────────────────────────────────────────────
  console.log('\n📋 Safelist groups:');
  for (const [name, classes] of Object.entries(groups)) {
    if (classes.length > 0) {
      console.log(`   ${name}: ${classes.length}`);
    }
  }
  console.log('\n✨ Done! tailwind.css updated with complete safelist.\n');
}

main();
