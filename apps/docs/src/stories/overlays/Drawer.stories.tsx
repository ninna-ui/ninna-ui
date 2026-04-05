import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from '@ninna-ui/overlays';
import { Button } from '@ninna-ui/primitives';

const meta: Meta<typeof Drawer> = {
  title: 'Overlays/Drawer',
  component: Drawer,
  subcomponents: {
    // Storybook handles these attached components
    Trigger: Drawer.Trigger,
    Content: Drawer.Content,
    Header: Drawer.Header,
    Body: Drawer.Body,
    Footer: Drawer.Footer,
    Close: Drawer.Close,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controlled open state',
      table: { defaultValue: { summary: 'undefined' } },
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
      description: 'Whether the drawer blocks interaction with the rest of the page',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>Drawer Title</Drawer.Header>
        <Drawer.Body>
          <p className="text-base-content/70">This is the default right-side drawer.</p>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close asChild>
            <Button variant="ghost">Cancel</Button>
          </Drawer.Close>
          <Button>Save</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  ),
};

export const Placements: Story = {
  render: () => {
    const placements = ['left', 'right', 'top', 'bottom'] as const;
    return (
      <div className="flex flex-wrap gap-2">
        {placements.map((placement) => (
          <Drawer key={placement}>
            <Drawer.Trigger asChild>
              <Button variant="outline">{placement}</Button>
            </Drawer.Trigger>
            <Drawer.Content placement={placement}>
              <Drawer.Close />
              <Drawer.Header>Placement: {placement}</Drawer.Header>
              <Drawer.Body>
                <p className="text-base-content/70">
                  This drawer slides in from the <strong>{placement}</strong>.
                </p>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full'] as const;
    return (
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <Drawer key={size}>
            <Drawer.Trigger asChild>
              <Button variant="outline">{size.toUpperCase()}</Button>
            </Drawer.Trigger>
            <Drawer.Content size={size}>
              <Drawer.Close />
              <Drawer.Header>Size: {size}</Drawer.Header>
              <Drawer.Body>
                <p className="text-base-content/70">
                  Drawer with <code className="text-primary font-mono">size=&quot;{size}&quot;</code>.
                </p>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer>
        ))}
      </div>
    );
  },
};

export const PreventClose: Story = {
  render: () => (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button>Persistent Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content closeOnOverlayClick={false} closeOnEscape={false}>
        <Drawer.Header>Cannot Dismiss</Drawer.Header>
        <Drawer.Body>
          <p className="text-base-content/70">
            This drawer can only be closed via the button below.
          </p>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close asChild>
            <Button>Got it</Button>
          </Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button>Edit Settings</Button>
      </Drawer.Trigger>
      <Drawer.Content placement="right" size="md">
        <Drawer.Close />
        <Drawer.Header>Edit Settings</Drawer.Header>
        <Drawer.Body>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-base-content mb-1 block">Name</label>
              <input id="name" className="w-full rounded-md border border-base-300 px-3 py-2 text-sm" placeholder="Enter name" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-base-content mb-1 block">Email</label>
              <input id="email" className="w-full rounded-md border border-base-300 px-3 py-2 text-sm" placeholder="Enter email" />
            </div>
            <div>
              <label htmlFor="bio" className="text-sm font-medium text-base-content mb-1 block">Bio</label>
              <textarea id="bio" className="w-full rounded-md border border-base-300 px-3 py-2 text-sm" rows={4} placeholder="Tell us about yourself" />
            </div>
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close asChild>
            <Button variant="ghost">Cancel</Button>
          </Drawer.Close>
          <Button>Save Changes</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  ),
};
