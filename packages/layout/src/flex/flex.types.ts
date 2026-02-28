import type { HTMLAttributes, ReactNode } from "react";
import type { FlexDirection, FlexAlign, FlexJustify, FlexWrap, GapSize } from '../types';

/**
 * Flex component props
 */
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /** Content to render */
  children?: ReactNode;
  
  /** Flex direction */
  direction?: FlexDirection;
  
  /** Gap between items */
  gap?: GapSize;
  
  /** Align items on cross axis */
  align?: FlexAlign;
  
  /** Justify items on main axis */
  justify?: FlexJustify;
  
  /** Wrap behavior */
  wrap?: FlexWrap;
  
  /** Make flex container inline */
  inline?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Default props for Flex
 */
export const flexDefaults = {
  direction: "row" as FlexDirection,
};
