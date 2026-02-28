import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import type { AspectRatioPreset } from '../types';
import type { AspectRatioProps } from "./aspect-ratio.types";
import { aspectRatioDefaults, ASPECT_RATIO_PRESETS } from "./aspect-ratio.types";

/**
 * Get numeric ratio from preset or number
 */
function getRatio(ratio: number | AspectRatioPreset): number {
  if (typeof ratio === "number") {
    return ratio;
  }
  return ASPECT_RATIO_PRESETS[ratio];
}

/**
 * AspectRatio component - Maintains a consistent aspect ratio for content.
 * Useful for images, videos, or any content that needs fixed proportions.
 *
 * @example
 * ```tsx
 * <AspectRatio ratio={16/9}>
 *   <img src="/video-thumbnail.jpg" className="object-cover w-full h-full" />
 * </AspectRatio>
 * <AspectRatio ratio="square">
 *   <Avatar />
 * </AspectRatio>
 * ```
 */
export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  (
    {
      children,
      ratio = aspectRatioDefaults.ratio,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const numericRatio = getRatio(ratio);

    return (
      <div
        ref={ref}
        data-slot="aspect-ratio"
        className={cn("relative w-full overflow-hidden", className)}
        style={{ aspectRatio: numericRatio, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AspectRatio.displayName = "AspectRatio";
