import type { Meta, StoryObj } from '@storybook/react';
import { PinInput } from '@ninna-ui/forms';

const meta: Meta<typeof PinInput> = {
  title: 'Forms/PinInput',
  component: PinInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: { type: 'number', min: 2, max: 8 },
      description: 'Number of input fields',
      table: { defaultValue: { summary: '4' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the inputs',
      table: { defaultValue: { summary: 'md' } },
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'number'],
      description: 'Input type',
      table: { defaultValue: { summary: 'text' } },
    },
    mask: {
      control: 'boolean',
      description: 'Mask input value',
      table: { defaultValue: { summary: 'false' } },
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
    otp: {
      control: 'boolean',
      description: 'One-time password mode',
      table: { defaultValue: { summary: 'false' } },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder for each field',
      table: { defaultValue: { summary: '○' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PinInput>;

export const Default: Story = {
  args: {
    length: 4,
  },
};

export const SixDigits: Story = {
  args: {
    length: 6,
  },
};

export const NumbersOnly: Story = {
  args: {
    length: 4,
    type: 'number',
    placeholder: '0',
  },
};

export const Masked: Story = {
  args: {
    length: 4,
    mask: true,
  },
};

export const OTPMode: Story = {
  args: {
    length: 6,
    otp: true,
    type: 'number',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-center">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Extra Small</p>
        <PinInput size="xs" length={4} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Small</p>
        <PinInput size="sm" length={4} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Medium</p>
        <PinInput size="md" length={4} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Large</p>
        <PinInput size="lg" length={4} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Extra Large</p>
        <PinInput size="xl" length={4} />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    length: 4,
    disabled: true,
    defaultValue: '1234',
  },
};

export const Invalid: Story = {
  args: {
    length: 4,
    invalid: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    length: 4,
    defaultValue: '1234',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center">
      <div className="text-center">
        <h4 className="text-lg font-semibold mb-3">4-Digit PIN</h4>
        <PinInput length={4} />
      </div>
      <div className="text-center">
        <h4 className="text-lg font-semibold mb-3">6-Digit OTP</h4>
        <PinInput length={6} otp type="number" />
      </div>
      <div className="text-center">
        <h4 className="text-lg font-semibold mb-3">Masked Password</h4>
        <PinInput length={4} mask />
      </div>
      <div className="text-center">
        <h4 className="text-lg font-semibold mb-3">Disabled</h4>
        <PinInput length={4} disabled defaultValue="1234" />
      </div>
      <div className="text-center">
        <h4 className="text-lg font-semibold mb-3">Invalid State</h4>
        <PinInput length={4} invalid />
      </div>
    </div>
  ),
};

export const AutoFocus: Story = {
  args: {
    length: 4,
    autoFocus: true,
  },
};

export const WithOnComplete: Story = {
  render: () => (
    <div className="text-center">
      <p className="text-sm text-base-content/70 mb-2">Enter PIN to see alert</p>
      <PinInput 
        length={4} 
        onComplete={(pin) => alert(`PIN entered: ${pin}`)} 
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-center">
      <div className="text-center">
        <p className="text-sm text-base-content/70 mb-2">Normal</p>
        <PinInput length={4} />
      </div>
      <div className="text-center">
        <p className="text-sm text-base-content/70 mb-2">Disabled</p>
        <PinInput length={4} disabled defaultValue="1234" />
      </div>
      <div className="text-center">
        <p className="text-sm text-base-content/70 mb-2">Invalid</p>
        <PinInput length={4} invalid />
      </div>
    </div>
  ),
};
