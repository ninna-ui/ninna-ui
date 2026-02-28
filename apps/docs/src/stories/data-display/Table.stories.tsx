import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@ninna-ui/data-display';

const meta: Meta = {
  title: 'Data Display/Table',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for the table wrapper',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Table className="w-[500px]">
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
          <Table.Head>Role</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Alice Johnson</Table.Cell>
          <Table.Cell>alice@example.com</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bob Smith</Table.Cell>
          <Table.Cell>bob@example.com</Table.Cell>
          <Table.Cell>Editor</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Carol White</Table.Cell>
          <Table.Cell>carol@example.com</Table.Cell>
          <Table.Cell>Viewer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <Table className="w-[500px]">
      <Table.Caption>A list of recent invoices.</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Invoice</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Method</Table.Head>
          <Table.Head className="text-right">Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>INV-001</Table.Cell>
          <Table.Cell>Paid</Table.Cell>
          <Table.Cell>Credit Card</Table.Cell>
          <Table.Cell className="text-right">$250.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>INV-002</Table.Cell>
          <Table.Cell>Pending</Table.Cell>
          <Table.Cell>PayPal</Table.Cell>
          <Table.Cell className="text-right">$150.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>INV-003</Table.Cell>
          <Table.Cell>Unpaid</Table.Cell>
          <Table.Cell>Bank Transfer</Table.Cell>
          <Table.Cell className="text-right">$350.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table className="w-[500px]">
      <Table.Header>
        <Table.Row>
          <Table.Head>Product</Table.Head>
          <Table.Head className="text-right">Qty</Table.Head>
          <Table.Head className="text-right">Price</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Widget A</Table.Cell>
          <Table.Cell className="text-right">3</Table.Cell>
          <Table.Cell className="text-right">$30.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Widget B</Table.Cell>
          <Table.Cell className="text-right">1</Table.Cell>
          <Table.Cell className="text-right">$45.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Widget C</Table.Cell>
          <Table.Cell className="text-right">5</Table.Cell>
          <Table.Cell className="text-right">$25.00</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={2} className="font-semibold">Total</Table.Cell>
          <Table.Cell className="text-right font-semibold">$100.00</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table className="w-[600px]">
      <Table.Header>
        <Table.Row>
          <Table.Head>#</Table.Head>
          <Table.Head>Name</Table.Head>
          <Table.Head>Department</Table.Head>
          <Table.Head>Status</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {[
          { id: 1, name: 'Alice', dept: 'Engineering', status: 'Active' },
          { id: 2, name: 'Bob', dept: 'Design', status: 'Active' },
          { id: 3, name: 'Carol', dept: 'Marketing', status: 'On Leave' },
          { id: 4, name: 'Dave', dept: 'Engineering', status: 'Active' },
          { id: 5, name: 'Eve', dept: 'Sales', status: 'Active' },
          { id: 6, name: 'Frank', dept: 'HR', status: 'Inactive' },
        ].map((row, i) => (
          <Table.Row key={row.id} className={i % 2 === 0 ? 'bg-base-50' : ''}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell className="font-medium">{row.name}</Table.Cell>
            <Table.Cell>{row.dept}</Table.Cell>
            <Table.Cell>{row.status}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const Empty: Story = {
  render: () => (
    <Table className="w-[500px]">
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
          <Table.Head>Actions</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell colSpan={3} className="h-24 text-center text-base-content/70">
            No results found.
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
