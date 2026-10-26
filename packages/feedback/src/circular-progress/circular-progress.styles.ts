import { cva, type VariantProps } from "class-variance-authority";
import type { Size, Color } from "@ninna-ui/core";

export const circularProgressVariants = cva(
  "relative inline-flex items-center justify-center",
  {
    variants: {
      color: {
        primary: "text-primary-text",
        secondary: "text-secondary-text",
        accent: "text-accent-text",
        neutral: "text-neutral-text",
        success: "text-success-text",
        danger: "text-danger-text",
        warning: "text-warning-text",
        info: "text-info-text",
      },
    },
    defaultVariants: { color: "primary" },
  },
);

export type CircularProgressVariantsProps = VariantProps<
  typeof circularProgressVariants
>;

export const CIRCULAR_PROGRESS_SVG_CLASS = "transform -rotate-90";
export const CIRCULAR_PROGRESS_TRACK_CLASS = "stroke-base-200";
export const CIRCULAR_PROGRESS_INDICATOR_CLASS =
  "transition-all duration-300 ease-out";
export const CIRCULAR_PROGRESS_INDETERMINATE_CLASS = "animate-spin";

export const CIRCULAR_PROGRESS_SIZES: Record<
  Size,
  { size: number; strokeWidth: number }
> = {
  xs: { size: 24, strokeWidth: 2 },
  sm: { size: 32, strokeWidth: 3 },
  md: { size: 48, strokeWidth: 4 },
  lg: { size: 64, strokeWidth: 5 },
  xl: { size: 96, strokeWidth: 6 },
};

export const CIRCULAR_PROGRESS_STROKE_COLORS: Record<Color, string> = {
  primary: "stroke-primary-text",
  secondary: "stroke-secondary-text",
  accent: "stroke-accent-text",
  neutral: "stroke-neutral-text",
  success: "stroke-success-text",
  danger: "stroke-danger-text",
  warning: "stroke-warning-text",
  info: "stroke-info-text",
};

export const circularProgressLabelStyles = {
  base: "font-medium",
  center:
    "absolute inset-0 flex items-center justify-center text-base-content/80",
  bottom: "mt-2 text-center text-base-content/80",
};

export const CIRCULAR_PROGRESS_LABEL_SIZES: Record<Size, string> = {
  xs: "text-[8px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};
