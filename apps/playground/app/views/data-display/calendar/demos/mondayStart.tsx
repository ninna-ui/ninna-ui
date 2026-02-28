import { Calendar } from "@ninna-ui/data-display";

export default function CalendarMondayStart() {
  return (
    <Calendar
      weekStartsOn={1}
      className="w-[280px] rounded-lg border border-base-200"
    />
  );
}
