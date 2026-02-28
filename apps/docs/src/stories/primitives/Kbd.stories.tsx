import type { Meta, StoryObj } from '@storybook/react';
import { Kbd } from '@ninna-ui/primitives';

const meta: Meta<typeof Kbd> = {
  title: 'Primitives/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Color variant',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size variant',
      table: { defaultValue: { summary: 'sm' } },
    },
    children: {
      control: 'text',
      description: 'Key content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {
    children: 'Ctrl',
  },
};

export const CommandKey: Story = {
  args: {
    children: '⌘',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Kbd size="xs">xs</Kbd>
      <Kbd size="sm">sm</Kbd>
      <Kbd size="md">md</Kbd>
      <Kbd size="lg">lg</Kbd>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Kbd color="neutral">neutral</Kbd>
      <Kbd color="primary">primary</Kbd>
      <Kbd color="secondary">secondary</Kbd>
      <Kbd color="accent">accent</Kbd>
      <Kbd color="info">info</Kbd>
      <Kbd color="success">success</Kbd>
      <Kbd color="warning">warning</Kbd>
      <Kbd color="danger">danger</Kbd>
    </div>
  ),
};

export const KeyboardShortcut: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Kbd>⌘</Kbd>
      <span className="text-base-content/70">+</span>
      <Kbd>C</Kbd>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-3">Sizes</h4>
        <div className="flex items-center gap-4">
          <Kbd size="xs">Ctrl</Kbd>
          <Kbd size="sm">Ctrl</Kbd>
          <Kbd size="md">Ctrl</Kbd>
          <Kbd size="lg">Ctrl</Kbd>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">Colors</h4>
        <div className="flex flex-wrap gap-3">
          <Kbd color="neutral">neutral</Kbd>
          <Kbd color="primary">primary</Kbd>
          <Kbd color="secondary">secondary</Kbd>
          <Kbd color="accent">accent</Kbd>
          <Kbd color="info">info</Kbd>
          <Kbd color="success">success</Kbd>
          <Kbd color="warning">warning</Kbd>
          <Kbd color="danger">danger</Kbd>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">Shortcuts</h4>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Kbd>⌘</Kbd>
            <span className="text-base-content/70">+</span>
            <Kbd>C</Kbd>
          </div>
          <div className="flex items-center gap-1">
            <Kbd>Ctrl</Kbd>
            <span className="text-base-content/70">+</span>
            <Kbd>V</Kbd>
          </div>
        </div>
      </div>
    </div>
  ),
};
