import { useState } from "react";
import { Input } from "@ninna-ui/forms";

export default function Clearable() {
  const [value, setValue] = useState("Clear me!");

  return (
    <div className="flex flex-col gap-4 w-64">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        clearable
        onClear={() => setValue("")}
        placeholder="Type something..."
      />
      <Input
        defaultValue="With default value"
        clearable
        placeholder="Clearable input"
      />
    </div>
  );
}
