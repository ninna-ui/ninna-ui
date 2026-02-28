import { Tooltip } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function TooltipWithArrow() {
  return (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="outline" size="sm">With Arrow</Button>
      </Tooltip.Trigger>
      <Tooltip.Content hasArrow>Tooltip with arrow</Tooltip.Content>
    </Tooltip>
  );
}
