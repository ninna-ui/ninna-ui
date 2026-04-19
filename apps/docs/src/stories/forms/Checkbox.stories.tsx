import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxGroup, CheckboxGroupItem } from '@ninna-ui/forms';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox',
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
      options: ['outline', 'soft', 'solid'],
      description: 'Visual variant',
      table: { defaultValue: { summary: 'outline' } },
    },
    onCheckedChange: {
      action: 'onCheckedChange',
      description: 'Callback when checked state changes',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state (uncontrolled)',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
      table: { defaultValue: { summary: 'false' } },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in indeterminate state',
      table: { defaultValue: { summary: 'false' } },
    },
    icon: {
      control: false,
      description: 'Custom check icon',
    },
    indeterminateIcon: {
      control: false,
      description: 'Custom indeterminate icon',
    },
    labelPosition: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Position of the label relative to checkbox',
      table: { defaultValue: { summary: 'end' } },
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    description: {
      control: 'text',
      description: 'Description text (NOTE: Deprecated, use Field wrapper instead)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Checkbox key={size} size={size} label={`Size ${size}`} defaultChecked />
      ))}
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-4">
      {(['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'] as const).map((color) => (
        <Checkbox key={color} color={color} label={`Color ${color}`} defaultChecked />
      ))}
    </div>
  ),
};

export const WithDescription: Story = {
  args: {
    label: 'Marketing emails',
    description: 'Receive emails about new products, features, and more.',
  },
};
const IndeterminateExample = () => {
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(true);
    return (
      <div className="space-y-4">
        <Checkbox
          checked={checked}
          indeterminate={indeterminate}
          onCheckedChange={(val) => { setChecked(val); setIndeterminate(false); }}
          label="Select all"
          description="This checkbox is in indeterminate state"
        />
        <div className="flex gap-4">
          <button
            className="px-3 py-1 text-sm bg-base-300 rounded"
            onClick={() => { setChecked(true); setIndeterminate(false); }}
          >
            Check
          </button>
          <button
            className="px-3 py-1 text-sm bg-base-300 rounded"
            onClick={() => { setChecked(false); setIndeterminate(false); }}
          >
            Uncheck
          </button>
          <button
            className="px-3 py-1 text-sm bg-base-300 rounded"
            onClick={() => { setChecked(false); setIndeterminate(true); }}
          >
            Indeterminate
          </button>
        </div>
      </div>
    );
  };

export const Indeterminate: Story = {
  render: IndeterminateExample,
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};
const ControlledExample = () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="space-y-4">
        <Checkbox
          checked={checked}
          onCheckedChange={(value) => setChecked(value === true)}
          label="Controlled checkbox"
        />
        <p className="text-sm text-base-content/70">
          Checked: {checked ? 'Yes' : 'No'}
        </p>
      </div>
    );
  };

export const Controlled: Story = {
  render: ControlledExample,
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      {(['outline', 'soft', 'solid'] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-8">
          <Checkbox variant={variant} label={`${variant.charAt(0).toUpperCase() + variant.slice(1)}`} />
          <Checkbox variant={variant} label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} checked`} defaultChecked />
        </div>
      ))}
    </div>
  ),
};

export const LabelPosition: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox labelPosition="end" label="Label on the right (default)" defaultChecked />
      <Checkbox labelPosition="start" label="Label on the left" defaultChecked />
    </div>
  ),
};

export const InvalidState: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox invalid label="This field is required" />
      <Checkbox invalid defaultChecked label="Invalid but checked" />
    </div>
  ),
};
const CheckboxGroupExampleExample = () => {
    const [selected, setSelected] = useState<string[]>(['email']);

    return (
      <div className="space-y-4">
        <p className="font-medium text-base-content">Notification preferences</p>
        <CheckboxGroup
          value={selected}
          onValueChange={setSelected}
          orientation="vertical"
          gap="md"
        >
          <CheckboxGroupItem
            value="email"
            label="Email notifications"
            description="Get notified via email"
          />
          <CheckboxGroupItem
            value="sms"
            label="SMS notifications"
            description="Get notified via SMS"
          />
          <CheckboxGroupItem
            value="push"
            label="Push notifications"
            description="Get notified via push"
          />
        </CheckboxGroup>
        <p className="text-sm text-base-content/70">
          Selected: {selected.join(', ') || 'None'}
        </p>
      </div>
    );
  };

export const CheckboxGroupExample: Story = {
  render: CheckboxGroupExampleExample,
};
const CheckboxGroupHorizontalExample = () => {
    const [selected, setSelected] = useState<string[]>(['react']);

    return (
      <div className="space-y-4">
        <p className="font-medium text-base-content">Favorite frameworks</p>
        <CheckboxGroup
          value={selected}
          onValueChange={setSelected}
          orientation="horizontal"
          gap="lg"
        >
          <CheckboxGroupItem value="react" label="React" />
          <CheckboxGroupItem value="vue" label="Vue" />
          <CheckboxGroupItem value="angular" label="Angular" />
          <CheckboxGroupItem value="svelte" label="Svelte" />
        </CheckboxGroup>
      </div>
    );
  };

export const CheckboxGroupHorizontal: Story = {
  render: CheckboxGroupHorizontalExample,
};
const CheckboxGroupWithColorsExample = () => {
    const [selected, setSelected] = useState<string[]>(['success']);

    return (
      <div className="space-y-4">
        <p className="font-medium text-base-content">Status options</p>
        <CheckboxGroup
          value={selected}
          onValueChange={setSelected}
          orientation="vertical"
        >
          <CheckboxGroupItem value="success" color="success" label="Success" />
          <CheckboxGroupItem value="warning" color="warning" label="Warning" />
          <CheckboxGroupItem value="danger" color="danger" label="Danger" />
          <CheckboxGroupItem value="info" color="info" label="Info" />
        </CheckboxGroup>
      </div>
    );
  };

export const CheckboxGroupWithColors: Story = {
  render: CheckboxGroupWithColorsExample,
};
