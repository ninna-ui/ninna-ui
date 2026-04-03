import { Checkbox } from "@ninna-ui/forms";

export default function Variants() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-8">
        <Checkbox variant="outline" label="Outline" />
        <Checkbox variant="outline" label="Outline checked" defaultChecked />
      </div>
      <div className="flex items-center gap-8">
        <Checkbox variant="soft" label="Soft" />
        <Checkbox variant="soft" label="Soft checked" defaultChecked />
      </div>
      <div className="flex items-center gap-8">
        <Checkbox variant="solid" label="Solid" />
        <Checkbox variant="solid" label="Solid checked" defaultChecked />
      </div>
    </div>
  );
}
