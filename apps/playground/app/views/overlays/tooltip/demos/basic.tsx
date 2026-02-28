import { Tooltip } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function BasicTooltip() {
  return (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="outline">Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>This is a tooltip</Tooltip.Content>
    </Tooltip>
  );
}
