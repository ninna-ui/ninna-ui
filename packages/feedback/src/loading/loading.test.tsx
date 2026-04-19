import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Loading } from './loading';

describe('Loading', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders with default props', () => {
    render(<Loading data-testid="loading" />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  // ── Data attributes & structure ────────────────────────────
  it('has correct data-slot attribute', () => {
    render(<Loading data-testid="loading" />);
    expect(screen.getByTestId('loading')).toHaveAttribute('data-slot', 'loading');
  });

  it('has displayName', () => {
    expect(Loading.displayName).toBe('Loading');
  });

  // ── Variants ───────────────────────────────────────────────
  it.each(['spin', 'ping', 'pulse', 'dots'] as const)('renders %s variant', (variant) => {
    render(<Loading variant={variant} data-testid="loading" />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('renders dots variant with 3 dot elements', () => {
    render(<Loading variant="dots" data-testid="loading" />);
    const loading = screen.getByTestId('loading');
    const dots = loading.querySelectorAll('.rounded-full');
    expect(dots.length).toBe(3);
  });

  // ── Colors ─────────────────────────────────────────────────
  it.each(['primary', 'secondary', 'accent', 'success', 'danger'] as const)(
    'renders %s color',
    (color) => {
      render(<Loading color={color} data-testid="loading" />);
      expect(screen.getByTestId('loading')).toBeInTheDocument();
    }
  );

  // ── Sizes ──────────────────────────────────────────────────
  it.each(['xs', 'sm', 'md', 'lg', 'xl'] as const)('renders %s size', (size) => {
    render(<Loading size={size} data-testid="loading" />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Loading ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  // ── A11y: ARIA ─────────────────────────────────────────────
  it('has role="status"', () => {
    render(<Loading data-testid="loading" />);
    expect(screen.getByTestId('loading')).toHaveAttribute('role', 'status');
  });

  it('has default aria-label', () => {
    render(<Loading data-testid="loading" />);
    expect(screen.getByTestId('loading')).toHaveAttribute('aria-label', 'Loading...');
  });

  it('uses custom label for aria-label', () => {
    render(<Loading label="Fetching data" data-testid="loading" />);
    expect(screen.getByTestId('loading')).toHaveAttribute('aria-label', 'Fetching data');
  });

  it('has sr-only text for screen readers', () => {
    render(<Loading data-testid="loading" />);
    const srOnly = screen.getByTestId('loading').querySelector('.sr-only');
    expect(srOnly).toBeInTheDocument();
    expect(srOnly?.textContent).toBe('Loading...');
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations (spin)', async () => {
    const { container } = render(<Loading variant="spin" color="primary" />);
    await expect(container).toBeAccessible();
  });

  it('has no accessibility violations (dots)', async () => {
    const { container } = render(<Loading variant="dots" color="success" />);
    await expect(container).toBeAccessible();
  });

  // ── className merge ────────────────────────────────────────
  it('merges custom className', () => {
    render(<Loading className="custom-class" data-testid="loading" />);
    expect(screen.getByTestId('loading').className).toContain('custom-class');
  });
});
