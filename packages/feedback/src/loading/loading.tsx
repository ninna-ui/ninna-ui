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
    const dotSize = size === "xs" ? "h-1 w-1" : 
                    size === "sm" ? "h-1.5 w-1.5" :
                    size === "md" ? "h-2 w-2" :
                    size === "lg" ? "h-2.5 w-2.5" :
                    size === "xl" ? "h-3 w-3" :
                    size === "2xl" ? "h-4 w-4" : "h-5 w-5";

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
