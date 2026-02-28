import { Select, SelectItem } from "@ninna-ui/forms";

export default function Sizes() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Select size="xs" placeholder="Extra small">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select size="sm" placeholder="Small">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select size="md" placeholder="Medium">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select size="lg" placeholder="Large">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select size="xl" placeholder="Extra large">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
    </div>
  );
}
