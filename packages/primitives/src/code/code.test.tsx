import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Code } from './code';

describe('Code', () => {
  it('renders with children', () => {
    render(<Code>npm install</Code>);
    expect(screen.getByText('npm install')).toBeInTheDocument();
  });

  it('has correct data-slot attribute', () => {
    render(<Code data-testid="code">npm install</Code>);
    expect(screen.getByTestId('code')).toHaveAttribute('data-slot', 'code');
  });

  it('has displayName', () => {
    expect(Code.displayName).toBe('Code');
  });

  it('renders as a code element', () => {
    render(<Code data-testid="code">snippet</Code>);
    expect(screen.getByTestId('code').tagName).toBe('CODE');
  });

  it.each(['primary', 'secondary', 'accent', 'neutral', 'success', 'danger', 'warning', 'info'] as const)(
    'renders %s color',
    (color) => {
      render(<Code color={color} data-testid="code">snippet</Code>);
      expect(screen.getByTestId('code')).toBeInTheDocument();
    }
  );

  it.each(['xs', 'sm', 'md', 'lg', 'xl'] as const)('renders %s size', (size) => {
    render(<Code size={size} data-testid="code">snippet</Code>);
    expect(screen.getByTestId('code')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Code ref={ref}>snippet</Code>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLElement));
  });

  it('merges custom className', () => {
    render(<Code className="custom-class" data-testid="code">snippet</Code>);
    expect(screen.getByTestId('code').className).toContain('custom-class');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Code>const x = 1;</Code>);
    await expect(container).toBeAccessible();
  });
});
