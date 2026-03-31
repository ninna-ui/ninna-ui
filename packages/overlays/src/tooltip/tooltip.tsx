import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { TooltipEngine } from '@ninna-ui/react-internal';
import { tooltipContentVariants, TOOLTIP_ARROW_COLORS } from './tooltip.styles';
import type {
  TooltipProps,
  TooltipTriggerProps,
  TooltipContentProps,
} from './tooltip.types';

/**
 * Tooltip component for showing contextual information on hover/focus.
 *
 * @example
 * ```tsx
 * <Tooltip>
 *   <Tooltip.Trigger asChild>
 *     <Button>Hover me</Button>
 *   </Tooltip.Trigger>
 *   <Tooltip.Content>Helpful tip here</Tooltip.Content>
 * </Tooltip>
 * ```
 */
const TooltipRoot = ({
  children,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration = 200,
  disableHoverableContent,
}: TooltipProps) => {
  return (
    <TooltipEngine.Provider delayDuration={delayDuration}>
      <TooltipEngine.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        delayDuration={delayDuration}
        disableHoverableContent={disableHoverableContent}
      >
        {children}
      </TooltipEngine.Root>
    </TooltipEngine.Provider>
  );
};

TooltipRoot.displayName = 'Tooltip';

const TooltipTrigger = forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  ({ asChild, className, children, ...props }, ref) => {
    return (
      <TooltipEngine.Trigger
        ref={ref}
        asChild={asChild}
        data-slot="tooltip-trigger"
        className={className}
        {...props}
      >
        {children}
      </TooltipEngine.Trigger>
    );
  }
);

TooltipTrigger.displayName = 'Tooltip.Trigger';

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  (
    {
      side = 'top',
      sideOffset = 4,
      align = 'center',
      color = 'neutral',
      hasArrow = false,
      avoidCollisions = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <TooltipEngine.Portal>
        <TooltipEngine.Content
          ref={ref}
          data-slot="tooltip-content"
          side={side}
          sideOffset={sideOffset}
          align={align}
          avoidCollisions={avoidCollisions}
          role="tooltip"
          className={cn(tooltipContentVariants({ color }), className)}
          {...props}
        >
          {children}
          {hasArrow && (
            <TooltipEngine.Arrow
              data-slot="tooltip-arrow"
              className={TOOLTIP_ARROW_COLORS[color]}
            />
          )}
        </TooltipEngine.Content>
      </TooltipEngine.Portal>
    );
  }
);

TooltipContent.displayName = 'Tooltip.Content';

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});
