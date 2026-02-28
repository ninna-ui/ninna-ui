import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@ninna-ui/primitives';

const meta: Meta<typeof Divider> = {
  title: 'Primitives/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['horizontal', 'vertical', 'with-text'],
      description: 'Orientation and style variant',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Color theme for text',
      table: { defaultValue: { summary: 'primary' } },
    },
    weight: {
      control: 'select',
      options: ['soft', 'solid'],
      description: 'Line weight/opacity',
      table: { defaultValue: { summary: 'soft' } },
    },
    text: {
      control: 'text',
      description: 'Text to display (with-text variant only)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    variant: 'horizontal',
    weight: 'soft',
  },
};

export const Horizontal: Story = {
  args: {
    variant: 'horizontal',
    weight: 'soft',
  },
};

export const HorizontalSolid: Story = {
  args: {
    variant: 'horizontal',
    weight: 'solid',
  },
};

export const Vertical: Story = {
  args: {
    variant: 'vertical',
    weight: 'soft',
  },
  decorators: [
    (Story) => (
      <div className="h-40">
        <Story />
      </div>
    ),
  ],
};

export const VerticalSolid: Story = {
  args: {
    variant: 'vertical',
    weight: 'solid',
  },
  decorators: [
    (Story) => (
      <div className="h-40">
        <Story />
      </div>
    ),
  ],
};

export const WithText: Story = {
  args: {
    variant: 'with-text',
    text: 'OR',
    color: 'primary',
    weight: 'soft',
  },
};

export const WithTextSolid: Story = {
  args: {
    variant: 'with-text',
    text: 'Continue with',
    color: 'secondary',
    weight: 'solid',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12">
      {/* Horizontal Variants */}
      <div>
        <h3 className="text-sm font-semibold mb-4">Horizontal Dividers</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-base-content/70 mb-2">Soft</p>
            <Divider variant="horizontal" weight="soft" />
          </div>
          <div>
            <p className="text-xs text-base-content/70 mb-2">Solid</p>
            <Divider variant="horizontal" weight="solid" />
          </div>
        </div>
      </div>

      {/* Vertical Variants */}
      <div>
        <h3 className="text-sm font-semibold mb-4">Vertical Dividers</h3>
        <div className="flex gap-6 h-24">
          <div className="flex flex-col items-center gap-2">
            <Divider variant="vertical" weight="soft" className="h-full" />
            <span className="text-xs text-base-content/70">Soft</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Divider variant="vertical" weight="solid" className="h-full" />
            <span className="text-xs text-base-content/70">Solid</span>
          </div>
        </div>
      </div>

      {/* With Text - All Colors */}
      <div>
        <h3 className="text-sm font-semibold mb-4">With Text - All Colors</h3>
        <div className="space-y-4">
          <Divider variant="with-text" text="Neutral" color="neutral" weight="soft" />
          <Divider variant="with-text" text="Primary" color="primary" weight="soft" />
          <Divider variant="with-text" text="Secondary" color="secondary" weight="soft" />
          <Divider variant="with-text" text="Accent" color="accent" weight="soft" />
          <Divider variant="with-text" text="Info" color="info" weight="soft" />
          <Divider variant="with-text" text="Success" color="success" weight="soft" />
          <Divider variant="with-text" text="Warning" color="warning" weight="soft" />
          <Divider variant="with-text" text="Danger" color="danger" weight="soft" />
        </div>
      </div>

      {/* With Text - Solid Weight */}
      <div>
        <h3 className="text-sm font-semibold mb-4">With Text - Solid Weight</h3>
        <div className="space-y-4">
          <Divider variant="with-text" text="Section Break" color="primary" weight="solid" />
          <Divider variant="with-text" text="Important Notice" color="danger" weight="solid" />
          <Divider variant="with-text" text="New Content" color="success" weight="solid" />
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h3 className="text-sm font-semibold mb-4">Use Cases</h3>
        <div className="space-y-6">
          {/* Login Form */}
          <div className="border rounded-lg p-6 max-w-sm">
            <button className="w-full bg-blue-600 text-white py-2 rounded mb-4">
              Sign in with Email
            </button>
            <Divider variant="with-text" text="OR" color="primary" />
            <div className="space-y-2 mt-4">
              <button className="w-full border py-2 rounded">Sign in with Google</button>
              <button className="w-full border py-2 rounded">Sign in with GitHub</button>
            </div>
          </div>

          {/* Content Sections */}
          <div className="border rounded-lg p-6">
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Section 1</h4>
              <p className="text-sm text-base-content/70">Content for section 1</p>
            </div>
            <Divider variant="horizontal" weight="soft" />
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Section 2</h4>
              <p className="text-sm text-base-content/70">Content for section 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
