import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Divider } from './divider';

describe('Divider', () => {
  it('renders without crashing', () => {
    render(<Divider data-testid="divider" />);
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('has correct data-slot attribute', () => {
    render(<Divider data-testid="divider" />);
    expect(screen.getByTestId('divider')).toHaveAttribute('data-slot', 'divider');
  });

  it('has displayName', () => {
    expect(Divider.displayName).toBe('Divider');
  });

  it('renders horizontal variant by default', () => {
    render(<Divider data-testid="divider" />);
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('renders vertical variant', () => {
    render(<Divider variant="vertical" data-testid="divider" />);
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('renders with-text variant and displays text', () => {
    render(<Divider variant="with-text" text="OR" />);
    expect(screen.getByText('OR')).toBeInTheDocument();
  });

  it.each(['primary', 'secondary', 'neutral'] as const)('renders %s color', (color) => {
    render(<Divider color={color} data-testid="divider" />);
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Divider ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('merges custom className', () => {
    render(<Divider className="custom-class" data-testid="divider" />);
    expect(screen.getByTestId('divider').className).toContain('custom-class');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Divider />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
