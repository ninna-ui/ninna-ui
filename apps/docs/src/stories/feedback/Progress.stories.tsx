import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@ninna-ui/feedback";

const meta: Meta<typeof Progress> = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Current progress value",
      table: { defaultValue: { summary: "0" } },
    },
    max: {
      control: { type: "number" },
      description: "Maximum value",
      table: { defaultValue: { summary: "100" } },
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Size of the progress bar",
      table: { defaultValue: { summary: "md" } },
    },
    color: {
      control: "select",
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: "Color theme",
      table: { defaultValue: { summary: "primary" } },
    },
    variant: {
      control: "select",
      options: ["default", "striped", "animated"],
      description: "Visual style variant",
      table: { defaultValue: { summary: "default" } },
    },
    showValue: {
      control: "boolean",
      description: "Whether to show the value label",
      table: { defaultValue: { summary: "false" } },
    },
    labelPosition: {
      control: "select",
      options: ["left", "right", "top", "inside", "none"],
      description: "Position of the value label",
      table: { defaultValue: { summary: "right" } },
    },
    indeterminate: {
      control: "boolean",
      description: "Whether the progress is indeterminate",
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
    color: "primary",
    size: "md",
  },
};

export const WithValue: Story = {
  args: {
    value: 65,
    color: "primary",
    showValue: true,
    labelPosition: "right",
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full">
      <Progress value={60} color="neutral" />
      <Progress value={60} color="primary" />
      <Progress value={60} color="secondary" />
      <Progress value={60} color="accent" />
      <Progress value={60} color="info" />
      <Progress value={60} color="success" />
      <Progress value={60} color="warning" />
      <Progress value={60} color="danger" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full">
      <div className="space-y-1">
        <span className="text-xs text-base-content/70">xs</span>
        <Progress value={60} size="xs" color="primary" />
      </div>
      <div className="space-y-1">
        <span className="text-xs text-base-content/70">sm</span>
        <Progress value={60} size="sm" color="primary" />
      </div>
      <div className="space-y-1">
        <span className="text-xs text-base-content/70">md</span>
        <Progress value={60} size="md" color="primary" />
      </div>
      <div className="space-y-1">
        <span className="text-xs text-base-content/70">lg</span>
        <Progress value={60} size="lg" color="primary" />
      </div>
      <div className="space-y-1">
        <span className="text-xs text-base-content/70">xl</span>
        <Progress value={60} size="xl" color="primary" />
      </div>
    </div>
  ),
};

export const Striped: Story = {
  args: {
    value: 60,
    color: "primary",
    variant: "striped",
  },
};

export const Animated: Story = {
  args: {
    value: 60,
    color: "primary",
    variant: "animated",
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    color: "primary",
  },
};

export const LabelPositions: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-full">
      <div className="space-y-2">
        <span className="text-sm text-base-content/70">Label on Right</span>
        <Progress value={65} showValue labelPosition="right" color="primary" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-base-content/70">Label on Left</span>
        <Progress value={45} showValue labelPosition="left" color="success" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-base-content/70">Label on Top</span>
        <Progress value={80} showValue labelPosition="top" color="info" label="Progress" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-base-content/70">Label Inside (xl size)</span>
        <Progress value={55} showValue labelPosition="inside" color="secondary" size="xl" />
      </div>
    </div>
  ),
};

export const CustomFormat: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full">
      <Progress
        value={750}
        max={1000}
        showValue
        labelPosition="right"
        color="primary"
        formatLabel={(value, max) => `${value}MB / ${max}MB`}
      />
      <Progress
        value={3}
        max={5}
        showValue
        labelPosition="right"
        color="success"
        formatLabel={(value, max) => `Step ${value} of ${max}`}
      />
    </div>
  ),
};
