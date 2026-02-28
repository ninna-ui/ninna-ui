import { Checkbox } from "@ninna-ui/forms";

export default function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  );
}
