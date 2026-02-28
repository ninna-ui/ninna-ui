/**
 * Typography Class Mappings
 * Text size and weight Tailwind class mappings
 */
import type { TextSize, TextWeight } from '../tokens';

/** Text size class mappings */
export const TEXT_SIZE_CLASSES: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

/** Text weight class mappings */
export const TEXT_WEIGHT_CLASSES: Record<TextWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};
