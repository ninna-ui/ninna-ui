import type { Meta, StoryObj } from '@storybook/react';
import { Textarea, FormControl, FormLabel, FormMessage } from '@ninna-ui/forms';

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the textarea',
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
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior',
      table: { defaultValue: { summary: 'vertical' } },
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the textarea has an error state',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
      table: { defaultValue: { summary: 'false' } },
    },
    autoResize: {
      control: 'boolean',
      description: 'Auto-resize based on content',
      table: { defaultValue: { summary: 'false' } },
    },
    minRows: {
      control: 'number',
      description: 'Minimum rows when autoResize is enabled',
      table: { defaultValue: { summary: '3' } },
    },
    maxRows: {
      control: 'number',
      description: 'Maximum rows when autoResize is enabled',
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
    rows: {
      control: 'number',
      description: 'Number of visible rows',
      table: { defaultValue: { summary: '3' } },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size}>
          <p className="text-sm text-base-content/70 mb-1">size="{size}"</p>
          <Textarea size={size} placeholder={`Size ${size}`} rows={3} />
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
          <Textarea variant={variant} placeholder={`Variant ${variant}`} rows={3} />
        </div>
      ))}
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      {(['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'] as const).map((color) => (
        <div key={color}>
          <p className="text-sm text-base-content/70 mb-1">color="{color}"</p>
          <Textarea color={color} placeholder={`Color ${color}`} rows={3} />
        </div>
      ))}
    </div>
  ),
};

export const ResizeOptions: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      {(['none', 'vertical', 'horizontal', 'both'] as const).map((resize) => (
        <div key={resize}>
          <p className="text-sm text-base-content/70 mb-1">resize="{resize}"</p>
          <Textarea resize={resize} placeholder={`Resize ${resize}`} rows={3} />
        </div>
      ))}
    </div>
  ),
};

export const Invalid: Story = {
  args: {
    invalid: true,
    placeholder: 'Invalid textarea',
    defaultValue: 'This content has an error',
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
    defaultValue: 'Cannot edit this content',
    rows: 4,
  },
};

export const AutoResize: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div>
        <p className="text-sm text-base-content/70 mb-1">Auto-resize (minRows=2, maxRows=10)</p>
        <Textarea
          autoResize
          minRows={2}
          maxRows={10}
          placeholder="Start typing... the textarea will grow automatically"
        />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-1">Auto-resize with pre-filled content</p>
        <Textarea
          autoResize
          minRows={2}
          maxRows={6}
          defaultValue="This textarea automatically resizes based on content. Try adding more lines to see it grow. It will stop growing when it reaches the maximum number of rows."
        />
      </div>
    </div>
  ),
};

export const CharacterCounter: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div>
        <p className="text-sm text-base-content/70 mb-1">With character counter</p>
        <Textarea
          maxLength={200}
          showCounter
          placeholder="Max 200 characters..."
          rows={4}
        />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-1">Pre-filled near limit</p>
        <Textarea
          maxLength={100}
          showCounter
          defaultValue="This text is approaching the character limit. Keep typing to see the counter change color when you exceed it."
          rows={4}
        />
      </div>
    </div>
  ),
};

export const AutoResizeWithCounter: Story = {
  render: () => (
    <div className="max-w-md">
      <p className="text-sm text-base-content/70 mb-1">Combined auto-resize and counter</p>
      <Textarea
        autoResize
        minRows={3}
        maxRows={8}
        maxLength={500}
        showCounter
        placeholder="This textarea auto-resizes and shows a character counter..."
      />
    </div>
  ),
};

export const WithFormControl: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <FormControl>
        <FormLabel>Bio</FormLabel>
        <Textarea placeholder="Tell us about yourself..." rows={4} maxLength={500} showCounter />
        <FormMessage type="hint">Tell us about yourself.</FormMessage>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Describe your project..." autoResize minRows={3} maxRows={8} />
      </FormControl>

      <FormControl isInvalid>
        <FormLabel>Feedback</FormLabel>
        <Textarea placeholder="Your feedback..." rows={4} />
        <FormMessage>Feedback is required.</FormMessage>
      </FormControl>
    </div>
  ),
};
