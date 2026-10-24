import { afterEach, describe, expect, it, vi } from "vitest";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { stripVTControlCharacters } from "node:util";
import { execSync } from "node:child_process";
import prompts from "prompts";
import { init } from "../src/commands/init";

vi.mock("prompts", () => ({ default: vi.fn() }));
vi.mock("node:child_process", () => ({ execSync: vi.fn() }));

const roots: string[] = [];
afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
  roots
    .splice(0)
    .forEach((root) => rmSync(root, { recursive: true, force: true }));
});

function prepare() {
  const root = mkdtempSync(join(tmpdir(), "ninna-cli-command-"));
  roots.push(root);
  vi.spyOn(process, "cwd").mockReturnValue(root);
  vi.stubEnv("npm_config_user_agent", "npm/11.6.2");
  const log = vi.spyOn(console, "log").mockImplementation(() => {});
  return {
    root,
    output: () =>
      log.mock.calls
        .flat()
        .map(String)
        .map(stripVTControlCharacters)
        .join("\n"),
  };
}

describe("init command", () => {
  it("scaffolds the framework and theme selected in the interactive prompt", async () => {
    const { root, output } = prepare();
    vi.mocked(prompts).mockResolvedValue({
      projectName: "chosen-app",
      template: "astro",
      preset: "ocean",
    });
    await init(undefined, { skipInstall: true });
    expect(
      readFileSync(join(root, "chosen-app/src/styles/globals.css"), "utf8"),
    ).toContain("presets/ocean.css");
    expect(output()).toContain("npm install");
    expect(output()).toContain("npm run dev");
  });

  it("uses explicit flags without replacing them with prompt answers", async () => {
    const { root } = prepare();
    vi.mocked(prompts).mockResolvedValue({
      template: "astro",
      preset: "ocean",
    });
    await init("flag-app", {
      template: "nextjs",
      preset: "forest",
      skipInstall: true,
    });
    expect(
      readFileSync(join(root, "flag-app/app/layout.tsx"), "utf8"),
    ).toContain('data-theme="forest"');
  });

  it("provides install recovery instructions when dependency installation fails", async () => {
    const { root, output } = prepare();
    vi.mocked(prompts).mockResolvedValue({});
    vi.mocked(execSync).mockImplementationOnce(() => {
      throw new Error("registry unavailable");
    });
    await init("recover-app", { template: "vite-react", preset: "default" });
    expect(
      JSON.parse(readFileSync(join(root, "recover-app/package.json"), "utf8"))
        .name,
    ).toBe("recover-app");
    expect(output()).toContain("Failed to install dependencies");
    expect(output()).toContain("npm install");
  });
});
