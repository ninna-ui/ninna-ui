import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputGroup, FormControl, FormLabel, FormMessage } from '@ninna-ui/forms';
import { Search, Mail, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the input',
      table: { defaultValue: { summary: 'md' } },
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'flushed', 'unstyled'],
      description: 'Visual variant',
      table: { defaultValue: { summary: 'outline' } },
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Color theme for focus state',
      table: { defaultValue: { summary: 'primary' } },
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the input has an error state',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: { defaultValue: { summary: 'false' } },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input takes full width',
      table: { defaultValue: { summary: 'true' } },
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when input has value',
      table: { defaultValue: { summary: 'false' } },
    },
    showCounter: {
      control: 'boolean',
      description: 'Show character counter (requires maxLength)',
      table: { defaultValue: { summary: 'false' } },
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
    floatingLabel: {
      control: 'text',
      description: 'Floating label text',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the input is read-only',
      table: { defaultValue: { summary: 'false' } },
    },
    onClear: {
      action: 'onClear',
      description: 'Callback when clear button is clicked',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size}>
          <p className="text-sm text-base-content/70 mb-1">size="{size}"</p>
          <Input size={size} placeholder={`Size ${size}`} />
        </div>
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      {(['outline', 'filled', 'flushed', 'unstyled'] as const).map((variant) => (
        <div key={variant}>
          <p className="text-sm text-base-content/70 mb-1">variant="{variant}"</p>
          <Input variant={variant} placeholder={`Variant ${variant}`} />
        </div>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div>
        <p className="text-sm text-base-content/70 mb-1">Start icon (using InputGroup)</p>
        <InputGroup startElement={<Search className="h-4 w-4" />}>
          <Input placeholder="Search..." />
        </InputGroup>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-1">End icon</p>
        <InputGroup endElement={<Mail className="h-4 w-4" />}>
          <Input placeholder="Email" />
        </InputGroup>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-1">Both icons</p>
        <InputGroup 
          startElement={<Search className="h-4 w-4" />}
          endElement={<Mail className="h-4 w-4" />}
        >
          <Input placeholder="Search emails..." />
        </InputGroup>
      </div>
    </div>
  ),
};
const PasswordInputExample = () => {
    const [show, setShow] = useState(false);
    return (
      <div className="max-w-md">
        <InputGroup
          endElement={
            <button
              type="button"
              aria-label={show ? 'Hide password' : 'Show password'}
              onClick={() => setShow(!show)}
              className="focus:outline-none"
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
        >
          <Input
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
        </InputGroup>
      </div>
    );
  };

export const PasswordInput: Story = {
  render: PasswordInputExample,
};
const ClearableExample = () => {
    const [value, setValue] = useState('Type something here');
    return (
      <div className="max-w-md space-y-4">
        <div>
          <p className="text-sm text-base-content/70 mb-1">Clearable input</p>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            clearable
            onClear={() => setValue('')}
            placeholder="Type and clear..."
          />
        </div>
      </div>
    );
  };

export const Clearable: Story = {
  render: ClearableExample,
};

export const CharacterCounter: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div>
        <p className="text-sm text-base-content/70 mb-1">With character counter</p>
        <Input
          maxLength={50}
          showCounter
          placeholder="Max 50 characters..."
        />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-1">Pre-filled near limit</p>
        <Input
          maxLength={20}
          showCounter
          defaultValue="Almost at the limit!"
        />
      </div>
    </div>
  ),
};

export const FloatingLabel: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div>
        <p className="text-sm text-base-content/70 mb-1">Floating label (empty)</p>
        <Input floatingLabel="Email address" />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-1">Floating label (with value)</p>
        <Input floatingLabel="Username" defaultValue="johndoe" />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-1">Different sizes</p>
        <div className="space-y-4">
          <Input floatingLabel="Small" size="sm" />
          <Input floatingLabel="Medium" size="md" />
          <Input floatingLabel="Large" size="lg" />
        </div>
      </div>
    </div>
  ),
};

export const Invalid: Story = {
  args: {
    invalid: true,
    placeholder: 'Invalid input',
    defaultValue: 'invalid@',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    defaultValue: 'Cannot edit',
  },
};

export const WithFormControl: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="you@example.com" />
        <FormMessage type="hint">We'll never share your email.</FormMessage>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input placeholder="johndoe" />
      </FormControl>

      <FormControl isInvalid>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="••••••••" />
        <FormMessage>Password must be at least 8 characters.</FormMessage>
      </FormControl>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      {(['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'] as const).map((color) => (
        <div key={color}>
          <p className="text-sm text-base-content/70 mb-1">color="{color}"</p>
          <Input color={color} placeholder={`Color ${color}`} />
        </div>
      ))}
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-base-content/70 mb-1">fullWidth=true (default)</p>
        <Input placeholder="Full width input" fullWidth />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-1">fullWidth=false</p>
        <Input placeholder="Auto width" fullWidth={false} />
      </div>
    </div>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <div className="max-w-md">
      <Input readOnly defaultValue="This value cannot be edited" />
    </div>
  ),
};
