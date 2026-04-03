import type { Meta, StoryObj } from '@storybook/react';
import { Stat } from '@ninna-ui/data-display';

const meta: Meta = {
  title: 'Data Display/Stat',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the stat value (on Stat.Value)',
      table: { defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'success', 'danger', 'warning', 'info'],
      description: 'Color theme for the icon background (on Stat.Icon)',
      table: { defaultValue: { summary: 'primary' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Stat>
      <Stat.Label>Total Revenue</Stat.Label>
      <Stat.Value>$45,231</Stat.Value>
      <Stat.HelpText>+20.1% from last month</Stat.HelpText>
    </Stat>
  ),
};

export const Sizes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    return (
      <div className="flex gap-8">
        {sizes.map((size) => (
          <Stat key={size}>
            <Stat.Label>Size: {size}</Stat.Label>
            <Stat.Value size={size}>$12,345</Stat.Value>
            <Stat.HelpText>Sample help text</Stat.HelpText>
          </Stat>
        ))}
      </div>
    );
  },
};

export const WithTrend: Story = {
  render: () => (
    <div className="flex gap-8">
      <Stat>
        <Stat.Label>Revenue</Stat.Label>
        <Stat.Value>$45,231</Stat.Value>
        <Stat.Trend direction="up">+12.5%</Stat.Trend>
      </Stat>
      <Stat>
        <Stat.Label>Expenses</Stat.Label>
        <Stat.Value>$8,120</Stat.Value>
        <Stat.Trend direction="down">-3.2%</Stat.Trend>
      </Stat>
      <Stat>
        <Stat.Label>Balance</Stat.Label>
        <Stat.Value>$37,111</Stat.Value>
        <Stat.Trend direction="neutral">0.0%</Stat.Trend>
      </Stat>
    </div>
  ),
};

export const TrendInverse: Story = {
  render: () => (
    <div className="flex gap-8">
      <Stat>
        <Stat.Label>Bounce Rate</Stat.Label>
        <Stat.Value>32%</Stat.Value>
        <Stat.Trend direction="up" positiveIsGood={false}>+5.2%</Stat.Trend>
      </Stat>
      <Stat>
        <Stat.Label>Error Rate</Stat.Label>
        <Stat.Value>0.3%</Stat.Value>
        <Stat.Trend direction="down" positiveIsGood={false}>-1.1%</Stat.Trend>
      </Stat>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-8">
      <Stat>
        <Stat.Label>Users</Stat.Label>
        <Stat.Value>2,420</Stat.Value>
        <Stat.HelpText>Active this month</Stat.HelpText>
        <Stat.Icon>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </Stat.Icon>
      </Stat>
      <Stat>
        <Stat.Label>Sales</Stat.Label>
        <Stat.Value>1,234</Stat.Value>
        <Stat.Trend direction="up">+8.1%</Stat.Trend>
        <Stat.Icon>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
        </Stat.Icon>
      </Stat>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => {
    const colors = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'] as const;
    const DollarIcon = () => (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
    return (
      <div className="flex flex-wrap gap-6">
        {colors.map((color) => (
          <Stat key={color}>
            <Stat.Icon color={color}>
              <DollarIcon />
            </Stat.Icon>
            <Stat.Value>$45,231</Stat.Value>
            <Stat.Label>{color.charAt(0).toUpperCase() + color.slice(1)}</Stat.Label>
          </Stat>
        ))}
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    const colors = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'] as const;
    const sizes = ['sm', 'md', 'lg'] as const;
    const DollarIcon = () => (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
    
    return (
      <div className="space-y-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Colors</h4>
          <div className="flex flex-wrap gap-6">
            {colors.map((color) => (
              <Stat key={color}>
                <Stat.Icon color={color}>
                  <DollarIcon />
                </Stat.Icon>
                <Stat.Value>$45,231</Stat.Value>
                <Stat.Label>{color.charAt(0).toUpperCase() + color.slice(1)}</Stat.Label>
              </Stat>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Sizes</h4>
          <div className="flex gap-8">
            {sizes.map((size) => (
              <Stat key={size}>
                <Stat.Icon color="primary">
                  <DollarIcon />
                </Stat.Icon>
                <Stat.Value size={size}>$12,345</Stat.Value>
                <Stat.Label>Size: {size}</Stat.Label>
              </Stat>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Trends</h4>
          <div className="flex gap-8">
            <Stat>
              <Stat.Icon color="success">
                <DollarIcon />
              </Stat.Icon>
              <Stat.Value>$45,231</Stat.Value>
              <Stat.Label>Revenue</Stat.Label>
              <Stat.Trend direction="up">+12.5%</Stat.Trend>
            </Stat>
            <Stat>
              <Stat.Icon color="danger">
                <DollarIcon />
              </Stat.Icon>
              <Stat.Value>$8,120</Stat.Value>
              <Stat.Label>Expenses</Stat.Label>
              <Stat.Trend direction="down">-3.2%</Stat.Trend>
            </Stat>
            <Stat>
              <Stat.Icon color="neutral">
                <DollarIcon />
              </Stat.Icon>
              <Stat.Value>$37,111</Stat.Value>
              <Stat.Label>Balance</Stat.Label>
              <Stat.Trend direction="neutral">0.0%</Stat.Trend>
            </Stat>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">With Help Text</h4>
          <div className="flex gap-8">
            <Stat>
              <Stat.Icon color="primary">
                <DollarIcon />
              </Stat.Icon>
              <Stat.Value>$45,231</Stat.Value>
              <Stat.Label>Revenue</Stat.Label>
              <Stat.HelpText>+20.1% from last month</Stat.HelpText>
            </Stat>
            <Stat>
              <Stat.Icon color="secondary">
                <DollarIcon />
              </Stat.Icon>
              <Stat.Value>2,420</Stat.Value>
              <Stat.Label>Users</Stat.Label>
              <Stat.HelpText>Active this month</Stat.HelpText>
            </Stat>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Inverse Trends</h4>
          <div className="flex gap-8">
            <Stat>
              <Stat.Icon color="warning">
                <DollarIcon />
              </Stat.Icon>
              <Stat.Value>32%</Stat.Value>
              <Stat.Label>Bounce Rate</Stat.Label>
              <Stat.Trend direction="up" positiveIsGood={false}>+5.2%</Stat.Trend>
            </Stat>
            <Stat>
              <Stat.Icon color="info">
                <DollarIcon />
              </Stat.Icon>
              <Stat.Value>0.3%</Stat.Value>
              <Stat.Label>Error Rate</Stat.Label>
              <Stat.Trend direction="down" positiveIsGood={false}>-1.1%</Stat.Trend>
            </Stat>
          </div>
        </div>
      </div>
    );
  },
};

export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <Stat>
        <Stat.Label>Total Users</Stat.Label>
        <Stat.Value>71,897</Stat.Value>
        <Stat.Trend direction="up">+122</Stat.Trend>
      </Stat>
      <Stat>
        <Stat.Label>Avg. Session</Stat.Label>
        <Stat.Value>4m 32s</Stat.Value>
        <Stat.Trend direction="up">+18s</Stat.Trend>
      </Stat>
      <Stat>
        <Stat.Label>Bounce Rate</Stat.Label>
        <Stat.Value>24.57%</Stat.Value>
        <Stat.Trend direction="down" positiveIsGood={false}>-2.3%</Stat.Trend>
      </Stat>
      <Stat>
        <Stat.Label>Conversion</Stat.Label>
        <Stat.Value>3.24%</Stat.Value>
        <Stat.Trend direction="up">+0.8%</Stat.Trend>
      </Stat>
    </div>
  ),
};
