#!/usr/bin/env node
/**
 * copy-css.mjs
 *
 * Recursively copies every *.css file from src/theme to dist/theme,
 * preserving the directory structure (e.g., presets/).
 *
 * This step runs after tsup so that the CSS theme presets are included
 * in the published package alongside the compiled JS/TS output.
 *
 * Usage:  node scripts/copy-css.mjs
 * (invoked automatically by the "build" script in package.json)
 */

import { mkdirSync, readdirSync, copyFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const SRC_DIR = resolve(import.meta.dirname, '..', 'src', 'theme');
const DEST_DIR = resolve(import.meta.dirname, '..', 'dist', 'theme');

/**
 * Recursively copy *.css files from `src` to `dest`, mirroring the
 * sub-directory layout.
 *
 * @param {string} src  - Absolute path to the source directory.
 * @param {string} dest - Absolute path to the destination directory.
 */
function copyCss(src, dest) {
  mkdirSync(dest, { recursive: true });

  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyCss(srcPath, destPath);
    } else if (entry.name.endsWith('.css')) {
      copyFileSync(srcPath, destPath);
      console.log(`  ✓ ${entry.name}`);
    }
  }
}

console.log('📋 Copying CSS theme files to dist/theme...\n');
copyCss(SRC_DIR, DEST_DIR);
console.log('\n✅ CSS copy complete.\n');
