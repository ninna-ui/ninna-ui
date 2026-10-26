import { defineConfig } from "tsup";
import { markClientEntry } from "../../scripts/mark-client-entry.mjs";

export default defineConfig({
  // Restore the client directive after the optional Rollup tree-shaking pass.
  onSuccess: markClientEntry,
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: { resolve: true },
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  minify: false,
  external: ["react", "react-dom", "@ninna-ui/utils"],
  noExternal: [/^@radix-ui\/.*/],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
