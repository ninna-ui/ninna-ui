import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from '@ninna-ui/overlays';
import { Button } from '@ninna-ui/primitives';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Overlays/DropdownMenu',
  component: DropdownMenu,
  subcomponents: {
    Trigger: DropdownMenu.Trigger,
    Content: DropdownMenu.Content,
    Group: DropdownMenu.Group,
    Item: DropdownMenu.Item,
    CheckboxItem: DropdownMenu.CheckboxItem,
    RadioGroup: DropdownMenu.RadioGroup,
    RadioItem: DropdownMenu.RadioItem,
    Label: DropdownMenu.Label,
    Separator: DropdownMenu.Separator,
    Sub: DropdownMenu.Sub,
    SubTrigger: DropdownMenu.SubTrigger,
    SubContent: DropdownMenu.SubContent,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controlled open state',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Default open state (uncontrolled)',
      table: { defaultValue: { summary: 'false' } },
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when open state changes',
    },
    modal: {
      control: 'boolean',
      description: 'Whether the dropdown is modal',
      table: { defaultValue: { summary: 'true' } },
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Reading direction',
      table: { defaultValue: { summary: 'ltr' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Item>Settings</DropdownMenu.Item>
        <DropdownMenu.Item>Billing</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Sign out</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const WithLabelsAndGroups: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Actions</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Group>
          <DropdownMenu.Item>Profile</DropdownMenu.Item>
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Label>Team</DropdownMenu.Label>
        <DropdownMenu.Group>
          <DropdownMenu.Item>Members</DropdownMenu.Item>
          <DropdownMenu.Item>Invitations</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Item destructive>Delete Account</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Edit</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <span className="flex-1">Undo</span>
          <span className="ml-auto text-xs text-base-content/70">⌘Z</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <span className="flex-1">Redo</span>
          <span className="ml-auto text-xs text-base-content/70">⌘⇧Z</span>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <span className="flex-1">Cut</span>
          <span className="ml-auto text-xs text-base-content/70">⌘X</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <span className="flex-1">Copy</span>
          <span className="ml-auto text-xs text-base-content/70">⌘C</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <span className="flex-1">Paste</span>
          <span className="ml-auto text-xs text-base-content/70">⌘V</span>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <span className="flex-1">Select All</span>
          <span className="ml-auto text-xs text-base-content/70">⌘A</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const CheckboxItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">View Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Visibility</DropdownMenu.Label>
        <DropdownMenu.CheckboxItem checked>Sidebar</DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem checked>Toolbar</DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem>Status Bar</DropdownMenu.CheckboxItem>
        <DropdownMenu.Separator />
        <DropdownMenu.CheckboxItem checked>Line Numbers</DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem>Word Wrap</DropdownMenu.CheckboxItem>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const RadioItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Sort By</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Sort Order</DropdownMenu.Label>
        <DropdownMenu.RadioGroup value="date">
          <DropdownMenu.RadioItem value="name">Name</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="date">Date Modified</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="size">Size</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="type">Type</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const WithSubMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">More Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>New File</DropdownMenu.Item>
        <DropdownMenu.Item>Open</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Email</DropdownMenu.Item>
            <DropdownMenu.Item>Slack</DropdownMenu.Item>
            <DropdownMenu.Item>Copy Link</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Export As</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>PDF</DropdownMenu.Item>
            <DropdownMenu.Item>CSV</DropdownMenu.Item>
            <DropdownMenu.Item>JSON</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item destructive>Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">File</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>New</DropdownMenu.Item>
        <DropdownMenu.Item>Open</DropdownMenu.Item>
        <DropdownMenu.Item disabled>Save (disabled)</DropdownMenu.Item>
        <DropdownMenu.Item disabled>Save As (disabled)</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Close</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const DestructiveItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Danger Zone</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item destructive>Archive</DropdownMenu.Item>
        <DropdownMenu.Item destructive>Delete permanently</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};
