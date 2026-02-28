import type { Meta, StoryObj } from '@storybook/react';
import { Center } from '@ninna-ui/layout';

const meta: Meta<typeof Center> = {
  title: 'Layout/Center',
  component: Center,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    inline: {
      control: 'boolean',
      description: 'Use inline-flex instead of flex',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Center>;

export const Default: Story = {
  args: {
    className: 'h-48 bg-base-200 rounded-lg',
    children: (
      <div className="p-4 bg-primary text-white rounded-lg">
        Centered Content
      </div>
    ),
  },
};

export const WithSpinner: Story = {
  args: {
    className: 'h-48 bg-base-200 rounded-lg',
    children: (
      <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
    ),
  },
};

export const Inline: Story = {
  args: {
    inline: true,
    className: 'h-16 w-16 bg-base-200 rounded-lg',
    children: <span className="text-2xl">🎯</span>,
  },
};

export const FullPageCenter: Story = {
  render: () => (
    <Center className="h-64 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg">
      <div className="text-center text-white">
        <div className="text-4xl font-bold mb-2">Welcome</div>
        <div className="text-indigo-100">Center content vertically and horizontally</div>
      </div>
    </Center>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <Center className="h-48 bg-base-100 rounded-lg border-2 border-dashed border-base-300">
      <div className="text-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-3" />
        <div className="text-base-content/70">Loading content...</div>
      </div>
    </Center>
  ),
};
