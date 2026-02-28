import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Status } from './status';

describe('Status', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders with default props', () => {
    render(<Status data-testid="status" />);
    expect(screen.getByTestId('status')).toBeInTheDocument();
  });

  it('renders with label text', () => {
    render(<Status value="success">Completed</Status>);
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('renders without label (indicator only)', () => {
    render(<Status value="danger" data-testid="status" />);
    const status = screen.getByTestId('status');
    const label = status.querySelector('[data-slot="label"]');
    expect(label).not.toBeInTheDocument();
  });

  // ── Data attributes & structure ────────────────────────────
  it('has correct data-slot attributes', () => {
    render(<Status value="success" data-testid="status">Online</Status>);
    const status = screen.getByTestId('status');
    expect(status).toHaveAttribute('data-slot', 'status');
    expect(status.querySelector('[data-slot="indicator"]')).toBeInTheDocument();
    expect(status.querySelector('[data-slot="label"]')).toBeInTheDocument();
  });

  it('has displayName', () => {
    expect(Status.displayName).toBe('Status');
  });

  // ── Values ─────────────────────────────────────────────────
  it.each(['success', 'danger', 'warning', 'info'] as const)(
    'renders %s value',
    (value) => {
      render(<Status value={value} data-testid="status">{value}</Status>);
      expect(screen.getByTestId('status')).toBeInTheDocument();
    }
  );

  // ── Sizes ──────────────────────────────────────────────────
  it.each(['sm', 'md', 'lg'] as const)('renders %s size', (size) => {
    render(<Status value="info" size={size} data-testid="status">Test</Status>);
    expect(screen.getByTestId('status')).toBeInTheDocument();
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Status ref={ref} value="success" />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  // ── A11y: ARIA ─────────────────────────────────────────────
  it('has role="status"', () => {
    render(<Status data-testid="status" />);
    expect(screen.getByTestId('status')).toHaveAttribute('role', 'status');
  });

  it('has aria-label when no children', () => {
    render(<Status value="success" data-testid="status" />);
    expect(screen.getByTestId('status')).toHaveAttribute('aria-label', 'Status: success');
  });

  it('does not have aria-label when children are present', () => {
    render(<Status value="success" data-testid="status">Online</Status>);
    expect(screen.getByTestId('status')).not.toHaveAttribute('aria-label');
  });

  it('indicator is aria-hidden', () => {
    render(<Status value="info" data-testid="status">Test</Status>);
    const indicator = screen.getByTestId('status').querySelector('[data-slot="indicator"]');
    expect(indicator).toHaveAttribute('aria-hidden', 'true');
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations (with label)', async () => {
    const { container } = render(<Status value="success">Completed</Status>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no accessibility violations (without label)', async () => {
    const { container } = render(<Status value="danger" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // ── className merge ────────────────────────────────────────
  it('merges custom className', () => {
    render(<Status className="custom-class" data-testid="status" />);
    expect(screen.getByTestId('status').className).toContain('custom-class');
  });
});
