import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Alert } from './alert';

describe('Alert', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders with title and description', () => {
    render(<Alert title="Test Title" description="Test description" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders children as alternative to description', () => {
    render(<Alert title="Title">Child content</Alert>);
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('renders without title (description only)', () => {
    render(<Alert description="Only description" />);
    expect(screen.getByText('Only description')).toBeInTheDocument();
  });

  // ── Data attributes & structure ────────────────────────────
  it('has correct data-slot attribute', () => {
    render(<Alert title="Test" data-testid="alert" />);
    const alert = screen.getByTestId('alert');
    expect(alert).toHaveAttribute('data-slot', 'alert');
  });

  it('has displayName', () => {
    expect(Alert.displayName).toBe('Alert');
  });

  // ── Variants ───────────────────────────────────────────────
  it.each(['solid', 'soft', 'outline'] as const)('renders %s variant', (variant) => {
    render(<Alert title="Test" variant={variant} data-testid="alert" />);
    expect(screen.getByTestId('alert')).toBeInTheDocument();
  });

  // ── Colors ─────────────────────────────────────────────────
  it.each(['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'] as const)(
    'renders %s color',
    (color) => {
      render(<Alert title="Test" color={color} data-testid="alert" />);
      expect(screen.getByTestId('alert')).toBeInTheDocument();
    }
  );

  // ── Icon ───────────────────────────────────────────────────
  it('shows default icon by default', () => {
    render(<Alert title="Test" color="success" data-testid="alert" />);
    const alert = screen.getByTestId('alert');
    const icon = alert.querySelector('[data-slot="icon"]');
    expect(icon).toBeInTheDocument();
  });

  it('hides icon when showIcon is false', () => {
    render(<Alert title="Test" showIcon={false} data-testid="alert" />);
    const alert = screen.getByTestId('alert');
    const icon = alert.querySelector('[data-slot="icon"]');
    expect(icon).not.toBeInTheDocument();
  });

  it('renders custom icon', () => {
    render(<Alert title="Test" icon={<span data-testid="custom-icon">★</span>} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  // ── Dismissible ────────────────────────────────────────────
  it('renders dismiss button when dismissible', () => {
    render(<Alert title="Test" dismissible data-testid="alert" />);
    const closeBtn = screen.getByLabelText('Dismiss alert');
    expect(closeBtn).toBeInTheDocument();
  });

  it('does not render dismiss button by default', () => {
    render(<Alert title="Test" data-testid="alert" />);
    expect(screen.queryByLabelText('Dismiss alert')).not.toBeInTheDocument();
  });

  it('calls onDismiss when dismiss button is clicked', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(<Alert title="Test" dismissible onDismiss={onDismiss} />);
    await user.click(screen.getByLabelText('Dismiss alert'));
    await waitFor(() => {
      expect(onDismiss).toHaveBeenCalledOnce();
    });
  });

  // ── Action ─────────────────────────────────────────────────
  it('renders action element', () => {
    render(
      <Alert title="Test" action={<button data-testid="action-btn">Retry</button>} />
    );
    expect(screen.getByTestId('action-btn')).toBeInTheDocument();
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Alert ref={ref} title="Test" />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  // ── A11y: ARIA ─────────────────────────────────────────────
  it('has role="alert" by default', () => {
    render(<Alert title="Test" data-testid="alert" />);
    expect(screen.getByTestId('alert')).toHaveAttribute('role', 'alert');
  });

  it('has aria-live="assertive" for alert role', () => {
    render(<Alert title="Test" data-testid="alert" />);
    expect(screen.getByTestId('alert')).toHaveAttribute('aria-live', 'assertive');
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations (soft variant)', async () => {
    const { container } = render(
      <Alert variant="soft" color="info" title="Info" description="Information alert" />
    );
    await expect(container).toBeAccessible();
  });

  it('has no accessibility violations (dismissible)', async () => {
    const { container } = render(
      <Alert title="Dismissible" dismissible onDismiss={() => {}} />
    );
    await expect(container).toBeAccessible();
  });

  // ── className merge ────────────────────────────────────────
  it('merges custom className', () => {
    render(<Alert title="Test" className="custom-class" data-testid="alert" />);
    expect(screen.getByTestId('alert').className).toContain('custom-class');
  });
});
