import type { HTMLAttributes, ReactNode } from "react";

/**
 * Center component props
 */
export interface CenterProps extends HTMLAttributes<HTMLDivElement> {
  /** Content to render */
  children?: ReactNode;
  
  /** Use inline-flex instead of flex */
  inline?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}
