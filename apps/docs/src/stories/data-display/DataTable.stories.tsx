import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '@ninna-ui/data-display';
import type { DataTableColumn } from '@ninna-ui/data-display';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const users: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 4, name: 'Dave Brown', email: 'dave@example.com', role: 'Editor', status: 'Active' },
  { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'Admin', status: 'On Leave' },
];

const columns: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
  { id: 'email', header: 'Email', accessorKey: 'email', sortable: true },
  { id: 'role', header: 'Role', accessorKey: 'role', sortable: true },
  { id: 'status', header: 'Status', accessorKey: 'status' },
];

const meta: Meta = {
  title: 'Data Display/DataTable',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    striped: {
      control: 'boolean',
      description: 'Alternating row background colors',
      table: { defaultValue: { summary: 'false' } },
    },
    compact: {
      control: 'boolean',
      description: 'Reduced cell padding',
      table: { defaultValue: { summary: 'false' } },
    },
    bordered: {
      control: 'boolean',
      description: 'Show cell borders',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading overlay',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="w-[600px]">
      <DataTable data={users} columns={columns} rowKey="id" />
    </div>
  ),
};

export const Sortable: Story = {
  render: () => (
    <div className="w-[600px]">
      <DataTable
        data={users}
        columns={columns}
        rowKey="id"
        caption="Click column headers to sort"
      />
    </div>
  ),
};

export const Striped: Story = {
  render: () => (
    <div className="w-[600px]">
      <DataTable data={users} columns={columns} rowKey="id" striped />
    </div>
  ),
};

export const Bordered: Story = {
  render: () => (
    <div className="w-[600px]">
      <DataTable data={users} columns={columns} rowKey="id" bordered />
    </div>
  ),
};

export const Compact: Story = {
  render: () => (
    <div className="w-[600px]">
      <DataTable data={users} columns={columns} rowKey="id" compact />
    </div>
  ),
};

export const CustomCell: Story = {
  render: () => {
    const customColumns: DataTableColumn<User>[] = [
      { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
      { id: 'email', header: 'Email', accessorKey: 'email' },
      {
        id: 'status',
        header: 'Status',
        cell: (row) => (
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
              row.status === 'Active'
                ? 'bg-success/10 text-success'
                : row.status === 'Inactive'
                  ? 'bg-danger/10 text-danger'
                  : 'bg-warning/10 text-warning'
            }`}
          >
            {row.status}
          </span>
        ),
      },
      { id: 'role', header: 'Role', accessorKey: 'role', align: 'right' },
    ];
    return (
      <div className="w-[600px]">
        <DataTable data={users} columns={customColumns} rowKey="id" />
      </div>
    );
  },
};

export const Empty: Story = {
  render: () => (
    <div className="w-[600px]">
      <DataTable
        data={[]}
        columns={columns}
        emptyMessage="No users found. Try adjusting your filters."
      />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="w-[600px]">
      <DataTable data={users} columns={columns} rowKey="id" loading />
    </div>
  ),
};
