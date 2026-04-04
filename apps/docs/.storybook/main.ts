import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: undefined,
      },
    },
  },
  viteFinal: async (config) => ({
    ...config,
    plugins: [
      ...(config.plugins ?? []), 
      tsconfigPaths(), // Add tsconfigPaths for @ninna-ui resolution
      tailwindcss()
    ],
  }),
  typescript: {
    reactDocgen: 'react-docgen',
  },
};

export default config;
