import { Select, SelectItem } from "@ninna-ui/forms";

export default function Basic() {
  return (
    <div className="w-64">
      <Select placeholder="Select a fruit">
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
      </Select>
    </div>
  );
}
