#!/usr/bin/env node

/**
 * Check portable starter dependency versions. Private generated apps have
 * their own version; Changesets only versions the published CLI package.
 *
 * Usage: node scripts/check-template-versions.js
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const cliDir = path.join(root, "packages", "cli");
const templatesDir = path.join(cliDir, "templates");

const cliPkg = JSON.parse(
  fs.readFileSync(path.join(cliDir, "package.json"), "utf-8"),
);

let hasErrors = false;

const templateDirs = fs
  .readdirSync(templatesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => path.join(templatesDir, d.name));

if (templateDirs.length === 0) {
  console.error(
    "ERROR: No template directories found in packages/cli/templates.",
  );
  process.exit(1);
}

for (const dir of templateDirs) {
  const pkgPath = path.join(dir, "package.json");
  if (!fs.existsSync(pkgPath)) {
    console.error(
      `ERROR: Missing package.json in template "${path.basename(dir)}".`,
    );
    hasErrors = true;
    continue;
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

  if (!pkg.private || pkg.version !== "0.0.0") {
    console.error(
      `ERROR: Template "${path.basename(dir)}" must be a private app at version 0.0.0.`,
    );
    hasErrors = true;
  }
  for (const field of ["dependencies", "devDependencies", "peerDependencies"]) {
    for (const [name, version] of Object.entries(pkg[field] ?? {})) {
      if (
        (name.startsWith("@ninna-ui/") && version !== "latest") ||
        version.startsWith("workspace:")
      ) {
        console.error(
          `ERROR: ${path.basename(dir)} has a nonportable dependency: ${name}@${version}`,
        );
        hasErrors = true;
      }
    }
  }
  if (pkg.dependencies.react !== pkg.dependencies["react-dom"]) {
    console.error(
      `ERROR: ${path.basename(dir)} must use matching React and React DOM versions.`,
    );
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error("\nFailed: Starter dependency versions need attention.");
  process.exit(1);
} else {
  console.log(
    `OK: All ${templateDirs.length} templates are portable for @ninna-ui/cli@${cliPkg.version}.`,
  );
}
