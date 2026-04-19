import type { Meta, StoryObj } from '@storybook/react';
import { Stack, HStack, VStack } from '@ninna-ui/layout';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
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
      description: 'Stack direction',
      table: { defaultValue: { summary: 'column' } },
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16'],
      description: 'Gap between items',
      table: { defaultValue: { summary: '4' } },
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
      control: 'boolean',
      description: 'Wrap items',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 bg-primary/10 rounded-lg text-center">
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

export const Horizontal: Story = {
  args: {
    direction: 'row',
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

export const WithHStack: Story = {
  render: () => (
    <HStack gap="4">
      <Box>A</Box>
      <Box>B</Box>
      <Box>C</Box>
    </HStack>
  ),
};

export const WithVStack: Story = {
  render: () => (
    <VStack gap="4">
      <Box>X</Box>
      <Box>Y</Box>
      <Box>Z</Box>
    </VStack>
  ),
};

export const AllGaps: Story = {
  render: () => (
    <div className="space-y-6">
      {(['0', '2', '4', '6', '8'] as const).map((gap) => (
        <div key={gap}>
          <p className="text-sm text-base-content/70 mb-2">gap="{gap}"</p>
          <HStack gap={gap}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </HStack>
        </div>
      ))}
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4">
      {(['start', 'center', 'end', 'stretch'] as const).map((align) => (
        <div key={align}>
          <p className="text-sm text-base-content/70 mb-2">align="{align}"</p>
          <HStack align={align} gap="4" className="h-20 bg-base-200 rounded p-2">
            <div className="px-4 py-1 bg-primary text-white rounded">Short</div>
            <div className="px-4 py-4 bg-primary text-white rounded">Tall</div>
          </HStack>
        </div>
      ))}
    </div>
  ),
};

export const Justify: Story = {
  render: () => (
    <div className="space-y-4">
      {(['start', 'center', 'end', 'between', 'around'] as const).map((justify) => (
        <div key={justify}>
          <p className="text-sm text-base-content/70 mb-2">justify="{justify}"</p>
          <HStack justify={justify} className="bg-base-200 rounded p-2">
            <Box>A</Box>
            <Box>B</Box>
            <Box>C</Box>
          </HStack>
        </div>
      ))}
    </div>
  ),
};
