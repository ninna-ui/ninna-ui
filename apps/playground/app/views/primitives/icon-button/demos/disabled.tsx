import { IconButton } from "@ninna-ui/primitives";
import { Heart, Star, Settings, Bell } from "lucide-react";

export default function Disabled() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-base-content/70 mb-3">Disabled solid variants</p>
        <div className="flex flex-wrap gap-2">
          <IconButton icon={<Heart />} disabled color="neutral" aria-label="Disabled solid neutral" />
          <IconButton icon={<Star />} disabled color="primary" aria-label="Disabled solid primary" />
          <IconButton icon={<Settings />} disabled color="secondary" aria-label="Disabled solid secondary" />
          <IconButton icon={<Bell />} disabled color="accent" aria-label="Disabled solid accent" />
          <IconButton icon={<Heart />} disabled color="info" aria-label="Disabled solid info" />
          <IconButton icon={<Star />} disabled color="success" aria-label="Disabled solid success" />
          <IconButton icon={<Settings />} disabled color="warning" aria-label="Disabled solid warning" />
          <IconButton icon={<Bell />} disabled color="danger" aria-label="Disabled solid danger" />
        </div>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-3">Disabled soft variants</p>
        <div className="flex flex-wrap gap-2">
          <IconButton icon={<Heart />} disabled variant="soft" color="neutral" aria-label="Disabled soft neutral" />
          <IconButton icon={<Star />} disabled variant="soft" color="primary" aria-label="Disabled soft primary" />
          <IconButton icon={<Settings />} disabled variant="soft" color="secondary" aria-label="Disabled soft secondary" />
          <IconButton icon={<Bell />} disabled variant="soft" color="accent" aria-label="Disabled soft accent" />
          <IconButton icon={<Heart />} disabled variant="soft" color="info" aria-label="Disabled soft info" />
          <IconButton icon={<Star />} disabled variant="soft" color="success" aria-label="Disabled soft success" />
          <IconButton icon={<Settings />} disabled variant="soft" color="warning" aria-label="Disabled soft warning" />
          <IconButton icon={<Bell />} disabled variant="soft" color="danger" aria-label="Disabled soft danger" />
        </div>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-3">Disabled outline variants</p>
        <div className="flex flex-wrap gap-2">
          <IconButton icon={<Heart />} disabled variant="outline" color="neutral" aria-label="Disabled outline neutral" />
          <IconButton icon={<Star />} disabled variant="outline" color="primary" aria-label="Disabled outline primary" />
          <IconButton icon={<Settings />} disabled variant="outline" color="secondary" aria-label="Disabled outline secondary" />
          <IconButton icon={<Bell />} disabled variant="outline" color="accent" aria-label="Disabled outline accent" />
          <IconButton icon={<Heart />} disabled variant="outline" color="info" aria-label="Disabled outline info" />
          <IconButton icon={<Star />} disabled variant="outline" color="success" aria-label="Disabled outline success" />
          <IconButton icon={<Settings />} disabled variant="outline" color="warning" aria-label="Disabled outline warning" />
          <IconButton icon={<Bell />} disabled variant="outline" color="danger" aria-label="Disabled outline danger" />
        </div>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-3">Disabled ghost variants</p>
        <div className="flex flex-wrap gap-2">
          <IconButton icon={<Heart />} disabled variant="ghost" color="neutral" aria-label="Disabled ghost neutral" />
          <IconButton icon={<Star />} disabled variant="ghost" color="primary" aria-label="Disabled ghost primary" />
          <IconButton icon={<Settings />} disabled variant="ghost" color="secondary" aria-label="Disabled ghost secondary" />
          <IconButton icon={<Bell />} disabled variant="ghost" color="accent" aria-label="Disabled ghost accent" />
          <IconButton icon={<Heart />} disabled variant="ghost" color="info" aria-label="Disabled ghost info" />
          <IconButton icon={<Star />} disabled variant="ghost" color="success" aria-label="Disabled ghost success" />
          <IconButton icon={<Settings />} disabled variant="ghost" color="warning" aria-label="Disabled ghost warning" />
          <IconButton icon={<Bell />} disabled variant="ghost" color="danger" aria-label="Disabled ghost danger" />
        </div>
      </div>
    </div>
  );
}
