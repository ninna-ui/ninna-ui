import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ninna-ui/primitives';
import { Mail, Plus, Trash2, Send, Github, MoreVertical } from 'lucide-react';

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
      options: ['solid', 'soft', 'outline', 'ghost', 'link', 'elevated', 'white'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'solid' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'neutral', 'success', 'danger', 'warning', 'info'],
      description: 'Color theme of the button',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
      table: { defaultValue: { summary: 'md' } },
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius of the button',
      table: { defaultValue: { summary: 'md' } },
    },
    leftIcon: {
      control: 'text',
      description: 'Icon element to display on the left side (ReactNode)',
    },
    rightIcon: {
      control: 'text',
      description: 'Icon element to display on the right side (ReactNode)',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    color: 'primary',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-4">
        {(['primary', 'secondary', 'accent', 'neutral', 'success', 'danger', 'warning', 'info'] as const).map(color => (
          <Button key={color} color={color}>{color}</Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {(['primary', 'secondary', 'accent', 'neutral', 'success', 'danger', 'warning', 'info'] as const).map(color => (
          <Button key={color} color={color} variant="soft">{color}</Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {(['primary', 'secondary', 'accent', 'neutral', 'success', 'danger', 'warning', 'info'] as const).map(color => (
          <Button key={color} color={color} variant="outline">{color}</Button>
        ))}
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Mail size={16} /> Login with Email
      </Button>
      <Button variant="outline" color="neutral">
        <Github size={16} /> Continue with GitHub
      </Button>
      <Button color="secondary">
        Send Message <Send size={16} />
      </Button>
      <Button color="success">
        <Plus size={16} /> Add Item
      </Button>
      <Button variant="soft" color="danger">
        <Trash2 size={16} /> Delete Account
      </Button>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm" variant="ghost">
        <MoreVertical size={16} />
      </Button>
      <Button variant="outline" color="neutral">
        <Github size={20} />
      </Button>
      <Button color="primary" className="rounded-full">
        <Plus size={20} />
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button loading>Loading...</Button>
      <Button loading variant="outline" color="secondary">Please wait</Button>
      <Button loading variant="ghost" color="neutral" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex -space-x-px">
        <Button variant="outline" className="rounded-r-none">Years</Button>
        <Button variant="outline" className="rounded-none">Months</Button>
        <Button variant="outline" className="rounded-none bg-base-200">Days</Button>
        <Button variant="outline" className="rounded-l-none">Hours</Button>
      </div>

      <div className="flex gap-2 p-1 bg-base-200 rounded-lg w-fit">
        <Button size="sm" variant="ghost" className="bg-base-100 shadow-sm">Option A</Button>
        <Button size="sm" variant="ghost" color="neutral">Option B</Button>
        <Button size="sm" variant="ghost" color="neutral">Option C</Button>
      </div>
    </div>
  ),
};
