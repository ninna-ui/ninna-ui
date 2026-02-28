import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@ninna-ui/navigation';

const meta: Meta = {
  title: 'Navigation/Accordion',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether one or many items can be open at once',
    },
    variant: {
      control: 'select',
      options: ['outline', 'soft', 'ghost'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'outline' } },
    },
    collapsible: {
      control: 'boolean',
      description: 'Allow all items to close (single mode only)',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[400px]">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is Ninna UI?</Accordion.Trigger>
        <Accordion.Content>
          Ninna UI is a modern React component library with beautiful, accessible components.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. All components follow WAI-ARIA guidelines and support keyboard navigation.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Can I customize the styles?</Accordion.Trigger>
        <Accordion.Content>
          Absolutely. Components use Tailwind CSS and support full customization via className props.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Variants: Story = {
  render: () => {
    const variants = ['outline', 'soft', 'ghost'] as const;
    return (
      <div className="flex flex-col gap-8 w-[400px]">
        {variants.map((variant) => (
          <div key={variant}>
            <h4 className="text-sm font-semibold mb-2 text-base-content/70 uppercase tracking-wide">{variant}</h4>
            <Accordion type="single" collapsible variant={variant}>
              <Accordion.Item value="item-1">
                <Accordion.Trigger>First Item</Accordion.Trigger>
                <Accordion.Content>Content for the first item in {variant} variant.</Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Trigger>Second Item</Accordion.Trigger>
                <Accordion.Content>Content for the second item.</Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-3">
                <Accordion.Trigger>Third Item</Accordion.Trigger>
                <Accordion.Content>Content for the third item.</Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </div>
        ))}
      </div>
    );
  },
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[400px]">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Section One</Accordion.Trigger>
        <Accordion.Content>Multiple items can be open at the same time.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Section Two</Accordion.Trigger>
        <Accordion.Content>Try opening this while the first is still open.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Section Three</Accordion.Trigger>
        <Accordion.Content>All three can be expanded simultaneously.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-2" collapsible className="w-[400px]">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Collapsed by default</Accordion.Trigger>
        <Accordion.Content>This item starts collapsed.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Open by default</Accordion.Trigger>
        <Accordion.Content>This item starts expanded via defaultValue.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Also collapsed</Accordion.Trigger>
        <Accordion.Content>This item also starts collapsed.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[400px]">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Enabled Item</Accordion.Trigger>
        <Accordion.Content>This item can be toggled.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2" disabled>
        <Accordion.Trigger>Disabled Item</Accordion.Trigger>
        <Accordion.Content>This item cannot be toggled.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Another Enabled Item</Accordion.Trigger>
        <Accordion.Content>This item can also be toggled.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};
