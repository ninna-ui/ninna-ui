export const STAT_ICON_COLORS: Record<string, string> = {
  primary: "bg-primary/10 text-primary-text",
  secondary: "bg-secondary/10 text-secondary-text",
  accent: "bg-accent/10 text-accent-text",
  neutral: "bg-neutral/10 text-neutral-text",
  success: "bg-success/10 text-success-text",
  danger: "bg-danger/10 text-danger-text",
  warning: "bg-warning/10 text-warning-text",
  info: "bg-info/10 text-info-text",
};

export const statStyles = {
  root: "flex flex-col gap-1",
  label: "text-sm font-medium text-base-content/70",
  value: "font-bold tracking-tight text-base-content",
  helpText: "text-xs text-base-content/70",
  trend: "inline-flex items-center gap-1 text-xs font-medium",
  trendUp: "text-success-text",
  trendDown: "text-danger-text",
  trendNeutral: "text-base-content/70",
  trendUpBad: "text-danger-text",
  trendDownBad: "text-success-text",
  icon: "flex items-center justify-center rounded-lg p-3",
};

export const STAT_VALUE_SIZES: Record<"sm" | "md" | "lg", string> = {
  sm: "text-lg sm:text-xl",
  md: "text-xl sm:text-2xl",
  lg: "text-2xl sm:text-4xl",
};
