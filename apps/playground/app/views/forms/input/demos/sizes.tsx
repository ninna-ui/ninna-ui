import { Input } from "@ninna-ui/forms";

export default function Sizes() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Input size="xs" placeholder="Extra small" />
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
      <Input size="xl" placeholder="Extra large" />
    </div>
  );
}
