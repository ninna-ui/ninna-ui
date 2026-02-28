export const calendarStyles = {
  root: 'p-3 select-none',
  header: 'flex items-center justify-between mb-4',
  headerTitle: 'text-sm font-semibold text-base-content',
  navButton: 'inline-flex items-center justify-center size-8 rounded-md text-base-content/70 hover:bg-base-200 hover:text-base-content transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
  grid: 'w-full border-collapse',
  weekday: 'h-8 w-8 text-center text-xs font-medium text-base-content/70',
  dayCell: 'p-0 text-center',
  day: 'inline-flex items-center justify-center size-8 rounded-md text-sm cursor-pointer transition-colors hover:bg-base-200 text-base-content focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
  dayToday: 'border border-primary text-primary font-semibold',
  daySelected: 'bg-primary text-primary-content hover:bg-primary/90',
  dayOutside: 'text-base-content/30',
  dayDisabled: 'text-base-content/20 cursor-not-allowed hover:bg-transparent',
};
