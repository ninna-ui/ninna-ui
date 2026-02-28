import { IconButton } from "@ninna-ui/primitives";
import { Heart, Star, Settings, Bell, Search, Plus, Trash2, Edit } from "lucide-react";

export default function Solid() {
  return (
    <div className="flex flex-wrap gap-2">
      <IconButton icon={<Heart />} color="neutral" aria-label="Neutral" />
      <IconButton icon={<Star />} color="primary" aria-label="Primary" />
      <IconButton icon={<Settings />} color="secondary" aria-label="Secondary" />
      <IconButton icon={<Bell />} color="accent" aria-label="Accent" />
      <IconButton icon={<Search />} color="info" aria-label="Info" />
      <IconButton icon={<Plus />} color="success" aria-label="Success" />
      <IconButton icon={<Trash2 />} color="warning" aria-label="Warning" />
      <IconButton icon={<Edit />} color="danger" aria-label="Danger" />
    </div>
  );
}
