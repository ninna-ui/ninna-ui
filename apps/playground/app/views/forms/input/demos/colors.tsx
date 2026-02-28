import { Input } from "@ninna-ui/forms";

export default function Colors() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Input color="neutral" placeholder="Neutral" />
      <Input color="primary" placeholder="Primary" />
      <Input color="secondary" placeholder="Secondary" />
      <Input color="accent" placeholder="Accent" />
      <Input color="info" placeholder="Info" />
      <Input color="success" placeholder="Success" />
      <Input color="warning" placeholder="Warning" />
      <Input color="danger" placeholder="Danger" />
    </div>
  );
}
