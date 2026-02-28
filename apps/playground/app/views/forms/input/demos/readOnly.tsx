import { Input } from "@ninna-ui/forms";

export default function ReadOnly() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Input readOnly defaultValue="Read-only value" />
      <Input readOnly defaultValue="Cannot be edited" placeholder="Read-only" />
    </div>
  );
}
