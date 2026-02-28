import { Switch } from "@ninna-ui/forms";

export default function States() {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Unchecked" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </div>
  );
}
