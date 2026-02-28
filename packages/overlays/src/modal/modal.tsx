import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { DialogEngine } from '@ninna-ui/react-internal';
import { modalStyles, MODAL_SIZES } from './modal.styles';
import type {
  ModalProps,
  ModalTriggerProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalCloseProps,
} from './modal.types';

const CloseIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
);

/**
 * Modal component for displaying content in an overlay dialog.
 *
 * @example
 * ```tsx
 * <Modal open={open} onOpenChange={setOpen}>
 *   <Modal.Trigger asChild>
 *     <Button>Open Modal</Button>
 *   </Modal.Trigger>
 *   <Modal.Content size="md">
 *     <Modal.Header>Title</Modal.Header>
 *     <Modal.Body>Content here</Modal.Body>
 *     <Modal.Footer>
 *       <Modal.Close asChild><Button variant="ghost">Cancel</Button></Modal.Close>
 *       <Button>Confirm</Button>
 *     </Modal.Footer>
 *   </Modal.Content>
 * </Modal>
 * ```
 */
const ModalRoot = ({ children, open, defaultOpen, onOpenChange, modal = true }: ModalProps) => {
  return (
    <DialogEngine.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      {children}
    </DialogEngine.Root>
  );
};

ModalRoot.displayName = 'Modal';

const ModalTrigger = forwardRef<HTMLButtonElement, ModalTriggerProps>(
  ({ asChild, className, children, ...props }, ref) => {
    return (
      <DialogEngine.Trigger ref={ref} asChild={asChild} data-slot="modal-trigger" className={className} {...props}>
        {children}
      </DialogEngine.Trigger>
    );
  }
);

ModalTrigger.displayName = 'Modal.Trigger';

const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  (
    {
      size = 'md',
      centered = true,
      description,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      onEscapeKeyDown,
      onPointerDownOutside,
      onInteractOutside,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <DialogEngine.Portal>
        <DialogEngine.Overlay data-slot="modal-overlay" className={cn(modalStyles.overlay)} />
        <DialogEngine.Content
          ref={ref}
          data-slot="modal-content"
          data-size={size}
          className={cn(
            modalStyles.content,
            MODAL_SIZES[size],
            centered ? modalStyles.contentCentered : modalStyles.contentTop,
            className
          )}
          onEscapeKeyDown={(event) => {
            if (!closeOnEscape) event.preventDefault();
            onEscapeKeyDown?.(event);
          }}
          onPointerDownOutside={(event) => {
            if (!closeOnOverlayClick) event.preventDefault();
            onPointerDownOutside?.(event);
          }}
          onInteractOutside={onInteractOutside ? (event) => onInteractOutside(event) : undefined}
          aria-modal="true"
          {...props}
        >
          <DialogEngine.Title className="sr-only">Dialog</DialogEngine.Title>
          {description && (
            <DialogEngine.Description className="sr-only">
              {description}
            </DialogEngine.Description>
          )}
          {children}
        </DialogEngine.Content>
      </DialogEngine.Portal>
    );
  }
);

ModalContent.displayName = 'Modal.Content';

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="modal-header" className={cn(modalStyles.header, className)} {...props}>
        <DialogEngine.Title asChild>
          <div>{children}</div>
        </DialogEngine.Title>
      </div>
    );
  }
);

ModalHeader.displayName = 'Modal.Header';

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="modal-body" className={cn(modalStyles.body, className)} {...props}>
        {children}
      </div>
    );
  }
);

ModalBody.displayName = 'Modal.Body';

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="modal-footer" className={cn(modalStyles.footer, className)} {...props}>
        {children}
      </div>
    );
  }
);

ModalFooter.displayName = 'Modal.Footer';

const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps>(
  ({ asChild, className, children, ...props }, ref) => {
    const defaultContent = children || <CloseIcon />;
    return (
      <DialogEngine.Close
        ref={ref}
        asChild={asChild}
        data-slot="modal-close"
        className={cn(!asChild && modalStyles.close, className)}
        aria-label="Close"
        {...props}
      >
        {defaultContent}
      </DialogEngine.Close>
    );
  }
);

ModalClose.displayName = 'Modal.Close';

export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Close: ModalClose,
});
