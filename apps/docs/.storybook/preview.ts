import type { Preview } from '@storybook/react';
import { withThemeByClassName, withThemeByDataAttribute } from '@storybook/addon-themes';

import './preview.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  globalTypes: {
    themePreset: {
      description: 'Theme preset',
      toolbar: {
        title: 'Preset',
        icon: 'paintbrush',
        items: [
          { value: 'default', title: '🎨 Default' },
          { value: 'ocean', title: '🌊 Ocean' },
          { value: 'sunset', title: '🌅 Sunset' },
          { value: 'forest', title: '🌲 Forest' },
          { value: 'minimal', title: '⚪ Minimal' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    themePreset: 'default',
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    withThemeByDataAttribute({
      themes: {
        default: 'default',
        ocean: 'ocean',
        sunset: 'sunset',
        forest: 'forest',
        minimal: 'minimal',
      },
      defaultTheme: 'default',
      parentSelector: 'html',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
