import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@ninna-ui/overlays';
import { Button } from '@ninna-ui/primitives';

const meta: Meta = {
  title: 'Overlays/Tooltip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controlled open state',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Default open state (uncontrolled)',
      table: { defaultValue: { summary: 'false' } },
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when open state changes',
    },
    delayDuration: {
      control: 'number',
      description: 'Delay in ms before showing the tooltip',
      table: { defaultValue: { summary: '200' } },
    },
    disableHoverableContent: {
      control: 'boolean',
      description: 'Whether to disable hoverable content',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="outline">Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>This is a tooltip</Tooltip.Content>
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => {
    const placements = ['top', 'right', 'bottom', 'left'] as const;
    return (
      <div className="flex flex-wrap gap-4 p-16">
        {placements.map((side) => (
          <Tooltip key={side}>
            <Tooltip.Trigger asChild>
              <Button variant="outline">{side}</Button>
            </Tooltip.Trigger>
            <Tooltip.Content side={side}>Tooltip on {side}</Tooltip.Content>
          </Tooltip>
        ))}
      </div>
    );
  },
};

export const WithArrow: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button>With Arrow</Button>
      </Tooltip.Trigger>
      <Tooltip.Content hasArrow>Tooltip with arrow</Tooltip.Content>
    </Tooltip>
  ),
};

export const CustomDelay: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip delayDuration={0}>
        <Tooltip.Trigger asChild>
          <Button variant="outline">No Delay</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Instant tooltip (0ms)</Tooltip.Content>
      </Tooltip>
      <Tooltip delayDuration={500}>
        <Tooltip.Trigger asChild>
          <Button variant="outline">500ms Delay</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Slow tooltip (500ms)</Tooltip.Content>
      </Tooltip>
      <Tooltip delayDuration={1000}>
        <Tooltip.Trigger asChild>
          <Button variant="outline">1000ms Delay</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Very slow tooltip (1000ms)</Tooltip.Content>
      </Tooltip>
    </div>
  ),
};

export const OnVariousElements: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button size="sm">Button</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip on a button</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <span className="text-primary underline cursor-help">Hover this text</span>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip on inline text</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center cursor-help text-primary font-bold text-sm">
            ?
          </div>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip on an icon</Tooltip.Content>
      </Tooltip>
    </div>
  ),
};
