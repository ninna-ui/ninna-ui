import { Checkbox } from "@ninna-ui/forms";

export default function Colors() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox color="neutral" label="Neutral" defaultChecked />
      <Checkbox color="primary" label="Primary" defaultChecked />
      <Checkbox color="secondary" label="Secondary" defaultChecked />
      <Checkbox color="accent" label="Accent" defaultChecked />
      <Checkbox color="info" label="Info" defaultChecked />
      <Checkbox color="success" label="Success" defaultChecked />
      <Checkbox color="warning" label="Warning" defaultChecked />
      <Checkbox color="danger" label="Danger" defaultChecked />
    </div>
  );
}
