import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ninna-ui/layout';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'Semantic HTML element to render',
    },
    className: {
      control: 'text',
      description: 'CSS classes to apply',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    className: 'p-4 bg-primary/10 rounded-lg',
    children: 'This is a Box component',
  },
};

export const WithShadow: Story = {
  args: {
    className: 'p-6 bg-base-100 rounded-lg shadow-lg',
    children: 'Box with shadow',
  },
};

export const Nested: Story = {
  render: () => (
    <Box className="p-4 bg-base-200 rounded-lg">
      <Box className="p-4 bg-primary/10 rounded-lg mb-2">
        Nested Box 1
      </Box>
      <Box className="p-4 bg-secondary/10 rounded-lg">
        Nested Box 2
      </Box>
    </Box>
  ),
};

export const AsCard: Story = {
  render: () => (
    <Box className="max-w-sm p-6 bg-base-100 rounded-xl shadow-md space-y-4">
      <Box className="flex items-center space-x-4">
        <Box className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-content font-bold">
          JD
        </Box>
        <Box>
          <Box className="text-lg font-medium text-base-content">John Doe</Box>
          <Box className="text-base-content/70">Software Engineer</Box>
        </Box>
      </Box>
      <Box className="text-base-content/70">
        Building great user experiences with React and TypeScript.
      </Box>
    </Box>
  ),
};

