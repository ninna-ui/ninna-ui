import { forwardRef, cloneElement, isValidElement } from "react";
import { cn } from "@ninna-ui/utils";
import {
  emptyStateStyles,
  emptyStateVariants,
  emptyStateIconContainerVariants,
  emptyStateTitleVariants,
  emptyStateDescriptionVariants,
  EMPTY_STATE_ICON_SIZES,
} from "./empty-state.styles";
import type { EmptyStateProps, EmptyStateSize } from "./empty-state.types";

// Extracted component for better reconciliation
const EmptyStateIcon = ({ icon, size }: { icon?: React.ReactNode; size: EmptyStateSize }) => {
  if (!icon) return null;

  if (isValidElement(icon)) {
    return cloneElement(icon as React.ReactElement<{ className?: string }>, {
      className: cn(
        EMPTY_STATE_ICON_SIZES[size],
        (icon as React.ReactElement<{ className?: string }>).props.className
      ),
    });
  }

  return icon;
};

/**
 * EmptyState component for displaying empty or unavailable resource states.
 * Used to indicate when there is no data to display.
 *
 * @example
 * ```tsx
 * <EmptyState
 *   title="No results found"
 *   description="Try adjusting your search or filters"
 *   icon={<SearchIcon />}
 *   action={<Button>Clear filters</Button>}
 * />
 * ```
 */
export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      title,
      description,
      icon,
      size = "md",
      action,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-slot="empty-state"
        role="status"
        aria-label={title}
        className={cn(
          emptyStateVariants({ size }),
          className
        )}
        {...props}
      >
        {icon && (
          <div
            data-slot="icon"
            className={cn(
              emptyStateIconContainerVariants({ size })
            )}
            aria-hidden="true"
          >
            <EmptyStateIcon icon={icon} size={size} />
          </div>
        )}

        <h3
          data-slot="title"
          className={cn(
            emptyStateTitleVariants({ size })
          )}
        >
          {title}
        </h3>

        {description && (
          <p
            data-slot="description"
            className={cn(
              emptyStateDescriptionVariants({ size })
            )}
          >
            {description}
          </p>
        )}

        {children && (
          <div className={emptyStateStyles.children}>
            {children}
          </div>
        )}

        {action && (
          <div className={emptyStateStyles.action}>
            {action}
          </div>
        )}
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";
