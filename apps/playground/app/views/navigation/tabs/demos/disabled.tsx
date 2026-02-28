import { Tabs } from "@ninna-ui/navigation";

export default function TabsDisabled() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Active</Tabs.Trigger>
        <Tabs.Trigger value="tab2" disabled>Disabled</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Also Active</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="text-sm text-base-content/70 p-4">First tab content.</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="text-sm text-base-content/70 p-4">Third tab content.</p>
      </Tabs.Content>
    </Tabs>
  );
}
