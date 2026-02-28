import { Select, SelectItem } from "@ninna-ui/forms";

export default function Colors() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Select color="neutral" placeholder="Neutral">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select color="primary" placeholder="Primary">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select color="secondary" placeholder="Secondary">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select color="accent" placeholder="Accent">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select color="info" placeholder="Info">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select color="success" placeholder="Success">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select color="warning" placeholder="Warning">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
      <Select color="danger" placeholder="Danger">
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </Select>
    </div>
  );
}
