import { useState } from "react";
import { CheckboxGroup, CheckboxGroupItem } from "@ninna-ui/forms";

export default function Basic() {
  const [selected, setSelected] = useState(["react"]);

  return (
    <div className="space-y-2">
      <span className="text-sm font-medium text-base-content/70">
        Select frameworks by clicking a box or its label
      </span>
      <CheckboxGroup value={selected} onValueChange={setSelected}>
        <CheckboxGroupItem value="react" label="React" />
        <CheckboxGroupItem value="vue" label="Vue" />
        <CheckboxGroupItem value="angular" label="Angular" />
        <CheckboxGroupItem value="svelte" label="Svelte" />
      </CheckboxGroup>
      <p className="text-sm" aria-live="polite">
        Selected: {selected.join(", ") || "None"}
      </p>
    </div>
  );
}
