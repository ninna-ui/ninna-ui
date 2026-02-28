import type { HTMLAttributes, ReactNode } from "react";
import type { FlexDirection, FlexAlign, FlexJustify, GapSize } from '../types';

/**
 * Stack component props
 */
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Content to render */
  children?: ReactNode;
  
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
 * Default props for Stack
 */
export const stackDefaults = {
  direction: "column" as FlexDirection,
  gap: "4" as GapSize,
};
