import type { Meta, StoryObj } from '@storybook/react';
import { LinkOverlay, LinkBox, Link, Heading, Text, Badge } from '@ninna-ui/primitives';

const meta: Meta<typeof LinkOverlay> = {
  title: 'Primitives/LinkOverlay',
  component: LinkOverlay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL the link points to',
    },
    external: {
      control: 'boolean',
      description: 'Whether the link opens in a new tab',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Link content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinkOverlay>;

export const Default: Story = {
  render: () => (
    <LinkBox className="p-5 border border-base-300 rounded-lg hover:shadow-lg transition-shadow w-80">
      <Heading as="h3" size="lg">
        <LinkOverlay href="#">
          Card Title
        </LinkOverlay>
      </Heading>
      <Text muted className="mt-2">
        The entire card is clickable.
      </Text>
    </LinkBox>
  ),
};

export const WithNestedLink: Story = {
  render: () => (
    <LinkBox className="p-5 border border-base-300 rounded-lg hover:shadow-lg transition-shadow w-80">
      <Heading as="h3" size="lg">
        <LinkOverlay href="#">
          Article Title
        </LinkOverlay>
      </Heading>
      <Text muted className="mt-2">
        Written by{" "}
        <Link href="#" className="relative z-10" color="primary">
          John Doe
        </Link>
      </Text>
    </LinkBox>
  ),
};

export const AsArticle: Story = {
  render: () => (
    <LinkBox as="article" className="p-5 border border-base-300 rounded-lg hover:shadow-lg transition-shadow w-80">
      <Heading as="h3" size="lg">
        <LinkOverlay href="#">
          Article Element
        </LinkOverlay>
      </Heading>
      <Text muted className="mt-2">
        This LinkBox renders as an article element.
      </Text>
    </LinkBox>
  ),
};

export const External: Story = {
  render: () => (
    <LinkBox className="p-5 border border-base-300 rounded-lg hover:shadow-lg transition-shadow w-80">
      <Heading as="h3" size="lg">
        <LinkOverlay href="https://github.com" external>
          External Link Card
        </LinkOverlay>
      </Heading>
      <Text muted className="mt-2">
        Opens in a new tab.
      </Text>
    </LinkBox>
  ),
};

export const BlogPostCard: Story = {
  render: () => (
    <LinkBox as="article" className="p-5 border border-base-300 rounded-lg hover:shadow-lg transition-shadow w-96">
      <div className="flex items-center gap-2 mb-2">
        <Badge color="primary" size="sm">Technology</Badge>
        <Text size="sm" muted>5 min read</Text>
      </div>
      <Heading as="h3" size="xl">
        <LinkOverlay href="#">
          Building Accessible UI Components
        </LinkOverlay>
      </Heading>
      <Text muted className="mt-2">
        Learn how to create accessible and reusable UI components.
      </Text>
      <div className="mt-4 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-base-300" />
        <Link href="#" className="relative z-10 text-sm" color="primary">
          Jane Smith
        </Link>
      </div>
    </LinkBox>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {["Documentation", "API Reference", "Examples"].map((title) => (
        <LinkBox
          key={title}
          className="p-4 border border-base-300 rounded-lg hover:border-primary transition-colors"
        >
          <Heading as="h4" size="base">
            <LinkOverlay href="#">
              {title}
            </LinkOverlay>
          </Heading>
          <Text size="sm" muted className="mt-1">
            Click to explore
          </Text>
        </LinkBox>
      ))}
    </div>
  ),
};
