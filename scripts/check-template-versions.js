#!/usr/bin/env node

/**
 * CI check: Ensure all CLI starter template versions match the
 * @ninna-ui/cli package version. Prevents the recurring drift where
 * packages release a new version but templates stay pinned at the old one.
 *
 * Usage: node scripts/check-template-versions.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const cliDir = path.join(root, 'packages', 'cli');
const templatesDir = path.join(cliDir, 'templates');

const cliPkg = JSON.parse(
  fs.readFileSync(path.join(cliDir, 'package.json'), 'utf-8')
);
const expectedVersion = cliPkg.version;

let hasErrors = false;

const templateDirs = fs.readdirSync(templatesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => path.join(templatesDir, d.name));

if (templateDirs.length === 0) {
  console.error('ERROR: No template directories found in packages/cli/templates.');
  process.exit(1);
}

for (const dir of templateDirs) {
  const pkgPath = path.join(dir, 'package.json');
  if (!fs.existsSync(pkgPath)) {
    console.error(`ERROR: Missing package.json in template "${path.basename(dir)}".`);
    hasErrors = true;
    continue;
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

  if (pkg.version !== expectedVersion) {
    console.error(
      `ERROR: Template "${path.basename(dir)}" is at version ${pkg.version}, ` +
      `expected ${expectedVersion} (matching @ninna-ui/cli).`
    );
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error(
    `\nFailed: Template versions are out of sync with @ninna-ui/cli@${expectedVersion}.`
  );
  process.exit(1);
} else {
  console.log(
    `OK: All ${templateDirs.length} templates match @ninna-ui/cli@${expectedVersion}.`
  );
}
