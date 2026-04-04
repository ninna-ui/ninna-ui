import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '@ninna-ui/data-display';

const meta: Meta = {
  title: 'Data Display/Timeline',
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
      description: 'Status color for Timeline.Indicator',
      table: { defaultValue: { summary: 'neutral' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Timeline className="w-[400px]">
      <Timeline.Item>
        <Timeline.Indicator />
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>Project Created</Timeline.Heading>
          <Timeline.Description>Initial project setup and configuration.</Timeline.Description>
          <Timeline.Time>Jan 1, 2024</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator />
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>First Release</Timeline.Heading>
          <Timeline.Description>Version 1.0 released to production.</Timeline.Description>
          <Timeline.Time>Feb 15, 2024</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator />
        <Timeline.Content>
          <Timeline.Heading>Major Update</Timeline.Heading>
          <Timeline.Description>Added new features and improvements.</Timeline.Description>
          <Timeline.Time>Mar 30, 2024</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <Timeline className="w-[400px]">
      <Timeline.Item>
        <Timeline.Indicator status="success" />
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>Build Passed</Timeline.Heading>
          <Timeline.Description>All tests passed successfully.</Timeline.Description>
          <Timeline.Time>2 hours ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator status="danger" />
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>Deploy Failed</Timeline.Heading>
          <Timeline.Description>Deployment to staging failed.</Timeline.Description>
          <Timeline.Time>1 hour ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator status="warning" />
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>Review Needed</Timeline.Heading>
          <Timeline.Description>Code review requested for PR #42.</Timeline.Description>
          <Timeline.Time>30 minutes ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator status="primary" />
        <Timeline.Content>
          <Timeline.Heading>In Progress</Timeline.Heading>
          <Timeline.Description>Currently working on hotfix.</Timeline.Description>
          <Timeline.Time>Just now</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  ),
};

export const WithCustomIcons: Story = {
  render: () => {
    const CheckIcon = () => (
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
    const StarIcon = () => (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
    return (
      <Timeline className="w-[400px]">
        <Timeline.Item>
          <Timeline.Indicator icon={<CheckIcon />} status="success" />
          <Timeline.Connector />
          <Timeline.Content>
            <Timeline.Heading>Completed</Timeline.Heading>
            <Timeline.Description>Task completed successfully.</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator icon={<StarIcon />} status="primary" />
          <Timeline.Connector />
          <Timeline.Content>
            <Timeline.Heading>Featured</Timeline.Heading>
            <Timeline.Description>This item has a custom star icon.</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator />
          <Timeline.Content>
            <Timeline.Heading>Default</Timeline.Heading>
            <Timeline.Description>Default indicator with dot.</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    );
  },
};

export const ColorVariants: Story = {
  render: () => {
    const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'danger', 'warning', 'info'] as const;
    return (
      <Timeline className="w-[400px]">
        {colors.map((color, index) => (
          <Timeline.Item key={color}>
            <Timeline.Indicator status={color} />
            <Timeline.Connector />
            <Timeline.Content>
              <Timeline.Heading>{color.charAt(0).toUpperCase() + color.slice(1)} Status</Timeline.Heading>
              <Timeline.Description>Timeline item with {color} status color.</Timeline.Description>
              <Timeline.Time>Item {index + 1}</Timeline.Time>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    );
  },
};

export const ActivityFeed: Story = {
  render: () => (
    <Timeline className="w-[400px]">
      <Timeline.Item>
        <Timeline.Indicator status="primary" />
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>Alice commented on PR #123</Timeline.Heading>
          <Timeline.Description>&quot;Looks good to me! Just one small suggestion...&quot;</Timeline.Description>
          <Timeline.Time>5 minutes ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator status="success" />
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>Bob merged PR #121</Timeline.Heading>
          <Timeline.Description>Feature branch merged into main.</Timeline.Description>
          <Timeline.Time>20 minutes ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator status="warning" />
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>CI Warning on main</Timeline.Heading>
          <Timeline.Description>Build succeeded with 3 deprecation warnings.</Timeline.Description>
          <Timeline.Time>1 hour ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator />
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>Carol created issue #45</Timeline.Heading>
          <Timeline.Description>Bug report: Layout shifts on mobile viewport.</Timeline.Description>
          <Timeline.Time>2 hours ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator status="danger" />
        <Timeline.Content>
          <Timeline.Heading>Deploy failed on staging</Timeline.Heading>
          <Timeline.Description>Error: Out of memory during build step.</Timeline.Description>
          <Timeline.Time>3 hours ago</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  ),
};
