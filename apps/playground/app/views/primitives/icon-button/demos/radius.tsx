import { IconButton } from "@ninna-ui/primitives";
import { Heart } from "lucide-react";

export default function Radius() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <IconButton icon={<Heart />} radius="none" color="primary" aria-label="Like (none)" />
        <span className="text-xs text-base-content/70">none</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconButton icon={<Heart />} radius="sm" color="primary" aria-label="Like (sm)" />
        <span className="text-xs text-base-content/70">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconButton icon={<Heart />} radius="md" color="primary" aria-label="Like (md)" />
        <span className="text-xs text-base-content/70">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconButton icon={<Heart />} radius="lg" color="primary" aria-label="Like (lg)" />
        <span className="text-xs text-base-content/70">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconButton icon={<Heart />} radius="xl" color="primary" aria-label="Like (xl)" />
        <span className="text-xs text-base-content/70">xl</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconButton icon={<Heart />} radius="full" color="primary" aria-label="Like (full)" />
        <span className="text-xs text-base-content/70">full</span>
      </div>
    </div>
  );
}
