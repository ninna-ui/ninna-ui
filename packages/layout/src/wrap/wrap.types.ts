import type { HTMLAttributes, ReactNode } from "react";
import type { FlexAlign, FlexJustify, GapSize } from '../types';

/**
 * Wrap component props
 */
export interface WrapProps extends HTMLAttributes<HTMLDivElement> {
  /** Content to render */
  children?: ReactNode;
  
  /** Gap between items */
  gap?: GapSize;
  
  /** Align items on cross axis */
  align?: FlexAlign;
  
  /** Justify items on main axis */
  justify?: FlexJustify;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Default props for Wrap
 */
export const wrapDefaults = {
  gap: "4" as GapSize,
};
