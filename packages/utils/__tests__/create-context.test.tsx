import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { createContext } from '../src/create-context';

describe('createContext', () => {
  it('creates a context with provider and hook', () => {
    const [Provider, useContext] = createContext<{ value: string }>({
      name: 'TestContext',
    });

    function Consumer() {
      const context = useContext();
      return <div data-testid="value">{context.value}</div>;
    }

    render(
      <Provider value={{ value: 'test' }}>
        <Consumer />
      </Provider>
    );

    expect(screen.getByTestId('value').textContent).toBe('test');
  });

  it('throws error when used outside provider', () => {
    const [, useContext] = createContext<{ value: string }>({
      name: 'TestContext',
    });

    function Consumer() {
      const context = useContext();
      return <div>{context.value}</div>;
    }

    expect(() => render(<Consumer />)).toThrow();
  });

  it('uses default value when provided', () => {
    const [, useContext] = createContext<{ value: string }>({
      name: 'TestContext',
      defaultValue: { value: 'default' },
    });

    function Consumer() {
      const context = useContext();
      return <div data-testid="value">{context.value}</div>;
    }

    render(<Consumer />);

    expect(screen.getByTestId('value').textContent).toBe('default');
  });
});
