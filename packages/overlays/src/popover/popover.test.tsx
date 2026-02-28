import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { axe } from 'vitest-axe';
import { Popover } from './popover';

describe('Popover', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders trigger', () => {
    render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Popover body</Popover.Content>
      </Popover>
    );
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
  });

  it('does not render content when closed', () => {
    render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Popover body</Popover.Content>
      </Popover>
    );
    expect(screen.queryByText('Popover body')).not.toBeInTheDocument();
  });

  it('opens popover content on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Popover body</Popover.Content>
      </Popover>
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    await waitFor(() => expect(screen.getByText('Popover body')).toBeInTheDocument());
  });

  it('renders content when open=true', async () => {
    render(
      <Popover open>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Popover body</Popover.Content>
      </Popover>
    );
    await waitFor(() => expect(screen.getByText('Popover body')).toBeInTheDocument());
  });

  // ── Data attributes ────────────────────────────────────────
  it('has data-slot on trigger', () => {
    render(
      <Popover>
        <Popover.Trigger data-testid="trigger">Open</Popover.Trigger>
        <Popover.Content>body</Popover.Content>
      </Popover>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute('data-slot', 'popover-trigger');
  });

  it('has data-slot on content when open', async () => {
    render(
      <Popover open>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>body</Popover.Content>
      </Popover>
    );
    await waitFor(() => {
      expect(document.querySelector('[data-slot="popover-content"]')).toBeInTheDocument();
    });
  });

  it('renders close button with data-slot', async () => {
    render(
      <Popover open>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>
          <Popover.Close />
          body
        </Popover.Content>
      </Popover>
    );
    await waitFor(() => {
      expect(document.querySelector('[data-slot="popover-close"]')).toBeInTheDocument();
    });
  });

  it('renders arrow with data-slot', async () => {
    render(
      <Popover open>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>
          <Popover.Arrow />
          body
        </Popover.Content>
      </Popover>
    );
    await waitFor(() => {
      expect(document.querySelector('[data-slot="popover-arrow"]')).toBeInTheDocument();
    });
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref on content', async () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Popover open>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content ref={ref}>body</Popover.Content>
      </Popover>
    );
    await waitFor(() => expect(ref.current).toBeInstanceOf(HTMLDivElement));
  });

  // ── Callbacks ──────────────────────────────────────────────
  it('calls onOpenChange when opened', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <Popover onOpenChange={onOpenChange}>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Popover body</Popover.Content>
      </Popover>
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    await waitFor(() => expect(onOpenChange).toHaveBeenCalledWith(true));
  });

  // ── displayNames ───────────────────────────────────────────
  it('has displayNames', () => {
    expect(Popover.displayName).toBe('Popover');
    expect(Popover.Trigger.displayName).toBe('Popover.Trigger');
    expect(Popover.Content.displayName).toBe('Popover.Content');
    expect(Popover.Arrow.displayName).toBe('Popover.Arrow');
    expect(Popover.Close.displayName).toBe('Popover.Close');
  });

  // ── A11y ───────────────────────────────────────────────────
  it('has no accessibility violations (closed)', async () => {
    const { container } = render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Popover body</Popover.Content>
      </Popover>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no accessibility violations (open)', async () => {
    const { container } = render(
      <Popover open>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Popover body</Popover.Content>
      </Popover>
    );
    await waitFor(() => expect(screen.getByText('Popover body')).toBeInTheDocument());
    expect(await axe(container)).toHaveNoViolations();
  });
});
