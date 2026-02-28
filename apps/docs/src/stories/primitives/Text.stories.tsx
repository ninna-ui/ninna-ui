import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@ninna-ui/primitives';

const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label', 'strong', 'em', 'small', 'mark', 'del', 'ins', 'sub', 'sup'],
      description: 'HTML element to render',
      table: { defaultValue: { summary: 'p' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      description: 'Text size',
      table: { defaultValue: { summary: 'md' } },
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Text color',
      table: { defaultValue: { summary: 'neutral' } },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
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
    muted: {
      control: 'boolean',
      description: 'Use muted/secondary color',
      table: { defaultValue: { summary: 'false' } },
    },
    noWrap: {
      control: 'boolean',
      description: 'Prevent text wrapping',
      table: { defaultValue: { summary: 'false' } },
    },
    uppercase: {
      control: 'boolean',
      description: 'Transform to uppercase',
      table: { defaultValue: { summary: 'false' } },
    },
    lowercase: {
      control: 'boolean',
      description: 'Transform to lowercase',
      table: { defaultValue: { summary: 'false' } },
    },
    capitalize: {
      control: 'boolean',
      description: 'Capitalize text',
      table: { defaultValue: { summary: 'false' } },
    },
    italic: {
      control: 'boolean',
      description: 'Apply italic style',
      table: { defaultValue: { summary: 'false' } },
    },
    underline: {
      control: 'boolean',
      description: 'Apply underline',
      table: { defaultValue: { summary: 'false' } },
    },
    strikethrough: {
      control: 'boolean',
      description: 'Apply strikethrough',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is default text rendered as a paragraph.',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary colored text',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    children: 'Large text',
    size: 'lg',
  },
};

export const Bold: Story = {
  args: {
    children: 'Bold text',
    weight: 'bold',
  },
};

export const Muted: Story = {
  args: {
    children: 'Muted secondary text',
    muted: true,
  },
};

export const Truncated: Story = {
  args: {
    children: 'This is a very long text that will be truncated when it exceeds the container width.',
    truncate: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Text size="xs">Extra small (xs)</Text>
      <Text size="sm">Small (sm)</Text>
      <Text size="md">Medium (md) - default</Text>
      <Text size="lg">Large (lg)</Text>
      <Text size="xl">Extra large (xl)</Text>
      <Text size="2xl">2xl</Text>
      <Text size="3xl">3xl</Text>
      <Text size="4xl">4xl</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-2">
      <Text weight="light">Light weight</Text>
      <Text weight="normal">Normal weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-2">
      <Text color="neutral">Neutral color</Text>
      <Text color="primary">Primary color</Text>
      <Text color="secondary">Secondary color</Text>
      <Text color="accent">Accent color</Text>
      <Text color="info">Info color</Text>
      <Text color="success">Success color</Text>
      <Text color="warning">Warning color</Text>
      <Text color="danger">Danger color</Text>
      <Text muted>Muted text</Text>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="p-2 border rounded">
        <Text align="left">Left aligned</Text>
      </div>
      <div className="p-2 border rounded">
        <Text align="center">Center aligned</Text>
      </div>
      <div className="p-2 border rounded">
        <Text align="right">Right aligned</Text>
      </div>
    </div>
  ),
};

export const Transformations: Story = {
  render: () => (
    <div className="space-y-2">
      <Text uppercase>uppercase text</Text>
      <Text lowercase>LOWERCASE TEXT</Text>
      <Text capitalize>capitalize each word</Text>
      <Text italic>Italic text</Text>
      <Text underline>Underlined text</Text>
      <Text strikethrough>Strikethrough text</Text>
    </div>
  ),
};

export const AsElements: Story = {
  render: () => (
    <div className="space-y-2">
      <Text as="p">Paragraph (p)</Text>
      <Text as="span">Span element</Text>
      <Text as="strong">Strong element</Text>
      <Text as="em">Emphasized element</Text>
      <Text as="small">Small element</Text>
      <Text as="mark">Marked element</Text>
      <Text as="del">Deleted element</Text>
      <Text as="ins">Inserted element</Text>
    </div>
  ),
};

export const LineClamp: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <div>
        <Text size="sm" muted className="mb-1">2 lines:</Text>
        <Text lineClamp={2}>
          This is a long text that will be clamped to 2 lines. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </div>
      <div>
        <Text size="sm" muted className="mb-1">3 lines:</Text>
        <Text lineClamp={3}>
          This is a long text that will be clamped to 3 lines. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </Text>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-lg font-semibold mb-4">Sizes</h4>
        <div className="flex flex-wrap items-baseline gap-4">
          <Text size="xs">xs</Text>
          <Text size="sm">sm</Text>
          <Text size="md">md</Text>
          <Text size="lg">lg</Text>
          <Text size="xl">xl</Text>
          <Text size="2xl">2xl</Text>
          <Text size="3xl">3xl</Text>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Weights</h4>
        <div className="space-y-1">
          <Text weight="light">Light</Text>
          <Text weight="normal">Normal</Text>
          <Text weight="medium">Medium</Text>
          <Text weight="semibold">Semibold</Text>
          <Text weight="bold">Bold</Text>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Colors</h4>
        <div className="space-y-1">
          <Text color="neutral">Neutral</Text>
          <Text color="primary">Primary</Text>
          <Text color="secondary">Secondary</Text>
          <Text color="accent">Accent</Text>
          <Text color="info">Info</Text>
          <Text color="success">Success</Text>
          <Text color="warning">Warning</Text>
          <Text color="danger">Danger</Text>
          <Text muted>Muted</Text>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Decorations</h4>
        <div className="space-y-1">
          <Text italic>Italic</Text>
          <Text underline>Underline</Text>
          <Text strikethrough>Strikethrough</Text>
          <Text uppercase>Uppercase</Text>
          <Text capitalize>capitalize words</Text>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Combined Styles</h4>
        <div className="space-y-2">
          <Text size="lg" weight="bold" color="primary">Large bold primary</Text>
          <Text size="sm" muted italic>Small muted italic</Text>
          <Text weight="semibold" uppercase color="success">Semibold uppercase success</Text>
        </div>
      </div>
    </div>
  ),
};
