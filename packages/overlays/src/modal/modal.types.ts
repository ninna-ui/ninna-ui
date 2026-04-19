import type { ReactNode, ComponentPropsWithoutRef } from 'react';

/** Size options for the Modal */
export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

/** Props for the Modal root component */
export interface ModalProps {
  /** Modal content */
  children: ReactNode;
  /** Controlled open state */
  open?: boolean | undefined;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean | undefined;
  /** Callback when open state changes */
  onOpenChange?: ((open: boolean) => void) | undefined;
  /** Whether the modal is modal (blocks interaction with rest of page) */
  modal?: boolean | undefined;
}

/** Props for the Modal trigger button */
export interface ModalTriggerProps extends ComponentPropsWithoutRef<'button'> {
  /** Render as child element instead of button */
  asChild?: boolean | undefined;
}

/** Props for the Modal content panel */
export interface ModalContentProps extends ComponentPropsWithoutRef<'div'> {
  /** Size of the modal content */
  size?: ModalSize;
  /** Whether the modal is centered vertically */
  centered?: boolean;
  /** Accessible title for the modal dialog. Used as a visually-hidden label
   * when no Modal.Header is rendered. When Modal.Header IS rendered it
   * provides the title visually, so this can be omitted. */
  title?: string;
  /** Accessible description for the modal. Rendered visually-hidden. */
  description?: string;
  /** Whether clicking the overlay closes the modal @default true */
  closeOnOverlayClick?: boolean | undefined;
  /** Whether pressing Escape closes the modal @default true */
  closeOnEscape?: boolean | undefined;
  /** Callback when escape key is pressed */
  onEscapeKeyDown?: ((event: KeyboardEvent) => void) | undefined;
  /** Callback when pointer clicks outside content */
  onPointerDownOutside?: ((event: Event) => void) | undefined;
  /** Callback when focus moves outside content */
  onInteractOutside?: ((event: Event) => void) | undefined;
}

/** Props for the Modal header section */
export interface ModalHeaderProps extends ComponentPropsWithoutRef<'div'> {}

/** Props for the Modal body section */
export interface ModalBodyProps extends ComponentPropsWithoutRef<'div'> {}

/** Props for the Modal footer section */
export interface ModalFooterProps extends ComponentPropsWithoutRef<'div'> {}

/** Props for the Modal close button */
export interface ModalCloseProps extends ComponentPropsWithoutRef<'button'> {
  /** Render as child element instead of button */
  asChild?: boolean | undefined;
}
