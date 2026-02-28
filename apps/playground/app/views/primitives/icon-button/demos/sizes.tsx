import { IconButton } from "@ninna-ui/primitives";
import { Heart } from "lucide-react";

export default function Sizes() {
  return (
    <div className="flex flex-wrap items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <IconButton icon={<Heart />} size="xs" color="primary" aria-label="Like (xs)" />
        <span className="text-xs text-base-content/70">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconButton icon={<Heart />} size="sm" color="primary" aria-label="Like (sm)" />
        <span className="text-xs text-base-content/70">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconButton icon={<Heart />} size="md" color="primary" aria-label="Like (md)" />
        <span className="text-xs text-base-content/70">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconButton icon={<Heart />} size="lg" color="primary" aria-label="Like (lg)" />
        <span className="text-xs text-base-content/70">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconButton icon={<Heart />} size="xl" color="primary" aria-label="Like (xl)" />
        <span className="text-xs text-base-content/70">xl</span>
      </div>
    </div>
  );
}
