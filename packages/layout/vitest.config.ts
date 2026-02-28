import { config } from '@ninna-ui/test-config';
import { mergeConfig, defineConfig } from 'vitest/config';

export default mergeConfig(
  config,
  defineConfig({
    test: {
      name: 'layout',
    },
  })
);
