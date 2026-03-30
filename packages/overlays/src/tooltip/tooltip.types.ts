import type { ReactNode, ComponentPropsWithoutRef } from 'react';

/** Placement options for the Tooltip */
export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

/** Props for the Tooltip root component */
export interface TooltipProps {
  /** Tooltip content */
  children: ReactNode;
  /** Controlled open state */
  open?: boolean | undefined;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean | undefined;
  /** Callback when open state changes */
  onOpenChange?: ((open: boolean) => void) | undefined;
  /** Delay in ms before showing the tooltip @default 200 */
  delayDuration?: number | undefined;
  /** Whether to disable hoverable content */
  disableHoverableContent?: boolean | undefined;
}

/** Props for the Tooltip trigger */
export interface TooltipTriggerProps extends ComponentPropsWithoutRef<'button'> {
  /** Render as child element instead of button */
  asChild?: boolean | undefined;
}

/** Props for the Tooltip content */
export interface TooltipContentProps extends ComponentPropsWithoutRef<'div'> {
  /** Which side to place the tooltip @default 'top' */
  side?: TooltipPlacement;
  /** Distance from trigger in pixels @default 4 */
  sideOffset?: number;
  /** Alignment along the side @default 'center' */
  align?: 'start' | 'center' | 'end';
  /** Color theme @default 'default' */
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'danger' | 'warning' | 'info';
  /** Whether to show an arrow @default false */
  hasArrow?: boolean | undefined;
  /** Whether to avoid collisions with viewport boundary @default true */
  avoidCollisions?: boolean | undefined;
}
