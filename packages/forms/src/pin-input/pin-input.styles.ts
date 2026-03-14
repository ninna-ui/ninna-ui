import type { Size } from '@ninna-ui/core';

export const PIN_INPUT_SIZES: Record<Size, { input: string; gap: string }> = {
  xs: { input: "w-7 h-7 text-xs", gap: "gap-1" },
  sm: { input: "w-7 h-7 sm:w-8 sm:h-8 text-sm", gap: "gap-1 sm:gap-1.5" },
  md: { input: "w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base", gap: "gap-1.5 sm:gap-2" },
  lg: { input: "w-10 h-10 sm:w-12 sm:h-12 text-base sm:text-lg", gap: "gap-1.5 sm:gap-2" },
  xl: { input: "w-12 h-12 sm:w-14 sm:h-14 text-lg sm:text-xl", gap: "gap-2 sm:gap-3" },
};

export const pinInputStyles = {
  container: 'flex items-center',
  input: 'text-center font-medium rounded-md border bg-base-100 text-base-content border-base-300 placeholder:text-base-content/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 transition-all duration-150 hover:border-base-400',
  inputDisabled: 'opacity-50 cursor-not-allowed bg-base-50 hover:border-base-300',
  inputInvalid: 'border-danger focus:ring-danger/20 focus:border-danger',
  separator: 'mx-2 text-base-content/70',
};
