import { RADIUS_CLASSES, SOFT_BG_COLORS, TEXT_COLORS, RING_COLORS } from '@ninna-ui/core';
import type { Color, Size, Radius } from '@ninna-ui/core';
import type { AvatarShape } from './avatar.types';

/**
 * Avatar styles configuration
 * All size/color classes come from @ninna-ui/core for consistency
 */
export const avatarStyles = {
  /**
   * Base styles applied to all avatars
   */
  base: [
    'relative inline-flex items-center justify-center',
    'overflow-hidden shrink-0',
    'select-none',
  ].join(' '),

  /**
   * Size variants
   */
  sizes: {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  } satisfies Record<Size, string>,

  /**
   * Text sizes for initials
   */
  textSizes: {
    xs: 'text-xs',
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  } satisfies Record<Size, string>,

  /**
   * Icon sizes for fallback icon
   */
  iconSizes: {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8',
  } satisfies Record<Size, string>,

  /**
   * Background colors for fallback
   */
  bgColors: SOFT_BG_COLORS,

  /**
   * Text colors for initials
   */
  textColors: TEXT_COLORS,

  /**
   * Ring colors
   */
  ringColors: RING_COLORS,

  /**
   * Shape styles
   */
  shapes: {
    circle: 'rounded-full',
    square: '',
  } as Record<AvatarShape, string>,

  /**
   * Radius classes (for square shape)
   */
  radius: RADIUS_CLASSES,

  /**
   * Ring styles
   */
  ring: 'ring-2 ring-offset-2 ring-offset-base-100',

  /**
   * Image styles
   */
  image: 'h-full w-full object-cover',

  /**
   * Fallback container styles
   */
  fallback: 'flex items-center justify-center h-full w-full font-medium uppercase',

  /**
   * Group styles
   */
  group: {
    base: 'flex items-center',
    spacing: {
      tight: '-space-x-3',
      normal: '-space-x-2',
      loose: '-space-x-1',
    },
    item: 'ring-2 ring-base-100',
    overflow: 'flex items-center justify-center bg-base-200 text-base-content/80 text-xs font-medium',
  },
};

/**
 * Get size class for avatar
 */
export function getSizeClass(size: Size): string {
  return avatarStyles.sizes[size];
}

/**
 * Get background color class for fallback
 */
export function getBgColorClass(color: Color): string {
  return avatarStyles.bgColors[color];
}

/**
 * Get ring color class
 */
export function getRingColorClass(color: Color): string {
  return avatarStyles.ringColors[color];
}

/**
 * Get shape class
 */
export function getShapeClass(shape: AvatarShape, radius?: Radius): string {
  if (shape === 'circle') {
    return avatarStyles.shapes.circle;
  }
  return radius ? avatarStyles.radius[radius] : avatarStyles.radius.md;
}

