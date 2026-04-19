import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['index.ts', 'setup.ts'],
    format: ['esm'],
    dts: true,
    clean: true,
    shims: true,
    splitting: false,
    sourcemap: false,
    external: [
        'vitest',
        'vitest/config',
        '@vitejs/plugin-react',
        '@testing-library/jest-dom',
        '@testing-library/jest-dom/vitest',
        '@testing-library/react',
        '@testing-library/user-event',
        '@sa11y/vitest',
        'jsdom',
    ],
});
