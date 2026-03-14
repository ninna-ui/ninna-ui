import { cva, type VariantProps } from 'class-variance-authority';

export const radioItemVariants = cva(
  "shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        outline: "border-base-300 bg-base-100 data-[state=checked]:border-current",
        soft:    "border-transparent bg-base-200",
        solid:   "border-base-300 bg-base-100 data-[state=checked]:bg-current data-[state=checked]:border-current",
      },
      color: {
        primary:   "text-primary focus-visible:ring-primary data-[state=checked]:border-primary",
        secondary: "text-secondary focus-visible:ring-secondary data-[state=checked]:border-secondary",
        accent:    "text-accent focus-visible:ring-accent data-[state=checked]:border-accent",
        neutral:   "text-neutral focus-visible:ring-neutral data-[state=checked]:border-neutral",
        success:   "text-success focus-visible:ring-success data-[state=checked]:border-success",
        danger:    "text-danger focus-visible:ring-danger data-[state=checked]:border-danger",
        warning:   "text-warning focus-visible:ring-warning data-[state=checked]:border-warning",
        info:      "text-info focus-visible:ring-info data-[state=checked]:border-info",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      invalid: {
        true:  "border-danger",
        false: "",
      },
    },
    defaultVariants: { variant: "outline", color: "primary", size: "md", invalid: false },
  }
);

export type RadioItemVariantsProps = VariantProps<typeof radioItemVariants>;

export const RADIO_INDICATOR_SIZES: Record<import('@ninna-ui/core').CompactSize, string> = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5",
};

export const RADIO_INDICATOR_COLORS: Record<import('@ninna-ui/core').Color, string> = {
  primary:   "bg-primary",
  secondary: "bg-secondary",
  accent:    "bg-accent",
  neutral:   "bg-neutral",
  success:   "bg-success",
  danger:    "bg-danger",
  warning:   "bg-warning",
  info:      "bg-info",
};

export const radioGroupStyles = {
  root:               "flex",
  horizontal:         "flex-row flex-wrap",
  vertical:           "flex-col",
  gap:                { sm: "gap-2", md: "gap-3", lg: "gap-4" },
  indicator:          "flex items-center justify-center",
  indicatorDot:       "rounded-full",
  indicatorDotSolid:  "rounded-full bg-white",
  itemWrapper:        "flex items-center gap-3 min-h-[44px]",
  itemWrapperReverse: "flex-row-reverse",
  labelWrapper:       "flex flex-col gap-0.5",
  label:              "text-base-content font-medium cursor-pointer select-none",
  labelSizes:         { sm: "text-sm", md: "text-base", lg: "text-lg" },
  labelDisabled:      "opacity-50 cursor-not-allowed",
  description:        "text-base-content/70 text-sm",
};

export const radioCardStyles = {
  card:              "relative flex flex-col p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:border-base-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  cardDefault:       "border-base-200 bg-base-100",
  cardSelected:      "border-primary bg-primary/10",
  cardInvalid:       "border-danger",
  indicator:         "absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center border-base-300",
  indicatorSelected: "border-primary bg-primary",
  indicatorDot:      "w-2 h-2 rounded-full bg-base-100",
  icon:              "w-8 h-8 text-base-content/80 mb-2",
  iconSelected:      "text-primary",
  title:             "font-medium text-base-content",
  description:       "text-sm text-base-content/70 mt-1",
};
