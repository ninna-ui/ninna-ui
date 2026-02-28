import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: { resolve: true },
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  minify: false,
  external: ['react', 'react-dom', '@ninna-ui/core'],
  noExternal: ['@ninna-ui/utils', '@ninna-ui/react-internal'],
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
