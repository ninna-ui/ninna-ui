import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import type { LoadingProps } from "./loading.types";
import { loadingVariants, LOADING_COLORS } from "./loading.styles";

/**
 * Loading component for loading states
 * 
 * @example
 * ```tsx
 * <Loading variant="spin" color="primary" size="md" />
 * <Loading variant="dots" color="success" size="lg" />
 * <Loading variant="pulse" color="info" size="xl" label="Loading content..." />
 * ```
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
  // Dots variant has different structure
  if (variant === "dots") {
    const dotSize = size === "xs" ? "size-1.5" : 
                    size === "sm" ? "size-2" :
                    size === "md" ? "size-2.5" :
                    size === "lg" ? "size-3" :
                    size === "xl" ? "size-4" :
                    size === "2xl" ? "size-5" : "size-6";

    return (
      <div
        ref={ref}
        data-slot="loading"
        className={cn(
          loadingVariants({ variant }),
          className
        )}
        role="status"
        aria-label={label}
        {...props}
      >
        <span className={cn("rounded-full animate-bounce", dotSize, LOADING_COLORS[color], "bg-current")} style={{ animationDelay: "0ms" }} />
        <span className={cn("rounded-full animate-bounce", dotSize, LOADING_COLORS[color], "bg-current")} style={{ animationDelay: "150ms" }} />
        <span className={cn("rounded-full animate-bounce", dotSize, LOADING_COLORS[color], "bg-current")} style={{ animationDelay: "300ms" }} />
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      data-slot="loading"
      className={cn(
        loadingVariants({ variant, size, color }),
        (variant === "pulse" || variant === "ping") && "bg-current",
        className
      )}
      role="status"
      aria-label={label}
      {...props}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
  }
);

Loading.displayName = 'Loading';
