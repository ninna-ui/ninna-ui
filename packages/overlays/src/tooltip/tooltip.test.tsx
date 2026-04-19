import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tooltip } from './tooltip';

describe('Tooltip', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders trigger', () => {
    render(
      <Tooltip>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Tip text</Tooltip.Content>
      </Tooltip>
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('does not render content by default', () => {
    render(
      <Tooltip>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Tip text</Tooltip.Content>
      </Tooltip>
    );
    expect(screen.queryByText('Tip text')).not.toBeInTheDocument();
  });

  it('renders content when open', async () => {
    render(
      <Tooltip open>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Tip text</Tooltip.Content>
      </Tooltip>
    );
    await waitFor(() => {
      expect(document.querySelector('[data-slot="tooltip-content"]')).toBeInTheDocument();
    });
  });

  // ── Data attributes & structure ────────────────────────────
  it('has displayName', () => {
    expect(Tooltip.Trigger.displayName).toBe('Tooltip.Trigger');
    expect(Tooltip.Content.displayName).toBe('Tooltip.Content');
  });

  it('has data-slot on trigger', () => {
    render(
      <Tooltip>
        <Tooltip.Trigger data-testid="trigger">Hover me</Tooltip.Trigger>
        <Tooltip.Content>Tip</Tooltip.Content>
      </Tooltip>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute('data-slot', 'tooltip-trigger');
  });

  it('has data-slot on content when open', async () => {
    render(
      <Tooltip open>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Tip</Tooltip.Content>
      </Tooltip>
    );
    await waitFor(() => {
      expect(document.querySelector('[data-slot="tooltip-content"]')).toBeInTheDocument();
    });
  });

  // ── A11y: ARIA ─────────────────────────────────────────────
  it('has role="tooltip" on content', async () => {
    render(
      <Tooltip open>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Tip</Tooltip.Content>
      </Tooltip>
    );
    await waitFor(() => {
      const tooltips = screen.getAllByRole('tooltip');
      expect(tooltips.length).toBeGreaterThanOrEqual(1);
    });
  });

  // ── Keyboard interaction ───────────────────────────────────
  it('shows tooltip on focus', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip delayDuration={0}>
        <Tooltip.Trigger>Focus me</Tooltip.Trigger>
        <Tooltip.Content>Tip text</Tooltip.Content>
      </Tooltip>
    );
    await user.tab();
    await waitFor(() => {
      const tooltipContent = document.querySelector('[data-slot="tooltip-content"]');
      expect(tooltipContent).toBeInTheDocument();
    });
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations (closed)', async () => {
    const { container } = render(
      <Tooltip>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Helpful tip</Tooltip.Content>
      </Tooltip>
    );
    await expect(container).toBeAccessible();
  });

  it('applies default color classes', async () => {
    render(
      <Tooltip open>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Default tip</Tooltip.Content>
      </Tooltip>
    );
    await waitFor(() => {
      const content = document.querySelector('[data-slot="tooltip-content"]');
      expect(content).toBeInTheDocument();
      expect(content?.className).toContain('bg-neutral');
    });
  });

  it('applies custom color classes', async () => {
    render(
      <Tooltip open>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content color="success">Success tip</Tooltip.Content>
      </Tooltip>
    );
    await waitFor(() => {
      const content = document.querySelector('[data-slot="tooltip-content"]');
      expect(content).toBeInTheDocument();
      expect(content?.className).toContain('bg-success');
      expect(content?.className).toContain('text-success-content');
    });
  });

  it('applies secondary color', async () => {
    render(
      <Tooltip open>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content color="secondary">Sec tip</Tooltip.Content>
      </Tooltip>
    );
    await waitFor(() => {
      const content = document.querySelector('[data-slot="tooltip-content"]');
      expect(content?.className).toContain('bg-secondary');
    });
  });

  it('has no accessibility violations (open)', async () => {
    const { container } = render(
      <Tooltip open>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Helpful tip</Tooltip.Content>
      </Tooltip>
    );
    await waitFor(() => {
      expect(document.querySelector('[data-slot="tooltip-content"]')).toBeInTheDocument();
    });
    await expect(container).toBeAccessible();
  });
});
