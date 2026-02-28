import { BG_COLORS, CHECKED_BORDER_COLORS } from '@ninna-ui/core';
import type { CompactSize } from '@ninna-ui/core';

/**
 * RadioGroup component styles
 */

export const RADIO_SIZES = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} satisfies Record<CompactSize, string>;

export const RADIO_INDICATOR_SIZES = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5",
} satisfies Record<CompactSize, string>;

/** Radio border colors — uses core CHECKED_BORDER_COLORS */
export const RADIO_COLORS = CHECKED_BORDER_COLORS;

/** Radio indicator fill colors — uses core BG_COLORS */
export const RADIO_INDICATOR_COLORS = BG_COLORS;

export const radioGroupStyles = {
  root: 'flex',
  horizontal: 'flex-row flex-wrap',
  vertical: 'flex-col',
  gap: {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4',
  },
  
  // Radio item base styles
  item: 'shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  
  // Variant styles (no dark: needed — theme CSS variables handle it)
  variants: {
    outline: 'border-base-300 bg-base-100 data-[state=checked]:border-current',
    soft: 'border-transparent bg-base-200',
    solid: 'border-base-300 bg-base-100 data-[state=checked]:bg-current data-[state=checked]:border-current',
  },
  
  // Invalid state
  invalid: 'border-danger',
  
  indicator: 'flex items-center justify-center',
  indicatorDot: 'rounded-full',
  indicatorDotSolid: 'rounded-full bg-white',
  
  // Item wrapper
  itemWrapper: 'flex items-center gap-3',
  itemWrapperReverse: 'flex-row-reverse',
  
  labelWrapper: 'flex flex-col gap-0.5',
  label: 'text-base-content font-medium cursor-pointer select-none',
  labelSizes: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  },
  labelDisabled: 'opacity-50 cursor-not-allowed',
  description: 'text-base-content/70 text-sm',
};

// RadioCard styles
export const radioCardStyles = {
  card: 'relative flex flex-col p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:border-base-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  cardDefault: 'border-base-200 bg-base-100',
  cardSelected: 'border-primary bg-primary/10',
  cardInvalid: 'border-danger',
  
  indicator: 'absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center border-base-300',
  indicatorSelected: 'border-primary bg-primary',
  indicatorDot: 'w-2 h-2 rounded-full bg-base-100',
  
  icon: 'w-8 h-8 text-base-content/80 mb-2',
  iconSelected: 'text-primary',
  
  title: 'font-medium text-base-content',
  description: 'text-sm text-base-content/70 mt-1',
};
