import { useState } from "react";
import { Checkbox } from "@ninna-ui/forms";

export default function Indeterminate() {
  const [checkedItems, setCheckedItems] = useState([true, false, true]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <div className="flex flex-col gap-2">
      <Checkbox
        label="Select all"
        checked={allChecked}
        indeterminate={isIndeterminate}
        onCheckedChange={(checked) => {
          setCheckedItems([!!checked, !!checked, !!checked]);
        }}
      />
      <div className="ml-6 flex flex-col gap-2">
        <Checkbox
          label="Option 1"
          checked={checkedItems[0] ?? false}
          onCheckedChange={(checked) => {
            setCheckedItems([!!checked, checkedItems[1] ?? false, checkedItems[2] ?? false]);
          }}
        />
        <Checkbox
          label="Option 2"
          checked={checkedItems[1] ?? false}
          onCheckedChange={(checked) => {
            setCheckedItems([checkedItems[0] ?? false, !!checked, checkedItems[2] ?? false]);
          }}
        />
        <Checkbox
          label="Option 3"
          checked={checkedItems[2] ?? false}
          onCheckedChange={(checked) => {
            setCheckedItems([checkedItems[0] ?? false, checkedItems[1] ?? false, !!checked]);
          }}
        />
      </div>
    </div>
  );
}
