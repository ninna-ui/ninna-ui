import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Badge } from './badge';

describe('Badge', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders with children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  // ── Data attributes & structure ────────────────────────────
  it('has correct data-slot attribute', () => {
    render(<Badge data-testid="badge">Test</Badge>);
    expect(screen.getByTestId('badge')).toHaveAttribute('data-slot', 'badge');
  });

  it('has displayName', () => {
    expect(Badge.displayName).toBe('Badge');
  });

  it('renders as a span element', () => {
    render(<Badge data-testid="badge">Test</Badge>);
    expect(screen.getByTestId('badge').tagName).toBe('SPAN');
  });

  // ── Variants ───────────────────────────────────────────────
  it.each(['solid', 'soft', 'outline'] as const)('renders %s variant', (variant) => {
    render(<Badge variant={variant} data-testid="badge">Test</Badge>);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  // ── Colors ─────────────────────────────────────────────────
  it.each(['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'] as const)(
    'renders %s color',
    (color) => {
      render(<Badge color={color} data-testid="badge">Test</Badge>);
      expect(screen.getByTestId('badge')).toBeInTheDocument();
    }
  );

  // ── Sizes ──────────────────────────────────────────────────
  it.each(['xs', 'sm', 'md', 'lg', 'xl'] as const)('renders %s size', (size) => {
    render(<Badge size={size} data-testid="badge">Test</Badge>);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  // ── Radius ─────────────────────────────────────────────────
  it.each(['none', 'sm', 'md', 'lg', 'xl', 'full'] as const)('renders %s radius', (radius) => {
    render(<Badge radius={radius} data-testid="badge">Test</Badge>);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Badge ref={ref}>Test</Badge>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations', async () => {
    const { container } = render(<Badge color="primary">Active</Badge>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // ── className merge ────────────────────────────────────────
  it('merges custom className', () => {
    render(<Badge className="custom-class" data-testid="badge">Test</Badge>);
    expect(screen.getByTestId('badge').className).toContain('custom-class');
  });
});
