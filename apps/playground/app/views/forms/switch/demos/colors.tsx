import { Switch } from "@ninna-ui/forms";

export default function Colors() {
  return (
    <div className="flex flex-col gap-4">
      <Switch color="neutral" label="Neutral" defaultChecked />
      <Switch color="primary" label="Primary" defaultChecked />
      <Switch color="secondary" label="Secondary" defaultChecked />
      <Switch color="accent" label="Accent" defaultChecked />
      <Switch color="info" label="Info" defaultChecked />
      <Switch color="success" label="Success" defaultChecked />
      <Switch color="warning" label="Warning" defaultChecked />
      <Switch color="danger" label="Danger" defaultChecked />
    </div>
  );
}
