import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@ninna-ui/layout';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'Semantic HTML element to render',
    },
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Flex direction',
      table: { defaultValue: { summary: 'row' } },
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16'],
      description: 'Gap between items',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Align items on cross axis',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Justify items on main axis',
    },
    wrap: {
      control: 'select',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      description: 'Flex wrap behavior',
    },
    inline: {
      control: 'boolean',
      description: 'Use inline-flex',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 bg-info/10 rounded-lg">
    {children}
  </div>
);

export const Default: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const Wrap: Story = {
  args: {
    gap: '4',
    wrap: 'wrap',
    className: 'max-w-md',
    children: (
      <>
        {Array.from({ length: 8 }).map((_, i) => (
          <Box key={`flex-item-${i}`}>Item {i + 1}</Box>
        ))}
      </>
    ),
  },
};

export const SpaceBetween: Story = {
  args: {
    justify: 'between',
    className: 'w-full',
    children: (
      <>
        <Box>Left</Box>
        <Box>Right</Box>
      </>
    ),
  },
};
