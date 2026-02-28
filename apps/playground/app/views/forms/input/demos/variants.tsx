import { Input } from "@ninna-ui/forms";

export default function Variants() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Input variant="outline" placeholder="Outline variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="flushed" placeholder="Flushed variant" />
      <Input variant="unstyled" placeholder="Unstyled variant" />
    </div>
  );
}
