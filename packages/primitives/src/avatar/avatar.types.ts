import type { HTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';
import type { Color, Size, Radius } from '@ninna-ui/core';

/** Avatar shape variants */
export type AvatarShape = 'circle' | 'square';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Image source URL */
  src?: string;
  
  /** Alternative text for the image */
  alt?: string;
  
  /** Name used to generate initials fallback */
  name?: string;
  
  /** Size of the avatar */
  size?: Size;
  
  /** Shape of the avatar */
  shape?: AvatarShape;
  
  /** Border radius (only applies when shape is "square") */
  radius?: Radius;
  
  /** Color theme for fallback background */
  color?: Color;
  
  /** Show a colored ring around the avatar */
  showRing?: boolean;
  
  /** Ring color (defaults to color prop) */
  ringColor?: Color;
  
  /** Custom fallback content when image fails or no src */
  fallback?: ReactNode;
  
  /** Show fallback icon instead of initials */
  showFallbackIcon?: boolean;
  
  /** Image loading attribute */
  loading?: ImgHTMLAttributes<HTMLImageElement>["loading"];
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to show */
  max?: number;
  
  /** Size for all avatars in the group */
  size?: Size;
  
  /** Spacing between avatars (negative for overlap) */
  spacing?: 'tight' | 'normal' | 'loose';
  
  /** Avatar children */
  children: ReactNode;
}
