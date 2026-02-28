import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from "@ninna-ui/feedback";

const meta: Meta<typeof CircularProgress> = {
  title: "Feedback/CircularProgress",
  component: CircularProgress,
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
      description: "Size of the circular progress",
      table: { defaultValue: { summary: "md" } },
    },
    color: {
      control: "select",
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: "Color theme",
      table: { defaultValue: { summary: "primary" } },
    },
    showValue: {
      control: "boolean",
      description: "Whether to show the value label",
      table: { defaultValue: { summary: "false" } },
    },
    labelPosition: {
      control: "select",
      options: ["center", "bottom", "none"],
      description: "Position of the value label",
      table: { defaultValue: { summary: "center" } },
    },
    indeterminate: {
      control: "boolean",
      description: "Whether the progress is indeterminate",
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

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
    labelPosition: "center",
    size: "lg",
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <CircularProgress value={60} color="neutral" />
      <CircularProgress value={60} color="primary" />
      <CircularProgress value={60} color="secondary" />
      <CircularProgress value={60} color="accent" />
      <CircularProgress value={60} color="info" />
      <CircularProgress value={60} color="success" />
      <CircularProgress value={60} color="warning" />
      <CircularProgress value={60} color="danger" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-6">
      <CircularProgress value={60} size="xs" color="primary" />
      <CircularProgress value={60} size="sm" color="primary" />
      <CircularProgress value={60} size="md" color="primary" />
      <CircularProgress value={60} size="lg" color="primary" />
      <CircularProgress value={60} size="xl" color="primary" />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    color: "primary",
    size: "lg",
  },
};

export const CustomContent: Story = {
  render: () => (
    <CircularProgress value={75} color="primary" size="xl">
      <div className="text-center">
        <div className="text-lg font-bold text-base-content/70">75%</div>
        <div className="text-xs text-base-content/70">Complete</div>
      </div>
    </CircularProgress>
  ),
};
