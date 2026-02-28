import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '@ninna-ui/overlays';
import { Button } from '@ninna-ui/primitives';

const meta: Meta = {
  title: 'Overlays/Popover',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controlled open state',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Default open state (uncontrolled)',
      table: { defaultValue: { summary: 'false' } },
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when open state changes',
    },
    modal: {
      control: 'boolean',
      description: 'Whether the popover is modal',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-base-content">Popover Title</h4>
          <p className="text-sm text-base-content/70">This is a basic popover with some content.</p>
        </div>
      </Popover.Content>
    </Popover>
  ),
};

export const Placements: Story = {
  render: () => {
    const placements = ['top', 'right', 'bottom', 'left'] as const;
    return (
      <div className="flex flex-wrap gap-4 p-16">
        {placements.map((side) => (
          <Popover key={side}>
            <Popover.Trigger asChild>
              <Button variant="outline">{side}</Button>
            </Popover.Trigger>
            <Popover.Content side={side}>
              <p className="text-sm text-base-content/70">Placed on the <strong>{side}</strong>.</p>
              <Popover.Arrow />
            </Popover.Content>
          </Popover>
        ))}
      </div>
    );
  },
};

export const WithArrow: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>With Arrow</Button>
      </Popover.Trigger>
      <Popover.Content>
        <p className="text-sm text-base-content/70">This popover has an arrow pointer.</p>
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  ),
};

export const WithCloseButton: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">With Close</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Close />
        <div className="flex flex-col gap-2 pr-6">
          <h4 className="font-semibold text-base-content">Dismissable</h4>
          <p className="text-sm text-base-content/70">Click the X to close this popover.</p>
        </div>
      </Popover.Content>
    </Popover>
  ),
};

export const Alignment: Story = {
  render: () => {
    const aligns = ['start', 'center', 'end'] as const;
    return (
      <div className="flex flex-wrap gap-4">
        {aligns.map((align) => (
          <Popover key={align}>
            <Popover.Trigger asChild>
              <Button variant="outline">align: {align}</Button>
            </Popover.Trigger>
            <Popover.Content align={align}>
              <p className="text-sm text-base-content/70">
                Aligned to <strong>{align}</strong>.
              </p>
              <Popover.Arrow />
            </Popover.Content>
          </Popover>
        ))}
      </div>
    );
  },
};

export const RichContent: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>User Info</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col gap-3 w-64">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              JD
            </div>
            <div>
              <p className="font-semibold text-base-content">John Doe</p>
              <p className="text-xs text-base-content/70">john@example.com</p>
            </div>
          </div>
          <hr className="border-base-200" />
          <div className="flex gap-4 text-sm text-base-content/70">
            <span><strong className="text-base-content">12</strong> Posts</span>
            <span><strong className="text-base-content">340</strong> Followers</span>
          </div>
        </div>
      </Popover.Content>
    </Popover>
  ),
};
