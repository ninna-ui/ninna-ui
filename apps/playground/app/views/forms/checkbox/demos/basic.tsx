import { useState } from "react";
import { Checkbox } from "@ninna-ui/forms";

export default function Basic() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-base-content/70">
        Click the visible box or the label to toggle.
      </p>
      <Checkbox
        checked={checked}
        onCheckedChange={setChecked}
        label="Accept terms and conditions"
      />
      <p className="text-sm" aria-live="polite">
        Checked: {checked ? "Yes" : "No"}
      </p>
    </div>
  );
}
