import { RADIUS_CLASSES } from '@ninna-ui/core';
import type { Radius } from '@ninna-ui/core';
import type { SkeletonVariant } from './skeleton.types';

/**
 * Skeleton styles configuration

 */

export const skeletonStyles = {

  /**

   * Base styles for the skeleton

   */

  base: "bg-base-200",



  /**

   * Animation variants

   */

  variants: {

    pulse: "animate-pulse motion-reduce:animate-none ninna-skeleton-animated",

    shine: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent ninna-skeleton-animated",

    none: "",

  } as Record<SkeletonVariant, string>,



  /**

   * Border radius variants (imported from core)

   */

  radius: RADIUS_CLASSES,



  /**

   * Circle variant

   */

  circle: "rounded-full",



  /**

   * Text line styles

   */

  textLine: "h-4 w-full",

  textLineFirst: "w-full",

  textLineLast: "w-4/5",

};



/**

 * Get variant class

 */

export function getVariantClass(variant: SkeletonVariant): string {

  return skeletonStyles.variants[variant];

}



/**

 * Get radius class

 */

export function getRadiusClass(radius: Radius): string {

  return RADIUS_CLASSES[radius];

}

