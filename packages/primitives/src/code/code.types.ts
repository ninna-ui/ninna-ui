import type { HTMLAttributes } from "react";
import type { Color, TextSize } from "@ninna-ui/core";

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  /** Color variant */
  color?: Color;
  
  /** Text size */
  size?: TextSize;
}
