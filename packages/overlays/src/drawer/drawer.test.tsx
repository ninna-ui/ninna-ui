import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Drawer } from './drawer';

describe('Drawer', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders trigger', () => {
    render(
      <Drawer>
        <Drawer.Trigger>Open</Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>Title</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer>
    );
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('does not render content when closed', () => {
    render(
      <Drawer>
        <Drawer.Trigger>Open</Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>Title</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer>
    );
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('renders content when open', async () => {
    render(
      <Drawer open>
        <Drawer.Content>
          <Drawer.Header>Settings</Drawer.Header>
          <Drawer.Body>Drawer content here</Drawer.Body>
        </Drawer.Content>
      </Drawer>
    );
    await waitFor(() => {
      expect(screen.getByText('Drawer content here')).toBeInTheDocument();
    });
  });

  it('opens when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Drawer>
        <Drawer.Trigger>Open</Drawer.Trigger>
        {/* title prop provides sr-only label since no Drawer.Header is rendered */}
        <Drawer.Content title="Navigation drawer">
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer>
    );
    await user.click(screen.getByText('Open'));
    await waitFor(() => {
      expect(screen.getByText('Drawer content')).toBeInTheDocument();
    });
  });

  // ── Data attributes & structure ────────────────────────────
  it('has displayName on all sub-components', () => {
    expect(Drawer.Trigger.displayName).toBe('Drawer.Trigger');
    expect(Drawer.Content.displayName).toBe('Drawer.Content');
    expect(Drawer.Header.displayName).toBe('Drawer.Header');
    expect(Drawer.Body.displayName).toBe('Drawer.Body');
    expect(Drawer.Footer.displayName).toBe('Drawer.Footer');
    expect(Drawer.Close.displayName).toBe('Drawer.Close');
  });

  it('has correct data-slot attributes when open', async () => {
    render(
      <Drawer open>
        <Drawer.Content>
          <Drawer.Header>Title</Drawer.Header>
          <Drawer.Body>Body</Drawer.Body>
          <Drawer.Footer>Footer</Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    );
    await waitFor(() => {
      expect(document.querySelector('[data-slot="drawer-content"]')).toBeInTheDocument();
      expect(document.querySelector('[data-slot="drawer-header"]')).toBeInTheDocument();
      expect(document.querySelector('[data-slot="drawer-body"]')).toBeInTheDocument();
      expect(document.querySelector('[data-slot="drawer-footer"]')).toBeInTheDocument();
    });
  });

  // ── Placement ──────────────────────────────────────────────
  it.each(['left', 'right', 'top', 'bottom'] as const)(
    'renders with %s placement',
    async (placement) => {
      render(
        <Drawer open>
          <Drawer.Content placement={placement} title={`${placement} panel`}>
            <Drawer.Body>Content</Drawer.Body>
          </Drawer.Content>
        </Drawer>
      );
      await waitFor(() => {
        const content = document.querySelector('[data-slot="drawer-content"]');
        expect(content).toHaveAttribute('data-placement', placement);
      });
    }
  );

  // ── Close button ───────────────────────────────────────────
  it('renders close button', async () => {
    render(
      <Drawer open>
        <Drawer.Content title="Settings panel">
          <Drawer.Close />
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer>
    );
    await waitFor(() => {
      expect(screen.getByLabelText('Close')).toBeInTheDocument();
    });
  });

  // ── onOpenChange ───────────────────────────────────────────
  it('calls onOpenChange when opened', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <Drawer onOpenChange={onOpenChange}>
        <Drawer.Trigger>Open</Drawer.Trigger>
        <Drawer.Content title="Navigation menu">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer>
    );
    await user.click(screen.getByText('Open'));
    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledWith(true);
    });
  });

  // ── A11y: ARIA ─────────────────────────────────────────────
  it('has aria-modal="true" when open', async () => {
    render(
      <Drawer open>
        <Drawer.Content title="User preferences">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer>
    );
    await waitFor(() => {
      const content = document.querySelector('[data-slot="drawer-content"]');
      expect(content).toHaveAttribute('aria-modal', 'true');
    });
  });

  it('dialog role and label are applied when open', async () => {
    render(
      <Drawer open>
        <Drawer.Content>
          <Drawer.Header>Account Settings</Drawer.Header>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer>
    );
    await waitFor(() => {
      // The dialog should be accessible by its label
      expect(screen.getByRole('dialog', { name: 'Account Settings' })).toBeInTheDocument();
    });
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations when open', async () => {
    const { container } = render(
      <Drawer open>
        <Drawer.Content description="Settings panel for your account">
          <Drawer.Header>Drawer Title</Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
          <Drawer.Footer>
            <Drawer.Close>Close</Drawer.Close>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    );
    await waitFor(() => {
      expect(screen.getByText('Drawer content')).toBeInTheDocument();
    });
    await expect(container).toBeAccessible();
  });
});
