import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@ninna-ui/layout';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'Semantic HTML element to render',
    },
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full', 'none'],
      description: 'Maximum width',
      table: { defaultValue: { summary: 'lg' } },
    },
    center: {
      control: 'boolean',
      description: 'Center horizontally',
      table: { defaultValue: { summary: 'true' } },
    },
    padding: {
      control: 'boolean',
      description: 'Add horizontal padding',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    maxWidth: 'lg',
    className: 'bg-base-200 py-8',
    children: (
      <div className="bg-base-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Container Content</h2>
        <p className="text-base-content/70">
          This content is wrapped in a Container with max-width constraint.
        </p>
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    maxWidth: 'sm',
    className: 'bg-base-200 py-8',
    children: (
      <div className="bg-base-100 p-6 rounded-lg shadow">
        <p>Small container (max-w-screen-sm)</p>
      </div>
    ),
  },
};

export const Full: Story = {
  args: {
    maxWidth: 'full',
    className: 'bg-base-200 py-8',
    children: (
      <div className="bg-base-100 p-6 rounded-lg shadow">
        <p>Full width container</p>
      </div>
    ),
  },
};
