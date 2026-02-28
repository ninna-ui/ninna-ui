import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@ninna-ui/primitives';

const meta: Meta<typeof Heading> = {
  title: 'Primitives/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading level (semantic HTML element)',
      table: { defaultValue: { summary: 'h2' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      description: 'Override default size for the heading level',
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight override',
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Text color',
      table: { defaultValue: { summary: 'neutral' } },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    truncate: {
      control: 'boolean',
      description: 'Truncate text with ellipsis',
      table: { defaultValue: { summary: 'false' } },
    },
    lineClamp: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 5, 6],
      description: 'Maximum lines before truncating',
    },
    noWrap: {
      control: 'boolean',
      description: 'Prevent text wrapping',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Heading content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Default Heading',
    as: 'h2',
  },
};

export const H1: Story = {
  args: {
    children: 'Heading Level 1',
    as: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'Heading Level 2',
    as: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'Heading Level 3',
    as: 'h3',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Heading',
    as: 'h2',
    color: 'primary',
  },
};

export const CustomSize: Story = {
  args: {
    children: 'Custom Size Heading',
    as: 'h3',
    size: '4xl',
  },
};

export const LightWeight: Story = {
  args: {
    children: 'Light Weight Heading',
    as: 'h2',
    weight: 'light',
  },
};

export const Truncated: Story = {
  args: {
    children: 'This is a very long heading that will be truncated when it exceeds the container width',
    as: 'h2',
    truncate: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Levels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading as="h1">Heading Level 1</Heading>
      <Heading as="h2">Heading Level 2</Heading>
      <Heading as="h3">Heading Level 3</Heading>
      <Heading as="h4">Heading Level 4</Heading>
      <Heading as="h5">Heading Level 5</Heading>
      <Heading as="h6">Heading Level 6</Heading>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading as="h2" size="6xl">Size 6xl</Heading>
      <Heading as="h2" size="5xl">Size 5xl</Heading>
      <Heading as="h2" size="4xl">Size 4xl</Heading>
      <Heading as="h2" size="3xl">Size 3xl</Heading>
      <Heading as="h2" size="2xl">Size 2xl</Heading>
      <Heading as="h2" size="xl">Size xl</Heading>
      <Heading as="h2" size="lg">Size lg</Heading>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-2">
      <Heading as="h3" weight="light">Light weight</Heading>
      <Heading as="h3" weight="normal">Normal weight</Heading>
      <Heading as="h3" weight="medium">Medium weight</Heading>
      <Heading as="h3" weight="semibold">Semibold weight</Heading>
      <Heading as="h3" weight="bold">Bold weight</Heading>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-2">
      <Heading as="h3" color="neutral">Neutral color</Heading>
      <Heading as="h3" color="primary">Primary color</Heading>
      <Heading as="h3" color="secondary">Secondary color</Heading>
      <Heading as="h3" color="accent">Accent color</Heading>
      <Heading as="h3" color="info">Info color</Heading>
      <Heading as="h3" color="success">Success color</Heading>
      <Heading as="h3" color="warning">Warning color</Heading>
      <Heading as="h3" color="danger">Danger color</Heading>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="p-2 border rounded">
        <Heading as="h3" align="left">Left aligned</Heading>
      </div>
      <div className="p-2 border rounded">
        <Heading as="h3" align="center">Center aligned</Heading>
      </div>
      <div className="p-2 border rounded">
        <Heading as="h3" align="right">Right aligned</Heading>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-lg font-semibold mb-4">Heading Levels</h4>
        <div className="space-y-2">
          <Heading as="h1">H1 Heading</Heading>
          <Heading as="h2">H2 Heading</Heading>
          <Heading as="h3">H3 Heading</Heading>
          <Heading as="h4">H4 Heading</Heading>
          <Heading as="h5">H5 Heading</Heading>
          <Heading as="h6">H6 Heading</Heading>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Colors</h4>
        <div className="space-y-1">
          <Heading as="h4" color="neutral">Neutral</Heading>
          <Heading as="h4" color="primary">Primary</Heading>
          <Heading as="h4" color="secondary">Secondary</Heading>
          <Heading as="h4" color="accent">Accent</Heading>
          <Heading as="h4" color="info">Info</Heading>
          <Heading as="h4" color="success">Success</Heading>
          <Heading as="h4" color="warning">Warning</Heading>
          <Heading as="h4" color="danger">Danger</Heading>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Weights</h4>
        <div className="space-y-1">
          <Heading as="h4" weight="light">Light</Heading>
          <Heading as="h4" weight="normal">Normal</Heading>
          <Heading as="h4" weight="medium">Medium</Heading>
          <Heading as="h4" weight="semibold">Semibold</Heading>
          <Heading as="h4" weight="bold">Bold</Heading>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Combined Styles</h4>
        <div className="space-y-2">
          <Heading as="h2" size="4xl" color="primary">Large Primary Heading</Heading>
          <Heading as="h3" weight="light" color="secondary">Light Secondary Heading</Heading>
          <Heading as="h4" size="2xl" weight="bold" color="success">Bold Success Heading</Heading>
        </div>
      </div>
    </div>
  ),
};
