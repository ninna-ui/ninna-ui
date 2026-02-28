import { Select, SelectItem } from "@ninna-ui/forms";

export default function States() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Select placeholder="Normal">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select placeholder="Disabled" disabled>
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select placeholder="With disabled item">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2" disabled>Option 2 (disabled)</SelectItem>
        <SelectItem value="3">Option 3</SelectItem>
      </Select>
    </div>
  );
}
