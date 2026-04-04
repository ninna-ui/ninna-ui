import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '@ninna-ui/data-display';
import { Badge, Avatar } from '@ninna-ui/primitives';
import {
  CheckCircle2,
  Circle,
  GitPullRequest,
  Zap
} from 'lucide-react';

const meta: Meta = {
  title: 'Data Display/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    status: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'success', 'danger', 'warning', 'info'],
      description: 'Color variant for the indicator dot (Timeline.Indicator)',
      table: { defaultValue: { summary: 'neutral' } },
    },
    icon: {
      control: 'text',
      description: 'Custom icon to replace the default dot (Timeline.Indicator)',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Timeline className="w-[450px]">
      <Timeline.Item>
        <Timeline.Indicator>
          <CheckCircle2 size={14} className="text-success" />
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content>
          <div className="flex items-center gap-2 mb-1">
            <Timeline.Heading>Repository Initialized</Timeline.Heading>
            <Badge size="sm" variant="soft" color="success">Completed</Badge>
          </div>
          <Timeline.Description>
            Bootstraping the monorepo with Turborepo and PNPM workspaces.
          </Timeline.Description>
          <Timeline.Time>2 days ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Indicator>
          <GitPullRequest size={14} className="text-primary" />
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>Pull Request #12 Created</Timeline.Heading>
          <Timeline.Description>
            Feature: Add new dark-mode themes to the core package.
          </Timeline.Description>
          <div className="mt-2 flex items-center gap-2">
            <Avatar size="xs" />
            <span className="text-xs font-medium text-base-content/70">opened by @john_doe</span>
          </div>
          <Timeline.Time>Yesterday at 4:32 PM</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Indicator>
          <Zap size={14} className="text-warning" />
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>CI/CD Pipeline Running</Timeline.Heading>
          <Timeline.Description>
            Running linting, type-checking and unit tests in GitHub Actions.
          </Timeline.Description>
          <Timeline.Time>15 minutes ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Indicator>
          <Circle size={10} fill="currentColor" className="text-base-300" />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Heading className="text-base-content/50">Production Deployment</Timeline.Heading>
          <Timeline.Description className="text-base-content/40">
            Waiting for approval from the engineering manager.
          </Timeline.Description>
          <Timeline.Time>Scheduled</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  ),
};

export const ActivityFeed: Story = {
  render: () => (
    <Timeline className="w-[400px]">
      <Timeline.Item>
        <Timeline.Indicator>
          <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/10" />
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>Commit 6f8ad12</Timeline.Heading>
          <Timeline.Description>refactor: simplify theme context logic</Timeline.Description>
          <Timeline.Time>10m ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator>
          <div className="w-2 h-2 rounded-full bg-success ring-4 ring-success/10" />
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>Commit 2c4d91a</Timeline.Heading>
          <Timeline.Description>feat: add modal animations</Timeline.Description>
          <Timeline.Time>45m ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator>
          <div className="w-2 h-2 rounded-full bg-base-300 ring-4 ring-base-100" />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Heading>Commit 8e1b3c4</Timeline.Heading>
          <Timeline.Description>docs: update contribution guide</Timeline.Description>
          <Timeline.Time>1h ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  ),
};

export const StepperStyle: Story = {
  render: () => (
    <Timeline className="w-[500px]">
      <Timeline.Item>
        <Timeline.Indicator>
          <div className="w-6 h-6 rounded-full bg-primary text-primary-content flex items-center justify-center text-[10px] font-bold">1</div>
        </Timeline.Indicator>
        <Timeline.Connector className="bg-primary" />
        <Timeline.Content className="pb-10">
          <Timeline.Heading>Account Setup</Timeline.Heading>
          <Timeline.Description>Enter your email and create a password.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Indicator>
          <div className="w-6 h-6 rounded-full bg-primary text-primary-content flex items-center justify-center text-[10px] font-bold">2</div>
        </Timeline.Indicator>
        <Timeline.Connector />
        <Timeline.Content className="pb-10">
          <Timeline.Heading>Company Profile</Timeline.Heading>
          <Timeline.Description>Add your company name and billing address.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Indicator>
          <div className="w-6 h-6 rounded-full bg-base-200 text-base-content/50 flex items-center justify-center text-[10px] font-bold">3</div>
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Heading className="text-base-content/50">Verification</Timeline.Heading>
          <Timeline.Description className="text-base-content/40">Verify your identity via SMS or Email.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  ),
};

export const Compact: Story = {
  render: () => (
    <Timeline className="w-[300px]" >
      <Timeline.Item>
        <Timeline.Indicator status="success" />
        <Timeline.Connector />
        <Timeline.Content className="pb-4">
          <span className="text-sm font-medium">Order Placed</span>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator status="primary" />
        <Timeline.Connector />
        <Timeline.Content className="pb-4">
          <span className="text-sm font-medium">Shipped</span>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator status="neutral" />
        <Timeline.Content className="pb-4">
          <span className="text-sm font-medium text-base-content/50">Delivered</span>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  ),
};
