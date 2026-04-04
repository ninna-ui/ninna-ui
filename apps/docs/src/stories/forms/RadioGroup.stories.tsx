import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem, RadioCard } from '@ninna-ui/forms';
import { useState } from 'react';
import { CreditCard, Wallet, Building2 } from 'lucide-react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the radio buttons',
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
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the group',
      table: { defaultValue: { summary: 'vertical' } },
    },
    gap: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Gap between items',
      table: { defaultValue: { summary: 'md' } },
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Callback when selected value changes',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value (uncontrolled)',
    },
    required: {
      control: 'boolean',
      description: 'Whether a selection is required',
      table: { defaultValue: { summary: 'false' } },
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the group is in an invalid state',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the group is disabled',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
      <RadioGroupItem value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <p className="text-sm text-base-content/70 mb-2">size="{size}"</p>
          <RadioGroup size={size} defaultValue="option1">
            <RadioGroupItem value="option1" label="Option 1" />
            <RadioGroupItem value="option2" label="Option 2" />
          </RadioGroup>
        </div>
      ))}
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-6">
      {(['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'] as const).map((color) => (
        <div key={color}>
          <p className="text-sm text-base-content/70 mb-2">color="{color}"</p>
          <RadioGroup color={color} defaultValue="option1" orientation="horizontal">
            <RadioGroupItem value="option1" label="Option 1" />
            <RadioGroupItem value="option2" label="Option 2" />
          </RadioGroup>
        </div>
      ))}
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup orientation="horizontal" defaultValue="option1">
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
      <RadioGroupItem value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="startup">
      <RadioGroupItem
        value="startup"
        label="Startup"
        description="Perfect for small teams and startups."
      />
      <RadioGroupItem
        value="business"
        label="Business"
        description="For growing businesses with more needs."
      />
      <RadioGroupItem
        value="enterprise"
        label="Enterprise"
        description="Advanced features for large organizations."
      />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Entire group disabled</p>
        <RadioGroup disabled defaultValue="option1">
          <RadioGroupItem value="option1" label="Option 1" />
          <RadioGroupItem value="option2" label="Option 2" />
        </RadioGroup>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Single item disabled</p>
        <RadioGroup defaultValue="option1">
          <RadioGroupItem value="option1" label="Option 1" />
          <RadioGroupItem value="option2" label="Option 2 (disabled)" disabled />
          <RadioGroupItem value="option3" label="Option 3" />
        </RadioGroup>
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState('option1');
    return (
      <div className="space-y-4">
        <RadioGroup value={value} onValueChange={setValue}>
          <RadioGroupItem value="option1" label="Option 1" />
          <RadioGroupItem value="option2" label="Option 2" />
          <RadioGroupItem value="option3" label="Option 3" />
        </RadioGroup>
        <p className="text-sm text-base-content/70">
          Selected: {value}
        </p>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      {(['outline', 'soft', 'solid'] as const).map((variant) => (
        <div key={variant}>
          <p className="text-sm text-base-content/70 mb-2">variant="{variant}"</p>
          <RadioGroup variant={variant} defaultValue="option1" orientation="horizontal">
            <RadioGroupItem value="option1" label="Option 1" />
            <RadioGroupItem value="option2" label="Option 2" />
          </RadioGroup>
        </div>
      ))}
    </div>
  ),
};

export const GapSizes: Story = {
  render: () => (
    <div className="space-y-6">
      {(['sm', 'md', 'lg'] as const).map((gap) => (
        <div key={gap}>
          <p className="text-sm text-base-content/70 mb-2">gap="{gap}"</p>
          <RadioGroup gap={gap} defaultValue="option1" orientation="horizontal">
            <RadioGroupItem value="option1" label="Option 1" />
            <RadioGroupItem value="option2" label="Option 2" />
            <RadioGroupItem value="option3" label="Option 3" />
          </RadioGroup>
        </div>
      ))}
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-base-content/70">Invalid state for validation errors</p>
      <RadioGroup invalid defaultValue="">
        <RadioGroupItem value="option1" label="Option 1" />
        <RadioGroupItem value="option2" label="Option 2" />
        <RadioGroupItem value="option3" label="Option 3" />
      </RadioGroup>
      <p className="text-sm text-red-500">Please select an option</p>
    </div>
  ),
};

export const LabelPosition: Story = {
  render: () => (
    <div className="space-y-4">
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" label="Label on the right (default)" labelPosition="end" />
        <RadioGroupItem value="option2" label="Label on the left" labelPosition="start" />
      </RadioGroup>
    </div>
  ),
};

export const RadioCardExample: Story = {
  render: function RadioCardStory() {
    const [value, setValue] = useState('card');

    return (
      <div className="space-y-4">
        <p className="font-medium text-base-content">Payment Method</p>
        <RadioGroup value={value} onValueChange={setValue} orientation="horizontal" gap="md">
          <RadioCard
            value="card"
            title="Credit Card"
            description="Pay with Visa, Mastercard, etc."
            icon={<CreditCard className="w-6 h-6" />}
          />
          <RadioCard
            value="wallet"
            title="Digital Wallet"
            description="Apple Pay, Google Pay"
            icon={<Wallet className="w-6 h-6" />}
          />
          <RadioCard
            value="bank"
            title="Bank Transfer"
            description="Direct bank payment"
            icon={<Building2 className="w-6 h-6" />}
          />
        </RadioGroup>
      </div>
    );
  },
};

export const PlanSelector: Story = {
  render: function PlanSelectorStory() {
    const [plan, setPlan] = useState('pro');
    
    const plans = [
      { value: 'free', label: 'Free', price: '$0', description: 'Basic features for personal use' },
      { value: 'pro', label: 'Pro', price: '$19', description: 'Advanced features for professionals' },
      { value: 'team', label: 'Team', price: '$49', description: 'Collaboration features for teams' },
    ];

    return (
      <div className="max-w-md">
        <h3 className="font-semibold text-base-content mb-4">Select a plan</h3>
        <RadioGroup value={plan} onValueChange={setPlan}>
          {plans.map((p) => (
            <div
              key={p.value}
              role="button"
              tabIndex={0}
              className={`p-4 border rounded-lg mb-2 cursor-pointer transition-colors ${
                plan === p.value
                  ? 'border-primary bg-primary/10'
                  : 'border-base-300'
              }`}
              onClick={() => setPlan(p.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setPlan(p.value);
                }
              }}
            >
              <div className="flex items-start gap-3">
                <RadioGroupItem value={p.value} />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-base-content">{p.label}</span>
                    <span className="font-semibold text-base-content">{p.price}/mo</span>
                  </div>
                  <p className="text-sm text-base-content/70">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>
    );
  },
};
