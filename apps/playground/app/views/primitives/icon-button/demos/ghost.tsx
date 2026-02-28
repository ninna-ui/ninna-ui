import { IconButton } from "@ninna-ui/primitives";
import { Heart, Star, Settings, Bell, Search, Plus, Trash2, Edit } from "lucide-react";

export default function Ghost() {
  return (
    <div className="flex flex-wrap gap-2">
      <IconButton icon={<Heart />} variant="ghost" color="neutral" aria-label="Neutral" />
      <IconButton icon={<Star />} variant="ghost" color="primary" aria-label="Primary" />
      <IconButton icon={<Settings />} variant="ghost" color="secondary" aria-label="Secondary" />
      <IconButton icon={<Bell />} variant="ghost" color="accent" aria-label="Accent" />
      <IconButton icon={<Search />} variant="ghost" color="info" aria-label="Info" />
      <IconButton icon={<Plus />} variant="ghost" color="success" aria-label="Success" />
      <IconButton icon={<Trash2 />} variant="ghost" color="warning" aria-label="Warning" />
      <IconButton icon={<Edit />} variant="ghost" color="danger" aria-label="Danger" />
    </div>
  );
}
