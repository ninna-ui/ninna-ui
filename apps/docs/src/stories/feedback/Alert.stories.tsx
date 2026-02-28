import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@ninna-ui/feedback";
import { Button } from "@ninna-ui/primitives";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "soft", "outline"],
      description: "Visual style variant",
      table: { defaultValue: { summary: "soft" } },
    },
    color: {
      control: "select",
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: "Color theme",
      table: { defaultValue: { summary: 'neutral' } },
    },
    title: {
      control: "text",
      description: "Alert title",
    },
    description: {
      control: "text",
      description: "Alert description/message",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the default icon",
      table: { defaultValue: { summary: "true" } },
    },
    dismissible: {
      control: "boolean",
      description: "Whether the alert can be dismissed",
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: "Alert Title",
    description: "This is an alert message with some important information.",
    variant: "soft",
    color: "neutral",
  },
};

export const Solid: Story = {
  args: {
    title: "Solid Alert",
    description: "This is a solid alert with high emphasis.",
    variant: "solid",
    color: "primary",
  },
};

export const Soft: Story = {
  args: {
    title: "Soft Alert",
    description: "This is a soft alert with subtle emphasis.",
    variant: "soft",
    color: "primary",
  },
};

export const Outline: Story = {
  args: {
    title: "Outline Alert",
    description: "This is an outline alert with border emphasis.",
    variant: "outline",
    color: "primary",
  },
};

export const Success: Story = {
  args: {
    title: "Success!",
    description: "Your changes have been saved successfully.",
    variant: "soft",
    color: "success",
  },
};

export const Danger: Story = {
  args: {
    title: "Error",
    description: "There was an error processing your request.",
    variant: "soft",
    color: "danger",
  },
};

export const Warning: Story = {
  args: {
    title: "Warning",
    description: "Please review your information before continuing.",
    variant: "soft",
    color: "warning",
  },
};

export const Info: Story = {
  args: {
    title: "Information",
    description: "A new version is available for download.",
    variant: "soft",
    color: "info",
  },
};

export const Dismissible: Story = {
  args: {
    title: "Dismissible Alert",
    description: "Click the X button to dismiss this alert.",
    variant: "soft",
    color: "info",
    dismissible: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    title: "No Icon",
    description: "This alert has no icon displayed.",
    variant: "soft",
    color: "neutral",
    showIcon: false,
  },
};

export const WithAction: Story = {
  render: () => (
    <Alert
      variant="soft"
      color="warning"
      title="Session Expiring"
      description="Your session will expire in 5 minutes."
      action={
        <Button size="sm" color="warning">
          Extend Session
        </Button>
      }
    />
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Solid Variant</h3>
        <div className="flex flex-col gap-3">
          <Alert variant="solid" color="neutral" title="Neutral" description="Neutral solid alert" />
          <Alert variant="solid" color="primary" title="Primary" description="Primary solid alert" />
          <Alert variant="solid" color="secondary" title="Secondary" description="Secondary solid alert" />
          <Alert variant="solid" color="accent" title="Accent" description="Accent solid alert" />
          <Alert variant="solid" color="info" title="Info" description="Info solid alert" />
          <Alert variant="solid" color="success" title="Success" description="Success solid alert" />
          <Alert variant="solid" color="warning" title="Warning" description="Warning solid alert" />
          <Alert variant="solid" color="danger" title="Danger" description="Danger solid alert" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Soft Variant</h3>
        <div className="flex flex-col gap-3">
          <Alert variant="soft" color="neutral" title="Neutral" description="Neutral soft alert" />
          <Alert variant="soft" color="primary" title="Primary" description="Primary soft alert" />
          <Alert variant="soft" color="secondary" title="Secondary" description="Secondary soft alert" />
          <Alert variant="soft" color="accent" title="Accent" description="Accent soft alert" />
          <Alert variant="soft" color="info" title="Info" description="Info soft alert" />
          <Alert variant="soft" color="success" title="Success" description="Success soft alert" />
          <Alert variant="soft" color="warning" title="Warning" description="Warning soft alert" />
          <Alert variant="soft" color="danger" title="Danger" description="Danger soft alert" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Outline Variant</h3>
        <div className="flex flex-col gap-3">
          <Alert variant="outline" color="neutral" title="Neutral" description="Neutral outline alert" />
          <Alert variant="outline" color="primary" title="Primary" description="Primary outline alert" />
          <Alert variant="outline" color="secondary" title="Secondary" description="Secondary outline alert" />
          <Alert variant="outline" color="accent" title="Accent" description="Accent outline alert" />
          <Alert variant="outline" color="info" title="Info" description="Info outline alert" />
          <Alert variant="outline" color="success" title="Success" description="Success outline alert" />
          <Alert variant="outline" color="warning" title="Warning" description="Warning outline alert" />
          <Alert variant="outline" color="danger" title="Danger" description="Danger outline alert" />
        </div>
      </div>
    </div>
  ),
};
