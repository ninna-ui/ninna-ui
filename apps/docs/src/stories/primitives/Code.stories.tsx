import type { Meta, StoryObj } from '@storybook/react';
import { Code } from '@ninna-ui/primitives';

const meta: Meta<typeof Code> = {
  title: 'Primitives/Code',
  component: Code,
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
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
      description: 'Text size',
      table: { defaultValue: { summary: 'sm' } },
    },
    children: {
      control: 'text',
      description: 'Code content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    children: 'npm install',
  },
};

export const Primary: Story = {
  args: {
    children: 'const x = 1',
    color: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: '✓ Build successful',
    color: 'success',
  },
};

export const Danger: Story = {
  args: {
    children: 'Error: undefined',
    color: 'danger',
  },
};

export const Large: Story = {
  args: {
    children: 'function hello()',
    size: 'lg',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Code color="neutral">neutral</Code>
      <Code color="primary">primary</Code>
      <Code color="secondary">secondary</Code>
      <Code color="accent">accent</Code>
      <Code color="info">info</Code>
      <Code color="success">success</Code>
      <Code color="warning">warning</Code>
      <Code color="danger">danger</Code>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Code size="xs">xs</Code>
      <Code size="sm">sm</Code>
      <Code size="base">base</Code>
      <Code size="lg">lg</Code>
      <Code size="xl">xl</Code>
    </div>
  ),
};

export const InlineText: Story = {
  render: () => (
    <p className="text-base-content/70">
      Run <Code>npm install @ninna-ui/primitives</Code> to get started.
    </p>
  ),
};
const AllVariantsExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-3">Colors</h4>
        <div className="flex flex-wrap gap-3">
          <Code color="neutral">neutral</Code>
          <Code color="primary">primary</Code>
          <Code color="secondary">secondary</Code>
          <Code color="accent">accent</Code>
          <Code color="info">info</Code>
          <Code color="success">success</Code>
          <Code color="warning">warning</Code>
          <Code color="danger">danger</Code>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">Sizes</h4>
        <div className="flex flex-wrap items-center gap-3">
          <Code size="xs">xs size</Code>
          <Code size="sm">sm size</Code>
          <Code size="base">base size</Code>
          <Code size="lg">lg size</Code>
          <Code size="xl">xl size</Code>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">In Context</h4>
        <p className="text-base-content/70">
          Use the <Code color="primary">useState</Code> hook to manage state.
        </p>
      </div>
    </div>
  );
};

export const AllVariants: Story = {
  render: AllVariantsExample,
};
