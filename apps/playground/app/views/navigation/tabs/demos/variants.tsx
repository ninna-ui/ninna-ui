import { Tabs } from "@ninna-ui/navigation";

export default function TabsVariants() {
  const variants = ["line", "enclosed", "soft", "outline"] as const;

  return (
    <div className="flex flex-col gap-8">
      {variants.map((variant) => (
        <div key={variant}>
          <p className="text-xs font-semibold uppercase tracking-wide text-base-content/70 mb-2">
            {variant}
          </p>
          <Tabs defaultValue="t1">
            <Tabs.List variant={variant}>
              <Tabs.Trigger value="t1">Account</Tabs.Trigger>
              <Tabs.Trigger value="t2">Password</Tabs.Trigger>
              <Tabs.Trigger value="t3">Settings</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="t1">
              <p className="text-sm text-base-content/70 p-4">
                Account content for {variant} variant.
              </p>
            </Tabs.Content>
          </Tabs>
        </div>
      ))}
    </div>
  );
}
