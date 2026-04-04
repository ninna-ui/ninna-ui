import { Select, SelectItem } from "@ninna-ui/forms";

export default function Variants() {
  return (
    <div className="flex flex-col gap-6 w-64">
      <div>
        <p className="text-sm text-base-content/60 mb-2">Outline</p>
        <Select variant="outline" placeholder="Outline variant">
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </Select>
      </div>
      <div>
        <p className="text-sm text-base-content/60 mb-2">Filled</p>
        <Select variant="filled" placeholder="Filled variant">
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </Select>
      </div>
      <div>
        <p className="text-sm text-base-content/60 mb-2">Flushed</p>
        <Select variant="flushed" placeholder="Flushed variant">
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </Select>
      </div>
    </div>
  );
}
