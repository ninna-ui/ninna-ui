import type { BlockquoteHTMLAttributes, ReactNode } from "react";
import type { Color, ColorVariant } from "@ninna-ui/core";

export type BlockquoteVariant = ColorVariant;

export interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  /** Color variant */
  color?: Color;
  
  /** Visual style variant */
  variant?: BlockquoteVariant;
  
  /** Citation source */
  cite?: string;
  
  /** Citation author/source to display */
  citeSource?: ReactNode;
  
  /** Whether to show quote icon */
  showIcon?: boolean;
  
  /** Custom icon */
  icon?: ReactNode;
}
