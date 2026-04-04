import type { Meta, StoryObj } from '@storybook/react';
import { Toaster, toast } from '@ninna-ui/feedback';
import { Button } from '@ninna-ui/primitives';

const meta: Meta<typeof Toaster> = {
  title: 'Feedback/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      description: 'Position of toasts on screen',
      table: { defaultValue: { summary: 'bottom-right' } },
    },
    max: {
      control: 'number',
      description: 'Maximum number of visible toasts',
      table: { defaultValue: { summary: '5' } },
    },
    gap: {
      control: 'number',
      description: 'Gap between toasts in pixels',
      table: { defaultValue: { summary: '8' } },
    },
    offset: {
      control: 'text',
      description: 'Offset from screen edges',
      table: { defaultValue: { summary: '1rem' } },
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'Pause auto-dismiss when hovering over toasts',
      table: { defaultValue: { summary: 'true' } },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[400px] w-[600px] flex items-center justify-center">
        <Toaster position="bottom-right" />
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.create({
          title: 'Toast notification',
          description: 'This is a default toast message.',
        });
      }}
    >
      Show Toast
    </Button>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="soft" onClick={() => toast.create({ title: 'Neutral', description: 'A neutral notification.', color: 'neutral' })}>Neutral</Button>
      <Button variant="soft" color="primary" onClick={() => toast.create({ title: 'Primary', description: 'A primary notification.', color: 'primary' })}>Primary</Button>
      <Button variant="soft" color="secondary" onClick={() => toast.create({ title: 'Secondary', description: 'A secondary notification.', color: 'secondary' })}>Secondary</Button>
      <Button variant="soft" color="accent" onClick={() => toast.create({ title: 'Accent', description: 'An accent notification.', color: 'accent' })}>Accent</Button>
      <Button variant="soft" color="success" onClick={() => toast.create({ title: 'Success!', description: 'Your action was successful.', color: 'success' })}>Success</Button>
      <Button variant="soft" color="danger" onClick={() => toast.create({ title: 'Error!', description: 'Something went wrong.', color: 'danger' })}>Error</Button>
      <Button variant="soft" color="warning" onClick={() => toast.create({ title: 'Warning', description: 'Please be careful.', color: 'warning' })}>Warning</Button>
      <Button variant="soft" color="info" onClick={() => toast.create({ title: 'Info', description: 'Here is some information.', color: 'info' })}>Info</Button>
      <Button variant="soft" onClick={() => toast.create({ title: 'Loading...', description: 'Please wait.', color: 'primary', isLoading: true, duration: 0 })}>Loading</Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="soft" color="success" onClick={() => toast.create({ title: 'Soft', description: 'Soft variant toast.', color: 'success', variant: 'soft' })}>
        Soft
      </Button>
      <Button variant="solid" color="success" onClick={() => toast.create({ title: 'Solid', description: 'Solid variant toast.', color: 'success', variant: 'solid' })}>
        Solid
      </Button>
      <Button variant="outline" color="success" onClick={() => toast.create({ title: 'Outline', description: 'Outline variant toast.', color: 'success', variant: 'outline' })}>
        Outline
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.create({
          title: 'New message',
          description: 'You have a new message from John.',
          action: {
            label: 'View',
            onClick: () => alert('Viewing message...'),
          },
        });
      }}
    >
      Show Toast with Action
    </Button>
  ),
};

export const SimpleMessages: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="soft" color="success" onClick={() => toast.create({ title: 'File uploaded successfully!', color: 'success' })}>
        Success
      </Button>
      <Button variant="soft" color="danger" onClick={() => toast.create({ title: 'Failed to save changes.', color: 'danger' })}>
        Error
      </Button>
      <Button variant="soft" color="warning" onClick={() => toast.create({ title: 'Your session expires soon.', color: 'warning' })}>
        Warning
      </Button>
      <Button variant="soft" color="info" onClick={() => toast.create({ title: 'New updates available.', color: 'info' })}>
        Info
      </Button>
    </div>
  ),
};

