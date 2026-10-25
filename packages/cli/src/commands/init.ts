import prompts from "prompts";
import pc from "picocolors";
import { execSync } from "node:child_process";
import { createProject, TEMPLATES, PRESETS } from "../project.js";

interface InitOptions {
  template?: string;
  preset?: string;
  skipInstall?: boolean;
}

export async function init(name: string | undefined, options: InitOptions) {
  console.log();
  console.log(pc.bold(pc.cyan("  Ninna UI") + " - Create a new project"));
  console.log();

  const response = await prompts(
    [
      {
        type: name ? null : "text",
        name: "projectName",
        message: "Project name:",
        initial: "my-ninna-app",
        validate: (value: string) =>
          /^[a-z0-9-]+$/.test(value) ||
          "Use lowercase letters, numbers, and hyphens only",
      },
      {
        type: options.template ? null : "select",
        name: "template",
        message: "Select a template:",
        choices: TEMPLATES,
      },
      {
        type: options.preset ? null : "select",
        name: "preset",
        message: "Select a theme preset:",
        choices: PRESETS.map((value) => ({
          title: value[0]!.toUpperCase() + value.slice(1),
          value,
        })),
      },
    ],
    {
      onCancel: () => {
        console.log(pc.red("\n  Cancelled.\n"));
        process.exit(0);
      },
    },
  );

  const projectName = name || response.projectName;
  const template = options.template || response.template;
  const preset = options.preset || response.preset || "default";
  let targetDir: string;
  try {
    targetDir = createProject(projectName, template, preset);
  } catch (error) {
    console.error(
      pc.red(
        "\n  " +
          (error instanceof Error ? error.message : String(error)) +
          "\n",
      ),
    );
    process.exitCode = 1;
    return;
  }
  console.log("  Template: " + template);
  console.log("  Preset:   " + preset);
  console.log("  Directory: " + targetDir);
  console.log(pc.green("  ✓ Project created successfully!"));
  console.log();

  // Install dependencies
  const pm = detectPackageManager();
  let installed = false;
  if (!options.skipInstall) {
    console.log(pc.dim(`  Installing dependencies with ${pm}...`));
    try {
      execSync(`${pm} install`, { cwd: targetDir, stdio: "inherit" });
      installed = true;
      console.log(pc.green("  ✓ Dependencies installed!"));
    } catch {
      console.log(
        pc.yellow("  ⚠ Failed to install dependencies. Run install manually."),
      );
    }
    console.log();
  }

  // Done
  console.log(pc.bold("  Next steps:"));
  console.log();
  console.log(`  ${pc.cyan("cd")} ${projectName}`);
  if (!installed) {
    console.log(`  ${pc.cyan(pm)} install`);
  }
  console.log(`  ${pc.cyan(pm)} ${pm === "npm" ? "run dev" : "dev"}`);
  console.log();
}

function detectPackageManager(): string {
  const userAgent = process.env.npm_config_user_agent || "";
  if (userAgent.startsWith("yarn")) return "yarn";
  if (userAgent.startsWith("pnpm")) return "pnpm";
  if (userAgent.startsWith("bun")) return "bun";
  return "npm";
}
