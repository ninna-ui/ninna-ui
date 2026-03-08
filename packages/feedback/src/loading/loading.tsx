import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import type { LoadingProps } from "./loading.types";
import { loadingVariants } from "./loading.styles";

const DOT_SIZES: Record<string, string> = {
  xs: "size-1.5",
  sm: "size-2",
  md: "size-2.5",
  lg: "size-3",
  xl: "size-4",
  "2xl": "size-5",
  "3xl": "size-6",
};

/**
 * Loading component for loading states
 *
 * @example
 * <Loading variant="spin" color="primary" size="md" />
 * <Loading variant="dots" color="success" size="lg" />
 * <Loading variant="pulse" color="info" size="xl" label="Loading content..." />
 */
export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  (
    {
      variant = "spin",
      color = "primary",
      size = "md",
      className,
      label = "Loading...",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-slot="loading"
        role="status"
        aria-label={label}
        className={cn(
          loadingVariants({ variant, color, size }),
          (variant === "pulse" || variant === "ping") && "bg-current",
          className
        )}
        {...props}
      >
        {variant === "dots" && (
          <>
            {["0ms", "150ms", "300ms"].map((delay) => (
              <span
                key={delay}
                className={cn(
                  "rounded-full animate-bounce bg-current",
                  DOT_SIZES[size]
                )}
                style={{ animationDelay: delay }}
              />
            ))}
          </>
        )}

        <span className="sr-only">{label}</span>
      </div>
    );
  }
);

Loading.displayName = "Loading";