import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@ninna-ui/navigation';
import { User, Lock, Settings, Bell, Globe, Database, Shield } from 'lucide-react';

const meta: Meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Controlled active tab value',
    },
    defaultValue: {
      control: 'text',
      description: 'Default active tab value (uncontrolled)',
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Callback when active tab changes',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the tabs',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    activationMode: {
      control: 'select',
      options: ['automatic', 'manual'],
      description: 'Whether keyboard activation is automatic',
      table: { defaultValue: { summary: 'automatic' } },
    },
    variant: {
      control: 'select',
      options: ['line', 'enclosed', 'soft', 'outline'],
      description: 'Visual style variant (Tabs.List)',
      table: { defaultValue: { summary: 'line' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tab triggers (Tabs.List)',
      table: { defaultValue: { summary: 'md' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[450px]">
      <Tabs.List>
        <Tabs.Trigger value="tab1" className="gap-2">
          <User size={14} /> Account
        </Tabs.Trigger>
        <Tabs.Trigger value="tab2" className="gap-2">
          <Lock size={14} /> Password
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3" className="gap-2">
          <Settings size={14} /> Settings
        </Tabs.Trigger>
      </Tabs.List>
      <div className="mt-4 p-4 bg-base-100 rounded-xl border border-base-200 min-h-[100px]">
        <Tabs.Content value="tab1">
          <h3 className="text-lg font-bold mb-2">Account Settings</h3>
          <p className="text-sm text-base-content/70">Update your profile information and email preferences.</p>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <h3 className="text-lg font-bold mb-2">Security</h3>
          <p className="text-sm text-base-content/70">Secure your account with a strong password and 2FA.</p>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <h3 className="text-lg font-bold mb-2">Preferences</h3>
          <p className="text-sm text-base-content/70">Configure your application appearance and behavior.</p>
        </Tabs.Content>
      </div>
    </Tabs>
  ),
};

export const Variants: Story = {
  render: () => {
    const variants = ['line', 'enclosed', 'soft', 'outline'] as const;
    return (
      <div className="flex flex-col gap-10 w-[500px]">
        {variants.map((variant) => (
          <div key={variant}>
            <h4 className="text-xs font-bold mb-3 text-base-content/40 uppercase tracking-widest">{variant} variant</h4>
            <Tabs defaultValue="1">
              <Tabs.List variant={variant}>
                <Tabs.Trigger value="1">Overview</Tabs.Trigger>
                <Tabs.Trigger value="2">Analytics</Tabs.Trigger>
                <Tabs.Trigger value="3">Reports</Tabs.Trigger>
              </Tabs.List>
            </Tabs>
          </div>
        ))}
      </div>
    );
  },
};

export const SoftPill: Story = {
  render: () => (
    <div className="p-8 bg-base-200/50 rounded-3xl border border-base-200">
      <Tabs defaultValue="all">
        <Tabs.List variant="soft" className="bg-base-100 p-1 rounded-full border border-base-200">
          <Tabs.Trigger value="all" className="rounded-full px-6">All</Tabs.Trigger>
          <Tabs.Trigger value="unread" className="rounded-full px-6">Unread</Tabs.Trigger>
          <Tabs.Trigger value="archived" className="rounded-full px-6">Archived</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    </div>
  ),
};

export const VerticalSidebar: Story = {
  render: () => (
    <div className="w-[600px] h-[300px] flex bg-base-100 rounded-2xl border border-base-200 overflow-hidden shadow-sm">
      <Tabs defaultValue="gen" orientation="vertical" className="flex-1 flex overflow-hidden">
        <Tabs.List className="w-48 bg-base-200/30 border-r border-base-200 p-2">
          <Tabs.Trigger value="gen" className="justify-start gap-3 px-3 py-2">
            <Globe size={16} /> General
          </Tabs.Trigger>
          <Tabs.Trigger value="not" className="justify-start gap-3 px-3 py-2">
            <Bell size={16} /> Notifications
          </Tabs.Trigger>
          <Tabs.Trigger value="sec" className="justify-start gap-3 px-3 py-2">
            <Shield size={16} /> Security
          </Tabs.Trigger>
          <Tabs.Trigger value="dat" className="justify-start gap-3 px-3 py-2">
            <Database size={16} /> Data & Privacy
          </Tabs.Trigger>
        </Tabs.List>
        <div className="flex-1 p-6 overflow-auto">
          <Tabs.Content value="gen">
            <h2 className="text-xl font-bold mb-4">General Settings</h2>
            <p className="text-sm text-base-content/70 leading-relaxed">
              Configure your regional settings, language preferences, and time zone. 
              These settings will affect how dates and currencies are displayed.
            </p>
          </Tabs.Content>
          <Tabs.Content value="not">
             <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
             <p className="text-sm text-base-content/70">Manage how and when you receive alerts.</p>
          </Tabs.Content>
        </div>
      </Tabs>
    </div>
  ),
};
