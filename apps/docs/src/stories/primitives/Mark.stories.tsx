import type { Meta, StoryObj } from '@storybook/react';
import { Mark } from '@ninna-ui/primitives';

const meta: Meta<typeof Mark> = {
  title: 'Primitives/Mark',
  component: Mark,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Color variant',
      table: { defaultValue: { summary: 'neutral' } },
    },
    children: {
      control: 'text',
      description: 'Content to highlight',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Mark>;

export const Default: Story = {
  args: {
    children: 'highlighted text',
  },
};

export const Primary: Story = {
  args: {
    children: 'primary highlight',
    color: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'success highlight',
    color: 'success',
  },
};

export const Danger: Story = {
  args: {
    children: 'danger highlight',
    color: 'danger',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Mark color="neutral">neutral</Mark>
      <Mark color="primary">primary</Mark>
      <Mark color="secondary">secondary</Mark>
      <Mark color="accent">accent</Mark>
      <Mark color="info">info</Mark>
      <Mark color="success">success</Mark>
      <Mark color="warning">warning</Mark>
      <Mark color="danger">danger</Mark>
    </div>
  ),
};

export const InlineText: Story = {
  render: () => (
    <p className="text-base-content/70">
      This is some text with <Mark>highlighted content</Mark> in the middle.
    </p>
  ),
};

export const SearchResults: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="text-base-content/70">
        The <Mark>React</Mark> library is a JavaScript library for building user interfaces.
      </p>
      <p className="text-base-content/70">
        <Mark>React</Mark> makes it painless to create interactive UIs.
      </p>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-3">Colors</h4>
        <div className="flex flex-wrap gap-3">
          <Mark color="neutral">neutral</Mark>
          <Mark color="primary">primary</Mark>
          <Mark color="secondary">secondary</Mark>
          <Mark color="accent">accent</Mark>
          <Mark color="info">info</Mark>
          <Mark color="success">success</Mark>
          <Mark color="warning">warning</Mark>
          <Mark color="danger">danger</Mark>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">In Context</h4>
        <p className="text-base-content/70">
          Please note: <Mark color="danger">This action cannot be undone</Mark>. Make sure to backup your data.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">Status Indicators</h4>
        <div className="space-y-1">
          <p className="text-base-content/70">
            Build status: <Mark color="success">Passed</Mark>
          </p>
          <p className="text-base-content/70">
            Tests: <Mark color="warning">2 pending</Mark>
          </p>
        </div>
      </div>
    </div>
  ),
};
