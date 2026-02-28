#!/usr/bin/env node

/**
 * CI check: Verify that all publishable packages can be packed successfully.
 * Runs `npm pack --dry-run` on each non-private package to validate the
 * "files" field and ensure the tarball contents are correct.
 *
 * Usage: node scripts/check-pack.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const packagesDir = path.join(root, 'packages');

let hasErrors = false;
let checked = 0;

const packageDirs = fs.readdirSync(packagesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => path.join(packagesDir, d.name));

for (const dir of packageDirs) {
  const pkgPath = path.join(dir, 'package.json');
  if (!fs.existsSync(pkgPath)) continue;

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

  // Skip private packages
  if (pkg.private) continue;

  try {
    const json = execSync('npm pack --dry-run --json', {
      cwd: dir,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    const [result] = JSON.parse(json);
    const fileCount = result.files?.length ?? 0;
    const sizeKB = ((result.unpackedSize ?? 0) / 1024).toFixed(1);
    checked++;
    console.log(`OK: ${pkg.name} (${fileCount} files, ${sizeKB} KB)`);
  } catch (err) {
    console.error(`ERROR: ${pkg.name} - pack failed`);
    console.error(err.stdout || err.stderr || err.message);
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error(`\nFailed: Some packages could not be packed.`);
  process.exit(1);
} else {
  console.log(`\nAll ${checked} publishable packages pack successfully.`);
}
