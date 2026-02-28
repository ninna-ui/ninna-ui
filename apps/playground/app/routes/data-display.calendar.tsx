import CalendarView, { calendarSections } from "~/views/data-display/calendar";
export default function CalendarRoute() { return <CalendarView />; }

export const handle = { sections: calendarSections };