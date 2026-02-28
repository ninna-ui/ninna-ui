import { Checkbox } from "@ninna-ui/forms";

export default function Variants() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox variant="outline" label="Outline variant" defaultChecked />
      <Checkbox variant="soft" label="Soft variant" defaultChecked />
      <Checkbox variant="solid" label="Solid variant" defaultChecked />
    </div>
  );
}
