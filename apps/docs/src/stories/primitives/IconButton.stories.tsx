import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@ninna-ui/primitives';
import { Heart, Star, Settings, Bell, Search, Plus, Trash2, Edit, X, Menu } from 'lucide-react';

const meta: Meta<typeof IconButton> = {
  title: 'Primitives/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
      description: 'The icon to display',
    },
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
      description: 'Button size (square dimensions)',
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
    'aria-label': {
      control: 'text',
      description: 'Accessible label (required)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    icon: <Heart />,
    variant: 'solid',
    color: 'primary',
    'aria-label': 'Like',
  },
};

export const Secondary: Story = {
  args: {
    icon: <Star />,
    variant: 'solid',
    color: 'secondary',
    'aria-label': 'Favorite',
  },
};

export const Soft: Story = {
  args: {
    icon: <Settings />,
    variant: 'soft',
    color: 'primary',
    'aria-label': 'Settings',
  },
};

export const Outline: Story = {
  args: {
    icon: <Bell />,
    variant: 'outline',
    color: 'primary',
    'aria-label': 'Notifications',
  },
};

export const Ghost: Story = {
  args: {
    icon: <Search />,
    variant: 'ghost',
    color: 'primary',
    'aria-label': 'Search',
  },
};

export const Loading: Story = {
  args: {
    icon: <Heart />,
    variant: 'solid',
    color: 'primary',
    loading: true,
    'aria-label': 'Loading',
  },
};

export const Disabled: Story = {
  args: {
    icon: <Heart />,
    variant: 'solid',
    color: 'primary',
    disabled: true,
    'aria-label': 'Disabled',
  },
};

export const Circular: Story = {
  args: {
    icon: <Plus />,
    variant: 'solid',
    color: 'primary',
    radius: 'full',
    'aria-label': 'Add',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <IconButton icon={<Heart />} size="xs" color="primary" aria-label="Like (xs)" />
      <IconButton icon={<Heart />} size="sm" color="primary" aria-label="Like (sm)" />
      <IconButton icon={<Heart />} size="md" color="primary" aria-label="Like (md)" />
      <IconButton icon={<Heart />} size="lg" color="primary" aria-label="Like (lg)" />
      <IconButton icon={<Heart />} size="xl" color="primary" aria-label="Like (xl)" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <IconButton icon={<Heart />} color="neutral" aria-label="Neutral" />
      <IconButton icon={<Heart />} color="primary" aria-label="Primary" />
      <IconButton icon={<Heart />} color="secondary" aria-label="Secondary" />
      <IconButton icon={<Heart />} color="accent" aria-label="Accent" />
      <IconButton icon={<Heart />} color="info" aria-label="Info" />
      <IconButton icon={<Heart />} color="success" aria-label="Success" />
      <IconButton icon={<Heart />} color="warning" aria-label="Warning" />
      <IconButton icon={<Heart />} color="danger" aria-label="Danger" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <IconButton icon={<Heart />} variant="solid" color="primary" aria-label="Solid" />
      <IconButton icon={<Heart />} variant="soft" color="primary" aria-label="Soft" />
      <IconButton icon={<Heart />} variant="outline" color="primary" aria-label="Outline" />
      <IconButton icon={<Heart />} variant="ghost" color="primary" aria-label="Ghost" />
      <IconButton icon={<Heart />} variant="text" color="primary" aria-label="Text" />
    </div>
  ),
};

