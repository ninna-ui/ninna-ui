import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Modal } from './modal';

describe('Modal', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders trigger', () => {
    render(
      <Modal>
        <Modal.Trigger>Open</Modal.Trigger>
        <Modal.Content>
          <Modal.Header>Title</Modal.Header>
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal>
    );
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('does not render content when closed', () => {
    render(
      <Modal>
        <Modal.Trigger>Open</Modal.Trigger>
        <Modal.Content>
          <Modal.Header>Title</Modal.Header>
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal>
    );
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('renders content when open', async () => {
    render(
      <Modal open>
        <Modal.Content>
          <Modal.Header>Title</Modal.Header>
          <Modal.Body>Modal content here</Modal.Body>
        </Modal.Content>
      </Modal>
    );
    await waitFor(() => {
      expect(screen.getByText('Modal content here')).toBeInTheDocument();
    });
  });

  it('opens when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Modal>
        <Modal.Trigger>Open</Modal.Trigger>
        <Modal.Content>
          <Modal.Header>Title</Modal.Header>
          <Modal.Body>Modal content</Modal.Body>
        </Modal.Content>
      </Modal>
    );
    await user.click(screen.getByText('Open'));
    await waitFor(() => {
      expect(screen.getByText('Modal content')).toBeInTheDocument();
    });
  });

  // ── Data attributes & structure ────────────────────────────
  it('has displayName', () => {
    expect(Modal.Trigger.displayName).toBe('Modal.Trigger');
    expect(Modal.Content.displayName).toBe('Modal.Content');
    expect(Modal.Header.displayName).toBe('Modal.Header');
    expect(Modal.Body.displayName).toBe('Modal.Body');
    expect(Modal.Footer.displayName).toBe('Modal.Footer');
    expect(Modal.Close.displayName).toBe('Modal.Close');
  });

  it('has correct data-slot attributes when open', async () => {
    render(
      <Modal open>
        <Modal.Content>
          <Modal.Header>Title</Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal.Content>
      </Modal>
    );
    await waitFor(() => {
      expect(document.querySelector('[data-slot="modal-content"]')).toBeInTheDocument();
      expect(document.querySelector('[data-slot="modal-header"]')).toBeInTheDocument();
      expect(document.querySelector('[data-slot="modal-body"]')).toBeInTheDocument();
      expect(document.querySelector('[data-slot="modal-footer"]')).toBeInTheDocument();
    });
  });

  // ── Close button ───────────────────────────────────────────
  it('renders close button', async () => {
    render(
      <Modal open>
        {/* title prop provides the sr-only label since we have no Modal.Header */}
        <Modal.Content title="Close this dialog">
          <Modal.Close />
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal>
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
      <Modal onOpenChange={onOpenChange}>
        <Modal.Trigger>Open</Modal.Trigger>
        <Modal.Content title="Action required">
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal>
    );
    await user.click(screen.getByText('Open'));
    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledWith(true);
    });
  });

  // ── A11y: ARIA ─────────────────────────────────────────────
  it('has aria-modal="true" when open', async () => {
    render(
      <Modal open>
        <Modal.Content title="Status update">
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal>
    );
    await waitFor(() => {
      const content = document.querySelector('[data-slot="modal-content"]');
      expect(content).toHaveAttribute('aria-modal', 'true');
    });
  });

  it('dialog role is applied when open', async () => {
    render(
      <Modal open>
        <Modal.Content>
          <Modal.Header>Confirm Action</Modal.Header>
          <Modal.Body>Are you sure?</Modal.Body>
        </Modal.Content>
      </Modal>
    );
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations when open', async () => {
    const { container } = render(
      <Modal open>
        <Modal.Content description="Confirm your action before proceeding">
          <Modal.Header>Dialog Title</Modal.Header>
          <Modal.Body>Dialog content</Modal.Body>
          <Modal.Footer>
            <Modal.Close>Close</Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
    await waitFor(() => {
      expect(screen.getByText('Dialog content')).toBeInTheDocument();
    });
    await expect(container).toBeAccessible();
  });
});
