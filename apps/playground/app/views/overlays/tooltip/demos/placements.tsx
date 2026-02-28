import { Tooltip } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function TooltipPlacements() {
  const placements = ["top", "right", "bottom", "left"] as const;

  return (
    <div className="flex flex-wrap gap-4 p-8">
      {placements.map((side) => (
        <Tooltip key={side}>
          <Tooltip.Trigger asChild>
            <Button variant="outline" size="sm">{side}</Button>
          </Tooltip.Trigger>
          <Tooltip.Content side={side}>Tooltip on {side}</Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  );
}
