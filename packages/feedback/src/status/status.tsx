import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import {
  statusIndicatorVariants,
  statusLabelVariants,
  STATUS_ROOT_CLASS,
} from "./status.styles";
import type { StatusProps } from "./status.types";

/**
 * Status component for displaying status indicators with optional labels.
 * Used to indicate the status of a process or state.
 *
 * @example
 * ```tsx
 * <Status value="success">Completed</Status>
 * <Status value="error">Failed</Status>
 * <Status value="warning">Pending</Status>
 * <Status value="info">Processing</Status>
 * ```
 */
export const Status = forwardRef<HTMLDivElement, StatusProps>(
  (
    {
      value = "info",
      size = "md",
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-slot="status"
        role="status"
        aria-label={children ? undefined : `Status: ${value}`}
        className={cn(STATUS_ROOT_CLASS, className)}
        {...props}
      >
        <span
          data-slot="indicator"
          className={cn(
            statusIndicatorVariants({ value, size })
          )}
          aria-hidden="true"
        />
        {children && (
          <span
            data-slot="label"
            className={cn(
              statusLabelVariants({ value, size })
            )}
          >
            {children}
          </span>
        )}
      </div>
    );
  }
);

Status.displayName = "Status";
