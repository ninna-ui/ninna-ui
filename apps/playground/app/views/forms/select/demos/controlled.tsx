import { useState } from "react";
import { Select, SelectItem } from "@ninna-ui/forms";

export default function Controlled() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex gap-2">
        <button
          onClick={() => setOpen(!open)}
          className="px-3 py-1 text-sm bg-base-200 rounded"
        >
          {open ? "Close" : "Open"} Select
        </button>
        <button
          onClick={() => setValue("vue")}
          className="px-3 py-1 text-sm bg-base-200 rounded"
        >
          Set to Vue
        </button>
      </div>
      <Select
        value={value}
        onValueChange={setValue}
        open={open}
        onOpenChange={setOpen}
        placeholder="Controlled select"
      >
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="vue">Vue</SelectItem>
        <SelectItem value="angular">Angular</SelectItem>
        <SelectItem value="svelte">Svelte</SelectItem>
      </Select>
      <p className="text-sm text-base-content/70">
        Open: {open ? "Yes" : "No"} | Value: {value || "None"}
      </p>
    </div>
  );
}
