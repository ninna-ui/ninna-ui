/**
 * Source registry - uses Vite's import.meta.glob with ?raw to bundle all demo
 * source files at build time so CodePreview can display them in SPA mode.
 */

type GlobRecord = Record<string, () => Promise<string>>;

const sources = (import.meta as unknown as { glob: (pattern: string, opts: object) => GlobRecord }).glob(
  "/app/views/**/*.tsx",
  { query: "?raw", import: "default", eager: false }
);

/**
 * Load the raw source of a demo file by its app-relative path.
 * e.g. "app/views/primitives/button/demos/basic.tsx"
 */
export async function loadSource(filePath: string): Promise<string | null> {
  const key = filePath.startsWith("/") ? filePath : `/${filePath}`;
  const loader = sources[key];
  if (!loader) return null;
  try {
    return await loader();
  } catch {
    return null;
  }
}
