import { Popover } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function PopoverPlacements() {
  const placements = ["top", "right", "bottom", "left"] as const;

  return (
    <div className="flex flex-wrap gap-4 p-8">
      {placements.map((side) => (
        <Popover key={side}>
          <Popover.Trigger asChild>
            <Button variant="outline" size="sm">{side}</Button>
          </Popover.Trigger>
          <Popover.Content side={side}>
            <p className="text-sm text-base-content/70">
              Placed on the <strong>{side}</strong>.
            </p>
            <Popover.Arrow />
          </Popover.Content>
        </Popover>
      ))}
    </div>
  );
}
