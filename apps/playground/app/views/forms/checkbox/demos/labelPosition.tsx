import { Checkbox } from "@ninna-ui/forms";

export default function LabelPosition() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox label="Label on the right (default)" labelPosition="end" />
      <Checkbox label="Label on the left" labelPosition="start" />
    </div>
  );
}
