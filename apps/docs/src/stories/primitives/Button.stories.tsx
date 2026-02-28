import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ninna-ui/primitives';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'outline', 'ghost', 'text'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'solid' } },
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Color theme',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
      table: { defaultValue: { summary: 'md' } },
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { defaultValue: { summary: 'false' } },
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius style',
      table: { defaultValue: { summary: 'md' } },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
    leftIcon: {
      control: false,
      description: 'Icon on the left side',
    },
    rightIcon: {
      control: false,
      description: 'Icon on the right side',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'solid',
    color: 'secondary',
    children: 'Secondary Button',
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    color: 'primary',
    children: 'Soft Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    color: 'primary',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    color: 'primary',
    children: 'Ghost Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Text Button',
  },
};

export const Sizes: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'xs',
    children: 'XS Button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    loading: true,
    children: 'Loading Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="text-lg font-semibold mb-2">Solid Variants</h4>
        <div className="flex flex-wrap gap-2"> 
          <Button variant="solid" color="neutral">Neutral</Button>
          <Button variant="solid" color="primary">Primary</Button>
          <Button variant="solid" color="secondary">Secondary</Button>
          <Button variant="solid" color="accent">Accent</Button>
          <Button variant="solid" color="info">Info</Button>
          <Button variant="solid" color="success">Success</Button>
          <Button variant="solid" color="warning">Warning</Button>
          <Button variant="solid" color="danger">Danger</Button>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Soft Variants</h4>
        <div className="flex flex-wrap gap-2"> 
          <Button variant="soft" color="neutral">Neutral</Button>
          <Button variant="soft" color="primary">Primary</Button>
          <Button variant="soft" color="secondary">Secondary</Button>
          <Button variant="soft" color="accent">Accent</Button>
          <Button variant="soft" color="info">Info</Button>
          <Button variant="soft" color="success">Success</Button>
          <Button variant="soft" color="warning">Warning</Button>
          <Button variant="soft" color="danger">Danger</Button>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Outline Variants</h4>
        <div className="flex flex-wrap gap-2"> 
          <Button variant="outline" color="neutral">Neutral</Button>
          <Button variant="outline" color="primary">Primary</Button>
          <Button variant="outline" color="secondary">Secondary</Button>
          <Button variant="outline" color="accent">Accent</Button>
          <Button variant="outline" color="info">Info</Button>
          <Button variant="outline" color="success">Success</Button>
          <Button variant="outline" color="warning">Warning</Button>
          <Button variant="outline" color="danger">Danger</Button>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Ghost Variants</h4>
        <div className="flex flex-wrap gap-2"> 
          <Button variant="ghost" color="neutral">Neutral</Button>
          <Button variant="ghost" color="primary">Primary</Button>
          <Button variant="ghost" color="secondary">Secondary</Button>
          <Button variant="ghost" color="accent">Accent</Button>
          <Button variant="ghost" color="info">Info</Button>
          <Button variant="ghost" color="success">Success</Button>
          <Button variant="ghost" color="warning">Warning</Button>
          <Button variant="ghost" color="danger">Danger</Button>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Text Variants</h4>
        <div className="flex flex-wrap gap-2"> 
          <Button variant="text" color="neutral">Neutral</Button>
          <Button variant="text" color="primary">Primary</Button>
          <Button variant="text" color="secondary">Secondary</Button>
          <Button variant="text" color="accent">Accent</Button>
          <Button variant="text" color="info">Info</Button>
          <Button variant="text" color="success">Success</Button>
          <Button variant="text" color="warning">Warning</Button>
          <Button variant="text" color="danger">Danger</Button>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Sizes</h4>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="solid" color="primary" size="xs">XS</Button>
          <Button variant="solid" color="primary" size="sm">SM</Button>
          <Button variant="solid" color="primary" size="md">MD</Button>
          <Button variant="solid" color="primary" size="lg">LG</Button>
          <Button variant="solid" color="primary" size="xl">XL</Button>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Radius Variants</h4>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="solid" color="primary" radius="none">None</Button>
          <Button variant="solid" color="primary" radius="sm">SM</Button>
          <Button variant="solid" color="primary" radius="md">MD</Button>
          <Button variant="solid" color="primary" radius="lg">LG</Button>
          <Button variant="solid" color="primary" radius="xl">XL</Button>
          <Button variant="solid" color="primary" radius="full">Full (Pill)</Button>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">States</h4>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="solid" color="primary">Normal</Button>
          <Button variant="solid" color="primary" loading>Loading</Button>
          <Button variant="solid" color="primary" disabled>Disabled</Button>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Full Width</h4>
        <div className="flex flex-col gap-2">
          <Button variant="solid" color="primary" fullWidth>Full Width</Button>
          <Button variant="outline" color="primary" fullWidth>Full Width Outline</Button>
        </div>
      </div>
    </div>
  ),
};

export const RadiusFull: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    radius: 'full',
    children: 'Pill Button',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    fullWidth: true,
    children: 'Full Width Button',
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};
