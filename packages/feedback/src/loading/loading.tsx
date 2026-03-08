import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import type { LoadingProps } from "./loading.types";
import { loadingVariants } from "./loading.styles";

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
      {variant === "dots" && (
        <>
          {["0ms", "150ms", "300ms"].map((delay) => (
            <span
              key={delay}
              className={cn(
                "rounded-full animate-bounce",
                size === "xs" ? "w-2 h-2" : 
                size === "sm" ? "w-2.5 h-2.5" :
                size === "md" ? "w-3 h-3" :
                size === "lg" ? "w-3.5 h-3.5" :
                size === "xl" ? "w-4 h-4" :
                size === "2xl" ? "w-5 h-5" : "w-6 h-6",
                "bg-current"
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

Loading.displayName = 'Loading';
