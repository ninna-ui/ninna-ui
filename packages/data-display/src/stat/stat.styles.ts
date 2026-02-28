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
  icon: 'flex items-center justify-center rounded-lg bg-primary/10 text-primary p-3',
};

export const STAT_VALUE_SIZES: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-4xl',
};
