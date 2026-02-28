import { Popover } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function BasicPopover() {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-base-content">Popover Title</h4>
          <p className="text-sm text-base-content/70">
            This is a basic popover with some content.
          </p>
        </div>
      </Popover.Content>
    </Popover>
  );
}
