import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@ninna-ui/feedback";
import { Button } from "@ninna-ui/primitives";
import { 
  Terminal,
  ShieldCheck,
  Zap
} from "lucide-react";

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
      description: "Alert title text",
    },
    description: {
      control: "text",
      description: "Alert description/message text",
    },
    icon: {
      control: "text",
      description: "Custom icon to display (ReactNode)",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the default icon based on color",
      table: { defaultValue: { summary: "true" } },
    },
    dismissible: {
      control: "boolean",
      description: "Whether the alert can be dismissed",
      table: { defaultValue: { summary: "false" } },
    },
    onDismiss: {
      action: "onDismiss",
      description: "Callback when alert is dismissed",
    },
    action: {
      control: "text",
      description: "Action element (button, link, etc.)",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the alert",
      table: { defaultValue: { summary: "md" } },
    },
    role: {
      control: "text",
      description: "ARIA role",
      table: { defaultValue: { summary: "alert" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: "System Update",
    description: "A new version of the dashboard is available. Please refresh your browser to see the latest changes.",
    variant: "soft",
    color: "primary",
  },
};

export const StatusVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[600px]">
      <Alert 
        color="info" 
        title="Information" 
        description="Your subscription will renew automatically on May 1st."
      />
      <Alert 
        color="success" 
        title="Payment Successful" 
        description="We've processed your payment. Your receipt has been sent to your email."
      />
      <Alert 
        color="warning" 
        title="Storage Limit Reached" 
        description="You have used 90% of your available storage. Consider upgrading your plan."
      />
      <Alert 
        color="danger" 
        title="Connection Error" 
        description="Unable to connect to the database. Please check your network settings."
      />
    </div>
  ),
};

export const WithCustomIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[600px]">
      <Alert 
        variant="outline"
        color="neutral"
        icon={<Terminal size={18} />}
        title="Ready to deploy"
        description="Successfully built 14 packages in 2.3 seconds."
      />
      <Alert 
        variant="soft"
        color="accent"
        icon={<Zap size={18} />}
        title="Performance Boost"
        description="Optimized image delivery for all assets in the playground."
      />
      <Alert 
        variant="soft"
        color="secondary"
        icon={<ShieldCheck size={18} />}
        title="Security Audit"
        description="No vulnerabilities found in your dependency tree."
      />
    </div>
  ),
};

export const Dismissible: Story = {
  args: {
    title: "Update Available",
    description: "Version 0.5.0 is now live with enhanced Storybook support.",
    variant: "soft",
    color: "info",
    dismissible: true,
  },
};

export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[600px]">
       <Alert
        variant="soft"
        color="danger"
        title="Critical Vulnerability"
        description="A known security issue was found in one of your dependencies."
        action={
          <Button size="sm" color="danger" variant="solid">
            View Report
          </Button>
        }
      />
      <Alert
        variant="outline"
        color="primary"
        title="Feature Discovery"
        description="Try out the new Timeline component with custom icons."
        action={
          <div className="flex gap-2">
            <Button size="sm" variant="ghost">Learn More</Button>
            <Button size="sm" variant="soft">Try Now</Button>
          </div>
        }
      />
    </div>
  ),
};

export const AllVisuals: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-base-content/40">Solid</h3>
        <Alert variant="solid" color="primary" title="Primary" description="Solid primary alert" />
        <Alert variant="solid" color="success" title="Success" description="Solid success alert" />
        <Alert variant="solid" color="warning" title="Warning" description="Solid warning alert" />
        <Alert variant="solid" color="danger" title="Danger" description="Solid danger alert" />
      </div>
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-base-content/40">Soft</h3>
        <Alert variant="soft" color="primary" title="Primary" description="Soft primary alert" />
        <Alert variant="soft" color="success" title="Success" description="Soft success alert" />
        <Alert variant="soft" color="warning" title="Warning" description="Soft warning alert" />
        <Alert variant="soft" color="danger" title="Danger" description="Soft danger alert" />
      </div>
    </div>
  ),
};
