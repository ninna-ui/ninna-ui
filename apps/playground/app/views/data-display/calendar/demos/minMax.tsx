import { Calendar } from "@ninna-ui/data-display";

export default function CalendarMinMax() {
  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5);
  const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10);

  return (
    <Calendar
      minDate={minDate}
      maxDate={maxDate}
      className="w-[280px] rounded-lg border border-base-200"
    />
  );
}
