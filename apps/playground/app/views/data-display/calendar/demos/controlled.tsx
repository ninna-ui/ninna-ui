import { useState } from "react";
import { Calendar } from "@ninna-ui/data-display";

export default function CalendarControlled() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="flex flex-col items-start gap-4">
      <Calendar
        value={date}
        onValueChange={setDate}
        className="w-[280px] rounded-lg border border-base-200"
      />
      <p className="text-sm text-base-content/70">
        Selected: {date.toLocaleDateString()}
      </p>
    </div>
  );
}
