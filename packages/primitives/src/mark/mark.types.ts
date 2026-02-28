import type { HTMLAttributes } from "react";
import type { Color } from "@ninna-ui/core";

/**
 * Props for the Mark component
 */
export interface MarkProps extends HTMLAttributes<HTMLElement> {
  /**
   * Color variant
   * @default "neutral"
   */
  color?: Color;
}
