import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@ninna-ui/primitives';

const meta: Meta<typeof Link> = {
  title: 'Primitives/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL the link points to',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Text size — matches Text component sizes',
      table: { defaultValue: { summary: 'inherited' } },
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Color variant',
      table: { defaultValue: { summary: 'neutral' } },
    },
    underline: {
      control: 'select',
      options: ['always', 'hover', 'none'],
      description: 'Underline behavior',
      table: { defaultValue: { summary: 'hover' } },
    },
    external: {
      control: 'boolean',
      description: 'Whether the link opens in a new tab',
      table: { defaultValue: { summary: 'false' } },
    },
    showExternalIcon: {
      control: 'boolean',
      description: 'Whether to show external link icon',
      table: { defaultValue: { summary: 'true' } },
    },
    children: {
      control: 'text',
      description: 'Link content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Default Link',
    href: '#',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Link',
    href: '#',
    color: 'primary',
  },
};

export const AlwaysUnderline: Story = {
  args: {
    children: 'Always Underlined',
    href: '#',
    underline: 'always',
  },
};

export const NoUnderline: Story = {
  args: {
    children: 'No Underline',
    href: '#',
    underline: 'none',
  },
};

export const External: Story = {
  args: {
    children: 'External Link',
    href: 'https://github.com',
    external: true,
  },
};

export const ExternalNoIcon: Story = {
  args: {
    children: 'External (no icon)',
    href: 'https://github.com',
    external: true,
    showExternalIcon: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-baseline gap-6">
      <Link href="#" size="xs">Extra Small</Link>
      <Link href="#" size="sm">Small</Link>
      <Link href="#" size="md">Medium</Link>
      <Link href="#" size="lg">Large</Link>
      <Link href="#" size="xl">Extra Large</Link>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Link href="#" color="neutral">Neutral</Link>
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" color="secondary">Secondary</Link>
      <Link href="#" color="accent">Accent</Link>
      <Link href="#" color="info">Info</Link>
      <Link href="#" color="success">Success</Link>
      <Link href="#" color="warning">Warning</Link>
      <Link href="#" color="danger">Danger</Link>
    </div>
  ),
};

export const UnderlineVariants: Story = {
  render: () => (
    <div className="flex gap-6">
      <Link href="#" underline="always">Always</Link>
      <Link href="#" underline="hover">Hover</Link>
      <Link href="#" underline="none">None</Link>
    </div>
  ),
};

export const InlineText: Story = {
  render: () => (
    <p className="text-base-content/70">
      This is a paragraph with an <Link href="#">inline link</Link> that flows naturally with the text.
    </p>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-3">Sizes</h4>
        <div className="flex flex-wrap items-baseline gap-6">
          <Link href="#" size="xs">Extra Small</Link>
          <Link href="#" size="sm">Small</Link>
          <Link href="#" size="md">Medium</Link>
          <Link href="#" size="lg">Large</Link>
          <Link href="#" size="xl">Extra Large</Link>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">Colors</h4>
        <div className="flex flex-wrap gap-4">
          <Link href="#" color="neutral">Neutral</Link>
          <Link href="#" color="primary">Primary</Link>
          <Link href="#" color="secondary">Secondary</Link>
          <Link href="#" color="accent">Accent</Link>
          <Link href="#" color="info">Info</Link>
          <Link href="#" color="success">Success</Link>
          <Link href="#" color="warning">Warning</Link>
          <Link href="#" color="danger">Danger</Link>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">Underline Variants</h4>
        <div className="flex gap-6">
          <Link href="#" underline="always">Always Underlined</Link>
          <Link href="#" underline="hover">Hover Underline</Link>
          <Link href="#" underline="none">No Underline</Link>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">External Links</h4>
        <div className="flex gap-6">
          <Link href="https://github.com" external>With Icon</Link>
          <Link href="https://github.com" external showExternalIcon={false}>Without Icon</Link>
        </div>
      </div>
    </div>
  ),
};
