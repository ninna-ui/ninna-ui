import { Tooltip } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function TooltipCustomDelay() {
  return (
    <div className="flex gap-4">
      <Tooltip delayDuration={0}>
        <Tooltip.Trigger asChild>
          <Button variant="outline" size="sm">No Delay</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Instant tooltip (0ms)</Tooltip.Content>
      </Tooltip>
      <Tooltip delayDuration={500}>
        <Tooltip.Trigger asChild>
          <Button variant="outline" size="sm">500ms Delay</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Slow tooltip (500ms)</Tooltip.Content>
      </Tooltip>
      <Tooltip delayDuration={1000}>
        <Tooltip.Trigger asChild>
          <Button variant="outline" size="sm">1000ms Delay</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Very slow tooltip (1000ms)</Tooltip.Content>
      </Tooltip>
    </div>
  );
}
