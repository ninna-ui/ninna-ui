import { Popover } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function PopoverWithArrow() {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline" size="sm">With Arrow</Button>
      </Popover.Trigger>
      <Popover.Content>
        <p className="text-sm text-base-content/70">
          This popover has an arrow pointer.
        </p>
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  );
}
