import { Tabs } from "@ninna-ui/navigation";

export default function TabsSizes() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="flex flex-col gap-6">
      {sizes.map((size) => (
        <div key={size}>
          <p className="text-xs font-semibold uppercase tracking-wide text-base-content/70 mb-2">
            Size: {size}
          </p>
          <Tabs defaultValue="t1">
            <Tabs.List size={size}>
              <Tabs.Trigger value="t1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="t2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="t3">Tab 3</Tabs.Trigger>
            </Tabs.List>
          </Tabs>
        </div>
      ))}
    </div>
  );
}
