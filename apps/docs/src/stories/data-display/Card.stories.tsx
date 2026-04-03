import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@ninna-ui/data-display';
import { Button } from '@ninna-ui/primitives';

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
      options: ['outline', 'elevated', 'filled', 'ghost', 'soft', 'solid'],
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
    <Card className="w-[350px]">
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>A short description of this card.</Card.Description>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-base-content/70">
          This is the main content area of the card. You can put any content here.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Save</Button>
      </Card.Footer>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => {
    const variants = ['outline', 'elevated', 'filled', 'ghost', 'soft', 'solid'] as const;
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {variants.map((variant) => (
          <Card key={variant} variant={variant} className="w-[250px]">
            <Card.Header>
              <Card.Title>{variant}</Card.Title>
              <Card.Description>Card with {variant} variant.</Card.Description>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-base-content/70">Content goes here.</p>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'danger', 'warning', 'info'] as const;
    const variants = ['outline', 'soft', 'solid', 'elevated', 'ghost'] as const;
    return (
      <div className="flex flex-col gap-12 max-w-5xl">
        {variants.map((variant) => (
          <div key={variant} className="space-y-4">
            <h4 className="text-xl font-bold capitalize border-b pb-1">{variant} Variant</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {colors.map((color) => (
                <Card key={`${variant}-${color}`} variant={variant} color={color}>
                  <Card.Header>
                    <Card.Title className="text-base">{color}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <p className="text-xs opacity-80 italic italic">variant={variant} color={color}</p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const Interactive: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card interactive className="w-[250px] cursor-pointer">
        <Card.Header>
          <Card.Title>Clickable Card</Card.Title>
          <Card.Description>Hover to see the interactive effect.</Card.Description>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-base-content/70">This card has hover and focus styles.</p>
        </Card.Body>
      </Card>
      <Card className="w-[250px]">
        <Card.Header>
          <Card.Title>Static Card</Card.Title>
          <Card.Description>No hover effect.</Card.Description>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-base-content/70">This card is not interactive.</p>
        </Card.Body>
      </Card>
    </div>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <Card.Body>
        <p className="text-sm text-base-content/70">
          A simple card with only a body - no header or footer.
        </p>
      </Card.Body>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[300px] overflow-hidden">
      <div className="h-40 bg-gradient-to-br from-primary/30 to-secondary/30" />
      <Card.Header>
        <Card.Title>Featured Item</Card.Title>
        <Card.Description>With a gradient image placeholder.</Card.Description>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-base-content/70">
          Cards can contain images above the header for rich content display.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button size="sm">Learn More</Button>
      </Card.Footer>
    </Card>
  ),
};

export const PricingCards: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card className="w-[220px]">
        <Card.Header>
          <Card.Title>Free</Card.Title>
          <Card.Description>Get started for free</Card.Description>
        </Card.Header>
        <Card.Body>
          <p className="text-3xl font-bold text-base-content">$0<span className="text-sm font-normal text-base-content/70">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm text-base-content/70">
            <li>5 projects</li>
            <li>1 GB storage</li>
            <li>Community support</li>
          </ul>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline" fullWidth>Get Started</Button>
        </Card.Footer>
      </Card>
      <Card variant="elevated" className="w-[220px] ring-2 ring-primary">
        <Card.Header>
          <Card.Title>Pro</Card.Title>
          <Card.Description>Best for professionals</Card.Description>
        </Card.Header>
        <Card.Body>
          <p className="text-3xl font-bold text-base-content">$19<span className="text-sm font-normal text-base-content/70">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm text-base-content/70">
            <li>Unlimited projects</li>
            <li>100 GB storage</li>
            <li>Priority support</li>
          </ul>
        </Card.Body>
        <Card.Footer>
          <Button fullWidth>Upgrade</Button>
        </Card.Footer>
      </Card>
    </div>
  ),
};
