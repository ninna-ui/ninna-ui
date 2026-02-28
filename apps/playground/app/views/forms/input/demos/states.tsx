import { Input } from "@ninna-ui/forms";

export default function States() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Input placeholder="Normal state" />
      <Input placeholder="Disabled state" disabled />
      <Input placeholder="Read only" readOnly defaultValue="Read only value" />
      <Input placeholder="Invalid state" invalid />
    </div>
  );
}
