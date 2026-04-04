import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@ninna-ui/forms';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
  title: 'Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the switch',
      table: { defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Color theme',
      table: { defaultValue: { summary: 'primary' } },
    },
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'outline'],
      description: 'Visual variant',
      table: { defaultValue: { summary: 'solid' } },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the switch is on',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the switch is in loading state',
      table: { defaultValue: { summary: 'false' } },
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the switch is in an invalid state',
      table: { defaultValue: { summary: 'false' } },
    },
    labelPosition: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Position of the label relative to switch',
      table: { defaultValue: { summary: 'end' } },
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    description: {
      control: 'text',
      description: '@deprecated Use Field wrapper with FieldDescription instead',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Switch key={size} size={size} label={`Size ${size}`} defaultChecked />
      ))}
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-4">
      {(['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'] as const).map((color) => (
        <Switch key={color} color={color} label={`Color ${color}`} defaultChecked />
      ))}
    </div>
  ),
};

export const WithDescription: Story = {
  args: {
    label: 'Dark mode',
    description: 'Enable dark mode for the application.',
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [enabled, setEnabled] = useState(false);
    return (
      <div className="space-y-4">
        <Switch
          checked={enabled}
          onCheckedChange={setEnabled}
          label="Controlled switch"
        />
        <p className="text-sm text-base-content/70">
          Status: {enabled ? 'On' : 'Off'}
        </p>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch variant="solid" label="Solid variant (default)" defaultChecked />
      <Switch variant="soft" label="Soft variant" defaultChecked />
      <Switch variant="outline" label="Outline variant" defaultChecked />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch loading label="Loading state" />
      <Switch loading defaultChecked label="Loading when checked" />
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch invalid label="Invalid switch" />
      <Switch invalid defaultChecked label="Invalid when checked" />
    </div>
  ),
};

export const LabelPosition: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch labelPosition="end" label="Label on the right (default)" defaultChecked />
      <Switch labelPosition="start" label="Label on the left" defaultChecked />
    </div>
  ),
};

export const WithTrackLabels: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch 
        trackLabels={{ on: 'ON', off: 'OFF' }} 
        label="With track labels"
        size="lg"
      />
      <Switch 
        trackLabels={{ on: 'Y', off: 'N' }} 
        label="Yes/No toggle"
        size="lg"
        defaultChecked
      />
    </div>
  ),
};

export const SettingsExample: Story = {
  render: function SettingsStory() {
    const [settings, setSettings] = useState({
      notifications: true,
      marketing: false,
      updates: true,
    });

    const toggle = (key: keyof typeof settings) => {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div className="space-y-6 max-w-md">
        <h3 className="font-semibold text-base-content">Settings</h3>
        <div className="space-y-4">
          <Switch
            checked={settings.notifications}
            onCheckedChange={() => toggle('notifications')}
            label="Push notifications"
            description="Receive push notifications on your device."
          />
          <Switch
            checked={settings.marketing}
            onCheckedChange={() => toggle('marketing')}
            label="Marketing emails"
            description="Receive emails about new features and offers."
          />
          <Switch
            checked={settings.updates}
            onCheckedChange={() => toggle('updates')}
            label="Product updates"
            description="Get notified about product updates and changes."
          />
        </div>
      </div>
    );
  },
};

export const WithThumbIcon: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch 
        thumbIcon={<span className="text-xs">✓</span>}
        label="With check icon"
        defaultChecked
      />
      <Switch 
        thumbIcon={<span className="text-xs">●</span>}
        label="With dot icon"
      />
    </div>
  ),
};
