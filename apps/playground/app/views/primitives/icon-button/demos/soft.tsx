import { IconButton } from "@ninna-ui/primitives";
import { Heart, Star, Settings, Bell, Search, Plus, Trash2, Edit } from "lucide-react";

export default function Soft() {
  return (
    <div className="flex flex-wrap gap-2">
      <IconButton icon={<Heart />} variant="soft" color="neutral" aria-label="Neutral" />
      <IconButton icon={<Star />} variant="soft" color="primary" aria-label="Primary" />
      <IconButton icon={<Settings />} variant="soft" color="secondary" aria-label="Secondary" />
      <IconButton icon={<Bell />} variant="soft" color="accent" aria-label="Accent" />
      <IconButton icon={<Search />} variant="soft" color="info" aria-label="Info" />
      <IconButton icon={<Plus />} variant="soft" color="success" aria-label="Success" />
      <IconButton icon={<Trash2 />} variant="soft" color="warning" aria-label="Warning" />
      <IconButton icon={<Edit />} variant="soft" color="danger" aria-label="Danger" />
    </div>
  );
}
