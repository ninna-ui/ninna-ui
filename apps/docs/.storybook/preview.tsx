import { useEffect } from 'react';
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
    (Story, context) => {
      const { themePreset, theme: themeMode } = context.globals;
      
      useEffect(() => {
        const root = document.documentElement;
        // Sync theme preset (e.g., 'default', 'ocean')
        root.setAttribute('data-theme', themePreset || 'default');
        
        // Sync theme mode (light/dark)
        // Note: withThemeByClassName handles class on body, but we sync to root for safety
        if (themeMode === 'dark' || themeMode === 'light') {
          root.classList.remove('light', 'dark');
          root.classList.add(themeMode);
        }
      }, [themePreset, themeMode]);

      return (
        <div 
          className="bg-base-50 text-base-content transition-all duration-200"
          style={{ 
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: 'var(--color-base-50)'
          }}
        >
          {/* Inner container with max-width for components */}
          <div 
            className="flex flex-col gap-8"
            style={{
              width: '100%',
              maxWidth: '1200px', // Wider for better component display
              padding: '2rem',
              minHeight: '100vh'
            }}
          >
            <Story {...context} />
          </div>
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
