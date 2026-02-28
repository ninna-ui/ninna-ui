import type { Size } from "@ninna-ui/core";

export const NUMBER_INPUT_SIZES: Record<Size, string> = {
  xs: "h-7 px-2 text-xs",
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-4 text-base",
  xl: "h-12 px-5 text-base",
};

export const numberInputStyles = {
  container: 'relative w-full inline-flex',
  input: 'w-full rounded-md border bg-base-100 text-base-content transition-colors focus:outline-none focus:ring-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  inputDefault: 'border-base-300 focus:border-primary focus:ring-primary/20',
  inputDisabled: 'opacity-50 cursor-not-allowed bg-base-100',
  inputInvalid: 'border-danger focus:ring-danger/20',
  inputWithStepperRight: 'pr-10',
  inputWithStepperSides: 'text-center',
  stepperContainer: 'absolute right-[1px] top-[1px] bottom-[1px] w-7 flex flex-col border-l border-base-300 overflow-hidden rounded-r-[5px]',
  stepperButton: 'h-1/2 flex items-center justify-center text-base-content/70 hover:bg-base-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed bg-base-50',
  stepperButtonTop: 'border-b border-base-300',
  stepperButtonBottom: '',
  sideButton: 'flex items-center justify-center px-3 text-base-content/70 border border-base-300 bg-base-50 hover:bg-base-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  sideButtonLeft: 'rounded-l-md border-r-0',
  sideButtonRight: 'rounded-r-md border-l-0',
};
