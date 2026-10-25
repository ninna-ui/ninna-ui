import { Command } from "commander";
import { init } from "./commands/init.js";

import { CLI_VERSION } from "./project.js";

const program = new Command();

program
  .name("ninna-ui")
  .description("CLI tool for scaffolding Ninna UI projects")
  .version(CLI_VERSION);

program
  .command("init")
  .description("Create a new Ninna UI project")
  .argument("[name]", "Project name")
  .option(
    "-t, --template <template>",
    "Template to use (vite-react, nextjs, react-router, astro)",
  )
  .option(
    "--preset <preset>",
    "Theme preset (default, ocean, sunset, forest, minimal)",
  )
  .option("--skip-install", "Skip installing dependencies")
  .action(init);

await program.parseAsync();
// prompts can leave its input handle referenced after the final selection.
process.stdin.pause();
process.stdin.unref?.();
