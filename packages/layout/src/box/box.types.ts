import type { HTMLAttributes, ReactNode } from "react";

/**
 * Box component props
 */
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /** Content to render */
  children?: ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}
