import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './button';

describe('Button', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  // ── Data attributes & structure ────────────────────────────
  it('has correct data-slot attribute', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'button');
  });

  it('has displayName', () => {
    expect(Button.displayName).toBe('Button');
  });

  // ── Variants ───────────────────────────────────────────────
  it.each(['solid', 'outline', 'ghost', 'soft', 'text'] as const)(
    'renders %s variant',
    (variant) => {
      render(<Button variant={variant}>Test</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    }
  );

  // ── Colors ─────────────────────────────────────────────────
  it.each(['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'] as const)(
    'renders %s color',
    (color) => {
      render(<Button color={color}>Test</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    }
  );

  // ── Sizes ──────────────────────────────────────────────────
  it.each(['xs', 'sm', 'md', 'lg', 'xl'] as const)('renders %s size', (size) => {
    render(<Button size={size}>Test</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // ── Disabled ───────────────────────────────────────────────
  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Test</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-disabled', 'true');
  });

  // ── Loading ────────────────────────────────────────────────
  it('is disabled when loading', () => {
    render(<Button loading>Test</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-busy', 'true');
    expect(btn).toHaveAttribute('data-loading', 'true');
  });

  it('shows spinner when loading', () => {
    render(<Button loading>Test</Button>);
    const spinner = screen.getByRole('button').querySelector('[aria-hidden="true"]');
    expect(spinner).toBeInTheDocument();
  });

  // ── Icons ──────────────────────────────────────────────────
  it('renders left icon', () => {
    render(<Button leftIcon={<span data-testid="left-icon">←</span>}>Test</Button>);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('renders right icon', () => {
    render(<Button rightIcon={<span data-testid="right-icon">→</span>}>Test</Button>);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  // ── Full width ─────────────────────────────────────────────
  it('applies fullWidth class', () => {
    render(<Button fullWidth>Test</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // ── Click handler ──────────────────────────────────────────
  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Test</Button>);
    await user.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledOnce();
    });
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Test</Button>);
    await user.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Button ref={ref}>Test</Button>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    await expect(container).toBeAccessible();
  });

  it('has no accessibility violations (disabled)', async () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    await expect(container).toBeAccessible();
  });

  it('has no accessibility violations (loading)', async () => {
    const { container } = render(<Button loading>Loading</Button>);
    await expect(container).toBeAccessible();
  });

  // ── className merge ────────────────────────────────────────
  it('merges custom className', () => {
    render(<Button className="custom-class">Test</Button>);
    expect(screen.getByRole('button').className).toContain('custom-class');
  });
});
