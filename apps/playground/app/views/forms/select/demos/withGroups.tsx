import { Select, SelectItem, SelectGroup, SelectSeparator } from "@ninna-ui/forms";

export default function WithGroups() {
  return (
    <div className="w-64">
      <Select placeholder="Select a food">
        <SelectGroup label="Fruits">
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup label="Vegetables">
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="spinach">Spinach</SelectItem>
        </SelectGroup>
      </Select>
    </div>
  );
}
