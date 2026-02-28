import type { GapSize } from '../types';

const GAP_SIZES: Record<GapSize, string> = {
  '0': 'gap-0', '1': 'gap-1', '2': 'gap-2', '3': 'gap-3',
  '4': 'gap-4', '5': 'gap-5', '6': 'gap-6', '8': 'gap-8',
  '10': 'gap-10', '12': 'gap-12', '16': 'gap-16',
};

/**
 * SimpleGrid styles configuration
 */
export const simpleGridStyles = {
  /**
   * Base styles
   */
  base: "grid",
};

/**
 * Get gap class
 */
export function getGapClass(gap: GapSize): string {
  return GAP_SIZES[gap];
}
