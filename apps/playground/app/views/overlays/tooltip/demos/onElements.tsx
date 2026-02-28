import { Tooltip } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function TooltipOnElements() {
  return (
    <div className="flex items-center gap-4">
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button size="sm">Button</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip on a button</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <span className="text-primary underline cursor-help">Hover this text</span>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip on inline text</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center cursor-help text-primary font-bold text-sm">
            ?
          </div>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip on an icon</Tooltip.Content>
      </Tooltip>
    </div>
  );
}