export const CustomDuration: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="soft"
        onClick={() => {
          toast.create({
            title: 'Quick toast',
            description: 'This disappears in 2 seconds.',
            duration: 2000,
          });
        }}
      >
        2 Seconds
      </Button>
      <Button
        variant="soft"
        onClick={() => {
          toast.create({
            title: 'Long toast',
            description: 'This stays for 10 seconds.',
            duration: 10000,
          });
        }}
      >
        10 Seconds
      </Button>
      <Button
        variant="soft"
        onClick={() => {
          toast.create({
            title: 'Persistent toast',
            description: 'This stays until dismissed.',
            duration: 0,
            closable: true,
          });
        }}
      >
        Persistent
      </Button>
    </div>
  ),
};

export const PromiseToast: Story = {
  name: 'Promise',
  render: () => (
    <Button
      onClick={() => {
        const p = new globalThis.Promise<{ name: string }>((resolve) => {
          setTimeout(() => resolve({ name: 'John' }), 2000);
        });

        toast.promise(p, {
          loading: 'Saving changes...',
          success: (data: { name: string }) => `Welcome, ${data.name}!`,
          error: 'Failed to save changes.',
        });
      }}
    >
      Show Promise Toast
    </Button>
  ),
};

export const DismissAll: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="soft"
        onClick={() => {
          toast.create({ title: 'Toast 1', color: 'success' });
          toast.create({ title: 'Toast 2', color: 'info' });
          toast.create({ title: 'Toast 3', color: 'warning' });
        }}
      >
        Show Multiple
      </Button>
      <Button
        variant="outline"
        color="danger"
        onClick={() => {
          toast.dismissAll();
        }}
      >
        Dismiss All
      </Button>
    </div>
  ),
};

export const Positions: Story = {
  decorators: [],
  render: () => {
    const positions = [
      'top-left', 'top-center', 'top-right',
      'bottom-left', 'bottom-center', 'bottom-right',
    ] as const;
    return (
      <div className="min-h-[400px] w-[600px] flex flex-col items-center justify-center gap-4">
        {positions.map((pos) => (
          <Toaster key={pos} id={pos} position={pos} max={1} />
        ))}
        <div className="flex flex-wrap gap-2 justify-center">
          {positions.map((pos) => (
            <Button
              key={pos}
              variant="outline"
              size="sm"
              onClick={() => {
                toast.create({ title: `Position: ${pos}`, description: 'Toast appears here.', color: 'primary', variant: 'solid', toasterId: pos });
              }}
            >
              {pos}
            </Button>
          ))}
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="text-lg font-semibold mb-3">Colors</h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="soft" onClick={() => toast.create({ title: 'Neutral', description: 'A neutral notification.', color: 'neutral' })}>Neutral</Button>
          <Button variant="soft" color="success" onClick={() => toast.create({ title: 'Success!', description: 'Operation completed.', color: 'success' })}>Success</Button>
          <Button variant="soft" color="danger" onClick={() => toast.create({ title: 'Error!', description: 'Something went wrong.', color: 'danger' })}>Error</Button>
          <Button variant="soft" color="warning" onClick={() => toast.create({ title: 'Warning', description: 'Be careful!', color: 'warning' })}>Warning</Button>
          <Button variant="soft" color="info" onClick={() => toast.create({ title: 'Info', description: 'Here is some info.', color: 'info' })}>Info</Button>
          <Button variant="soft" onClick={() => toast.create({ title: 'Loading...', description: 'Please wait.', color: 'primary', isLoading: true, duration: 0 })}>Loading</Button>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">Variants</h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="soft" color="success" onClick={() => toast.create({ title: 'Soft', color: 'success', variant: 'soft' })}>Soft</Button>
          <Button variant="solid" color="success" onClick={() => toast.create({ title: 'Solid', color: 'success', variant: 'solid' })}>Solid</Button>
          <Button variant="outline" color="success" onClick={() => toast.create({ title: 'Outline', color: 'success', variant: 'outline' })}>Outline</Button>
        </div>
      </div>
    </div>
  ),
};
