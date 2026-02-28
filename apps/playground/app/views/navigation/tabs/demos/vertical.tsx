import { Tabs } from "@ninna-ui/navigation";

export default function TabsVertical() {
  return (
    <Tabs defaultValue="tab1" orientation="vertical">
      <Tabs.List>
        <Tabs.Trigger value="tab1">General</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Security</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Notifications</Tabs.Trigger>
        <Tabs.Trigger value="tab4">Integrations</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="text-sm text-base-content/70 p-4">General settings panel.</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="text-sm text-base-content/70 p-4">Security settings panel.</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="text-sm text-base-content/70 p-4">Notification preferences.</p>
      </Tabs.Content>
      <Tabs.Content value="tab4">
        <p className="text-sm text-base-content/70 p-4">Integration settings.</p>
      </Tabs.Content>
    </Tabs>
  );
}
