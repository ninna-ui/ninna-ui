import { Button } from "@ninna-ui/primitives";
import { BellIcon } from "lucide-react";

export default function Disabled() {
  return (
    <div className="flex flex-col gap-4">
      {/* Disabled across variants */}
      <div className="flex flex-wrap gap-2">
        <Button disabled color="primary">Solid</Button>
        <Button disabled variant="soft" color="primary">Soft</Button>
        <Button disabled variant="outline" color="primary">Outline</Button>
        <Button disabled variant="ghost" color="primary">Ghost</Button>
      </div>

      {/* Disabled with icon & loading */}
      <div className="flex flex-wrap gap-2">
        <Button disabled color="primary" leftIcon={<BellIcon />}>With Icon</Button>
        <Button disabled loading color="primary">Loading</Button>
      </div>
    </div>
  );
}
