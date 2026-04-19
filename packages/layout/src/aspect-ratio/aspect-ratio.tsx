import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import type { AspectRatioPreset } from '@ninna-ui/core';
import type { AspectRatioProps } from "./aspect-ratio.types";

const ASPECT_RATIO_PRESETS: Record<AspectRatioPreset, number> = {
  square:   1,
  video:    16 / 9,
  portrait: 3 / 4,
  wide:     21 / 9,
};

const ASPECT_RATIO_DEFAULT = 1;

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
      ratio = ASPECT_RATIO_DEFAULT,
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
