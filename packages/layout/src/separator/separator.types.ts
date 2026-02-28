import type { HTMLAttributes } from "react";
import type { SeparatorOrientation } from '../types';

/**
 * Separator component props
 */
export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  /** Orientation of the separator */
  orientation?: SeparatorOrientation;
  
  /** Whether the separator is purely decorative (no semantic meaning) */
  decorative?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Default props for Separator
 */
export const separatorDefaults = {
  orientation: "horizontal" as SeparatorOrientation,
  decorative: true,
};
