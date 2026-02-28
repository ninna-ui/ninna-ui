import type { Size } from "@ninna-ui/core";

export const TEXTAREA_SIZES: Record<Size, string> = {
  xs: "min-h-16 px-2 py-1.5 text-xs",
  sm: "min-h-20 px-3 py-2 text-sm",
  md: "min-h-24 px-4 py-2.5 text-sm",
  lg: "min-h-32 px-4 py-3 text-base",
  xl: "min-h-40 px-5 py-3.5 text-base",
};

/**
 * Textarea component styles
 */

export const textareaStyles = {
  base: 'w-full rounded-md border bg-base-100 text-base-content placeholder:text-base-content/70 transition-all duration-200 focus:outline-none focus:ring-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-base-50 read-only:bg-base-50 read-only:cursor-default',

  resize: {

    none: '!resize-none',

    vertical: '!resize-y',

    horizontal: '!resize-x',

    both: '!resize',

  },

  fullWidth: 'w-full',

  unstyled: 'border-0 bg-transparent focus:ring-0 p-0',

  

  // Wrapper for counter

  wrapper: 'relative w-full',

  

  // Character counter

  counter: 'text-xs text-base-content/70 mt-1 text-right',

  counterError: 'text-danger',

  

  // Auto-resize specific

  autoResize: 'overflow-hidden resize-none',

};

