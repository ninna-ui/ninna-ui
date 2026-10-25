#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tempRoot = fs.realpathSync.native(os.tmpdir());
const directory = fs.mkdtempSync(path.join(tempRoot, "ninna-cli-prompt-"));

try {
  await new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      [
        path.join(root, "packages/cli/dist/index.js"),
        "init",
        "prompt-app",
        "--template",
        "vite-react",
        "--skip-install",
      ],
      { cwd: directory, windowsHide: true, stdio: ["pipe", "pipe", "pipe"] },
    );
    let output = "";
    let selected = false;
    const timeout = setTimeout(() => {
      child.kill();
      reject(new Error("Interactive CLI did not exit after scaffolding."));
    }, 15_000);
    child.on("error", (error) => {
      clearTimeout(timeout);
      reject(error);
    });
    child.stdout.on("data", (chunk) => {
      output += chunk;
      if (!selected && output.includes("Select a theme preset:")) {
        selected = true;
        // Keep stdin open: the CLI must release the prompt handle itself.
        child.stdin.write("\u001b[B\r");
      }
    });
    child.stderr.on("data", (chunk) => {
      output += chunk;
    });
    child.on("close", (code) => {
      clearTimeout(timeout);
      if (
        code !== 0 ||
        !selected ||
        !output.includes("Project created successfully!")
      ) {
        reject(new Error(`Interactive CLI failed (${code}): ${output}`));
      } else resolve();
    });
  });
  assert(
    fs
      .readFileSync(path.join(directory, "prompt-app/src/index.css"), "utf8")
      .includes("presets/ocean.css"),
  );
  assert(
    fs
      .readFileSync(path.join(directory, "prompt-app/index.html"), "utf8")
      .includes('data-theme="ocean"'),
  );
  console.log(
    "PASS: interactive CLI selects Ocean, generates the app, and exits with stdin open.",
  );
} finally {
  assert.equal(path.dirname(directory), tempRoot);
  assert(path.basename(directory).startsWith("ninna-cli-prompt-"));
  fs.rmSync(directory, { recursive: true, force: true });
}
