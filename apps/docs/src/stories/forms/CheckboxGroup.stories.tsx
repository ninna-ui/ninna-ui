import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup, CheckboxGroupItem } from '@ninna-ui/forms';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Forms/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkboxes',
      table: { defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Color theme',
      table: { defaultValue: { summary: 'primary' } },
    },
    variant: {
      control: 'select',
      options: ['outline', 'soft', 'solid'],
      description: 'Visual variant',
      table: { defaultValue: { summary: 'outline' } },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation',
      table: { defaultValue: { summary: 'vertical' } },
    },
    gap: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Gap between items',
      table: { defaultValue: { summary: 'md' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the group is disabled',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  render: () => (
    <CheckboxGroup defaultValue={['react']}>
      <CheckboxGroupItem value="react" label="React" />
      <CheckboxGroupItem value="vue" label="Vue" />
      <CheckboxGroupItem value="angular" label="Angular" />
      <CheckboxGroupItem value="svelte" label="Svelte" />
    </CheckboxGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <CheckboxGroup defaultValue={['react']} orientation="horizontal">
      <CheckboxGroupItem value="react" label="React" />
      <CheckboxGroupItem value="vue" label="Vue" />
      <CheckboxGroupItem value="angular" label="Angular" />
    </CheckboxGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h4 className="text-sm font-medium mb-2">Small</h4>
        <CheckboxGroup size="sm" defaultValue={['a']}>
          <CheckboxGroupItem value="a" label="Option A" />
          <CheckboxGroupItem value="b" label="Option B" />
        </CheckboxGroup>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Medium</h4>
        <CheckboxGroup size="md" defaultValue={['a']}>
          <CheckboxGroupItem value="a" label="Option A" />
          <CheckboxGroupItem value="b" label="Option B" />
        </CheckboxGroup>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Large</h4>
        <CheckboxGroup size="lg" defaultValue={['a']}>
          <CheckboxGroupItem value="a" label="Option A" />
          <CheckboxGroupItem value="b" label="Option B" />
        </CheckboxGroup>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckboxGroup color="neutral" defaultValue={['a']} orientation="horizontal">
        <CheckboxGroupItem value="a" label="Neutral" />
      </CheckboxGroup>
      <CheckboxGroup color="primary" defaultValue={['a']} orientation="horizontal">
        <CheckboxGroupItem value="a" label="Primary" />
      </CheckboxGroup>
      <CheckboxGroup color="secondary" defaultValue={['a']} orientation="horizontal">
        <CheckboxGroupItem value="a" label="Secondary" />
      </CheckboxGroup>
      <CheckboxGroup color="accent" defaultValue={['a']} orientation="horizontal">
        <CheckboxGroupItem value="a" label="Accent" />
      </CheckboxGroup>
      <CheckboxGroup color="info" defaultValue={['a']} orientation="horizontal">
        <CheckboxGroupItem value="a" label="Info" />
      </CheckboxGroup>
      <CheckboxGroup color="success" defaultValue={['a']} orientation="horizontal">
        <CheckboxGroupItem value="a" label="Success" />
      </CheckboxGroup>
      <CheckboxGroup color="warning" defaultValue={['a']} orientation="horizontal">
        <CheckboxGroupItem value="a" label="Warning" />
      </CheckboxGroup>
      <CheckboxGroup color="danger" defaultValue={['a']} orientation="horizontal">
        <CheckboxGroupItem value="a" label="Danger" />
      </CheckboxGroup>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h4 className="text-sm font-medium mb-2">Outline</h4>
        <CheckboxGroup variant="outline" defaultValue={['a']} orientation="horizontal">
          <CheckboxGroupItem value="a" label="Option A" />
          <CheckboxGroupItem value="b" label="Option B" />
        </CheckboxGroup>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Soft</h4>
        <CheckboxGroup variant="soft" defaultValue={['a']} orientation="horizontal">
          <CheckboxGroupItem value="a" label="Option A" />
          <CheckboxGroupItem value="b" label="Option B" />
        </CheckboxGroup>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Solid</h4>
        <CheckboxGroup variant="solid" defaultValue={['a']} orientation="horizontal">
          <CheckboxGroupItem value="a" label="Option A" />
          <CheckboxGroupItem value="b" label="Option B" />
        </CheckboxGroup>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <CheckboxGroup disabled defaultValue={['react']}>
      <CheckboxGroupItem value="react" label="React" />
      <CheckboxGroupItem value="vue" label="Vue" />
      <CheckboxGroupItem value="angular" label="Angular" />
    </CheckboxGroup>
  ),
};

export const WithGaps: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="text-sm font-medium mb-2">Small gap</h4>
        <CheckboxGroup gap="sm" defaultValue={['a']}>
          <CheckboxGroupItem value="a" label="Option A" />
          <CheckboxGroupItem value="b" label="Option B" />
          <CheckboxGroupItem value="c" label="Option C" />
        </CheckboxGroup>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Medium gap</h4>
        <CheckboxGroup gap="md" defaultValue={['a']}>
          <CheckboxGroupItem value="a" label="Option A" />
          <CheckboxGroupItem value="b" label="Option B" />
          <CheckboxGroupItem value="c" label="Option C" />
        </CheckboxGroup>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Large gap</h4>
        <CheckboxGroup gap="lg" defaultValue={['a']}>
          <CheckboxGroupItem value="a" label="Option A" />
          <CheckboxGroupItem value="b" label="Option B" />
          <CheckboxGroupItem value="c" label="Option C" />
        </CheckboxGroup>
      </div>
    </div>
  ),
};
