#!/usr/bin/env node
// Uses isolated projects and published dependencies, never workspace symlinks.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cli = path.join(root, "packages/cli");
const stateFile = path.join(root, "tmp/cli-starters-smoke.json");
const env = {
  ...process.env,
  NEXT_TELEMETRY_DISABLED: "1",
  ASTRO_TELEMETRY_DISABLED: "1",
};
const npmPrefix =
  process.platform === "win32"
    ? [
        path.join(
          path.dirname(process.execPath),
          "node_modules/npm/bin/npm-cli.js",
        ),
      ]
    : [];
const npmCommand = process.platform === "win32" ? process.execPath : "npm";
const templates = ["vite-react", "nextjs", "react-router", "astro"];

function run(command, args, cwd, log) {
  return new Promise((resolve, reject) => {
    const fd = fs.openSync(log, "w");
    const child = spawn(command, args, {
      cwd,
      env,
      windowsHide: true,
      stdio: ["ignore", fd, fd],
    });
    child.on("error", (error) => {
      fs.closeSync(fd);
      reject(error);
    });
    child.on("close", (code) => {
      fs.closeSync(fd);
      if (code !== 0) {
        reject(
          new Error(
            `${path.basename(cwd)}: ${args.join(" ")} exited ${code}\n${fs.readFileSync(log, "utf8").split("\n").slice(-35).join("\n")}`,
          ),
        );
      } else resolve();
    });
  });
}

if (!process.argv.includes("--serve")) {
  // Windows temp variables may use 8.3 aliases. Vite and React Router must
  // see the same canonical paths when joining client and SSR manifests.
  const directory = fs.mkdtempSync(
    path.join(fs.realpathSync.native(os.tmpdir()), "ninna-cli-smoke-"),
  );
  const state = { directory, projects: [], results: [] };
  fs.mkdirSync(path.dirname(stateFile), { recursive: true });
  const save = () =>
    fs.writeFileSync(stateFile, JSON.stringify(state, null, 2));
  save();
  console.log(`Isolated smoke projects: ${directory}`);
  await run(
    process.execPath,
    ["node_modules/tsup/dist/cli-default.js"],
    cli,
    path.join(directory, "cli-build.log"),
  );
  await run(
    process.execPath,
    [path.join(root, "scripts/check-cli-interactive.mjs")],
    root,
    path.join(directory, "cli-interactive.log"),
  );
  await run(
    npmCommand,
    [
      ...npmPrefix,
      "--loglevel=error",
      "pack",
      "--json",
      "--pack-destination",
      directory,
    ],
    cli,
    path.join(directory, "cli-pack.log"),
  );
  const packed = JSON.parse(
    fs.readFileSync(path.join(directory, "cli-pack.log"), "utf8"),
  )[0];
  for (const template of templates) {
    for (const asset of ["_gitignore", "public/favicon.svg"]) {
      assert(
        packed.files.some(
          (file) => file.path === `templates/${template}/${asset}`,
        ),
        `Missing packed asset: ${template}/${asset}`,
      );
    }
  }
  for (const [index, template] of templates.entries()) {
    const name = `starter-${template}`;
    const project = path.join(directory, name);
    // npm exec exercises the packed CLI outside the repository's node_modules.
    await run(
      npmCommand,
      [
        ...npmPrefix,
        "exec",
        "--yes",
        "--package",
        path.join(directory, packed.filename),
        "--",
        "ninna-ui",
        "init",
        name,
        "--template",
        template,
        "--preset",
        "forest",
        "--skip-install",
      ],
      directory,
      path.join(directory, `${template}-generate.log`),
    );
    assert(
      fs.existsSync(path.join(project, ".gitignore")),
      "Generated .gitignore missing",
    );
    state.projects.push({ template, project, port: 4311 + index });
    save();
    for (const [phase, args] of [
      ["install", ["install", "--strict-peer-deps", "--no-audit", "--no-fund"]],
      ["typecheck", ["run", "typecheck"]],
      ["build", ["run", "build"]],
    ]) {
      console.log(`${template}: ${phase}`);
      await run(
        npmCommand,
        [...npmPrefix, ...args],
        project,
        path.join(directory, `${template}-${phase}.log`),
      );
      state.results.push({ template, phase, passed: true });
      save();
    }
  }
  console.log(
    `PASS: all four packed CLI starters install, type-check, and build. Report: ${stateFile}`,
  );
  console.log("Run again with --serve for production browser checks.");
} else {
  const state = JSON.parse(fs.readFileSync(stateFile, "utf8"));
  assert(
    state.results.filter((result) => result.phase === "build" && result.passed)
      .length === 4,
    "Complete the build smoke check first.",
  );
  const children = [];
  const stop = () => {
    children.forEach((child) => child.kill());
    process.exit();
  };
  process.on("SIGINT", stop);
  process.on("SIGTERM", stop);
  for (const { template, project, port } of state.projects) {
    const binaries = {
      "vite-react": [
        "vite",
        "vite",
        [
          "preview",
          "--host",
          "127.0.0.1",
          "--port",
          String(port),
          "--strictPort",
        ],
      ],
      nextjs: [
        "next",
        "next",
        ["start", "--hostname", "127.0.0.1", "--port", String(port)],
      ],
      "react-router": [
        "@react-router/serve",
        "react-router-serve",
        ["build/server/index.js"],
      ],
      astro: [
        "astro",
        "astro",
        ["preview", "--host", "127.0.0.1", "--port", String(port)],
      ],
    };
    const [packageName, binary, args] = binaries[template];
    const packageDir = path.join(project, "node_modules", packageName);
    const manifest = JSON.parse(
      fs.readFileSync(path.join(packageDir, "package.json"), "utf8"),
    );
    const executable =
      typeof manifest.bin === "string" ? manifest.bin : manifest.bin[binary];
    const log = fs.openSync(
      path.join(state.directory, `${template}-server.log`),
      "w",
    );
    const child = spawn(
      process.execPath,
      [path.join(packageDir, executable), ...args],
      {
        cwd: project,
        env: { ...env, PORT: String(port), HOST: "127.0.0.1" },
        windowsHide: true,
        stdio: ["ignore", log, log],
      },
    );
    fs.closeSync(log);
    children.push(child);
    let ready = false;
    let lastError = "server is still starting";
    const startupDeadline = Date.now() + 90_000;
    while (Date.now() < startupDeadline) {
      if (child.exitCode !== null) {
        lastError = `server exited ${child.exitCode}`;
        break;
      }
      try {
        const response = await fetch(`http://127.0.0.1:${port}/`, {
          signal: AbortSignal.timeout(2_000),
        });
        const html = await response.text();
        if (
          response.ok &&
          (template === "vite-react" || html.includes("Welcome to Ninna UI"))
        ) {
          assert(!html.includes("suppressHydrationWarning"));
          assert.equal(
            (await fetch(`http://127.0.0.1:${port}/favicon.svg`)).status,
            200,
          );
          ready = true;
          break;
        }
        lastError = `HTTP ${response.status}: starter page not ready`;
      } catch (error) {
        lastError = error.message;
      }
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    if (!ready) {
      children.forEach((child) => child.kill());
      throw new Error(
        `${template} did not serve its production starter: ${lastError}.\n${fs.readFileSync(path.join(state.directory, `${template}-server.log`), "utf8").slice(-4000)}`,
      );
    }
    console.log(`${template}: http://127.0.0.1:${port}/`);
  }
  console.log(
    "Production starters ready. Press Ctrl+C to stop these smoke servers.",
  );
  await new Promise(() => {});
}
