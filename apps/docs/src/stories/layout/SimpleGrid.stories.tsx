import type { Meta, StoryObj } from '@storybook/react';
import { SimpleGrid } from '@ninna-ui/layout';

const meta: Meta<typeof SimpleGrid> = {
  title: 'Layout/SimpleGrid',
  component: SimpleGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'number',
      description: 'Fixed number of columns',
      table: { defaultValue: { summary: '1' } },
    },
    minChildWidth: {
      control: 'text',
      description: 'Minimum width for auto-fit columns',
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16'],
      description: 'Gap between items',
      table: { defaultValue: { summary: '4' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SimpleGrid>;

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 bg-accent/10 rounded-lg text-center">
    {children}
  </div>
);

export const Default: Story = {
  args: {
    columns: 3,
    gap: '4',
    children: (
      <>
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={`simple-grid-card-${i}`}>Card {i + 1}</Card>
        ))}
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    gap: '4',
    children: (
      <>
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={`simple-grid-card-${i}`}>Card {i + 1}</Card>
        ))}
      </>
    ),
  },
};

export const Responsive: Story = {
  args: {
    minChildWidth: '200px',
    gap: '4',
    children: (
      <>
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={`simple-grid-card-${i}`}>Card {i + 1}</Card>
        ))}
      </>
    ),
  },
};
