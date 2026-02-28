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
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      table: { defaultValue: { summary: 'false' } },
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the checkbox is in an invalid state',
      table: { defaultValue: { summary: 'false' } },
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
      description: 'Description text',
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

export const Indeterminate: Story = {
  render: function IndeterminateStory() {
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
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
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
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      {(['outline', 'soft', 'solid'] as const).map((variant) => (
        <Checkbox key={variant} variant={variant} label={`Variant ${variant}`} defaultChecked />
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

export const CheckboxGroupExample: Story = {
  render: function CheckboxGroupStory() {
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
  },
};

export const CheckboxGroupHorizontal: Story = {
  render: function HorizontalGroupStory() {
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
  },
};

export const CheckboxGroupWithColors: Story = {
  render: function ColoredGroupStory() {
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
  },
};
