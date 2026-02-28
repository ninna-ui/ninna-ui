import { Popover } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function PopoverRichContent() {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline" size="sm">User Info</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col gap-3 w-64">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              JD
            </div>
            <div>
              <p className="font-semibold text-base-content">John Doe</p>
              <p className="text-xs text-base-content/70">john@example.com</p>
            </div>
          </div>
          <hr className="border-base-200" />
          <div className="flex gap-4 text-sm text-base-content/70">
            <span><strong className="text-base-content">12</strong> Posts</span>
            <span><strong className="text-base-content">340</strong> Followers</span>
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );
}