export const RadiusVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <IconButton icon={<Heart />} radius="none" color="primary" aria-label="None" />
      <IconButton icon={<Heart />} radius="sm" color="primary" aria-label="Small" />
      <IconButton icon={<Heart />} radius="md" color="primary" aria-label="Medium" />
      <IconButton icon={<Heart />} radius="lg" color="primary" aria-label="Large" />
      <IconButton icon={<Heart />} radius="xl" color="primary" aria-label="XL" />
      <IconButton icon={<Heart />} radius="full" color="primary" aria-label="Full" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="text-lg font-semibold mb-4">Solid Variants</h4>
        <div className="flex flex-wrap gap-2">
          <IconButton icon={<Heart />} variant="solid" color="primary" aria-label="Primary" />
          <IconButton icon={<Star />} variant="solid" color="secondary" aria-label="Secondary" />
          <IconButton icon={<Settings />} variant="solid" color="accent" aria-label="Accent" />
          <IconButton icon={<Bell />} variant="solid" color="neutral" aria-label="Neutral" />
          <IconButton icon={<Search />} variant="solid" color="success" aria-label="Success" />
          <IconButton icon={<Plus />} variant="solid" color="danger" aria-label="Danger" />
          <IconButton icon={<Trash2 />} variant="solid" color="warning" aria-label="Warning" />
          <IconButton icon={<Edit />} variant="solid" color="info" aria-label="Info" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Soft Variants</h4>
        <div className="flex flex-wrap gap-2">
          <IconButton icon={<Heart />} variant="soft" color="primary" aria-label="Primary" />
          <IconButton icon={<Star />} variant="soft" color="secondary" aria-label="Secondary" />
          <IconButton icon={<Settings />} variant="soft" color="accent" aria-label="Accent" />
          <IconButton icon={<Bell />} variant="soft" color="neutral" aria-label="Neutral" />
          <IconButton icon={<Search />} variant="soft" color="success" aria-label="Success" />
          <IconButton icon={<Plus />} variant="soft" color="danger" aria-label="Danger" />
          <IconButton icon={<Trash2 />} variant="soft" color="warning" aria-label="Warning" />
          <IconButton icon={<Edit />} variant="soft" color="info" aria-label="Info" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Outline Variants</h4>
        <div className="flex flex-wrap gap-2">
          <IconButton icon={<Heart />} variant="outline" color="primary" aria-label="Primary" />
          <IconButton icon={<Star />} variant="outline" color="secondary" aria-label="Secondary" />
          <IconButton icon={<Settings />} variant="outline" color="accent" aria-label="Accent" />
          <IconButton icon={<Bell />} variant="outline" color="neutral" aria-label="Neutral" />
          <IconButton icon={<Search />} variant="outline" color="success" aria-label="Success" />
          <IconButton icon={<Plus />} variant="outline" color="danger" aria-label="Danger" />
          <IconButton icon={<Trash2 />} variant="outline" color="warning" aria-label="Warning" />
          <IconButton icon={<Edit />} variant="outline" color="info" aria-label="Info" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Ghost Variants</h4>
        <div className="flex flex-wrap gap-2">
          <IconButton icon={<Heart />} variant="ghost" color="primary" aria-label="Primary" />
          <IconButton icon={<Star />} variant="ghost" color="secondary" aria-label="Secondary" />
          <IconButton icon={<Settings />} variant="ghost" color="accent" aria-label="Accent" />
          <IconButton icon={<Bell />} variant="ghost" color="neutral" aria-label="Neutral" />
          <IconButton icon={<Search />} variant="ghost" color="success" aria-label="Success" />
          <IconButton icon={<Plus />} variant="ghost" color="danger" aria-label="Danger" />
          <IconButton icon={<Trash2 />} variant="ghost" color="warning" aria-label="Warning" />
          <IconButton icon={<Edit />} variant="ghost" color="info" aria-label="Info" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Sizes</h4>
        <div className="flex flex-wrap items-end gap-4">
          <IconButton icon={<Heart />} size="xs" color="primary" aria-label="XS" />
          <IconButton icon={<Heart />} size="sm" color="primary" aria-label="SM" />
          <IconButton icon={<Heart />} size="md" color="primary" aria-label="MD" />
          <IconButton icon={<Heart />} size="lg" color="primary" aria-label="LG" />
          <IconButton icon={<Heart />} size="xl" color="primary" aria-label="XL" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Radius Variants</h4>
        <div className="flex flex-wrap items-center gap-4">
          <IconButton icon={<Heart />} radius="none" color="primary" aria-label="None" />
          <IconButton icon={<Heart />} radius="sm" color="primary" aria-label="SM" />
          <IconButton icon={<Heart />} radius="md" color="primary" aria-label="MD" />
          <IconButton icon={<Heart />} radius="lg" color="primary" aria-label="LG" />
          <IconButton icon={<Heart />} radius="xl" color="primary" aria-label="XL" />
          <IconButton icon={<Heart />} radius="full" color="primary" aria-label="Full" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">States</h4>
        <div className="flex flex-wrap items-center gap-4">
          <IconButton icon={<Heart />} color="primary" aria-label="Normal" />
          <IconButton icon={<Heart />} color="primary" loading aria-label="Loading" />
          <IconButton icon={<Heart />} color="primary" disabled aria-label="Disabled" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Common Use Cases</h4>
        <div className="flex flex-wrap items-center gap-4">
          <IconButton icon={<X />} variant="ghost" color="neutral" aria-label="Close" />
          <IconButton icon={<Menu />} variant="ghost" color="neutral" aria-label="Menu" />
          <IconButton icon={<Edit />} variant="soft" color="info" aria-label="Edit" />
          <IconButton icon={<Trash2 />} variant="soft" color="danger" aria-label="Delete" />
          <IconButton icon={<Plus />} variant="solid" color="primary" radius="full" aria-label="Add" />
        </div>
      </div>
    </div>
  ),
};
