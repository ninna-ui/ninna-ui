import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const _dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Base Vitest configuration for all @ninna-ui packages.
 *
 * Usage in each package's vitest.config.ts:
 * ```ts
 * import { config } from '@ninna-ui/test-config';
 * import { mergeConfig, defineConfig } from 'vitest/config';
 *
 * export default mergeConfig(config, defineConfig({ test: { name: 'my-pkg' } }));
 * ```
 */
export const config = defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: [path.resolve(_dirname, './setup.js')],
        css: true,
        testTimeout: 15000,
    },
});

export default config;
