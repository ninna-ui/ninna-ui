import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { DialogEngine } from '@ninna-ui/react-internal';
import { drawerStyles, DRAWER_PLACEMENT, DRAWER_SIZES_HORIZONTAL, DRAWER_SIZES_VERTICAL } from './drawer.styles';
import type {
  DrawerProps,
  DrawerTriggerProps,
  DrawerContentProps,
  DrawerHeaderProps,
  DrawerBodyProps,
  DrawerFooterProps,
  DrawerCloseProps,
} from './drawer.types';

const CloseIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
);

/**
 * Drawer component for sliding panels from screen edges.
 *
 * @example
 * ```tsx
 * <Drawer open={open} onOpenChange={setOpen}>
 *   <Drawer.Trigger asChild>
 *     <Button>Open Drawer</Button>
 *   </Drawer.Trigger>
 *   <Drawer.Content placement="right" size="md">
 *     <Drawer.Header>Settings</Drawer.Header>
 *     <Drawer.Body>Content here</Drawer.Body>
 *     <Drawer.Footer>
 *       <Drawer.Close asChild><Button variant="ghost">Close</Button></Drawer.Close>
 *     </Drawer.Footer>
 *   </Drawer.Content>
 * </Drawer>
 * ```
 */
const DrawerRoot = ({ children, open, defaultOpen, onOpenChange, modal = true }: DrawerProps) => {
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

DrawerRoot.displayName = 'Drawer';

const DrawerTrigger = forwardRef<HTMLButtonElement, DrawerTriggerProps>(
  ({ asChild, className, children, ...props }, ref) => {
    return (
      <DialogEngine.Trigger ref={ref} asChild={asChild} data-slot="drawer-trigger" className={className} {...props}>
        {children}
      </DialogEngine.Trigger>
    );
  }
);

DrawerTrigger.displayName = 'Drawer.Trigger';

const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  (
    {
      placement = 'right',
      size = 'md',
      description,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      onEscapeKeyDown,
      onPointerDownOutside,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isVertical = placement === 'top' || placement === 'bottom';
    const sizeClass = isVertical ? DRAWER_SIZES_VERTICAL[size] : DRAWER_SIZES_HORIZONTAL[size];

    return (
      <DialogEngine.Portal>
        <DialogEngine.Overlay data-slot="drawer-overlay" className={cn(drawerStyles.overlay)} />
        <DialogEngine.Content
          ref={ref}
          data-slot="drawer-content"
          data-placement={placement}
          data-size={size}
          className={cn(
            drawerStyles.content,
            DRAWER_PLACEMENT[placement],
            sizeClass,
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
          aria-modal="true"
          {...props}
        >
          <DialogEngine.Title className="sr-only">Drawer</DialogEngine.Title>
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

DrawerContent.displayName = 'Drawer.Content';

const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="drawer-header" className={cn(drawerStyles.header, className)} {...props}>
        <DialogEngine.Title asChild>
          <div>{children}</div>
        </DialogEngine.Title>
      </div>
    );
  }
);

DrawerHeader.displayName = 'Drawer.Header';

const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="drawer-body" className={cn(drawerStyles.body, className)} {...props}>
        {children}
      </div>
    );
  }
);

DrawerBody.displayName = 'Drawer.Body';

const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="drawer-footer" className={cn(drawerStyles.footer, className)} {...props}>
        {children}
      </div>
    );
  }
);

DrawerFooter.displayName = 'Drawer.Footer';

const DrawerClose = forwardRef<HTMLButtonElement, DrawerCloseProps>(
  ({ asChild, className, children, ...props }, ref) => {
    const defaultContent = children || <CloseIcon />;
    return (
      <DialogEngine.Close
        ref={ref}
        asChild={asChild}
        data-slot="drawer-close"
        className={cn(!asChild && drawerStyles.close, className)}
        aria-label="Close"
        {...props}
      >
        {defaultContent}
      </DialogEngine.Close>
    );
  }
);

DrawerClose.displayName = 'Drawer.Close';

export const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Content: DrawerContent,
  Header: DrawerHeader,
  Body: DrawerBody,
  Footer: DrawerFooter,
  Close: DrawerClose,
});
