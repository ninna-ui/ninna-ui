/**
 * Checkbox component styles
 */

import type { Color, CompactSize } from '@ninna-ui/core';
import {
  PEER_CHECKED_BG_COLORS,
  PEER_CHECKED_BORDER_COLORS,
  PEER_FOCUS_VISIBLE_RING_COLORS,
} from '@ninna-ui/core';

/** Get color classes for checkbox using core state maps */
export function getCheckboxColorClasses(color: Color): string {
  return [
    PEER_CHECKED_BG_COLORS[color],
    PEER_CHECKED_BORDER_COLORS[color],
    PEER_FOCUS_VISIBLE_RING_COLORS[color],
  ].join(' ');
}

export const checkboxStyles = {
  // Base styles for the checkbox root (hidden native input)
  input: 'sr-only peer',
  
  // Visual checkbox box
  box: 'relative shrink-0 rounded border-2 flex items-center justify-center transition-all duration-200 cursor-pointer peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
  
  // Variant styles - unchecked state using theme tokens
  variants: {
    outline: {
      unchecked: 'border-base-300 bg-base-100',
      checked: 'border-current bg-current',
    },
    soft: {
      unchecked: 'border-transparent bg-base-200',
      checked: 'border-transparent bg-current',
    },
    solid: {
      unchecked: 'border-base-300 bg-base-100',
      checked: 'border-transparent bg-current',
    },
  },
  
  // Invalid state
  invalid: 'border-danger peer-focus-visible:ring-danger',
  
  // Check icon (shown when checked)
  icon: 'text-white opacity-0 peer-checked:opacity-100 transition-opacity',
  
  // Indeterminate icon
  indeterminateIcon: 'text-white',
  
  // Wrapper variations
  wrapper: 'inline-flex items-start gap-3',
  wrapperReverse: 'flex-row-reverse',
  
  labelWrapper: 'flex flex-col gap-0.5',
  label: 'text-base-content font-medium cursor-pointer select-none',
  labelDisabled: 'opacity-50 cursor-not-allowed',
  description: 'text-base-content/70 text-sm',
  
  // Size styles
  sizes: {
    sm: { box: 'w-4 h-4', icon: 'w-3 h-3' },
    md: { box: 'w-5 h-5', icon: 'w-3.5 h-3.5' },
    lg: { box: 'w-6 h-6', icon: 'w-4 h-4' },
  } satisfies Record<CompactSize, { box: string; icon: string }>,
};

// CheckboxGroup styles
export const checkboxGroupStyles = {
  root: 'flex',
  vertical: 'flex-col',
  horizontal: 'flex-row flex-wrap',
  gap: {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4',
  },
};
