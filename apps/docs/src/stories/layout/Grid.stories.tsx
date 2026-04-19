import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '@ninna-ui/layout';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'Semantic HTML element to render',
    },
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 12],
      description: 'Number of columns',
      table: { defaultValue: { summary: '1' } },
    },
    rows: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Number of rows',
    },
    gap: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16'],
      description: 'Gap between items',
      table: { defaultValue: { summary: '4' } },
    },
    flow: {
      control: 'select',
      options: ['row', 'column', 'dense', 'row-dense', 'column-dense'],
      description: 'Grid flow direction',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Align grid items on the cross axis',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

const Box = ({ children }: { children: React.ReactNode }) => (
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
          <Box key={`grid-item-${i}`}>{i + 1}</Box>
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
          <Box key={`grid-item-${i}`}>{i + 1}</Box>
        ))}
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: '4',
    children: (
      <>
        {Array.from({ length: 8 }).map((_, i) => (
          <Box key={`grid-item-${i}`}>{i + 1}</Box>
        ))}
      </>
    ),
  },
};

export const DashboardLayout: Story = {
  render: () => (
    <Grid columns={4} gap="4">
      <div className="col-span-4 p-4 bg-primary/10 rounded-lg">
        Header (full width)
      </div>
      <div className="col-span-1 p-4 bg-accent/10 rounded-lg row-span-2">
        Sidebar
      </div>
      <div className="col-span-3 p-4 bg-info/10 rounded-lg">
        Main Content
      </div>
      <div className="col-span-3 p-4 bg-secondary/10 rounded-lg">
        Secondary Content
      </div>
      <div className="col-span-4 p-4 bg-base-200 rounded-lg">
        Footer (full width)
      </div>
    </Grid>
  ),
};

export const ResponsiveCards: Story = {
  render: () => (
    <Grid columns={3} gap="6">
      {['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F'].map((name) => (
        <div key={name} className="p-4 bg-base-100 rounded-lg shadow-md">
          <div className="h-24 bg-base-300 rounded mb-3" />
          <div className="font-medium text-base-content">{name}</div>
          <div className="text-sm text-base-content/70">$99.00</div>
        </div>
      ))}
    </Grid>
  ),
};
