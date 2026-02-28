import { Textarea } from "@ninna-ui/forms";

export default function Variants() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Textarea variant="outline" placeholder="Outline variant" />
      <Textarea variant="filled" placeholder="Filled variant" />
      <Textarea variant="flushed" placeholder="Flushed variant" />
      <Textarea variant="unstyled" placeholder="Unstyled variant" />
    </div>
  );
}
