import type { Meta, StoryObj } from '@storybook/react';
import { FormGroup, Field, Input, Checkbox, RadioGroup, RadioGroupItem } from '@ninna-ui/forms';

const meta: Meta<typeof FormGroup> = {
  title: 'Forms/FormGroup',
  component: FormGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    legend: {
      control: 'text',
      description: 'Legend/title for the group',
    },
    description: {
      control: 'text',
      description: 'Description text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: 'Required state',
      table: { defaultValue: { summary: 'false' } },
    },
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Spacing between items',
      table: { defaultValue: { summary: 'md' } },
    },
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout direction',
      table: { defaultValue: { summary: 'vertical' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormGroup>;

export const Default: Story = {
  args: {
    legend: 'Personal Information',
    children: (
      <>
        <Field label="First Name">
          <Input placeholder="John" />
        </Field>
        <Field label="Last Name">
          <Input placeholder="Doe" />
        </Field>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const WithDescription: Story = {
  args: {
    legend: 'Contact Details',
    description: 'Please provide your contact information for communication purposes.',
    children: (
      <>
        <Field label="Email">
          <Input type="email" placeholder="john@example.com" />
        </Field>
        <Field label="Phone">
          <Input type="tel" placeholder="+1 (555) 123-4567" />
        </Field>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const Required: Story = {
  args: {
    legend: 'Account Settings',
    required: true,
    children: (
      <>
        <Field label="Username" required>
          <Input placeholder="username" />
        </Field>
        <Field label="Password" required>
          <Input type="password" placeholder="••••••••" />
        </Field>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const Horizontal: Story = {
  args: {
    legend: 'Name',
    direction: 'horizontal',
    children: (
      <>
        <Field label="First">
          <Input placeholder="John" />
        </Field>
        <Field label="Last">
          <Input placeholder="Doe" />
        </Field>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const Spacing: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-96">
      <FormGroup legend="Small Spacing" spacing="sm">
        <Field label="Field 1">
          <Input placeholder="Input 1" />
        </Field>
        <Field label="Field 2">
          <Input placeholder="Input 2" />
        </Field>
      </FormGroup>
      <FormGroup legend="Medium Spacing" spacing="md">
        <Field label="Field 1">
          <Input placeholder="Input 1" />
        </Field>
        <Field label="Field 2">
          <Input placeholder="Input 2" />
        </Field>
      </FormGroup>
      <FormGroup legend="Large Spacing" spacing="lg">
        <Field label="Field 1">
          <Input placeholder="Input 1" />
        </Field>
        <Field label="Field 2">
          <Input placeholder="Input 2" />
        </Field>
      </FormGroup>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    legend: 'Disabled Group',
    disabled: true,
    children: (
      <>
        <Field label="Field 1">
          <Input placeholder="Cannot edit" />
        </Field>
        <Field label="Field 2">
          <Input placeholder="Cannot edit" />
        </Field>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const WithCheckboxes: Story = {
  args: {
    legend: 'Notification Preferences',
    description: 'Choose how you want to be notified.',
    children: (
      <>
        <Checkbox label="Email notifications" defaultChecked />
        <Checkbox label="SMS notifications" />
        <Checkbox label="Push notifications" defaultChecked />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const WithRadioGroup: Story = {
  args: {
    legend: 'Shipping Method',
    description: 'Select your preferred shipping option.',
    children: (
      <RadioGroup defaultValue="standard">
        <RadioGroupItem value="standard" label="Standard (5-7 days)" />
        <RadioGroupItem value="express" label="Express (2-3 days)" />
        <RadioGroupItem value="overnight" label="Overnight" />
      </RadioGroup>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const CompleteForm: Story = {
  render: () => (
    <form className="w-[500px] space-y-8 p-6 border rounded-lg">
      <FormGroup legend="Personal Information" required>
        <div className="grid grid-cols-2 gap-4">
          <Field label="First Name" required>
            <Input placeholder="John" />
          </Field>
          <Field label="Last Name" required>
            <Input placeholder="Doe" />
          </Field>
        </div>
        <Field label="Email" required>
          <Input type="email" placeholder="john@example.com" />
        </Field>
      </FormGroup>

      <FormGroup legend="Address">
        <Field label="Street Address">
          <Input placeholder="123 Main St" />
        </Field>
        <div className="grid grid-cols-3 gap-4">
          <Field label="City">
            <Input placeholder="New York" />
          </Field>
          <Field label="State">
            <Input placeholder="NY" />
          </Field>
          <Field label="ZIP">
            <Input placeholder="10001" />
          </Field>
        </div>
      </FormGroup>

      <FormGroup legend="Preferences" description="Customize your experience">
        <Checkbox label="Subscribe to newsletter" />
        <Checkbox label="Enable two-factor authentication" />
      </FormGroup>
    </form>
  ),
};
