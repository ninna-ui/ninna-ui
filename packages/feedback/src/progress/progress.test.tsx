import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Progress } from './progress';

describe('Progress', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders with default props', () => {
    render(<Progress data-testid="progress" />);
    expect(screen.getByTestId('progress')).toBeInTheDocument();
  });

  it('renders progressbar with correct value', () => {
    render(<Progress value={50} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '50');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('clamps value between 0 and max', () => {
    render(<Progress value={150} max={100} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '100');
  });

  it('clamps negative value to 0', () => {
    render(<Progress value={-10} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '0');
  });

  // ── Custom max ─────────────────────────────────────────────
  it('supports custom max value', () => {
    render(<Progress value={5} max={10} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '5');
    expect(bar).toHaveAttribute('aria-valuemax', '10');
  });

  // ── Data attributes & structure ────────────────────────────
  it('has data-slot="track" and data-slot="indicator"', () => {
    render(<Progress value={50} data-testid="progress" />);
    const progress = screen.getByTestId('progress');
    expect(progress.querySelector('[data-slot="track"]')).toBeInTheDocument();
    expect(progress.querySelector('[data-slot="indicator"]')).toBeInTheDocument();
  });

  it('has displayName', () => {
    expect(Progress.displayName).toBe('Progress');
  });

  // ── Sizes ──────────────────────────────────────────────────
  it.each(['xs', 'sm', 'md', 'lg', 'xl'] as const)('renders %s size', (size) => {
    render(<Progress value={50} size={size} data-testid="progress" />);
    expect(screen.getByTestId('progress')).toBeInTheDocument();
  });

  // ── Colors ─────────────────────────────────────────────────
  it.each(['primary', 'success', 'danger', 'warning', 'info'] as const)(
    'renders %s color',
    (color) => {
      render(<Progress value={50} color={color} data-testid="progress" />);
      expect(screen.getByTestId('progress')).toBeInTheDocument();
    }
  );

  // ── Variants ───────────────────────────────────────────────
  it.each(['default', 'striped', 'animated'] as const)('renders %s variant', (variant) => {
    render(<Progress value={50} variant={variant} data-testid="progress" />);
    expect(screen.getByTestId('progress')).toBeInTheDocument();
  });

  // ── Show value ─────────────────────────────────────────────
  it('shows value label when showValue is true', () => {
    render(<Progress value={75} showValue />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('does not show value label by default', () => {
    render(<Progress value={75} />);
    expect(screen.queryByText('75%')).not.toBeInTheDocument();
  });

  it('uses custom formatLabel', () => {
    render(
      <Progress value={50} max={100} showValue formatLabel={(v, m) => `${v}/${m}`} />
    );
    expect(screen.getByText('50/100')).toBeInTheDocument();
  });

  // ── Label positions ────────────────────────────────────────
  it.each(['left', 'right', 'top'] as const)(
    'renders value at %s position',
    (pos) => {
      render(<Progress value={50} showValue labelPosition={pos} />);
      expect(screen.getByText('50%')).toBeInTheDocument();
    }
  );

  // ── Indeterminate ──────────────────────────────────────────
  it('renders indeterminate state', () => {
    render(<Progress indeterminate />);
    const bar = screen.getByRole('progressbar');
    expect(bar).not.toHaveAttribute('aria-valuenow');
    expect(bar).toHaveAttribute('aria-busy', 'true');
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Progress ref={ref} value={50} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  // ── A11y: ARIA ─────────────────────────────────────────────
  it('has aria-label with percentage', () => {
    render(<Progress value={50} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-label', 'Progress: 50%');
  });

  it('uses custom label for aria-label', () => {
    render(<Progress value={50} label="Upload progress" />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-label', 'Upload progress');
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations', async () => {
    const { container } = render(<Progress value={50} color="primary" showValue />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no accessibility violations (indeterminate)', async () => {
    const { container } = render(<Progress indeterminate />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // ── className merge ────────────────────────────────────────
  it('merges custom className', () => {
    render(<Progress value={50} className="custom-class" data-testid="progress" />);
    expect(screen.getByTestId('progress').className).toContain('custom-class');
  });
});
