import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// ---------------------------------------------------------------------------
// Inline helpers extracted from init.ts (pure logic — no side effects, no CLI)
// ---------------------------------------------------------------------------

/** Swap workspace:* → latest for all dep fields in a package.json object */
function swapWorkspaceDeps(
  pkg: Record<string, unknown>,
): Record<string, unknown> {
  const depFields = [
    "dependencies",
    "devDependencies",
    "peerDependencies",
  ] as const;
  for (const field of depFields) {
    const deps = pkg[field] as Record<string, string> | undefined;
    if (deps) {
      for (const [dep, ver] of Object.entries(deps)) {
        if (ver === "workspace:*") {
          deps[dep] = "latest";
        }
      }
    }
  }
  return pkg;
}

/** Replace preset CSS import in content string */
function swapPresetInCss(content: string, preset: string): string {
  return content.replace(
    "@ninna-ui/core/theme/presets/default.css",
    `@ninna-ui/core/theme/presets/${preset}.css`,
  );
}

/** Replace data-theme attribute in markup content string */
function swapDataTheme(content: string, preset: string): string {
  return content.replace(/data-theme="default"/g, `data-theme="${preset}"`);
}

// ---------------------------------------------------------------------------
// Template directory resolution (pointing at the real templates/ folder)
// ---------------------------------------------------------------------------
const TEMPLATES_DIR = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "templates",
);

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("workspace:* → latest dependency swap", () => {
  it("replaces workspace:* with latest in dependencies", () => {
    const pkg = {
      dependencies: { "@ninna-ui/core": "workspace:*", react: "^19.0.0" },
    };
    swapWorkspaceDeps(pkg);
    expect((pkg.dependencies as Record<string, string>)["@ninna-ui/core"]).toBe(
      "latest",
    );
    expect((pkg.dependencies as Record<string, string>)["react"]).toBe(
      "^19.0.0",
    );
  });

  it("replaces workspace:* in devDependencies", () => {
    const pkg = {
      devDependencies: { "@ninna-ui/utils": "workspace:*", vitest: "^4.0.0" },
    };
    swapWorkspaceDeps(pkg);
    expect(
      (pkg.devDependencies as Record<string, string>)["@ninna-ui/utils"],
    ).toBe("latest");
    expect((pkg.devDependencies as Record<string, string>)["vitest"]).toBe(
      "^4.0.0",
    );
  });

  it("replaces workspace:* in peerDependencies", () => {
    const pkg = {
      peerDependencies: { "@ninna-ui/react-internal": "workspace:*" },
    };
    swapWorkspaceDeps(pkg);
    expect(
      (pkg.peerDependencies as Record<string, string>)[
        "@ninna-ui/react-internal"
      ],
    ).toBe("latest");
  });

  it("leaves non-workspace:* versions unchanged", () => {
    const pkg = {
      dependencies: { react: "^19.0.0", typescript: "workspace:^" },
    };
    swapWorkspaceDeps(pkg);
    // only exact 'workspace:*' is swapped
    expect((pkg.dependencies as Record<string, string>)["react"]).toBe(
      "^19.0.0",
    );
    expect((pkg.dependencies as Record<string, string>)["typescript"]).toBe(
      "workspace:^",
    );
  });

  it("handles package with no dep fields gracefully", () => {
    const pkg = { name: "empty" };
    expect(() => swapWorkspaceDeps(pkg)).not.toThrow();
  });
});

describe("CSS preset import swap", () => {
  it("replaces default.css with the selected preset", () => {
    const css = `@import "@ninna-ui/core/theme/presets/default.css";`;
    expect(swapPresetInCss(css, "ocean")).toBe(
      `@import "@ninna-ui/core/theme/presets/ocean.css";`,
    );
  });

  it("leaves files without the default import unchanged", () => {
    const css = `body { margin: 0; }`;
    expect(swapPresetInCss(css, "sunset")).toBe(css);
  });

  it("supports all 4 non-default presets", () => {
    const template = `@import "@ninna-ui/core/theme/presets/default.css";`;
    for (const preset of ["ocean", "sunset", "forest", "minimal"]) {
      expect(swapPresetInCss(template, preset)).toContain(
        `presets/${preset}.css`,
      );
    }
  });
});

describe("data-theme attribute swap", () => {
  it('replaces data-theme="default" with selected preset', () => {
    const html = `<html data-theme="default">`;
    expect(swapDataTheme(html, "forest")).toBe(`<html data-theme="forest">`);
  });

  it("replaces all occurrences", () => {
    const html = `<div data-theme="default"><span data-theme="default"></span></div>`;
    const result = swapDataTheme(html, "ocean");
    expect(result).not.toContain('data-theme="default"');
    expect(result.match(/data-theme="ocean"/g)).toHaveLength(2);
  });
});

describe("template directories exist", () => {
  for (const template of ["vite-react", "nextjs", "react-router", "astro"]) {
    it(`templates/${template}/package.json exists`, () => {
      const pkgPath = join(TEMPLATES_DIR, template, "package.json");
      expect(
        existsSync(pkgPath),
        `${template}/package.json not found at ${pkgPath}`,
      ).toBe(true);
    });
  }
});
