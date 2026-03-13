import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: { resolve: true },
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: false,
  external: ["react", "react-dom", "@ninna-ui/core", "@ninna-ui/utils"],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
