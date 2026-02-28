import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from '@ninna-ui/forms';

const meta: Meta<typeof NumberInput> = {
  title: 'Forms/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the input',
      table: { defaultValue: { summary: 'md' } },
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
      table: { defaultValue: { summary: '1' } },
    },
    precision: {
      control: 'number',
      description: 'Decimal places',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { defaultValue: { summary: 'false' } },
    },
    invalid: {
      control: 'boolean',
      description: 'Invalid state',
      table: { defaultValue: { summary: 'false' } },
    },
    showStepper: {
      control: 'boolean',
      description: 'Show stepper buttons',
      table: { defaultValue: { summary: 'true' } },
    },
    stepperPosition: {
      control: 'select',
      options: ['right', 'sides'],
      description: 'Stepper position',
      table: { defaultValue: { summary: 'right' } },
    },
    allowKeyboardInput: {
      control: 'boolean',
      description: 'Allow keyboard input',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    defaultValue: 0,
    placeholder: 'Enter number',
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
};

export const WithMinMax: Story = {
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
};

export const WithStep: Story = {
  args: {
    defaultValue: 0,
    step: 5,
    min: 0,
    max: 100,
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
};

export const WithPrecision: Story = {
  args: {
    defaultValue: 0.0,
    step: 0.01,
    precision: 2,
    min: 0,
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
};

export const StepperOnSides: Story = {
  args: {
    defaultValue: 5,
    stepperPosition: 'sides',
    min: 0,
    max: 10,
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
};

export const NoStepper: Story = {
  args: {
    defaultValue: 100,
    showStepper: false,
    placeholder: 'Enter number',
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-48">
      <NumberInput size="xs" defaultValue={10} />
      <NumberInput size="sm" defaultValue={20} />
      <NumberInput size="md" defaultValue={30} />
      <NumberInput size="lg" defaultValue={40} />
      <NumberInput size="xl" defaultValue={50} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: 50,
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
};

export const Invalid: Story = {
  args: {
    defaultValue: 150,
    max: 100,
    invalid: true,
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
};

export const CurrencyInput: Story = {
  args: {
    defaultValue: 99.99,
    step: 0.01,
    precision: 2,
    min: 0,
    format: (value) => `$${value.toFixed(2)}`,
    parse: (value) => parseFloat(value.replace(/[$,]/g, '')),
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-64">
      <div>
        <h4 className="text-lg font-semibold mb-3">Default (Stepper Right)</h4>
        <NumberInput defaultValue={50} />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Stepper on Sides</h4>
        <NumberInput defaultValue={5} stepperPosition="sides" />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">With Min/Max (0-100)</h4>
        <NumberInput defaultValue={75} min={0} max={100} />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Step by 10</h4>
        <NumberInput defaultValue={50} step={10} />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Decimal (2 places)</h4>
        <NumberInput defaultValue={9.99} step={0.01} precision={2} />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Without Stepper</h4>
        <NumberInput defaultValue={100} showStepper={false} />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Disabled</h4>
        <NumberInput defaultValue={50} disabled />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-48">
      <div>
        <p className="text-sm text-base-content/70 mb-1">Normal</p>
        <NumberInput defaultValue={50} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-1">Disabled</p>
        <NumberInput defaultValue={50} disabled />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-1">Invalid</p>
        <NumberInput defaultValue={150} invalid />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-1">Read Only</p>
        <NumberInput defaultValue={50} readOnly />
      </div>
    </div>
  ),
};

export const Formatting: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-48">
      <div>
        <p className="text-sm text-base-content/70 mb-1">Currency</p>
        <NumberInput 
          defaultValue={99.99} 
          precision={2}
          format={(v) => `$${v.toFixed(2)}`}
          parse={(v) => parseFloat(v.replace(/[$,]/g, ''))}
        />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-1">Percentage</p>
        <NumberInput 
          defaultValue={75} 
          min={0}
          max={100}
          format={(v) => `${v}%`}
          parse={(v) => parseFloat(v.replace(/%/g, ''))}
        />
      </div>
    </div>
  ),
};
