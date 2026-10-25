// @vitest-environment node
import { afterEach, describe, expect, it } from "vitest";
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  CLI_VERSION,
  createProject,
  PACKAGE_ROOT,
  PRESETS,
  TEMPLATES,
} from "../src/project";

const roots: string[] = [];
function sandbox() {
  const root = mkdtempSync(join(tmpdir(), "ninna-cli-test-"));
  roots.push(root);
  return root;
}
afterEach(() =>
  roots
    .splice(0)
    .forEach((root) => rmSync(root, { recursive: true, force: true })),
);

const entries = {
  "vite-react": ["src/index.css", "index.html"],
  nextjs: ["app/globals.css", "app/layout.tsx"],
  "react-router": ["app/index.css", "app/root.tsx"],
  astro: ["src/styles/globals.css", "src/layouts/Layout.astro"],
} as const;

describe("starter generation", () => {
  it.each(
    TEMPLATES.flatMap(({ value }) => PRESETS.map((preset) => [value, preset])),
  )("generates the real %s template with the %s preset", (template, preset) => {
    const target = createProject("my-starter", template!, preset!, sandbox());
    const manifest = JSON.parse(
      readFileSync(join(target, "package.json"), "utf8"),
    );
    expect(manifest.name).toBe("my-starter");
    expect(manifest.private).toBe(true);
    expect(manifest.version).toBe("0.0.0");
    expect(manifest.scripts.typecheck).toBeTruthy();
    expect(manifest.engines.node).toBeTruthy();
    expect(
      Object.entries(manifest.dependencies).filter(([name]) =>
        name.startsWith("@ninna-ui/"),
      ),
    ).toHaveLength(9);
    for (const [name, version] of Object.entries(manifest.dependencies)) {
      if (name.startsWith("@ninna-ui/")) expect(version).toBe("latest");
    }
    expect(JSON.stringify(manifest)).not.toContain("workspace:");
    expect(readFileSync(join(target, ".gitignore"), "utf8")).toContain(
      "node_modules/",
    );
    expect(existsSync(join(target, "_gitignore"))).toBe(false);
    expect(existsSync(join(target, "public/favicon.svg"))).toBe(true);
    const [cssPath, documentPath] = entries[template as keyof typeof entries];
    const css = readFileSync(join(target, cssPath), "utf8");
    const document = readFileSync(join(target, documentPath), "utf8");
    expect(css).toContain(`@ninna-ui/core/theme/presets/${preset}.css`);
    expect(css).toContain('@import "@ninna-ui/code-block/styles"');
    expect(document).toContain(`data-theme="${preset}"`);
    expect(document).not.toContain("suppressHydrationWarning");
    expect(document).not.toContain('className="light"');
  });

  it.each([
    ["../outside", "vite-react", "default"],
    ["/outside", "vite-react", "default"],
    ["", "vite-react", "default"],
    ["my-app", "../nextjs", "default"],
    ["my-app", "vite-react", "../forest"],
  ])(
    "rejects invalid arguments before creating files: %s / %s / %s",
    (name, template, preset) => {
      const root = sandbox();
      expect(() => createProject(name!, template!, preset!, root)).toThrow();
      expect(readdirSync(root)).toEqual([]);
    },
  );

  it("does not overwrite an existing project", () => {
    const root = sandbox();
    const target = createProject("existing", "vite-react", "default", root);
    writeFileSync(join(target, "keep.txt"), "existing work");
    expect(() => createProject("existing", "nextjs", "ocean", root)).toThrow(
      /already exists/,
    );
    expect(readFileSync(join(target, "keep.txt"), "utf8")).toBe(
      "existing work",
    );
  });

  it("reads the CLI version from release-managed package metadata", () => {
    const manifest = JSON.parse(
      readFileSync(join(PACKAGE_ROOT, "package.json"), "utf8"),
    );
    expect(CLI_VERSION).toBe(manifest.version);
  });

  it("includes the React Router production server with matching framework versions", () => {
    const target = createProject(
      "router-app",
      "react-router",
      "default",
      sandbox(),
    );
    const { dependencies, devDependencies } = JSON.parse(
      readFileSync(join(target, "package.json"), "utf8"),
    );
    for (const name of ["@react-router/node", "@react-router/serve"])
      expect(dependencies[name]).toBe(dependencies["react-router"]);
    expect(devDependencies["@react-router/dev"]).toBe(
      dependencies["react-router"],
    );
    expect(devDependencies["@react-router/fs-routes"]).toBe(
      dependencies["react-router"],
    );
  });
});
