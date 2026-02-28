/**
 * Create a type-safe React context with a custom hook
 * Throws an error if used outside of the provider
 */

import { createContext as createReactContext, useContext } from 'react';

export interface CreateContextReturn<T> {
  Provider: React.Provider<T>;
  useContext: () => T;
}

/**
 * Create a context with a custom hook that throws if used outside provider
 *
 * @example
 * const [ThemeProvider, useTheme] = createContext<ThemeContextValue>({
 *   name: 'ThemeContext',
 *   errorMessage: 'useTheme must be used within a ThemeProvider',
 * });
 */
export function createContext<T>(options: {
  name: string;
  errorMessage?: string;
  defaultValue?: T;
}): [React.Provider<T>, () => T] {
  const { name, errorMessage, defaultValue } = options;

  const Context = createReactContext<T | undefined>(defaultValue);
  Context.displayName = name;

  function useContextHook(): T {
    const context = useContext(Context);

    if (context === undefined) {
      throw new Error(
        errorMessage ?? `use${name} must be used within a ${name}Provider`
      );
    }

    return context;
  }

  return [Context.Provider as React.Provider<T>, useContextHook];
}
