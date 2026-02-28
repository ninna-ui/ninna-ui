import type { HTMLAttributes, ReactNode } from "react";
import type { AspectRatioPreset } from '../types';

/**
 * AspectRatio component props
 */
export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  /** Content to render */
  children?: ReactNode;
  
  /** Aspect ratio as number (width/height) or preset */
  ratio?: number | AspectRatioPreset;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Aspect ratio preset values
 */
export const ASPECT_RATIO_PRESETS = {
  square: 1,
  video: 16 / 9,
  portrait: 3 / 4,
  wide: 21 / 9,
} as const;

/**
 * Default props for AspectRatio
 */
export const aspectRatioDefaults = {
  ratio: 1,
};
