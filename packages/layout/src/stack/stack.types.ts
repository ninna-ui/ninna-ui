import type { ElementType } from "react";
import type { PolymorphicProps } from "@ninna-ui/utils";
import type { FlexDirection, FlexAlign, FlexJustify, GapSize } from '@ninna-ui/core';

/**
 * Base owned props for the Stack component.
 */
export interface StackBaseProps {
  
  /** Stack direction */
  direction?: FlexDirection;
  
  /** Gap between items */
  gap?: GapSize;
  
  /** Align items on cross axis */
  align?: FlexAlign;
  
  /** Justify items on main axis */
  justify?: FlexJustify;
  
  /** Wrap items */
  wrap?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Stack component props
 */
export type StackProps<C extends ElementType = "div"> = PolymorphicProps<C, StackBaseProps>;
