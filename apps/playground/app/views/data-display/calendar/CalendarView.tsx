import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { Code } from "@ninna-ui/primitives";
import { calendarMeta } from "./meta";

import Basic from "./demos/basic";
import Controlled from "./demos/controlled";
import MinMax from "./demos/minMax";
import MondayStart from "./demos/mondayStart";

export const calendarSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "controlled", title: "Controlled", level: 3 },
  { id: "min-max", title: "Min/Max Dates", level: 3 },
  { id: "monday-start", title: "Monday Start", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const CALENDAR_PROPS: PropDefinition[] = [
  { name: "aria-label", type: "string", defaultValue: "'Calendar'", description: "Accessible label for the calendar widget" },
  { name: "value", type: "Date", description: "Selected date (controlled)" },
  { name: "defaultValue", type: "Date", description: "Default selected date (uncontrolled)" },
  { name: "onValueChange", type: "(date: Date) => void", description: "Callback when selected date changes" },
  { name: "minDate", type: "Date", description: "Minimum selectable date" },
  { name: "maxDate", type: "Date", description: "Maximum selectable date" },
  { name: "disabledDates", type: "Date[]", description: "Array of dates to disable" },
  { name: "showOutsideDays", type: "boolean", defaultValue: "true", description: "Show days from adjacent months" },
  { name: "weekStartsOn", type: "0 | 1", defaultValue: "0", description: "First day of week (0=Sunday, 1=Monday)" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const USAGE = `import { Calendar } from "@ninna-ui/data-display";

export default function Example() {
  return (
    <Calendar className="w-[280px] rounded-lg border border-base-200" />
  );
}`;

export function CalendarView() {
  return (
    <div>
      <ComponentHeader meta={calendarMeta} />

      <div className="space-y-12">
        <ComponentSection id="usage" title="Usage" description="Import and use the Calendar component in your application.">
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection id="basic" title="Basic" description="A basic calendar with default settings." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/data-display/calendar/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="controlled" title="Controlled" description="Track the selected date with React state." level={3}>
          <CodePreview component={<Controlled />} filePath="app/views/data-display/calendar/demos/controlled.tsx" />
        </ComponentSection>

        <ComponentSection id="min-max" title="Min/Max Dates" description="Restrict the selectable date range." level={3}>
          <CodePreview component={<MinMax />} filePath="app/views/data-display/calendar/demos/minMax.tsx" />
        </ComponentSection>

        <ComponentSection id="monday-start" title="Monday Start" description="Start the week on Monday instead of Sunday." level={3}>
          <CodePreview component={<MondayStart />} filePath="app/views/data-display/calendar/demos/mondayStart.tsx" />
        </ComponentSection>

        <ComponentSection id="api" title="API Reference" description="Complete list of props for the Calendar component.">
          <PropsTable title="Calendar" data={CALENDAR_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses a <Code>grid</Code> role with proper row/cell structure</li>
              <li>Supports <Code>aria-label</Code> prop (default: "Calendar") for labeling</li>
              <li>Arrow keys navigate between days</li>
              <li>Page Up/Down navigate between months</li>
              <li>Disabled dates are announced and cannot be selected</li>
              <li>Selected date uses <Code>aria-selected</Code></li>
              <li>Month/year navigation buttons have accessible labels</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
