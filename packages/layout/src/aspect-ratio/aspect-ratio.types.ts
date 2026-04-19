import type { HTMLAttributes } from "react";
import type { AspectRatioPreset } from '@ninna-ui/core';

/**
 * AspectRatio component props
 */
export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  
  /** Aspect ratio as number (width/height) or preset */
  ratio?: number | AspectRatioPreset;
  
  /** Additional CSS classes */
  className?: string;
}

