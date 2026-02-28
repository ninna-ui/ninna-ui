import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@ninna-ui/navigation';

const meta: Meta = {
  title: 'Navigation/Tabs',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Default active tab value (uncontrolled)',
    },
    value: {
      control: 'text',
      description: 'Controlled active tab value',
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Callback when active tab changes',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the tabs',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    activationMode: {
      control: 'select',
      options: ['automatic', 'manual'],
      description: 'Whether keyboard activation is automatic',
      table: { defaultValue: { summary: 'automatic' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="text-sm text-base-content/70 p-4">Manage your account settings and preferences.</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="text-sm text-base-content/70 p-4">Change your password and security settings.</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="text-sm text-base-content/70 p-4">Configure application settings.</p>
      </Tabs.Content>
    </Tabs>
  ),
};

export const Variants: Story = {
  render: () => {
    const variants = ['line', 'enclosed', 'soft', 'outline'] as const;
    return (
      <div className="flex flex-col gap-8 w-[400px]">
        {variants.map((variant) => (
          <div key={variant}>
            <h4 className="text-sm font-semibold mb-2 text-base-content/70 uppercase tracking-wide">{variant}</h4>
            <Tabs defaultValue="tab1">
              <Tabs.List variant={variant}>
                <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
                <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
                <Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="tab1">
                <p className="text-sm text-base-content/70 p-4">Account content for {variant} variant.</p>
              </Tabs.Content>
              <Tabs.Content value="tab2">
                <p className="text-sm text-base-content/70 p-4">Password content.</p>
              </Tabs.Content>
              <Tabs.Content value="tab3">
                <p className="text-sm text-base-content/70 p-4">Settings content.</p>
              </Tabs.Content>
            </Tabs>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    return (
      <div className="flex flex-col gap-8 w-[400px]">
        {sizes.map((size) => (
          <div key={size}>
            <h4 className="text-sm font-semibold mb-2 text-base-content/70 uppercase tracking-wide">Size: {size}</h4>
            <Tabs defaultValue="tab1">
              <Tabs.List size={size}>
                <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
                <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
                <Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="tab1">
                <p className="text-sm text-base-content/70 p-4">Content for size {size}.</p>
              </Tabs.Content>
            </Tabs>
          </div>
        ))}
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Active</Tabs.Trigger>
        <Tabs.Trigger value="tab2" disabled>Disabled</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Also Active</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="text-sm text-base-content/70 p-4">First tab content.</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="text-sm text-base-content/70 p-4">Third tab content.</p>
      </Tabs.Content>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="tab1" orientation="vertical" className="w-[400px]">
      <Tabs.List>
        <Tabs.Trigger value="tab1">General</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Security</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Notifications</Tabs.Trigger>
        <Tabs.Trigger value="tab4">Integrations</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="text-sm text-base-content/70 p-4">General settings panel.</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="text-sm text-base-content/70 p-4">Security settings panel.</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="text-sm text-base-content/70 p-4">Notification preferences.</p>
      </Tabs.Content>
      <Tabs.Content value="tab4">
        <p className="text-sm text-base-content/70 p-4">Integration settings.</p>
      </Tabs.Content>
    </Tabs>
  ),
};

export const AllVariantsAndSizes: Story = {
  render: () => {
    const variants = ['line', 'enclosed', 'soft', 'outline'] as const;
    const sizes = ['sm', 'md', 'lg'] as const;
    return (
      <div className="flex flex-col gap-8 w-[500px]">
        {variants.map((variant) => (
          <div key={variant}>
            <h4 className="text-sm font-semibold mb-3 text-base-content/70 uppercase tracking-wide">{variant}</h4>
            <div className="flex flex-col gap-4">
              {sizes.map((size) => (
                <Tabs key={`${variant}-${size}`} defaultValue="tab1">
                  <Tabs.List variant={variant} size={size}>
                    <Tabs.Trigger value="tab1">{size.toUpperCase()}</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                  </Tabs.List>
                </Tabs>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
