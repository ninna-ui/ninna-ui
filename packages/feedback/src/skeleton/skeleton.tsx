import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import {
  skeletonStyles,
  getVariantClass,
  getRadiusClass,
} from "./skeleton.styles";
import type {
  SkeletonProps,
  SkeletonCircleProps,
  SkeletonTextProps,
} from "./skeleton.types";

/**
 * Shimmer animation keyframes injected via style tag
 */
const shimmerKeyframes = `
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
@media (prefers-reduced-motion: reduce) {
  .ninna-skeleton-animated {
    animation: none !important;
  }
}
`;

/**
 * Inject shimmer keyframes into document head (only once)
 */
let shimmerStyleInjected = false;
function injectShimmerStyle() {
  if (typeof document === "undefined" || shimmerStyleInjected) return;
  const style = document.createElement("style");
  style.textContent = shimmerKeyframes;
  document.head.appendChild(style);
  shimmerStyleInjected = true;
}

/**
 * Skeleton component for displaying loading placeholders.
 * Used to indicate content is loading.
 *
 * @example
 * ```tsx
 * <Skeleton width="200px" height="20px" />
 * <Skeleton loading={isLoading}>
 *   <div>Content loaded</div>
 * </Skeleton>
 * ```
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = "pulse",
      width,
      height,
      radius = "md",
      loading = true,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // Inject shimmer keyframes for shine variant
    if (variant === "shine") {
      injectShimmerStyle();
    }

    if (!loading && children) {
      return <>{children}</>;
    }

    const sizeStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style,
    };

    return (
      <div
        ref={ref}
        data-slot="skeleton"
        role="status"
        aria-busy="true"
        aria-label="Loading"
        className={cn(
          skeletonStyles.base,
          getVariantClass(variant),
          getRadiusClass(radius),
          className
        )}
        style={sizeStyle}
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);

Skeleton.displayName = "Skeleton";

/**
 * SkeletonCircle component for circular loading placeholders.
 * Commonly used for avatar placeholders.
 *
 * @example
 * ```tsx
 * <SkeletonCircle size="40px" />
 * <SkeletonCircle size={48} />
 * ```
 */
export const SkeletonCircle = forwardRef<HTMLDivElement, SkeletonCircleProps>(
  (
    {
      variant = "pulse",
      size = "40px",
      loading = true,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // Inject shimmer keyframes for shine variant
    if (variant === "shine") {
      injectShimmerStyle();
    }

    if (!loading && children) {
      return <>{children}</>;
    }

    const sizeValue = typeof size === "number" ? `${size}px` : size;
    const sizeStyle = {
      width: sizeValue,
      height: sizeValue,
      ...style,
    };

    return (
      <div
        ref={ref}
        data-slot="skeleton-circle"
        role="status"
        aria-busy="true"
        aria-label="Loading"
        className={cn(
          skeletonStyles.base,
          getVariantClass(variant),
          skeletonStyles.circle,
          className
        )}
        style={sizeStyle}
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);

SkeletonCircle.displayName = "SkeletonCircle";

/**
 * SkeletonText component for text loading placeholders.
 * Renders multiple lines to simulate text content.
 *
 * @example
 * ```tsx
 * <SkeletonText noOfLines={3} />
 * <SkeletonText noOfLines={2} gap="12px" />
 * ```
 */
export const SkeletonText = forwardRef<HTMLDivElement, SkeletonTextProps>(
  (
    {
      noOfLines = 3,
      gap = "8px",
      variant = "pulse",
      loading = true,
      children,
      className,
      ...props
    },
    ref
  ) => {
    // Inject shimmer keyframes for shine variant
    if (variant === "shine") {
      injectShimmerStyle();
    }

    if (!loading && children) {
      return <>{children}</>;
    }

    const gapValue = typeof gap === "number" ? `${gap}px` : gap;

    return (
      <div
        ref={ref}
        data-slot="skeleton-text"
        role="status"
        aria-busy="true"
        aria-label="Loading"
        className={cn("flex flex-col w-full", className)}
        style={{ gap: gapValue }}
        {...props}
      >
        {Array.from({ length: noOfLines }).map((_, index) => (
          <div
            key={index}
            className={cn(
              skeletonStyles.base,
              getVariantClass(variant),
              skeletonStyles.textLine,
              "rounded",
              index === noOfLines - 1 && noOfLines > 1 && skeletonStyles.textLineLast
            )}
          />
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);

SkeletonText.displayName = "SkeletonText";
