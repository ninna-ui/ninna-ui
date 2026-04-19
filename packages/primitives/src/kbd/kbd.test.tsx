import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Kbd } from './kbd';

describe('Kbd', () => {
  it('renders with children', () => {
    render(<Kbd>Enter</Kbd>);
    expect(screen.getByText('Enter')).toBeInTheDocument();
  });

  it('has correct data-slot attribute', () => {
    render(<Kbd data-testid="kbd">Ctrl</Kbd>);
    expect(screen.getByTestId('kbd')).toHaveAttribute('data-slot', 'kbd');
  });

  it('has displayName', () => {
    expect(Kbd.displayName).toBe('Kbd');
  });

  it('renders as a kbd element', () => {
    render(<Kbd data-testid="kbd">Ctrl</Kbd>);
    expect(screen.getByTestId('kbd').tagName).toBe('KBD');
  });

  it.each(['sm', 'md', 'lg'] as const)('renders %s size', (size) => {
    render(<Kbd size={size} data-testid="kbd">Key</Kbd>);
    expect(screen.getByTestId('kbd')).toBeInTheDocument();
  });

  it.each(['primary', 'secondary', 'neutral'] as const)('renders %s color', (color) => {
    render(<Kbd color={color} data-testid="kbd">Key</Kbd>);
    expect(screen.getByTestId('kbd')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Kbd ref={ref}>Key</Kbd>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLElement));
  });

  it('merges custom className', () => {
    render(<Kbd className="custom-class" data-testid="kbd">Key</Kbd>);
    expect(screen.getByTestId('kbd').className).toContain('custom-class');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Kbd>Ctrl</Kbd>);
    await expect(container).toBeAccessible();
  });
});
