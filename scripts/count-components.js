#!/usr/bin/env node

/**
 * Component count audit: derives the authoritative component counts
 * used in README.md, ARCHITECTURE.md, and package descriptions.
 *
 * Counting rule: a "component" = a top-level component folder in
 * packages/<pkg>/src/. Compound sub-components exported from the same
 * folder (AvatarGroup, HStack, SelectItem, CheckboxGroup, ...) do NOT
 * increase the count. Infrastructure folders (utils, engines, primitives,
 * __tests__) are excluded.
 *
 * Usage: node scripts/count-components.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const packagesDir = path.join(root, 'packages');

// Component packages (core/utils/react-internal/cli are not component packages)
const COMPONENT_PACKAGES = [
  'primitives',
  'feedback',
  'layout',
  'forms',
  'overlays',
  'navigation',
  'data-display',
  'code-block',
];

// Folders inside src/ that are not components
const EXCLUDED_FOLDERS = new Set(['utils', 'engines', 'primitives', '__tests__']);

let total = 0;
const rows = [];

for (const pkg of COMPONENT_PACKAGES) {
  const srcDir = path.join(packagesDir, pkg, 'src');
  if (!fs.existsSync(srcDir)) {
    console.error(`ERROR: Missing src directory for package "${pkg}".`);
    process.exit(1);
  }

  const components = fs.readdirSync(srcDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !EXCLUDED_FOLDERS.has(d.name))
    .map(d => d.name);

  rows.push({ package: `@ninna-ui/${pkg}`, count: components.length, components: components.join(', ') });
  total += components.length;
}

console.log('Component counts (rule: one top-level component folder = one component)\n');
for (const row of rows) {
  console.log(`${row.package.padEnd(26)} ${String(row.count).padStart(3)}   ${row.components}`);
}
console.log(`${'TOTAL'.padEnd(26)} ${String(total).padStart(3)}`);
