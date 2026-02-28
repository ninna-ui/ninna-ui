import { Textarea } from "@ninna-ui/forms";

export default function Sizes() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Textarea size="xs" placeholder="Extra small" rows={2} />
      <Textarea size="sm" placeholder="Small" rows={2} />
      <Textarea size="md" placeholder="Medium" rows={2} />
      <Textarea size="lg" placeholder="Large" rows={2} />
      <Textarea size="xl" placeholder="Extra large" rows={2} />
    </div>
  );
}
