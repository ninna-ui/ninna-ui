import { useState } from "react";
import { Select, SelectItem } from "@ninna-ui/forms";

export default function Clearable() {
  const [value, setValue] = useState("react");

  return (
    <div className="flex flex-col gap-4 w-64">
      <Select
        value={value}
        onValueChange={setValue}
        clearable
        onClear={() => setValue("")}
        placeholder="Select a framework"
      >
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="vue">Vue</SelectItem>
        <SelectItem value="angular">Angular</SelectItem>
        <SelectItem value="svelte">Svelte</SelectItem>
      </Select>
      <p className="text-sm text-base-content/70">Selected: {value || "None"}</p>
    </div>
  );
}
