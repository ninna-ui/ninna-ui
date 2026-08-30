import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-themes"],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: undefined,
      },
    },
  },
  viteFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      tsconfigPaths: true,
      dedupe: ["react", "react-dom"],
      alias: {
        ...config.resolve?.alias,
        "react-dom/client": "react-dom/client",
      },
    },
    plugins: [...(config.plugins ?? []), tailwindcss()],
  }),
  typescript: {
    reactDocgen: "react-docgen",
  },
};

export default config;
