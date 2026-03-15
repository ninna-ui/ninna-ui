import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';

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
      disable: true, // We'll handle backgrounds manually
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
    // Apply theme preset and mode with true full screen background
    (Story, context) => {
      const { themePreset } = context.globals;
      return (
        <div 
          data-theme={themePreset}
          className="light" // Default to light mode
          style={{ 
            width: '100vw',
            height: '100vh',
            margin: 0,
            padding: 0,
            backgroundColor: 'var(--color-base-50)', // Theme-aware background
            color: 'var(--color-base-content)', // Theme-aware text
            transition: 'all 0.2s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <Story {...context} />
        </div>
      );
    },
    // Add light/dark mode toggle
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
