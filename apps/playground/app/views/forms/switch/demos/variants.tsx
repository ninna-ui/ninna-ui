import { Switch } from "@ninna-ui/forms";

export default function Variants() {
  return (
    <div className="flex flex-col gap-4">
      <Switch variant="solid" label="Solid variant" defaultChecked />
      <Switch variant="outline" label="Outline variant" defaultChecked />
    </div>
  );
}
