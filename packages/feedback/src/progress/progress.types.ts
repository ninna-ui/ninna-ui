import type { Color, Size } from "@ninna-ui/core";
import type { HTMLAttributes, ReactNode } from "react";

export type ProgressVariant = "default" | "striped" | "animated";
export type ProgressLabelPosition = "left" | "right" | "top" | "inside" | "none";

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** Current progress value (0-100 or custom max) */
  value?: number;
  
  /** Maximum value */
  max?: number;
  
  /** Size of the progress bar */
  size?: Size;
  
  /** Color theme */
  color?: Color;
  
  /** Visual style variant */
  variant?: ProgressVariant;
  
  /** Whether to show the value label */
  showValue?: boolean;
  
  /** Position of the value label */
  labelPosition?: ProgressLabelPosition;
  
  /** Custom format function for the value label */
  formatLabel?: (value: number, max: number) => ReactNode;
  
  /** Whether the progress is indeterminate (loading state) */
  indeterminate?: boolean;
  
  /** Accessible label for screen readers */
  label?: string;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Additional CSS classes for the track (background) */
  trackClassName?: string;
  
  /** Additional CSS classes for the indicator (filled part) */
  indicatorClassName?: string;
}
