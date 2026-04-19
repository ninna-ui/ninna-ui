import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';

import { DropdownMenu } from './dropdown-menu';

describe('DropdownMenu', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders trigger', () => {
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content><DropdownMenu.Item>Edit</DropdownMenu.Item></DropdownMenu.Content>
      </DropdownMenu>
    );
    expect(screen.getByText('Open Menu')).toBeInTheDocument();
  });

  it('does not render content when closed', () => {
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content><DropdownMenu.Item>Edit</DropdownMenu.Item></DropdownMenu.Content>
      </DropdownMenu>
    );
    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
  });

  it('renders items when open', async () => {
    render(
      <DropdownMenu open>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Edit</DropdownMenu.Item>
          <DropdownMenu.Item>Copy</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await waitFor(() => {
      expect(screen.getByText('Edit')).toBeInTheDocument();
      expect(screen.getByText('Copy')).toBeInTheDocument();
    });
  });

  it('opens on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content><DropdownMenu.Item>Edit</DropdownMenu.Item></DropdownMenu.Content>
      </DropdownMenu>
    );
    await user.click(screen.getByText('Open Menu'));
    await waitFor(() => expect(screen.getByText('Edit')).toBeInTheDocument());
  });

  // ── Data attributes ────────────────────────────────────────
  it('has correct data-slots when open', async () => {
    render(
      <DropdownMenu open>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>Actions</DropdownMenu.Label>
          <DropdownMenu.Item>Edit</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item>Copy</DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await waitFor(() => {
      expect(document.querySelector('[data-slot="dropdown-content"]')).toBeInTheDocument();
      expect(document.querySelector('[data-slot="dropdown-item"]')).toBeInTheDocument();
      expect(document.querySelector('[data-slot="dropdown-label"]')).toBeInTheDocument();
      expect(document.querySelector('[data-slot="dropdown-separator"]')).toBeInTheDocument();
      expect(document.querySelector('[data-slot="dropdown-group"]')).toBeInTheDocument();
    });
  });

  it('has data-slot on trigger', () => {
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger data-testid="trigger">Open</DropdownMenu.Trigger>
        <DropdownMenu.Content><DropdownMenu.Item>x</DropdownMenu.Item></DropdownMenu.Content>
      </DropdownMenu>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute('data-slot', 'dropdown-trigger');
  });

  // ── Interactions ───────────────────────────────────────────
  it('calls onSelect for menu item', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <DropdownMenu open>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item onSelect={onSelect}>Edit</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await waitFor(() => expect(screen.getByText('Edit')).toBeInTheDocument());
    await user.click(screen.getByText('Edit'));
    expect(onSelect).toHaveBeenCalled();
  });

  it('calls onOpenChange when opened', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <DropdownMenu onOpenChange={onOpenChange}>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content><DropdownMenu.Item>Edit</DropdownMenu.Item></DropdownMenu.Content>
      </DropdownMenu>
    );
    await user.click(screen.getByText('Open Menu'));
    await waitFor(() => expect(onOpenChange).toHaveBeenCalledWith(true));
  });

  // ── CheckboxItem ──────────────────────────────────────────
  it('renders CheckboxItem with data-slot', async () => {
    render(
      <DropdownMenu open>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.CheckboxItem checked={false} onCheckedChange={() => {}}>Show toolbar</DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await waitFor(() => {
      expect(document.querySelector('[data-slot="dropdown-checkbox-item"]')).toBeInTheDocument();
    });
  });

  it('calls onCheckedChange for CheckboxItem', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <DropdownMenu open>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.CheckboxItem checked={false} onCheckedChange={onCheckedChange}>Show toolbar</DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await waitFor(() => expect(screen.getByText('Show toolbar')).toBeInTheDocument());
    await user.click(screen.getByText('Show toolbar'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  // ── RadioGroup ────────────────────────────────────────────
  it('renders RadioGroup items with data-slots', async () => {
    render(
      <DropdownMenu open>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.RadioGroup value="a">
            <DropdownMenu.RadioItem value="a">Option A</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="b">Option B</DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await waitFor(() => {
      expect(document.querySelector('[data-slot="dropdown-radio-group"]')).toBeInTheDocument();
      expect(document.querySelectorAll('[data-slot="dropdown-radio-item"]')).toHaveLength(2);
    });
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref on content', async () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <DropdownMenu open>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content ref={ref}><DropdownMenu.Item>x</DropdownMenu.Item></DropdownMenu.Content>
      </DropdownMenu>
    );
    await waitFor(() => expect(ref.current).toBeInstanceOf(HTMLDivElement));
  });

  // ── displayNames ───────────────────────────────────────────
  it('has displayNames', () => {
    expect(DropdownMenu.displayName).toBe('DropdownMenu');
    expect(DropdownMenu.Trigger.displayName).toBe('DropdownMenu.Trigger');
    expect(DropdownMenu.Content.displayName).toBe('DropdownMenu.Content');
    expect(DropdownMenu.Item.displayName).toBe('DropdownMenu.Item');
    expect(DropdownMenu.CheckboxItem.displayName).toBe('DropdownMenu.CheckboxItem');
    expect(DropdownMenu.RadioGroup.displayName).toBe('DropdownMenu.RadioGroup');
    expect(DropdownMenu.RadioItem.displayName).toBe('DropdownMenu.RadioItem');
    expect(DropdownMenu.Label.displayName).toBe('DropdownMenu.Label');
    expect(DropdownMenu.Separator.displayName).toBe('DropdownMenu.Separator');
    expect(DropdownMenu.Group.displayName).toBe('DropdownMenu.Group');
    expect(DropdownMenu.Sub.displayName).toBe('DropdownMenu.Sub');
    expect(DropdownMenu.SubTrigger.displayName).toBe('DropdownMenu.SubTrigger');
    expect(DropdownMenu.SubContent.displayName).toBe('DropdownMenu.SubContent');
  });

  // ── A11y ───────────────────────────────────────────────────
  it('has no accessibility violations (closed)', async () => {
    const { container } = render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Edit</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await expect(container).toBeAccessible();
  });

  it('has no accessibility violations (open)', async () => {
    const { container } = render(
      <DropdownMenu open>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>Actions</DropdownMenu.Label>
          <DropdownMenu.Item>Edit</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await waitFor(() => expect(screen.getByText('Edit')).toBeInTheDocument());
    await expect(container).toBeAccessible();
  });
});
