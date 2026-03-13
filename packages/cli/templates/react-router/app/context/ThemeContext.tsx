import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';
export type ThemePreset = 'default' | 'ocean' | 'sunset' | 'forest' | 'minimal';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  isDarkMode: boolean;
  preset: ThemePreset;
  setPreset: (preset: ThemePreset) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>('system');
  const [preset, setPreset] = useState<ThemePreset>('default');
  const hasMounted = useRef(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme && ['dark', 'light', 'system'].includes(savedTheme)) {
      setTheme(savedTheme);
    }

    const savedPreset = localStorage.getItem('theme-preset') as ThemePreset;
    if (savedPreset && ['default', 'ocean', 'sunset', 'forest', 'minimal'].includes(savedPreset)) {
      setPreset(savedPreset);
    }

    requestAnimationFrame(() => {
      hasMounted.current = true;
    });
  }, []);

  const isDarkMode = 
    theme === 'dark' || 
    (theme === 'system' && 
      (typeof window !== 'undefined' 
        ? window.matchMedia('(prefers-color-scheme: dark)').matches 
        : false)
    );
  
  const resolvedTheme: 'light' | 'dark' = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    if (!hasMounted.current) return;
    
    localStorage.setItem('theme', theme);
    
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'light') {
      root.classList.add('light');
    }
  }, [theme]);

  useEffect(() => {
    if (!hasMounted.current) return;
    
    localStorage.setItem('theme-preset', preset);
    document.documentElement.setAttribute('data-theme', preset);
  }, [preset]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (theme !== 'system') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setTheme('system');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

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

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
