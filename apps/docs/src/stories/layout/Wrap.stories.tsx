import type { Meta, StoryObj } from '@storybook/react';
import { Wrap } from '@ninna-ui/layout';

const meta: Meta<typeof Wrap> = {
  title: 'Layout/Wrap',
  component: Wrap,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'Semantic HTML element to render',
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16'],
      description: 'Gap between items',
      table: { defaultValue: { summary: '4' } },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Align items on cross axis',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Justify items on main axis',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Wrap>;

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
    {children}
  </span>
);

export const Default: Story = {
  args: {
    gap: '2',
    children: (
      <>
        <Tag>React</Tag>
        <Tag>TypeScript</Tag>
        <Tag>Tailwind</Tag>
        <Tag>Remix</Tag>
        <Tag>Vite</Tag>
        <Tag>Node.js</Tag>
        <Tag>pnpm</Tag>
      </>
    ),
  },
};

export const Buttons: Story = {
  args: {
    gap: '2',
    children: (
      <>
        {['Save', 'Cancel', 'Delete', 'Edit', 'Share', 'Copy'].map((label) => (
          <button
            key={label}
            className="px-4 py-2 bg-base-300 rounded-lg text-sm"
          >
            {label}
          </button>
        ))}
      </>
    ),
  },
};
