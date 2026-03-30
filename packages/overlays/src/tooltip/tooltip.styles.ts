import { cva, type VariantProps } from 'class-variance-authority';

export const tooltipContentVariants = cva(
  "z-50 max-w-xs rounded-md px-3 py-1.5 text-sm shadow-md select-none pointer-events-none data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
  {
    variants: {
      color: {
        default:   "bg-neutral text-neutral-content",
        primary:   "bg-primary text-primary-content",
        secondary: "bg-secondary text-secondary-content",
        accent:    "bg-accent text-accent-content",
        neutral:   "bg-neutral text-neutral-content",
        success:   "bg-success text-success-content",
        danger:    "bg-danger text-danger-content",
        warning:   "bg-warning text-warning-content",
        info:      "bg-info text-info-content",
      },
    },
    defaultVariants: { color: "default" },
  }
);

export type TooltipContentVariantsProps = VariantProps<typeof tooltipContentVariants>;

export const TOOLTIP_ARROW_COLORS: Record<string, string> = {
  default:   "fill-neutral",
  primary:   "fill-primary",
  secondary: "fill-secondary",
  accent:    "fill-accent",
  neutral:   "fill-neutral",
  success:   "fill-success",
  danger:    "fill-danger",
  warning:   "fill-warning",
  info:      "fill-info",
};

export const tooltipStyles = {
  arrow: "fill-neutral",
};
