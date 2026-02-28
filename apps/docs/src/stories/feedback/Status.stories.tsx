import type { Meta, StoryObj } from '@storybook/react';
import { Status } from '@ninna-ui/feedback';

const meta: Meta<typeof Status> = {
  title: 'Feedback/Status',
  component: Status,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'info'],
      description: 'Status value that determines the indicator color',
      table: { defaultValue: { summary: 'info' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the status indicator and label',
      table: { defaultValue: { summary: 'md' } },
    },
    children: {
      control: 'text',
      description: 'Optional label text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Status>;

export const Default: Story = {
  args: {
    value: 'info',
    children: 'Processing',
  },
};

export const Success: Story = {
  args: {
    value: 'success',
    children: 'Completed',
  },
};

export const Error: Story = {
  args: {
    value: 'danger',
    children: 'Failed',
  },
};

export const Warning: Story = {
  args: {
    value: 'warning',
    children: 'Pending',
  },
};

export const WithoutLabel: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Status value="success" />
      <Status value="danger" />
      <Status value="warning" />
      <Status value="info" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Status value="success">Completed</Status>
      <Status value="danger">Failed</Status>
      <Status value="warning">Pending</Status>
      <Status value="info">Processing</Status>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-6">
        <Status value="success" size="sm">Small</Status>
        <Status value="success" size="md">Medium</Status>
        <Status value="success" size="lg">Large</Status>
      </div>
      <div className="flex items-center gap-6">
        <Status value="danger" size="sm">Small</Status>
        <Status value="danger" size="md">Medium</Status>
        <Status value="danger" size="lg">Large</Status>
      </div>
    </div>
  ),
};

export const ServerStatus: Story = {
  render: () => (
    <div className="space-y-3 min-w-[300px]">
      <div className="flex items-center justify-between">
        <span className="text-base-content/70">API Server</span>
        <Status value="success">Online</Status>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-base-content/70">Database</span>
        <Status value="success">Connected</Status>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-base-content/70">Cache</span>
        <Status value="warning">Degraded</Status>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-base-content/70">Email</span>
        <Status value="danger">Offline</Status>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-lg font-semibold mb-4">Status Values</h4>
        <div className="flex flex-col gap-3">
          <Status value="success">Success - Completed</Status>
          <Status value="danger">Error - Failed</Status>
          <Status value="warning">Warning - Pending</Status>
          <Status value="info">Info - Processing</Status>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Sizes</h4>
        <div className="flex items-center gap-6">
          <Status value="success" size="sm">Small</Status>
          <Status value="success" size="md">Medium</Status>
          <Status value="success" size="lg">Large</Status>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Without Labels</h4>
        <div className="flex items-center gap-4">
          <Status value="success" />
          <Status value="danger" />
          <Status value="warning" />
          <Status value="info" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Use Case: Task List</h4>
        <div className="space-y-2 min-w-[300px]">
          <div className="flex items-center justify-between p-2 bg-base-200 rounded">
            <span className="text-sm">Design Review</span>
            <Status value="success" size="sm">Done</Status>
          </div>
          <div className="flex items-center justify-between p-2 bg-base-200 rounded">
            <span className="text-sm">Code Review</span>
            <Status value="info" size="sm">In Progress</Status>
          </div>
          <div className="flex items-center justify-between p-2 bg-base-200 rounded">
            <span className="text-sm">Testing</span>
            <Status value="warning" size="sm">Pending</Status>
          </div>
          <div className="flex items-center justify-between p-2 bg-base-200 rounded">
            <span className="text-sm">Deployment</span>
            <Status value="danger" size="sm">Blocked</Status>
          </div>
        </div>
      </div>
    </div>
  ),
};
