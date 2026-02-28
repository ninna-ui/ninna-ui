import { Textarea } from "@ninna-ui/forms";

export default function States() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Textarea placeholder="Normal state" />
      <Textarea placeholder="Disabled" disabled />
      <Textarea placeholder="Invalid" invalid />
      <Textarea placeholder="Read-only" readOnly defaultValue="Read-only content" />
    </div>
  );
}
