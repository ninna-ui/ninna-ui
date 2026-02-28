#!/usr/bin/env node

/**
 * CI check: Ensure no published package exposes internal (private) packages
 * in its runtime "dependencies". Internal packages should only appear in
 * "devDependencies" and be bundled at build time via tsup noExternal.
 *
 * Usage: node scripts/check-internal-deps.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const packagesDir = path.join(root, 'packages');

// Internal packages that must never appear in published "dependencies"
const INTERNAL_PACKAGES = [
  '@ninna-ui/utils',
  '@ninna-ui/react-internal',
];

// Tooling packages that must never appear in published "dependencies"
const TOOLING_PACKAGES = [
  '@ninna-ui/tsconfig',
  '@ninna-ui/test-config',
  '@ninna-ui/eslint-config',
];

const FORBIDDEN_IN_DEPS = [...INTERNAL_PACKAGES, ...TOOLING_PACKAGES];

let hasErrors = false;

const packageDirs = fs.readdirSync(packagesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => path.join(packagesDir, d.name));

for (const dir of packageDirs) {
  const pkgPath = path.join(dir, 'package.json');
  if (!fs.existsSync(pkgPath)) continue;

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

  // Skip private packages — they are not published
  if (pkg.private) continue;

  const deps = Object.keys(pkg.dependencies || {});

  for (const dep of deps) {
    if (FORBIDDEN_IN_DEPS.includes(dep)) {
      console.error(
        `ERROR: ${pkg.name} has "${dep}" in "dependencies". ` +
        `Internal/tooling packages must be in "devDependencies" and bundled via tsup noExternal.`
      );
      hasErrors = true;
    }
  }
}

if (hasErrors) {
  console.error('\nFailed: Internal packages found in published dependencies.');
  process.exit(1);
} else {
  console.log('OK: No internal packages exposed in published dependencies.');
}
