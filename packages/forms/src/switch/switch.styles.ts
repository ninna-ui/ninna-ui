import { CHECKED_BG_COLORS } from '@ninna-ui/core';
import type { CompactSize } from '@ninna-ui/core';

/**
 * Switch component styles
 */

export const SWITCH_SIZES = {
  sm: { root: "h-5 w-9", thumb: "h-4 w-4 data-[state=checked]:translate-x-4" },
  md: { root: "h-6 w-11", thumb: "h-5 w-5 data-[state=checked]:translate-x-5" },
  lg: { root: "h-7 w-14", thumb: "h-6 w-6 data-[state=checked]:translate-x-7" },
} satisfies Record<CompactSize, { root: string; thumb: string }>;

/** Switch colors — uses core CHECKED_BG_COLORS directly */
export const SWITCH_COLORS = CHECKED_BG_COLORS;

export const switchStyles = {
  root: 'relative inline-flex items-center shrink-0 cursor-pointer rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  
  // Variant styles
  variants: {
    solid: 'bg-base-200',
    outline: 'bg-transparent border-2 border-base-300',
  },
  
  // Invalid state
  invalid: 'ring-2 ring-danger ring-offset-1',
  
  // Loading state
  loading: 'cursor-wait',
  
  thumb: 'pointer-events-none flex items-center justify-center rounded-full bg-base-100 shadow-lg ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0.5',
  thumbOutline: 'shadow-none border border-base-300',
  
  // Track labels - positioned inside the track
  trackLabel: 'absolute top-1/2 -translate-y-1/2 text-[10px] font-semibold select-none uppercase tracking-wide',
  trackLabelOn: 'left-1.5 text-base-100 opacity-0 data-[state=checked]:opacity-100 transition-opacity',
  trackLabelOff: 'right-1.5 text-base-content/80 opacity-100 data-[state=checked]:opacity-0 transition-opacity',
  
  // Loading spinner
  spinner: 'animate-spin h-3 w-3 text-base-content/70',
  
  // Wrapper variations
  wrapper: 'flex items-start gap-3',
  wrapperReverse: 'flex-row-reverse',
  
  labelWrapper: 'flex flex-col gap-0.5',
  label: 'text-base-content font-medium cursor-pointer select-none',
  labelDisabled: 'opacity-50 cursor-not-allowed',
  description: 'text-base-content/70 text-sm',
};
