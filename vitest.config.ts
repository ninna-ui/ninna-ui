import { config } from '@ninna-ui/test-config';
import { mergeConfig, defineConfig } from 'vitest/config';

export default mergeConfig(
  config,
  defineConfig({
    test: {
      include: ['packages/**/__tests__/**/*.test.{ts,tsx}', 'packages/**/src/**/*.test.{ts,tsx}'],
      exclude: ['**/node_modules/**', '**/dist/**', '**/.turbo/**', 'apps/**', 'tooling/**', 'templates/**'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        include: ['packages/**/src/**/*.{ts,tsx}'],
        exclude: [
          '**/*.stories.{ts,tsx}',
          '**/*.test.{ts,tsx}',
          '**/*.spec.{ts,tsx}',
          '**/index.ts',
        ],
      },
    },
  })
);
