import type { CompactSize } from '@ninna-ui/core';

export const stepperStyles = {
  root: 'flex w-full',
  rootHorizontal: 'flex-row items-start',
  rootVertical: 'flex-col',
  step: 'flex items-center',
  stepHorizontal: 'flex-1 flex-col items-center gap-2',
  stepVertical: 'flex-row items-start gap-3',
  indicator: {
    base: [
      'flex items-center justify-center rounded-full font-medium',
      'transition-colors shrink-0',
    ],
    complete: 'bg-primary text-primary-content',
    current: 'border-2 border-primary bg-base-100 text-primary',
    upcoming: 'border-2 border-base-300 bg-base-100 text-base-content/70',
  },
  label: 'font-medium text-base-content',
  labelUpcoming: 'text-base-content/70',
  description: 'text-base-content/70',
  descriptionUpcoming: 'text-base-content/30',
  optional: 'text-base-content/70 italic',
  separator: {
    base: 'transition-colors',
    horizontal: 'h-0.5 flex-1',
    vertical: 'w-0.5 min-h-6 ml-[18px]',
    complete: 'bg-primary',
    incomplete: 'bg-base-300',
  },
};

export const STEPPER_INDICATOR_SIZES: Record<CompactSize, string> = {
  sm: 'h-7 w-7 text-xs',
  md: 'h-9 w-9 text-sm',
  lg: 'h-11 w-11 text-base',
};

export const STEPPER_LABEL_SIZES: Record<CompactSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

export const STEPPER_DESCRIPTION_SIZES: Record<CompactSize, string> = {
  sm: 'text-[10px]',
  md: 'text-xs',
  lg: 'text-sm',
};
