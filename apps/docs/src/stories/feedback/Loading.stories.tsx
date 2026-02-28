import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "@ninna-ui/feedback";

const meta: Meta<typeof Loading> = {
  title: "Feedback/Loading",
  component: Loading,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["spin", "ping", "pulse", "dots"],
      description: "Animation style",
      table: { defaultValue: { summary: "spin" } },
    },
    color: {
      control: "select",
      options: ["neutral", "primary", "secondary", "accent", "info", "success", "warning", "danger"],
      description: "Color theme",
      table: { defaultValue: { summary: "primary" } },
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      description: "Size of the loading indicator",
      table: { defaultValue: { summary: "md" } },
    },
    label: {
      control: "text",
      description: "Accessible label for screen readers",
      table: { defaultValue: { summary: "Loading..." } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {
    variant: "spin",
    color: "primary",
    size: "md",
  },
};

export const Spin: Story = {
  args: {
    variant: "spin",
    color: "primary",
    size: "lg",
  },
};

export const Dots: Story = {
  args: {
    variant: "dots",
    color: "primary",
    size: "lg",
  },
};

export const Pulse: Story = {
  args: {
    variant: "pulse",
    color: "primary",
    size: "lg",
  },
};

export const Ping: Story = {
  args: {
    variant: "ping",
    color: "primary",
    size: "lg",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Loading variant="spin" color="primary" size="xs" />
      <Loading variant="spin" color="primary" size="sm" />
      <Loading variant="spin" color="primary" size="md" />
      <Loading variant="spin" color="primary" size="lg" />
      <Loading variant="spin" color="primary" size="xl" />
      <Loading variant="spin" color="primary" size="2xl" />
      <Loading variant="spin" color="primary" size="3xl" />
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Loading variant="spin" color="neutral" size="lg" />
      <Loading variant="spin" color="primary" size="lg" />
      <Loading variant="spin" color="secondary" size="lg" />
      <Loading variant="spin" color="accent" size="lg" />
      <Loading variant="spin" color="info" size="lg" />
      <Loading variant="spin" color="success" size="lg" />
      <Loading variant="spin" color="warning" size="lg" />
      <Loading variant="spin" color="danger" size="lg" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Spin Variant</h3>
        <div className="flex items-center gap-6">
          <Loading variant="spin" color="neutral" />
          <Loading variant="spin" color="primary" />
          <Loading variant="spin" color="secondary" />
          <Loading variant="spin" color="accent" />
          <Loading variant="spin" color="info" />
          <Loading variant="spin" color="success" />
          <Loading variant="spin" color="warning" />
          <Loading variant="spin" color="danger" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Dots Variant</h3>
        <div className="flex items-center gap-6">
          <Loading variant="dots" color="neutral" />
          <Loading variant="dots" color="primary" />
          <Loading variant="dots" color="secondary" />
          <Loading variant="dots" color="accent" />
          <Loading variant="dots" color="info" />
          <Loading variant="dots" color="success" />
          <Loading variant="dots" color="warning" />
          <Loading variant="dots" color="danger" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Pulse Variant</h3>
        <div className="flex items-center gap-6">
          <Loading variant="pulse" color="neutral" />
          <Loading variant="pulse" color="primary" />
          <Loading variant="pulse" color="secondary" />
          <Loading variant="pulse" color="accent" />
          <Loading variant="pulse" color="info" />
          <Loading variant="pulse" color="success" />
          <Loading variant="pulse" color="warning" />
          <Loading variant="pulse" color="danger" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Ping Variant</h3>
        <div className="flex items-center gap-6">
          <Loading variant="ping" color="neutral" />
          <Loading variant="ping" color="primary" />
          <Loading variant="ping" color="secondary" />
          <Loading variant="ping" color="accent" />
          <Loading variant="ping" color="info" />
          <Loading variant="ping" color="success" />
          <Loading variant="ping" color="warning" />
          <Loading variant="ping" color="danger" />
        </div>
      </div>
    </div>
  ),
};
