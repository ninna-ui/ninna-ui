import { forwardRef, useState, useMemo, useCallback } from 'react';
import { cn } from '@ninna-ui/utils';
import { calendarStyles } from './calendar.styles';
import type { CalendarProps } from './calendar.types';

const DAYS_SUN = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const DAYS_MON = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isDisabled(date: Date, minDate?: Date, maxDate?: Date, disabledDates?: Date[]) {
  if (minDate && date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true;
  if (maxDate && date > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) return true;
  if (disabledDates?.some((d) => isSameDay(d, date))) return true;
  return false;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getCalendarDays(year: number, month: number, weekStartsOn: 0 | 1) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = getDaysInMonth(year, month);
  const daysInPrevMonth = getDaysInMonth(year, month - 1);

  const offset = (firstDay - weekStartsOn + 7) % 7;
  const days: { date: Date; isOutside: boolean }[] = [];

  for (let i = offset - 1; i >= 0; i--) {
    days.push({ date: new Date(year, month - 1, daysInPrevMonth - i), isOutside: true });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ date: new Date(year, month, i), isOutside: false });
  }
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    days.push({ date: new Date(year, month + 1, i), isOutside: true });
  }

  return days;
}

const CalendarRoot = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      month: controlledMonth,
      defaultMonth,
      onMonthChange,
      minDate,
      maxDate,
      disabledDates,
      showOutsideDays = true,
      weekStartsOn = 0,
      className,
      'aria-label': ariaLabel = 'Calendar',
      ...props
    },
    ref
  ) => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(defaultValue);
    const selected = value ?? selectedDate;

    const [internalMonth, setInternalMonth] = useState<Date>(
      () => defaultMonth ?? value ?? defaultValue ?? new Date()
    );
    const displayMonth = controlledMonth ?? internalMonth;

    const year = displayMonth.getFullYear();
    const monthIndex = displayMonth.getMonth();

    const days = useMemo(
      () => getCalendarDays(year, monthIndex, weekStartsOn),
      [year, monthIndex, weekStartsOn]
    );

    const today = useMemo(() => new Date(), []);
    const weekDays = weekStartsOn === 1 ? DAYS_MON : DAYS_SUN;

    const navigateMonth = useCallback(
      (delta: number) => {
        const next = new Date(year, monthIndex + delta, 1);
        if (onMonthChange) {
          onMonthChange(next);
        } else {
          setInternalMonth(next);
        }
      },
      [year, monthIndex, onMonthChange]
    );

    const handleSelect = (date: Date) => {
      if (isDisabled(date, minDate, maxDate, disabledDates)) return;
      if (onValueChange) {
        onValueChange(date);
      } else {
        setSelectedDate(date);
      }
    };

    return (
      <div
        ref={ref}
        data-slot="calendar"
        role="application"
        aria-label={ariaLabel}
        className={cn(calendarStyles.root, className)}
        {...props}
      >
        <div className={calendarStyles.header}>
          <button
            type="button"
            className={calendarStyles.navButton}
            onClick={() => navigateMonth(-1)}
            aria-label="Previous month"
          >
            <svg className="size-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M10 4l-4 4 4 4" />
            </svg>
          </button>
          <span className={calendarStyles.headerTitle}>
            {MONTHS[monthIndex]} {year}
          </span>
          <button
            type="button"
            className={calendarStyles.navButton}
            onClick={() => navigateMonth(1)}
            aria-label="Next month"
          >
            <svg className="size-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </button>
        </div>

        <table className={calendarStyles.grid} role="grid" aria-label={`${MONTHS[monthIndex]} ${year}`}>
          <thead>
            <tr>
              {weekDays.map((day) => (
                <th key={day} className={calendarStyles.weekday} scope="col" aria-label={day}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }, (_, week) => (
              <tr key={week}>
                {days.slice(week * 7, week * 7 + 7).map(({ date, isOutside }) => {
                  const disabled = isDisabled(date, minDate, maxDate, disabledDates);
                  const isToday = isSameDay(date, today);
                  const isSelected = selected ? isSameDay(date, selected) : false;

                  if (isOutside && !showOutsideDays) {
                    return <td key={date.toISOString()} className={calendarStyles.dayCell} />;
                  }

                  return (
                    <td key={date.toISOString()} className={calendarStyles.dayCell}>
                      <button
                        type="button"
                        className={cn(
                          calendarStyles.day,
                          isOutside && calendarStyles.dayOutside,
                          isToday && !isSelected && calendarStyles.dayToday,
                          isSelected && calendarStyles.daySelected,
                          disabled && calendarStyles.dayDisabled
                        )}
                        disabled={disabled}
                        onClick={() => handleSelect(date)}
                        aria-label={date.toLocaleDateString(undefined, { dateStyle: 'full' })}
                        aria-selected={isSelected || undefined}
                        aria-pressed={isSelected}
                        tabIndex={isOutside ? -1 : isSelected ? 0 : 0}
                      >
                        {date.getDate()}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
);

CalendarRoot.displayName = 'Calendar';

export const Calendar = CalendarRoot;
