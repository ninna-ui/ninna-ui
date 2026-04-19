import type { Meta, StoryObj } from '@storybook/react';
import { Separator, VStack, HStack } from '@ninna-ui/layout';

const meta: Meta<typeof Separator> = {
  title: 'Layout/Separator',
  component: Separator,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'Semantic HTML element to render',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Separator orientation',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    decorative: {
      control: 'boolean',
      description: 'If true, separator has no semantic meaning',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <VStack gap="4" className="w-full max-w-md">
      <p className="text-base-content/70">Content above</p>
      <Separator />
      <p className="text-base-content/70">Content below</p>
    </VStack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <HStack gap="4" className="h-16" align="center">
      <span className="text-base-content/70">Left</span>
      <Separator orientation="vertical" />
      <span className="text-base-content/70">Right</span>
    </HStack>
  ),
};

export const InNavigation: Story = {
  render: () => (
    <HStack gap="4" align="center">
      <a href="/" className="text-base-content/70 hover:text-primary">Home</a>
      <Separator orientation="vertical" className="h-4" />
      <a href="/" className="text-base-content/70 hover:text-primary">About</a>
      <Separator orientation="vertical" className="h-4" />
      <a href="/" className="text-base-content/70 hover:text-primary">Contact</a>
    </HStack>
  ),
};
