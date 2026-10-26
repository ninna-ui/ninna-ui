import { Input } from "@ninna-ui/forms";

export default function Variants() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Input
        variant="outline"
        placeholder="Outline variant"
        aria-label="Outline variant input"
      />
      <Input
        variant="filled"
        placeholder="Filled variant"
        aria-label="Filled variant input"
      />
      <Input
        variant="flushed"
        placeholder="Flushed variant"
        aria-label="Flushed variant input"
      />
      <Input
        variant="unstyled"
        placeholder="Unstyled variant"
        aria-label="Unstyled variant input"
        className="text-base-content placeholder:text-base-content/70"
      />
    </div>
  );
}
