import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@ninna-ui/data-display';
import { Button, Badge, Avatar } from '@ninna-ui/primitives';
import { Share2, Heart, MessageSquare, MoreVertical, Star } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'elevated', 'filled', 'soft', 'solid', 'ghost'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'outline' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'neutral', 'success', 'danger', 'warning', 'info'],
      description: 'Color theme of the card',
    },
    interactive: {
      control: 'boolean',
      description: 'Enable hover and focus styles for clickable cards',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[380px]">
      <Card.Header>
        <div className="flex justify-between items-start">
          <div>
            <Card.Title>Project Pegasus</Card.Title>
            <Card.Description>Next-generation aerospace research initiative.</Card.Description>
          </div>
          <Badge variant="soft" color="primary">Active</Badge>
        </div>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-base-content/70 leading-relaxed">
          The Pegasus initiative focuses on sub-orbital transportation efficiency.
          Currently in phase 2 of prototype validation with 85% success rate in
          simulated environments.
        </p>
        <div className="mt-4 flex -space-x-2">
          {[1, 2, 3, 4].map(i => (
            <Avatar key={i} size="sm" className="border-2 border-base-100" />
          ))}
          <div className="w-8 h-8 rounded-full bg-base-200 border-2 border-base-100 flex items-center justify-center text-[10px] font-bold">+12</div>
        </div>
      </Card.Body>
      <Card.Footer className="justify-between border-t border-base-200/50 mt-2 pt-4">
        <div className="flex gap-2 text-base-content/50">
          <Share2 size={16} />
          <span className="text-xs">3.2k</span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">Details</Button>
          <Button size="sm">Join Mission</Button>
        </div>
      </Card.Footer>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => {
    const variants = ['outline', 'elevated', 'filled', 'soft', 'ghost', 'solid'] as const;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {variants.map((variant) => (
          <Card key={variant} variant={variant} className="w-full max-w-[300px]">
            <Card.Header>
              <Card.Title className="capitalize">{variant}</Card.Title>
              <Card.Description>Standard card variant.</Card.Description>
            </Card.Header>
            <Card.Body>
              <p className="text-sm opacity-70">
                This {variant} card provides a distinct visual separation for content.
              </p>
            </Card.Body>
            <Card.Footer>
              <Button variant="ghost" size="sm" className="w-full">View Documentation</Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const colors = ['primary', 'secondary', 'accent', 'success', 'danger', 'info'] as const;
    return (
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {colors.map((color) => (
            <Card key={`solid-${color}`} variant="solid" color={color}>
              <Card.Header>
                <div className="flex justify-between">
                  <Card.Title className="text-lg capitalize">{color}</Card.Title>
                  <Star size={18} fill="currentColor" />
                </div>
              </Card.Header>
              <Card.Body>
                <p className="text-xs opacity-90">Solid {color} card with high emphasis.</p>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {colors.map((color) => (
            <Card key={`soft-${color}`} variant="soft" color={color}>
              <Card.Header>
                <Card.Title className="text-lg capitalize">{color}</Card.Title>
              </Card.Header>
              <Card.Body>
                <p className="text-xs">Soft {color} card for subtle grouping.</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  },
};

export const SocialPost: Story = {
  render: () => (
    <Card className="max-w-[500px]">
      <Card.Header className="flex-row items-center gap-4">
        <Avatar size="md" />
        <div className="flex flex-col">
          <span className="font-bold">Alex Rivera</span>
          <span className="text-xs text-base-content/50">2 hours ago • San Francisco</span>
        </div>
        <Button variant="ghost" size="xs" className="ml-auto rounded-full w-8 h-8 p-0">
          <MoreVertical size={16} />
        </Button>
      </Card.Header>
      <Card.Body>
        <p className="mb-4">
          Just exploring the new Ninna UI components! The design system feels extremely premium
          and the performance is top-notch. Can't wait to ship this to production. 🚀
        </p>
        <div className="aspect-video rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl shadow-inner">
          Ninna UI 0.6.0
        </div>
      </Card.Body>
      <Card.Footer className="gap-4 pt-2">
        <Button variant="ghost" size="sm" className="gap-2">
          <Heart size={16} /> 245
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageSquare size={16} /> 12
        </Button>
        <Button variant="ghost" size="sm" className="ml-auto">
          <Share2 size={16} />
        </Button>
      </Card.Footer>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[600px]">
      <Card interactive className="group">
        <Card.Header>
          <Card.Title>Interactive Card</Card.Title>
          <Card.Description>Click to select this option</Card.Description>
        </Card.Header>
        <Card.Body>
          <p className="text-sm opacity-70">
            This card responds to hover and focus states, making it ideal for selection lists.
          </p>
        </Card.Body>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Badge color="success">Selectable</Badge>
        </div>
      </Card>

      <Card interactive variant="soft" color="primary">
        <Card.Header>
          <Card.Title>Primary Action</Card.Title>
          <Card.Description>A high-priority choice</Card.Description>
        </Card.Header>
        <Card.Body>
          <p className="text-sm opacity-70">
            Interactive cards can also use theme colors to guide user attention.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
};

export const DashboardWidget: Story = {
  render: () => (
    <Card variant="elevated" className="w-[300px]">
      <Card.Body className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-base-content/50 uppercase tracking-wider">Total Revenue</span>
          <Badge variant="soft" color="success" size="sm">+12.5%</Badge>
        </div>
        <div className="text-3xl font-bold mb-1">$45,231.89</div>
        <p className="text-xs text-base-content/50">Compared to last month ($39,122.45)</p>

        <div className="mt-6 h-1 w-full bg-base-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[70%] rounded-full" />
        </div>
        <div className="flex justify-between mt-2 text-[10px] font-bold">
          <span>PROGRESS</span>
          <span>70%</span>
        </div>
      </Card.Body>
    </Card>
  ),
};
