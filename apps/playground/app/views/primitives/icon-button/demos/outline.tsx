import { IconButton } from "@ninna-ui/primitives";
import { Heart, Star, Settings, Bell, Search, Plus, Trash2, Edit } from "lucide-react";

export default function Outline() {
  return (
    <div className="flex flex-wrap gap-2">
      <IconButton icon={<Heart />} variant="outline" color="neutral" aria-label="Neutral" />
      <IconButton icon={<Star />} variant="outline" color="primary" aria-label="Primary" />
      <IconButton icon={<Settings />} variant="outline" color="secondary" aria-label="Secondary" />
      <IconButton icon={<Bell />} variant="outline" color="accent" aria-label="Accent" />
      <IconButton icon={<Search />} variant="outline" color="info" aria-label="Info" />
      <IconButton icon={<Plus />} variant="outline" color="success" aria-label="Success" />
      <IconButton icon={<Trash2 />} variant="outline" color="warning" aria-label="Warning" />
      <IconButton icon={<Edit />} variant="outline" color="danger" aria-label="Danger" />
    </div>
  );
}
