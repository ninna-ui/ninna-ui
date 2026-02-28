import type { ComponentPropsWithoutRef } from 'react';

/** Props for the Calendar component */
export interface CalendarProps extends Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue'> {
  /** Accessible label for the calendar widget @default 'Calendar' */
  'aria-label'?: string;
  /** Currently selected date */
  value?: Date;
  /** Default selected date (uncontrolled) */
  defaultValue?: Date;
  /** Callback when a date is selected */
  onValueChange?: (date: Date) => void;
  /** Month to display (controlled) */
  month?: Date;
  /** Default month to display (uncontrolled) */
  defaultMonth?: Date;
  /** Callback when month changes */
  onMonthChange?: (date: Date) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Dates to disable */
  disabledDates?: Date[];
  /** Whether to show outside days @default true */
  showOutsideDays?: boolean;
  /** First day of the week (0=Sun, 1=Mon) @default 0 */
  weekStartsOn?: 0 | 1;
}
