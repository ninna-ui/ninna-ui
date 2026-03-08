import { cva, type VariantProps } from 'class-variance-authority';

export const switchRootVariants = cva(
  "relative inline-flex items-center shrink-0 cursor-pointer rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        solid:   "bg-base-200",
        outline: "bg-transparent border-2 border-base-300",
      },
      color: {
        primary:   "data-[state=checked]:bg-primary focus-visible:ring-primary",
        secondary: "data-[state=checked]:bg-secondary focus-visible:ring-secondary",
        accent:    "data-[state=checked]:bg-accent focus-visible:ring-accent",
        neutral:   "data-[state=checked]:bg-neutral focus-visible:ring-neutral",
        success:   "data-[state=checked]:bg-success focus-visible:ring-success",
        danger:    "data-[state=checked]:bg-danger focus-visible:ring-danger",
        warning:   "data-[state=checked]:bg-warning focus-visible:ring-warning",
        info:      "data-[state=checked]:bg-info focus-visible:ring-info",
      },
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
      },
      invalid: {
        true:  "ring-2 ring-danger ring-offset-1",
        false: "",
      },
    },
    defaultVariants: { variant: "solid", color: "primary", size: "md", invalid: false },
  }
);

export type SwitchRootVariantsProps = VariantProps<typeof switchRootVariants>;

export const SWITCH_THUMB_SIZES: Record<import('@ninna-ui/core').CompactSize, string> = {
  sm: "h-4 w-4 data-[state=checked]:translate-x-4",
  md: "h-5 w-5 data-[state=checked]:translate-x-5",
  lg: "h-6 w-6 data-[state=checked]:translate-x-7",
};

export const switchStyles = {
  thumb:          "pointer-events-none flex items-center justify-center rounded-full bg-base-100 shadow-lg ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0.5",
  thumbOutline:   "shadow-none border border-base-300",
  trackLabel:     "absolute top-1/2 -translate-y-1/2 text-[10px] font-semibold select-none uppercase tracking-wide",
  trackLabelOn:   "left-1.5 text-base-100 opacity-0 data-[state=checked]:opacity-100 transition-opacity",
  trackLabelOff:  "right-1.5 text-base-content/80 opacity-100 data-[state=checked]:opacity-0 transition-opacity",
  spinner:        "animate-spin h-3 w-3 text-base-content/70",
  wrapper:        "flex items-start gap-3",
  wrapperReverse: "flex-row-reverse",
  labelWrapper:   "flex flex-col gap-0.5",
  label:          "text-base-content font-medium cursor-pointer select-none",
  labelDisabled:  "opacity-50 cursor-not-allowed",
  description:    "text-base-content/70 text-sm",
};
