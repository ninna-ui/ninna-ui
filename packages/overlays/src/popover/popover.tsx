import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { PopoverEngine } from '@ninna-ui/react-internal';
import { popoverStyles } from './popover.styles';
import type {
  PopoverProps,
  PopoverTriggerProps,
  PopoverContentProps,
  PopoverArrowProps,
  PopoverCloseProps,
} from './popover.types';

const CloseIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
);

/**
 * Popover component for floating content panels anchored to a trigger.
 *
 * @example
 * ```tsx
 * <Popover>
 *   <Popover.Trigger asChild>
 *     <Button>Open Popover</Button>
 *   </Popover.Trigger>
 *   <Popover.Content>
 *     <p>Popover content here</p>
 *     <Popover.Arrow />
 *   </Popover.Content>
 * </Popover>
 * ```
 */
const PopoverRoot = ({ children, open, defaultOpen, onOpenChange, modal }: PopoverProps) => {
  return (
    <PopoverEngine.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      {children}
    </PopoverEngine.Root>
  );
};

PopoverRoot.displayName = 'Popover';

const PopoverTrigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ asChild, className, children, ...props }, ref) => {
    return (
      <PopoverEngine.Trigger
        ref={ref}
        asChild={asChild}
        data-slot="popover-trigger"
        className={className}
        {...props}
      >
        {children}
      </PopoverEngine.Trigger>
    );
  }
);

PopoverTrigger.displayName = 'Popover.Trigger';

const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  (
    {
      side = 'bottom',
      sideOffset = 4,
      align = 'center',
      avoidCollisions = true,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <PopoverEngine.Portal>
        <PopoverEngine.Content
          ref={ref}
          data-slot="popover-content"
          side={side}
          sideOffset={sideOffset}
          align={align}
          avoidCollisions={avoidCollisions}
          onEscapeKeyDown={onEscapeKeyDown ? (event) => onEscapeKeyDown(event) : undefined}
          onPointerDownOutside={onPointerDownOutside ? (event) => onPointerDownOutside(event) : undefined}
          onFocusOutside={onFocusOutside ? (event) => onFocusOutside(event) : undefined}
          className={cn(popoverStyles.content, className)}
          {...props}
        >
          {children}
        </PopoverEngine.Content>
      </PopoverEngine.Portal>
    );
  }
);

PopoverContent.displayName = 'Popover.Content';

const PopoverArrow = forwardRef<SVGSVGElement, PopoverArrowProps>(
  ({ width = 10, height = 5, className, ...props }, ref) => {
    return (
      <PopoverEngine.Arrow
        ref={ref}
        data-slot="popover-arrow"
        width={width}
        height={height}
        className={cn(popoverStyles.arrow, className)}
        {...props}
      />
    );
  }
);

PopoverArrow.displayName = 'Popover.Arrow';

const PopoverClose = forwardRef<HTMLButtonElement, PopoverCloseProps>(
  ({ asChild, className, children, ...props }, ref) => {
    const defaultContent = children || <CloseIcon />;
    return (
      <PopoverEngine.Close
        ref={ref}
        asChild={asChild}
        data-slot="popover-close"
        className={cn(!asChild && popoverStyles.close, className)}
        aria-label="Close"
        {...props}
      >
        {defaultContent}
      </PopoverEngine.Close>
    );
  }
);

PopoverClose.displayName = 'Popover.Close';

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Arrow: PopoverArrow,
  Close: PopoverClose,
});
