import { cva, type VariantProps } from 'class-variance-authority';
import type { Size, Color } from '@ninna-ui/core';

export const circularProgressVariants = cva(
  "relative inline-flex items-center justify-center",
  {
    variants: {
      color: {
        primary:   "text-primary",
        secondary: "text-secondary",
        accent:    "text-accent",
        neutral:   "text-neutral",
        success:   "text-success",
        danger:    "text-danger",
        warning:   "text-warning",
        info:      "text-info",
      },
    },
    defaultVariants: { color: "primary" },
  }
);

export type CircularProgressVariantsProps = VariantProps<typeof circularProgressVariants>;

export const CIRCULAR_PROGRESS_SVG_CLASS = "transform -rotate-90";
export const CIRCULAR_PROGRESS_TRACK_CLASS = "stroke-base-200";
export const CIRCULAR_PROGRESS_INDICATOR_CLASS = "transition-all duration-300 ease-out";
export const CIRCULAR_PROGRESS_INDETERMINATE_CLASS = "animate-spin";

export const CIRCULAR_PROGRESS_SIZES: Record<Size, { size: number; strokeWidth: number }> = {
  xs: { size: 24, strokeWidth: 2 },
  sm: { size: 32, strokeWidth: 3 },
  md: { size: 48, strokeWidth: 4 },
  lg: { size: 64, strokeWidth: 5 },
  xl: { size: 96, strokeWidth: 6 },
};

export const CIRCULAR_PROGRESS_STROKE_COLORS: Record<Color, string> = {
  primary:   "stroke-primary",
  secondary: "stroke-secondary",
  accent:    "stroke-accent",
  neutral:   "stroke-neutral",
  success:   "stroke-success",
  danger:    "stroke-danger",
  warning:   "stroke-warning",
  info:      "stroke-info",
};

export const circularProgressLabelStyles = {
  base: "font-medium",
  center: "absolute inset-0 flex items-center justify-center text-base-content/80",
  bottom: "mt-2 text-center text-base-content/80",
};

export const CIRCULAR_PROGRESS_LABEL_SIZES: Record<Size, string> = {
  xs: "text-[8px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};
