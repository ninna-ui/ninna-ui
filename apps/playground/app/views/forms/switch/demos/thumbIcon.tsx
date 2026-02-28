import { Switch } from "@ninna-ui/forms";
import { Sun, Moon, Check } from "lucide-react";

export default function ThumbIcon() {
  return (
    <div className="flex flex-col gap-4">
      <Switch 
        label="Dark mode" 
        thumbIcon={<Moon className="w-3 h-3" />} 
      />
      <Switch 
        label="Light mode" 
        thumbIcon={<Sun className="w-3 h-3" />} 
        defaultChecked 
      />
      <Switch 
        label="Confirmed" 
        thumbIcon={<Check className="w-3 h-3" />} 
        defaultChecked 
      />
    </div>
  );
}
