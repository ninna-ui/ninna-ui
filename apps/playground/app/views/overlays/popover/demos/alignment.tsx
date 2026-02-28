import { Popover } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function PopoverAlignment() {
  const aligns = ["start", "center", "end"] as const;

  return (
    <div className="flex flex-wrap gap-4">
      {aligns.map((align) => (
        <Popover key={align}>
          <Popover.Trigger asChild>
            <Button variant="outline" size="sm">align: {align}</Button>
          </Popover.Trigger>
          <Popover.Content align={align}>
            <p className="text-sm text-base-content/70">
              Aligned to <strong>{align}</strong>.
            </p>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
      ))}
    </div>
  );
}
