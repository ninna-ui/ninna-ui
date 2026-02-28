import type { ReactNode, ComponentPropsWithoutRef } from 'react';

/** Placement options for the Drawer */
export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';

/** Size options for the Drawer */
export type DrawerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

/** Props for the Drawer root component */
export interface DrawerProps {
  /** Drawer content */
  children: ReactNode;
  /** Controlled open state */
  open?: boolean | undefined;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean | undefined;
  /** Callback when open state changes */
  onOpenChange?: ((open: boolean) => void) | undefined;
  /** Whether the drawer is modal (blocks interaction with rest of page) */
  modal?: boolean | undefined;
}

/** Props for the Drawer trigger button */
export interface DrawerTriggerProps extends ComponentPropsWithoutRef<'button'> {
  /** Render as child element instead of button */
  asChild?: boolean | undefined;
}

/** Props for the Drawer content panel */
export interface DrawerContentProps extends ComponentPropsWithoutRef<'div'> {
  /** Which edge the drawer slides from @default 'right' */
  placement?: DrawerPlacement;
  /** Size of the drawer @default 'md' */
  size?: DrawerSize;
  /** Accessible description for the drawer. Only rendered when provided. */
  description?: string;
  /** Whether clicking the overlay closes the drawer @default true */
  closeOnOverlayClick?: boolean | undefined;
  /** Whether pressing Escape closes the drawer @default true */
  closeOnEscape?: boolean | undefined;
  /** Callback when escape key is pressed */
  onEscapeKeyDown?: ((event: KeyboardEvent) => void) | undefined;
  /** Callback when pointer clicks outside content */
  onPointerDownOutside?: ((event: Event) => void) | undefined;
}

/** Props for the Drawer header section */
export interface DrawerHeaderProps extends ComponentPropsWithoutRef<'div'> {}

/** Props for the Drawer body section */
export interface DrawerBodyProps extends ComponentPropsWithoutRef<'div'> {}

/** Props for the Drawer footer section */
export interface DrawerFooterProps extends ComponentPropsWithoutRef<'div'> {}

/** Props for the Drawer close button */
export interface DrawerCloseProps extends ComponentPropsWithoutRef<'button'> {
  /** Render as child element instead of button */
  asChild?: boolean | undefined;
}
