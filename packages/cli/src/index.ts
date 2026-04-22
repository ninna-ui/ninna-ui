import { Command } from "commander";
import { init } from "./commands/init.js";

const program = new Command();

program
  .name("ninna-ui")
  .description("CLI tool for scaffolding Ninna UI projects")
  .version("0.6.0");

program
  .command("init")
  .description("Create a new Ninna UI project")
  .argument("[name]", "Project name")
  .option("-t, --template <template>", "Template to use (vite-react, nextjs, react-router)")
  .option("--preset <preset>", "Theme preset (default, ocean, sunset, forest, minimal)", "default")
  .option("--skip-install", "Skip installing dependencies")
  .action(init);

program.parse();
