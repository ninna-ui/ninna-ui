import { Tabs } from "@ninna-ui/navigation";

export default function BasicTabs() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="text-sm text-base-content/70 p-4">
          Manage your account settings and preferences.
        </p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="text-sm text-base-content/70 p-4">
          Change your password and security settings.
        </p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="text-sm text-base-content/70 p-4">
          Configure application settings.
        </p>
      </Tabs.Content>
    </Tabs>
  );
}
