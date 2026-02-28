import type { Color, Size } from "@ninna-ui/core";
import type { HTMLAttributes, ReactNode } from "react";

export type CircularProgressLabelPosition = "center" | "bottom" | "none";

export interface CircularProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** Current progress value (0-100 or custom max) */
  value?: number;
  
  /** Maximum value */
  max?: number;
  
  /** Size of the circular progress */
  size?: Size;
  
  /** Color theme */
  color?: Color;
  
  /** Stroke width of the progress circle */
  strokeWidth?: number;
  
  /** Whether to show the value label */
  showValue?: boolean;
  
  /** Position of the value label */
  labelPosition?: CircularProgressLabelPosition;
  
  /** Custom format function for the value label */
  formatLabel?: (value: number, max: number) => ReactNode;
  
  /** Whether the progress is indeterminate (loading state) */
  indeterminate?: boolean;
  
  /** Accessible label for screen readers */
  label?: string;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Additional CSS classes for the track (background circle) */
  trackClassName?: string;
  
  /** Additional CSS classes for the indicator (progress circle) */
  indicatorClassName?: string;
  
  /** Custom content to render inside the circle */
  children?: ReactNode;
}
