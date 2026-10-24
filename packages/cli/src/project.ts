import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const PACKAGE_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
export const CLI_VERSION: string = fs.readJsonSync(
  path.join(PACKAGE_ROOT, "package.json"),
).version;

export const TEMPLATES = [
  {
    title: "Vite + React",
    value: "vite-react",
    description: "Vite 8, React 19, TypeScript",
  },
  {
    title: "Next.js",
    value: "nextjs",
    description: "Next.js 16 App Router, TypeScript",
  },
  {
    title: "React Router",
    value: "react-router",
    description: "React Router 8 SSR, Vite 8, TypeScript",
  },
  {
    title: "Astro",
    value: "astro",
    description: "Astro 7, React 19 islands, TypeScript",
  },
];

export const PRESETS = ["default", "ocean", "sunset", "forest", "minimal"];

/** Copy a portable starter before installing any dependencies. */
export function createProject(
  name: string,
  template: string,
  preset: string,
  cwd = process.cwd(),
) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(name)) {
    throw new Error(
      "Use a project name containing lowercase letters, numbers, and hyphens.",
    );
  }
  if (!TEMPLATES.some((choice) => choice.value === template)) {
    throw new Error(
      `Unknown template "${template}". Choose ${TEMPLATES.map((choice) => choice.value).join(", ")}.`,
    );
  }
  if (!PRESETS.includes(preset)) {
    throw new Error(
      `Unknown preset "${preset}". Choose ${PRESETS.join(", ")}.`,
    );
  }

  const target = path.resolve(cwd, name);
  if (fs.existsSync(target))
    throw new Error(`Directory "${name}" already exists.`);
  fs.copySync(path.join(PACKAGE_ROOT, "templates", template), target);

  const manifestPath = path.join(target, "package.json");
  const manifest = fs.readJsonSync(manifestPath);
  manifest.name = name;
  for (const field of ["dependencies", "devDependencies", "peerDependencies"]) {
    for (const [dependency, version] of Object.entries(manifest[field] ?? {})) {
      if (typeof version === "string" && version.startsWith("workspace:")) {
        manifest[field][dependency] = "latest";
      }
    }
  }
  fs.writeJsonSync(manifestPath, manifest, { spaces: 2 });
  // npm excludes .gitignore from published package tarballs; ship a portable name.
  fs.renameSync(
    path.join(target, "_gitignore"),
    path.join(target, ".gitignore"),
  );

  function applyPreset(directory: string) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) applyPreset(filename);
      else if (/\.(css|html|tsx|jsx|astro)$/.test(entry.name)) {
        const content = fs
          .readFileSync(filename, "utf8")
          .replaceAll(
            "@ninna-ui/core/theme/presets/default.css",
            `@ninna-ui/core/theme/presets/${preset}.css`,
          )
          .replaceAll('data-theme="default"', `data-theme="${preset}"`);
        fs.writeFileSync(filename, content);
      }
    }
  }
  applyPreset(target);
  return target;
}
