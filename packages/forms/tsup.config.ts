import { defineConfig } from "tsup";
import { markClientEntry } from "../../scripts/mark-client-entry.mjs";

export default defineConfig({
  // Restore the client directive after the optional Rollup tree-shaking pass.
  onSuccess: markClientEntry,
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: { resolve: true },
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "@ninna-ui/core",
    "@ninna-ui/utils",
    "@ninna-ui/react-internal",
  ],
  treeshake: true,
  minify: false,
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
