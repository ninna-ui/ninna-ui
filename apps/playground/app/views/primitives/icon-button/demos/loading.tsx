import { IconButton } from "@ninna-ui/primitives";
import { Heart, Star, Settings, Bell } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-base-content/70 mb-3">Loading state with different variants</p>
        <div className="flex flex-wrap gap-2">
          <IconButton icon={<Heart />} loading color="primary" aria-label="Loading solid" />
          <IconButton icon={<Star />} loading variant="soft" color="primary" aria-label="Loading soft" />
          <IconButton icon={<Settings />} loading variant="outline" color="primary" aria-label="Loading outline" />
          <IconButton icon={<Bell />} loading variant="ghost" color="primary" aria-label="Loading ghost" />
        </div>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-3">Loading state with different sizes</p>
        <div className="flex flex-wrap items-end gap-2">
          <IconButton icon={<Heart />} loading size="xs" color="primary" aria-label="Loading xs" />
          <IconButton icon={<Heart />} loading size="sm" color="primary" aria-label="Loading sm" />
          <IconButton icon={<Heart />} loading size="md" color="primary" aria-label="Loading md" />
          <IconButton icon={<Heart />} loading size="lg" color="primary" aria-label="Loading lg" />
          <IconButton icon={<Heart />} loading size="xl" color="primary" aria-label="Loading xl" />
        </div>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-3">Loading state with different colors</p>
        <div className="flex flex-wrap gap-2">
          <IconButton icon={<Heart />} loading color="neutral" aria-label="Loading neutral" />
          <IconButton icon={<Heart />} loading color="primary" aria-label="Loading primary" />
          <IconButton icon={<Heart />} loading color="secondary" aria-label="Loading secondary" />
          <IconButton icon={<Heart />} loading color="accent" aria-label="Loading accent" />
          <IconButton icon={<Heart />} loading color="info" aria-label="Loading info" />
          <IconButton icon={<Heart />} loading color="success" aria-label="Loading success" />
          <IconButton icon={<Heart />} loading color="warning" aria-label="Loading warning" />
          <IconButton icon={<Heart />} loading color="danger" aria-label="Loading danger" />
        </div>
      </div>
    </div>
  );
}
