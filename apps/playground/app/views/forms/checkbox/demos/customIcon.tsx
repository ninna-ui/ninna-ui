import { Checkbox } from "@ninna-ui/forms";
import { Heart, Star, ThumbsUp } from "lucide-react";

export default function CustomIcon() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox 
        label="Heart icon" 
        icon={<Heart className="w-3 h-3" />} 
        defaultChecked 
      />
      <Checkbox 
        label="Star icon" 
        icon={<Star className="w-3 h-3" />} 
        defaultChecked 
      />
      <Checkbox 
        label="Thumbs up icon" 
        icon={<ThumbsUp className="w-3 h-3" />} 
        defaultChecked 
      />
    </div>
  );
}
