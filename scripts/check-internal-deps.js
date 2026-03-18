#!/usr/bin/env node

/**
 * CI check: Ensure no published package exposes tooling packages
 * in its runtime "dependencies". Internal packages (@ninna-ui/utils, @ninna-ui/react-internal)
 * are allowed in dependencies to maintain optimal bundle sizes.
 *
 * Usage: node scripts/check-internal-deps.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const packagesDir = path.join(root, 'packages');

// Tooling packages that must never appear in published "dependencies"
const TOOLING_PACKAGES = [
  '@ninna-ui/tsconfig',
  '@ninna-ui/test-config',
  '@ninna-ui/eslint-config',
];

const FORBIDDEN_IN_DEPS = TOOLING_PACKAGES;

let hasErrors = false;

const packageDirs = fs.readdirSync(packagesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => path.join(packagesDir, d.name));

for (const dir of packageDirs) {
  const pkgPath = path.join(dir, 'package.json');
  if (!fs.existsSync(pkgPath)) continue;

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

  // Skip private packages - they are not published
  if (pkg.private) continue;

  const deps = Object.keys(pkg.dependencies || {});

  for (const dep of deps) {
    if (FORBIDDEN_IN_DEPS.includes(dep)) {
      console.error(
        `ERROR: ${pkg.name} has "${dep}" in "dependencies". ` +
        `Tooling packages must be in "devDependencies".`
      );
      hasErrors = true;
    }
  }
}

if (hasErrors) {
  console.error('\nFailed: Tooling packages found in published dependencies.');
  process.exit(1);
} else {
  console.log('OK: No tooling packages exposed in published dependencies.');
}
