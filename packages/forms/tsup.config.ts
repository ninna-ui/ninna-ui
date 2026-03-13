import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: { resolve: true },
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', '@ninna-ui/core', '@ninna-ui/utils', '@ninna-ui/react-internal'],
  treeshake: true,
  minify: false,
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
