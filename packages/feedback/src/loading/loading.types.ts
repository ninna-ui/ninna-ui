import type { HTMLAttributes } from "react";
import type { Color, SpinnerSize } from "@ninna-ui/core";

export type LoadingVariant = "spin" | "ping" | "pulse" | "dots";

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: LoadingVariant;
  
  /** Color theme */
  color?: Color;
  
  /** Size of the loading indicator */
  size?: SpinnerSize;
  
  /** Accessible label for screen readers */
  label?: string;
}
