import type { Meta, StoryObj } from '@storybook/react';
import { Field, Input, Textarea, Select, SelectItem } from '@ninna-ui/forms';

const meta: Meta<typeof Field> = {
  title: 'Forms/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input',
    },
    errorText: {
      control: 'text',
      description: 'Error text displayed when invalid',
    },
    required: {
      control: 'boolean',
      description: 'Required state',
      table: { defaultValue: { summary: 'false' } },
    },
    invalid: {
      control: 'boolean',
      description: 'Invalid state',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { defaultValue: { summary: 'false' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of field elements',
      table: { defaultValue: { summary: 'md' } },
    },
    optionalText: {
      control: 'text',
      description: 'Optional text on the right side of label',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {
    label: 'Email',
    children: <Input placeholder="Enter your email" />,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    helperText: "We'll never share your email with anyone.",
    children: <Input placeholder="Enter your email" />,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const WithErrorText: Story = {
  args: {
    label: 'Password',
    errorText: 'Password must be at least 8 characters',
    invalid: true,
    children: <Input type="password" placeholder="Enter password" />,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Required: Story = {
  args: {
    label: 'Username',
    required: true,
    children: <Input placeholder="Enter username" />,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const WithOptionalText: Story = {
  args: {
    label: 'Bio',
    optionalText: 'Optional',
    children: <Textarea placeholder="Tell us about yourself" />,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    disabled: true,
    children: <Input placeholder="Cannot edit" />,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Field label="Extra Small" size="xs">
        <Input size="xs" placeholder="XS field" />
      </Field>
      <Field label="Small" size="sm">
        <Input size="sm" placeholder="SM field" />
      </Field>
      <Field label="Medium" size="md">
        <Input size="md" placeholder="MD field" />
      </Field>
      <Field label="Large" size="lg">
        <Input size="lg" placeholder="LG field" />
      </Field>
      <Field label="Extra Large" size="xl">
        <Input size="xl" placeholder="XL field" />
      </Field>
    </div>
  ),
};

export const WithDifferentInputs: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Field label="Text Input" helperText="A simple text input">
        <Input placeholder="Enter text" />
      </Field>
      <Field label="Textarea" helperText="Multi-line text input">
        <Textarea placeholder="Enter long text" />
      </Field>
      <Field label="Select" helperText="Choose an option">
        <Select placeholder="Select option">
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
          <SelectItem value="3">Option 3</SelectItem>
        </Select>
      </Field>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="flex flex-col gap-4 w-96 p-6 border rounded-lg">
      <h3 className="text-xl font-semibold mb-2">Registration Form</h3>
      <Field label="Full Name" required>
        <Input placeholder="John Doe" />
      </Field>
      <Field label="Email" required helperText="We'll send confirmation here">
        <Input type="email" placeholder="john@example.com" />
      </Field>
      <Field label="Password" required errorText="Password is too weak" invalid>
        <Input type="password" placeholder="••••••••" />
      </Field>
      <Field label="Bio" optionalText="Optional">
        <Textarea placeholder="Tell us about yourself" />
      </Field>
    </form>
  ),
};
