export const STAT_ICON_COLORS: Record<string, string> = {
  primary:   'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent:    'bg-accent/10 text-accent',
  neutral:   'bg-neutral/10 text-neutral',
  success:   'bg-success/10 text-success',
  danger:    'bg-danger/10 text-danger',
  warning:   'bg-warning/10 text-warning',
  info:      'bg-info/10 text-info',
};

export const statStyles = {
  root: 'flex flex-col gap-1',
  label: 'text-sm font-medium text-base-content/70',
  value: 'font-bold tracking-tight text-base-content',
  helpText: 'text-xs text-base-content/70',
  trend: 'inline-flex items-center gap-1 text-xs font-medium',
  trendUp: 'text-success',
  trendDown: 'text-danger',
  trendNeutral: 'text-base-content/70',
  trendUpBad: 'text-danger',
  trendDownBad: 'text-success',
  icon: 'flex items-center justify-center rounded-lg p-3',
};

export const STAT_VALUE_SIZES: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'text-lg sm:text-xl',
  md: 'text-xl sm:text-2xl',
  lg: 'text-2xl sm:text-4xl',
};
