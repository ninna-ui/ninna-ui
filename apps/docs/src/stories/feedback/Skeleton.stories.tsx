import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@ninna-ui/feedback";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Skeleton component is used to render a placeholder while the content is loading. It provides visual feedback that content is being loaded.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["pulse", "shine", "none"],
      description: "Animation variant",
      table: { defaultValue: { summary: "pulse" } },
    },
    width: {
      control: "text",
      description: "Width of the skeleton",
    },
    height: {
      control: "text",
      description: "Height of the skeleton",
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "full"],
      description: "Border radius",
      table: { defaultValue: { summary: "md" } },
    },
    loading: {
      control: "boolean",
      description: "Whether the skeleton is in loading state",
      table: { defaultValue: { summary: "true" } },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: "200px",
    height: "20px",
  },
};

export const Pulse: Story = {
  args: {
    variant: "pulse",
    width: "200px",
    height: "40px",
  },
};

export const Shine: Story = {
  args: {
    variant: "shine",
    width: "200px",
    height: "40px",
  },
};

export const NoAnimation: Story = {
  args: {
    variant: "none",
    width: "200px",
    height: "40px",
  },
};

export const Radiuses: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Skeleton width="200px" height="40px" radius="none" />
      <Skeleton width="200px" height="40px" radius="sm" />
      <Skeleton width="200px" height="40px" radius="md" />
      <Skeleton width="200px" height="40px" radius="lg" />
      <Skeleton width="200px" height="40px" radius="xl" />
      <Skeleton width="200px" height="40px" radius="full" />
    </div>
  ),
};

export const Circle: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <SkeletonCircle size="32px" />
      <SkeletonCircle size="40px" />
      <SkeletonCircle size="48px" />
      <SkeletonCircle size="64px" />
    </div>
  ),
};

export const Text: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <SkeletonText noOfLines={2} />
      <SkeletonText noOfLines={3} />
      <SkeletonText noOfLines={4} gap="12px" />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-80 p-4 border border-base-300 rounded-lg">
      <Skeleton height="180px" radius="lg" />
      <div className="mt-4">
        <SkeletonText noOfLines={2} />
      </div>
      <div className="flex gap-2 mt-4">
        <Skeleton width="80px" height="32px" radius="md" />
        <Skeleton width="80px" height="32px" radius="md" />
      </div>
    </div>
  ),
};

export const ProfileSkeleton: Story = {
  render: () => (
    <div className="flex items-center gap-4 w-80">
      <SkeletonCircle size="64px" />
      <div className="flex-1">
        <Skeleton height="20px" width="150px" className="mb-2" />
        <Skeleton height="16px" width="100px" />
      </div>
    </div>
  ),
};

export const FeedSkeleton: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex gap-4">
          <SkeletonCircle size="40px" />
          <div className="flex-1">
            <Skeleton height="16px" width="120px" className="mb-2" />
            <SkeletonText noOfLines={2} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div className="space-y-3 w-full max-w-lg">
      <div className="flex gap-4">
        <Skeleton height="16px" width="25%" />
        <Skeleton height="16px" width="35%" />
        <Skeleton height="16px" width="20%" />
        <Skeleton height="16px" width="20%" />
      </div>
      {[1, 2, 3, 4].map((row) => (
        <div key={row} className="flex gap-4">
          <Skeleton height="14px" width="25%" />
          <Skeleton height="14px" width="35%" />
          <Skeleton height="14px" width="20%" />
          <Skeleton height="14px" width="20%" />
        </div>
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Animation Variants</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-base-content/70 mb-2">Pulse</p>
            <Skeleton variant="pulse" width="200px" height="40px" />
          </div>
          <div>
            <p className="text-sm text-base-content/70 mb-2">Shine</p>
            <Skeleton variant="shine" width="200px" height="40px" />
          </div>
          <div>
            <p className="text-sm text-base-content/70 mb-2">None</p>
            <Skeleton variant="none" width="200px" height="40px" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Circle Sizes</h3>
        <div className="flex items-center gap-4">
          <SkeletonCircle size="32px" />
          <SkeletonCircle size="40px" />
          <SkeletonCircle size="48px" />
          <SkeletonCircle size="64px" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Text Lines</h3>
        <div className="w-80">
          <SkeletonText noOfLines={3} />
        </div>
      </div>
    </div>
  ),
};
