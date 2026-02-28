import type { HTMLAttributes } from "react";
import type { Color } from "@ninna-ui/core";

export type DividerVariant = "horizontal" | "vertical" | "with-text";
export type DividerWeight = "soft" | "solid";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Orientation and style variant */
  variant?: DividerVariant;
  
  /** Color theme */
  color?: Color;
  
  /** Line weight/opacity */
  weight?: DividerWeight;
  
  /** Text to display (only for with-text variant) */
  text?: string;
}
