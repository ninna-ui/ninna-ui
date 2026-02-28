import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@ninna-ui/primitives';

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'outline'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'soft' } },
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
      description: 'Badge size',
      table: { defaultValue: { summary: 'md' } },
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius style',
      table: { defaultValue: { summary: 'md' } },
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Primary: Story = {
  args: {
    variant: 'soft',
    color: 'primary',
    children: 'Primary',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    children: 'Solid',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    color: 'primary',
    children: 'Outline',
  },
};

export const Pill: Story = {
  args: {
    variant: 'soft',
    color: 'primary',
    radius: 'full',
    children: 'Pill Badge',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="text-lg font-semibold mb-2">Solid Badges</h4>
        <div className="flex flex-wrap gap-2"> 
          <Badge variant="solid" color="neutral">Neutral</Badge>
          <Badge variant="solid" color="primary">Primary</Badge>
          <Badge variant="solid" color="secondary">Secondary</Badge>
          <Badge variant="solid" color="accent">Accent</Badge>
          <Badge variant="solid" color="info">Info</Badge>
          <Badge variant="solid" color="success">Success</Badge>
          <Badge variant="solid" color="warning">Warning</Badge>
          <Badge variant="solid" color="danger">Danger</Badge>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Soft Badges</h4>
        <div className="flex flex-wrap gap-2"> 
          <Badge variant="soft" color="neutral">Neutral</Badge>
          <Badge variant="soft" color="primary">Primary</Badge>
          <Badge variant="soft" color="secondary">Secondary</Badge>
          <Badge variant="soft" color="accent">Accent</Badge>
          <Badge variant="soft" color="info">Info</Badge>
          <Badge variant="soft" color="success">Success</Badge>
          <Badge variant="soft" color="warning">Warning</Badge>
          <Badge variant="soft" color="danger">Danger</Badge>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Outline Badges</h4>
        <div className="flex flex-wrap gap-2"> 
          <Badge variant="outline" color="neutral">Neutral</Badge>
          <Badge variant="outline" color="primary">Primary</Badge>
          <Badge variant="outline" color="secondary">Secondary</Badge>
          <Badge variant="outline" color="accent">Accent</Badge>
          <Badge variant="outline" color="info">Info</Badge>
          <Badge variant="outline" color="success">Success</Badge>
          <Badge variant="outline" color="warning">Warning</Badge>
          <Badge variant="outline" color="danger">Danger</Badge>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Sizes</h4>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="soft" color="primary" size="xs">XSmall</Badge>
          <Badge variant="soft" color="primary" size="sm">Small</Badge>
          <Badge variant="soft" color="primary" size="md">Medium</Badge>
          <Badge variant="soft" color="primary" size="lg">Large</Badge>
          <Badge variant="soft" color="primary" size="xl">XLarge</Badge>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Radius Variants</h4>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="soft" color="primary" radius="none">None</Badge>
          <Badge variant="soft" color="primary" radius="sm">SM</Badge>
          <Badge variant="soft" color="primary" radius="md">MD</Badge>
          <Badge variant="soft" color="primary" radius="lg">LG</Badge>
          <Badge variant="soft" color="primary" radius="xl">XL</Badge>
          <Badge variant="soft" color="primary" radius="full">Full</Badge>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Use Cases</h4>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <Badge variant="soft" color="success">Active</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>Notifications:</span>
            <Badge variant="solid" color="danger" radius="full">3</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>Version:</span>
            <Badge variant="outline" color="primary">v1.0.0</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>New Feature:</span>
            <Badge variant="soft" color="info">Beta</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="soft" color="success">Active</Badge>
      <Badge variant="soft" color="warning">Pending</Badge>
      <Badge variant="soft" color="danger">Inactive</Badge>
      <Badge variant="soft" color="info">Processing</Badge>
      <Badge variant="soft" color="primary">Draft</Badge>
    </div>
  ),
};

export const NotificationBadges: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="solid" color="danger" radius="full">1</Badge>
      <Badge variant="solid" color="danger" radius="full">9</Badge>
      <Badge variant="solid" color="danger" radius="full">99+</Badge>
      <Badge variant="solid" color="primary" radius="full">New</Badge>
    </div>
  ),
};
