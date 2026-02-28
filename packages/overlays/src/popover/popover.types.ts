import type { ReactNode, ComponentPropsWithoutRef } from 'react';

/** Placement options for the Popover */
export type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left';

/** Alignment options for the Popover */
export type PopoverAlign = 'start' | 'center' | 'end';

/** Props for the Popover root component */
export interface PopoverProps {
  /** Popover content */
  children: ReactNode;
  /** Controlled open state */
  open?: boolean | undefined;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean | undefined;
  /** Callback when open state changes */
  onOpenChange?: ((open: boolean) => void) | undefined;
  /** Whether the popover is modal */
  modal?: boolean | undefined;
}

/** Props for the Popover trigger */
export interface PopoverTriggerProps extends ComponentPropsWithoutRef<'button'> {
  /** Render as child element instead of button */
  asChild?: boolean | undefined;
}

/** Props for the Popover content panel */
export interface PopoverContentProps extends ComponentPropsWithoutRef<'div'> {
  /** Which side to place the popover @default 'bottom' */
  side?: PopoverPlacement;
  /** Distance from trigger in pixels @default 4 */
  sideOffset?: number;
  /** Alignment along the side @default 'center' */
  align?: PopoverAlign;
  /** Whether to avoid collisions with viewport boundary @default true */
  avoidCollisions?: boolean | undefined;
  /** Callback when escape key is pressed */
  onEscapeKeyDown?: ((event: KeyboardEvent) => void) | undefined;
  /** Callback when pointer clicks outside content */
  onPointerDownOutside?: ((event: Event) => void) | undefined;
  /** Callback when focus moves outside content */
  onFocusOutside?: ((event: Event) => void) | undefined;
}

/** Props for the Popover arrow */
export interface PopoverArrowProps extends ComponentPropsWithoutRef<'svg'> {
  /** Width of the arrow in pixels @default 10 */
  width?: number;
  /** Height of the arrow in pixels @default 5 */
  height?: number;
}

/** Props for the Popover close button */
export interface PopoverCloseProps extends ComponentPropsWithoutRef<'button'> {
  /** Render as child element instead of button */
  asChild?: boolean | undefined;
}
