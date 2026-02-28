/**
 * Input component styles
 */

import { INPUT_FOCUS_COLORS, FOCUS_BORDER_COLORS } from "@ninna-ui/core";
import type { Size } from "@ninna-ui/core";

export const INPUT_SIZES: Record<Size, string> = {
  xs: "h-7 px-2 text-xs",
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-4 text-base",
  xl: "h-12 px-5 text-base",
};

export const INPUT_COLORS = {
  outline: {
    primary: `border-base-300 ${INPUT_FOCUS_COLORS.primary}`,
    secondary: `border-base-300 ${INPUT_FOCUS_COLORS.secondary}`,
    accent: `border-base-300 ${INPUT_FOCUS_COLORS.accent}`,
    neutral: `border-base-300 ${INPUT_FOCUS_COLORS.neutral}`,
    success: `border-base-300 ${INPUT_FOCUS_COLORS.success}`,
    danger: `border-base-300 ${INPUT_FOCUS_COLORS.danger}`,
    warning: `border-base-300 ${INPUT_FOCUS_COLORS.warning}`,
    info: `border-base-300 ${INPUT_FOCUS_COLORS.info}`,
  },
  filled: {
    primary: `bg-base-200 border-transparent focus:bg-base-100 ${FOCUS_BORDER_COLORS.primary}`,
    secondary: `bg-base-200 border-transparent focus:bg-base-100 ${FOCUS_BORDER_COLORS.secondary}`,
    accent: `bg-base-200 border-transparent focus:bg-base-100 ${FOCUS_BORDER_COLORS.accent}`,
    neutral: `bg-base-200 border-transparent focus:bg-base-100 ${FOCUS_BORDER_COLORS.neutral}`,
    success: `bg-base-200 border-transparent focus:bg-base-100 ${FOCUS_BORDER_COLORS.success}`,
    danger: `bg-base-200 border-transparent focus:bg-base-100 ${FOCUS_BORDER_COLORS.danger}`,
    warning: `bg-base-200 border-transparent focus:bg-base-100 ${FOCUS_BORDER_COLORS.warning}`,
    info: `bg-base-200 border-transparent focus:bg-base-100 ${FOCUS_BORDER_COLORS.info}`,
  },
  flushed: {
    primary: `border-x-0 border-t-0 rounded-none border-base-300 ${FOCUS_BORDER_COLORS.primary}`,
    secondary: `border-x-0 border-t-0 rounded-none border-base-300 ${FOCUS_BORDER_COLORS.secondary}`,
    accent: `border-x-0 border-t-0 rounded-none border-base-300 ${FOCUS_BORDER_COLORS.accent}`,
    neutral: `border-x-0 border-t-0 rounded-none border-base-300 ${FOCUS_BORDER_COLORS.neutral}`,
    success: `border-x-0 border-t-0 rounded-none border-base-300 ${FOCUS_BORDER_COLORS.success}`,
    danger: `border-x-0 border-t-0 rounded-none border-base-300 ${FOCUS_BORDER_COLORS.danger}`,
    warning: `border-x-0 border-t-0 rounded-none border-base-300 ${FOCUS_BORDER_COLORS.warning}`,
    info: `border-x-0 border-t-0 rounded-none border-base-300 ${FOCUS_BORDER_COLORS.info}`,
  },
} as const;

export const INPUT_ERROR_COLORS = {
  outline: `border-danger ${INPUT_FOCUS_COLORS.danger}`,
  filled: "bg-danger/10 border-transparent focus:border-danger",
  flushed: `border-x-0 border-t-0 rounded-none border-danger ${FOCUS_BORDER_COLORS.danger}`,
};

export const inputStyles = {
  base: 'w-full rounded-md border bg-base-100 text-base-content placeholder:text-base-content/70 transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-base-50 read-only:bg-base-50 read-only:cursor-default',
  fullWidth: 'w-full',
  unstyled: 'border-0 bg-transparent focus:ring-0 p-0',
  
  // Wrapper for clearable and counter
  wrapper: 'relative w-full',
  wrapperInline: 'inline-block',
  
  // Clear button
  clearButton: 'absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full text-base-content/70 hover:text-base-content hover:bg-base-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 transition-colors duration-150',
  withClearButton: 'pr-9',
  
  // Character counter
  counter: 'text-xs text-base-content/70 mt-1 text-right',
  counterError: 'text-danger',
  
  // Floating label
  floatingWrapper: 'relative pt-4',
  floatingLabel: 'absolute left-3 top-1/2 -translate-y-1/2 text-base-content/70 pointer-events-none transition-all duration-200 ease-out peer-focus:top-0 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-75 origin-left bg-base-100 px-1 -ml-1',
  floatingInput: 'peer placeholder-transparent',
  floatingLabelSizes: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-base',
  },
};
