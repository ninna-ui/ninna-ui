import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

// Define theme types
type ThemeMode = 'light' | 'dark' | 'system';
export type ThemePreset = 'default' | 'ocean' | 'sunset' | 'forest' | 'minimal';

export const THEME_PRESETS: { value: ThemePreset; label: string }[] = [
  { value: 'default', label: 'Default' },
  { value: 'ocean', label: 'Ocean' },
  { value: 'sunset', label: 'Sunset' },
  { value: 'forest', label: 'Forest' },
  { value: 'minimal', label: 'Minimal' },
];

// Type for the context
interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  isDarkMode: boolean;
  preset: ThemePreset;
  setPreset: (preset: ThemePreset) => void;
  resolvedTheme: 'light' | 'dark';
}

// Create the context with a default undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props for the ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider component
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialize theme state with lazy initializer
  const [theme, setTheme] = useState<ThemeMode>(() => {
    // During SSR, default to system
    if (typeof window === 'undefined') return 'system';
    
    // Get theme from localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme && ['dark', 'light', 'system'].includes(savedTheme)) {
      return savedTheme;
    }
    
    return 'system';
  });

  // Initialize preset state with lazy initializer
  const [preset, setPreset] = useState<ThemePreset>(() => {
    // During SSR, default to 'default'
    if (typeof window === 'undefined') return 'default';
    
    // Get preset from localStorage
    const savedPreset = localStorage.getItem('theme-preset') as ThemePreset;
    if (savedPreset && ['default', 'ocean', 'sunset', 'forest', 'minimal'].includes(savedPreset)) {
      return savedPreset;
    }
    
    return 'default';
  });

  // Calculate if dark mode is active
  const isDarkMode = 
    theme === 'dark' || 
    (theme === 'system' && 
      (typeof window !== 'undefined' 
        ? window.matchMedia('(prefers-color-scheme: dark)').matches 
        : false)
    );
  
  const resolvedTheme: 'light' | 'dark' = isDarkMode ? 'dark' : 'light';

  // Update theme in localStorage and apply to document
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Apply theme class to <html>:
    // - 'dark'   → class="dark"  (CSS selectors: .dark[data-theme="X"])
    // - 'light'  → class="light" (CSS selectors: :not(.light) skips system media query)
    // - 'system' → no class      (CSS media query @media prefers-color-scheme handles it)
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'light') {
      root.classList.add('light');
    }
    // 'system': no class — let @media (prefers-color-scheme: dark) handle it
  }, [theme]);

  // Update preset in localStorage and apply to document
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    localStorage.setItem('theme-preset', preset);
    document.documentElement.setAttribute('data-theme', preset);
  }, [preset]);

  // Listen for system theme changes to update isDarkMode reactive state
  // Note: we do NOT add/remove classes here — CSS @media handles the visuals.
  // We only update React state so isDarkMode stays accurate for consumers.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (theme !== 'system') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Force re-render so isDarkMode recalculates
      setTheme('system');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);


  // Create context value
  const contextValue: ThemeContextType = {
    theme,
    setTheme,
    isDarkMode,
    resolvedTheme,
    preset,
    setPreset,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
