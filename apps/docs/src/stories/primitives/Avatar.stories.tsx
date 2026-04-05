import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from '@ninna-ui/primitives';

const meta: Meta<typeof Avatar> = {
  title: 'Primitives/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    name: {
      control: 'text',
      description: 'Name used to generate initials fallback',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar',
      table: { defaultValue: { summary: 'md' } },
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Shape of the avatar',
      table: { defaultValue: { summary: 'circle' } },
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius when shape is square',
      table: { defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Color theme for fallback background',
      table: { defaultValue: { summary: 'neutral' } },
    },
    showRing: {
      control: 'boolean',
      description: 'Show a colored ring around the avatar',
      table: { defaultValue: { summary: 'false' } },
    },
    ringColor: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Ring color',
    },
    showFallbackIcon: {
      control: 'boolean',
      description: 'Show fallback icon instead of initials',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'select',
      options: ['eager', 'lazy'],
      description: 'Image loading attribute',
      table: { defaultValue: { summary: 'lazy' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: 'John Doe',
    size: 'md',
    color: 'primary',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'John Doe',
    size: 'lg',
  },
};

export const WithInitials: Story = {
  args: {
    name: 'Jane Smith',
    size: 'lg',
    color: 'secondary',
  },
};

export const WithFallbackIcon: Story = {
  args: {
    showFallbackIcon: true,
    size: 'lg',
    color: 'info',
  },
};

export const WithRing: Story = {
  args: {
    name: 'Jane Smith',
    size: 'lg',
    color: 'secondary',
    showRing: true,
    ringColor: 'secondary',
  },
};

export const SquareShape: Story = {
  args: {
    name: 'Bob Wilson',
    size: 'lg',
    shape: 'square',
    radius: 'md',
    color: 'success',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar name="XS" size="xs" color="primary" />
      <Avatar name="SM" size="sm" color="primary" />
      <Avatar name="MD" size="md" color="primary" />
      <Avatar name="LG" size="lg" color="primary" />
      <Avatar name="XL" size="xl" color="primary" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Avatar name="NE" color="neutral" />
      <Avatar name="PR" color="primary" />
      <Avatar name="SE" color="secondary" />
      <Avatar name="AC" color="accent" />
      <Avatar name="IN" color="info" />
      <Avatar name="SU" color="success" />
      <Avatar name="WA" color="warning" />
      <Avatar name="DA" color="danger" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-6">
      <Avatar name="CI" size="lg" shape="circle" color="primary" />
      <Avatar name="SQ" size="lg" shape="square" radius="none" color="secondary" />
      <Avatar name="SM" size="lg" shape="square" radius="sm" color="success" />
      <Avatar name="MD" size="lg" shape="square" radius="md" color="info" />
      <Avatar name="LG" size="lg" shape="square" radius="lg" color="warning" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar name="John Doe" color="primary" />
      <Avatar name="Jane Smith" color="secondary" />
      <Avatar name="Bob Wilson" color="success" />
      <Avatar name="Alice Brown" color="info" />
      <Avatar name="Charlie Davis" color="warning" />
    </AvatarGroup>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="text-lg font-semibold mb-4">Sizes</h4>
        <div className="flex items-end gap-4">
          <Avatar name="XS" size="xs" color="primary" />
          <Avatar name="SM" size="sm" color="primary" />
          <Avatar name="MD" size="md" color="primary" />
          <Avatar name="LG" size="lg" color="primary" />
          <Avatar name="XL" size="xl" color="primary" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Colors</h4>
        <div className="flex flex-wrap gap-4">
          <Avatar name="NE" color="neutral" size="lg" />
          <Avatar name="PR" color="primary" size="lg" />
          <Avatar name="SE" color="secondary" size="lg" />
          <Avatar name="AC" color="accent" size="lg" />
          <Avatar name="IN" color="info" size="lg" />
          <Avatar name="SU" color="success" size="lg" />
          <Avatar name="WA" color="warning" size="lg" />
          <Avatar name="DA" color="danger" size="lg" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Shapes</h4>
        <div className="flex gap-6">
          <Avatar name="CI" size="lg" shape="circle" color="primary" />
          <Avatar name="SQ" size="lg" shape="square" radius="none" color="secondary" />
          <Avatar name="SM" size="lg" shape="square" radius="sm" color="success" />
          <Avatar name="MD" size="lg" shape="square" radius="md" color="info" />
          <Avatar name="LG" size="lg" shape="square" radius="lg" color="warning" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">With Ring</h4>
        <div className="flex gap-6">
          <Avatar name="PR" size="lg" color="primary" showRing ringColor="primary" />
          <Avatar name="SE" size="lg" color="secondary" showRing ringColor="secondary" />
          <Avatar name="SU" size="lg" color="success" showRing ringColor="success" />
          <Avatar name="DA" size="lg" color="danger" showRing ringColor="danger" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Fallback Types</h4>
        <div className="flex gap-6">
          <Avatar name="John Doe" size="lg" color="primary" />
          <Avatar name="A" size="lg" color="secondary" />
          <Avatar showFallbackIcon size="lg" color="info" />
          <Avatar fallback={<span className="text-lg">🎨</span>} size="lg" color="warning" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Avatar Group</h4>
        <AvatarGroup max={4} size="md">
          <Avatar name="John Doe" color="primary" />
          <Avatar name="Jane Smith" color="secondary" />
          <Avatar name="Bob Wilson" color="success" />
          <Avatar name="Alice Brown" color="info" />
          <Avatar name="Charlie Davis" color="warning" />
          <Avatar name="Diana Evans" color="danger" />
        </AvatarGroup>
      </div>
    </div>
  ),
};
