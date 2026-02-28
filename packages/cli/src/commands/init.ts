import prompts from "prompts";
import pc from "picocolors";
import fs from "fs-extra";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

// Resolve the package root: dist/commands/init.js → dist/commands → dist → package root
const __filename = fileURLToPath(import.meta.url);
const PKG_ROOT = path.resolve(path.dirname(__filename), "..", "..");

const TEMPLATES = [
  { title: "Vite + React", value: "vite-react", description: "Vite 7, React 19, TypeScript" },
  { title: "Next.js", value: "nextjs", description: "Next.js 15 App Router, TypeScript" },
  { title: "React Router", value: "react-router", description: "React Router v7 + Vite, TypeScript" },
];

const PRESETS = [
  { title: "Default", value: "default" },
  { title: "Ocean", value: "ocean" },
  { title: "Sunset", value: "sunset" },
  { title: "Forest", value: "forest" },
  { title: "Minimal", value: "minimal" },
];

interface InitOptions {
  template?: string;
  preset?: string;
  skipInstall?: boolean;
}

export async function init(name: string | undefined, options: InitOptions) {
  console.log();
  console.log(pc.bold(pc.cyan("  Ninna UI") + " — Create a new project"));
  console.log();

  const response = await prompts(
    [
      {
        type: name ? null : "text",
        name: "projectName",
        message: "Project name:",
        initial: "my-ninna-app",
        validate: (value: string) =>
          /^[a-z0-9-]+$/.test(value) || "Use lowercase letters, numbers, and hyphens only",
      },
      {
        type: options.template ? null : "select",
        name: "template",
        message: "Select a template:",
        choices: TEMPLATES,
      },
      {
        type: options.preset && options.preset !== "default" ? null : "select",
        name: "preset",
        message: "Select a theme preset:",
        choices: PRESETS,
      },
    ],
    {
      onCancel: () => {
        console.log(pc.red("\n  Cancelled.\n"));
        process.exit(0);
      },
    }
  );

  const projectName = name || response.projectName;
  const template = options.template || response.template;
  const preset = options.preset || response.preset || "default";
  const targetDir = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    console.log(pc.red(`\n  Error: Directory "${projectName}" already exists.\n`));
    process.exit(1);
  }

  console.log();
  console.log(`  ${pc.cyan("Template:")}  ${template}`);
  console.log(`  ${pc.cyan("Preset:")}    ${preset}`);
  console.log(`  ${pc.cyan("Directory:")} ${targetDir}`);
  console.log();

  // Copy template
  const templateDir = path.resolve(PKG_ROOT, "templates", template);

  if (!fs.existsSync(templateDir)) {
    console.log(pc.red(`\n  Error: Template "${template}" not found at ${templateDir}\n`));
    console.log(pc.dim("  Available templates: vite-react, nextjs, react-router\n"));
    process.exit(1);
  }

  console.log(pc.dim("  Copying template files..."));
  fs.copySync(templateDir, targetDir);

  // Update package name and swap workspace:* deps to latest
  const pkgPath = path.join(targetDir, "package.json");
  if (fs.existsSync(pkgPath)) {
    const pkg = fs.readJsonSync(pkgPath);
    pkg.name = projectName;
    for (const depField of ['dependencies', 'devDependencies', 'peerDependencies'] as const) {
      if (pkg[depField]) {
        for (const [dep, ver] of Object.entries(pkg[depField] as Record<string, string>)) {
          if (ver === 'workspace:*') {
            pkg[depField][dep] = 'latest';
          }
        }
      }
    }
    fs.writeJsonSync(pkgPath, pkg, { spaces: 2 });
  }

  // Swap theme preset if not default
  if (preset !== "default") {
    const cssFiles = findCssFiles(targetDir);
    for (const cssFile of cssFiles) {
      let content = fs.readFileSync(cssFile, "utf-8");
      content = content.replace(
        "@ninna-ui/core/theme/presets/default.css",
        `@ninna-ui/core/theme/presets/${preset}.css`
      );
      fs.writeFileSync(cssFile, content);
    }
  }

  console.log(pc.green("  ✓ Project created successfully!"));
  console.log();

  // Install dependencies
  if (!options.skipInstall) {
    const pm = detectPackageManager();
    console.log(pc.dim(`  Installing dependencies with ${pm}...`));
    try {
      execSync(`${pm} install`, { cwd: targetDir, stdio: "inherit" });
      console.log(pc.green("  ✓ Dependencies installed!"));
    } catch {
      console.log(pc.yellow("  ⚠ Failed to install dependencies. Run install manually."));
    }
    console.log();
  }

  // Done
  console.log(pc.bold("  Next steps:"));
  console.log();
  console.log(`  ${pc.cyan("cd")} ${projectName}`);
  if (options.skipInstall) {
    console.log(`  ${pc.cyan("pnpm")} install`);
  }
  console.log(`  ${pc.cyan("pnpm")} dev`);
  console.log();
}

function findCssFiles(dir: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules") {
      results.push(...findCssFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".css")) {
      results.push(fullPath);
    }
  }
  return results;
}

function detectPackageManager(): string {
  const userAgent = process.env.npm_config_user_agent || "";
  if (userAgent.startsWith("yarn")) return "yarn";
  if (userAgent.startsWith("pnpm")) return "pnpm";
  if (userAgent.startsWith("bun")) return "bun";
  return "npm";
}
