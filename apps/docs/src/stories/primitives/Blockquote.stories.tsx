import type { Meta, StoryObj } from '@storybook/react';
import { Blockquote } from '@ninna-ui/primitives';

const meta: Meta<typeof Blockquote> = {
  title: 'Primitives/Blockquote',
  component: Blockquote,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Color variant',
      table: { defaultValue: { summary: 'primary' } },
    },
    variant: {
      control: 'select',
      options: ['outline', 'solid', 'soft'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'outline' } },
    },
    cite: {
      control: 'text',
      description: 'Citation URL',
    },
    citeSource: {
      control: 'text',
      description: 'Citation source to display',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show quote icon',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Quote content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  args: {
    children: 'The only way to do great work is to love what you do.',
  },
};

export const WithCitation: Story = {
  args: {
    children: 'The only way to do great work is to love what you do.',
    citeSource: 'Steve Jobs',
  },
};

export const Solid: Story = {
  args: {
    children: 'Imagination is more important than knowledge.',
    variant: 'solid',
    color: 'primary',
    citeSource: 'Albert Einstein',
  },
};

export const Soft: Story = {
  args: {
    children: 'Be yourself; everyone else is already taken.',
    variant: 'soft',
    color: 'secondary',
    citeSource: 'Oscar Wilde',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'The secret of getting ahead is getting started.',
    showIcon: true,
    variant: 'solid',
    color: 'primary',
    citeSource: 'Mark Twain',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6 max-w-lg">
      <Blockquote variant="outline" color="primary">Outline variant with left border only.</Blockquote>
      <Blockquote variant="solid" color="primary">Solid variant with background.</Blockquote>
      <Blockquote variant="soft" color="primary">Soft variant with full border.</Blockquote>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Blockquote color="neutral" variant="solid">Neutral color</Blockquote>
      <Blockquote color="primary" variant="solid">Primary color</Blockquote>
      <Blockquote color="secondary" variant="solid">Secondary color</Blockquote>
      <Blockquote color="accent" variant="solid">Accent color</Blockquote>
      <Blockquote color="info" variant="solid">Info color</Blockquote>
      <Blockquote color="success" variant="solid">Success color</Blockquote>
      <Blockquote color="warning" variant="solid">Warning color</Blockquote>
      <Blockquote color="danger" variant="solid">Danger color</Blockquote>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-lg">
      <div>
        <h4 className="text-lg font-semibold mb-3">Variants</h4>
        <div className="space-y-4">
          <Blockquote variant="outline">Outline variant</Blockquote>
          <Blockquote variant="solid" color="primary">Solid variant</Blockquote>
          <Blockquote variant="soft" color="secondary">Soft variant</Blockquote>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">With Citation</h4>
        <Blockquote variant="solid" color="primary" citeSource="Famous Author">
          A quote with citation displayed below.
        </Blockquote>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">With Icon</h4>
        <Blockquote showIcon variant="solid" color="secondary" citeSource="Another Author">
          A quote with decorative quote icon.
        </Blockquote>
      </div>
    </div>
  ),
};
