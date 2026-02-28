import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Switch } from './switch';

describe('Switch', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders with label', () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByText('Enable notifications')).toBeInTheDocument();
  });

  it('renders without label', () => {
    const { container } = render(<Switch />);
    const switchEl = container.querySelector('[data-slot="switch"]');
    expect(switchEl).toBeInTheDocument();
  });

  // ── Data attributes & structure ────────────────────────────
  it('has correct data-slot attribute', () => {
    const { container } = render(<Switch />);
    expect(container.querySelector('[data-slot="switch"]')).toBeInTheDocument();
  });

  it('has thumb data-slot', () => {
    const { container } = render(<Switch />);
    expect(container.querySelector('[data-slot="thumb"]')).toBeInTheDocument();
  });

  it('has displayName', () => {
    expect(Switch.displayName).toBe('Switch');
  });

  // ── Controlled / Uncontrolled ──────────────────────────────
  it('calls onCheckedChange when toggled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch onCheckedChange={onChange} />);
    const switchBtn = screen.getByRole('switch');
    await user.click(switchBtn);
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(true);
    });
  });

  // ── Disabled ───────────────────────────────────────────────
  it('is disabled when disabled prop is true', () => {
    render(<Switch disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('is disabled when loading', () => {
    render(<Switch loading />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  // ── Loading ────────────────────────────────────────────────
  it('has data-loading when loading', () => {
    render(<Switch loading />);
    expect(screen.getByRole('switch')).toHaveAttribute('data-loading', 'true');
  });

  // ── Invalid ────────────────────────────────────────────────
  it('has data-invalid when invalid', () => {
    render(<Switch invalid />);
    expect(screen.getByRole('switch')).toHaveAttribute('data-invalid', 'true');
  });

  // ── Track labels ───────────────────────────────────────────
  it('renders track labels', () => {
    render(<Switch trackLabels={{ on: 'ON', off: 'OFF' }} />);
    expect(screen.getByText('ON')).toBeInTheDocument();
    expect(screen.getByText('OFF')).toBeInTheDocument();
  });

  // ── Description ────────────────────────────────────────────
  it('renders description', () => {
    render(<Switch label="Test" description="Helper text" />);
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  // ── Sizes ──────────────────────────────────────────────────
  it.each(['sm', 'md', 'lg'] as const)('renders %s size', (size) => {
    const { container } = render(<Switch size={size} />);
    expect(container.querySelector('[data-slot="switch"]')).toBeInTheDocument();
  });

  // ── A11y: ARIA ─────────────────────────────────────────────
  it('has role="switch"', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations', async () => {
    const { container } = render(<Switch label="Enable feature" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no accessibility violations (without label, with aria-label)', async () => {
    const { container } = render(<Switch aria-label="Toggle feature" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // ── className merge ────────────────────────────────────────
  it('merges custom className', () => {
    const { container } = render(<Switch className="custom-class" />);
    const switchEl = container.querySelector('[data-slot="switch"]');
    expect(switchEl?.className).toContain('custom-class');
  });
});
