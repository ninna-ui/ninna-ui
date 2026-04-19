import { cva, type VariantProps } from 'class-variance-authority';

export const radioItemVariants = cva(
  "shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        solid: "border-base-300 bg-base-100",
        soft: "border-transparent bg-base-200",
        outline: "border-base-300 bg-base-100",
      },
      color: {
        primary: "focus-visible:ring-primary",
        secondary: "focus-visible:ring-secondary",
        accent: "focus-visible:ring-accent",
        neutral: "focus-visible:ring-neutral",
        success: "focus-visible:ring-success",
        danger: "focus-visible:ring-danger",
        warning: "focus-visible:ring-warning",
        info: "focus-visible:ring-info",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      invalid: {
        true: "border-danger",
        false: "",
      },
    },
    compoundVariants: [
      // solid variants
      { variant: "solid", color: "primary", class: "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-content" },
      { variant: "solid", color: "secondary", class: "data-[state=checked]:bg-secondary data-[state=checked]:border-secondary data-[state=checked]:text-secondary-content" },
      { variant: "solid", color: "accent", class: "data-[state=checked]:bg-accent data-[state=checked]:border-accent data-[state=checked]:text-accent-content" },
      { variant: "solid", color: "neutral", class: "data-[state=checked]:bg-neutral data-[state=checked]:border-neutral data-[state=checked]:text-neutral-content" },
      { variant: "solid", color: "success", class: "data-[state=checked]:bg-success data-[state=checked]:border-success data-[state=checked]:text-success-content" },
      { variant: "solid", color: "danger", class: "data-[state=checked]:bg-danger data-[state=checked]:border-danger data-[state=checked]:text-danger-content" },
      { variant: "solid", color: "warning", class: "data-[state=checked]:bg-warning data-[state=checked]:border-warning data-[state=checked]:text-warning-content" },
      { variant: "solid", color: "info", class: "data-[state=checked]:bg-info data-[state=checked]:border-info data-[state=checked]:text-info-content" },
      
      // soft variants
      { variant: "soft", color: "primary", class: "data-[state=checked]:bg-primary/20 data-[state=checked]:border-transparent data-[state=checked]:text-primary" },
      { variant: "soft", color: "secondary", class: "data-[state=checked]:bg-secondary/20 data-[state=checked]:border-transparent data-[state=checked]:text-secondary" },
      { variant: "soft", color: "accent", class: "data-[state=checked]:bg-accent/20 data-[state=checked]:border-transparent data-[state=checked]:text-accent" },
      { variant: "soft", color: "neutral", class: "data-[state=checked]:bg-neutral/20 data-[state=checked]:border-transparent data-[state=checked]:text-neutral" },
      { variant: "soft", color: "success", class: "data-[state=checked]:bg-success/20 data-[state=checked]:border-transparent data-[state=checked]:text-success" },
      { variant: "soft", color: "danger", class: "data-[state=checked]:bg-danger/20 data-[state=checked]:border-transparent data-[state=checked]:text-danger" },
      { variant: "soft", color: "warning", class: "data-[state=checked]:bg-warning/20 data-[state=checked]:border-transparent data-[state=checked]:text-warning" },
      { variant: "soft", color: "info", class: "data-[state=checked]:bg-info/20 data-[state=checked]:border-transparent data-[state=checked]:text-info" },

      // outline variants
      { variant: "outline", color: "primary", class: "data-[state=checked]:border-primary data-[state=checked]:text-primary" },
      { variant: "outline", color: "secondary", class: "data-[state=checked]:border-secondary data-[state=checked]:text-secondary" },
      { variant: "outline", color: "accent", class: "data-[state=checked]:border-accent data-[state=checked]:text-accent" },
      { variant: "outline", color: "neutral", class: "data-[state=checked]:border-neutral data-[state=checked]:text-neutral" },
      { variant: "outline", color: "success", class: "data-[state=checked]:border-success data-[state=checked]:text-success" },
      { variant: "outline", color: "danger", class: "data-[state=checked]:border-danger data-[state=checked]:text-danger" },
      { variant: "outline", color: "warning", class: "data-[state=checked]:border-warning data-[state=checked]:text-warning" },
      { variant: "outline", color: "info", class: "data-[state=checked]:border-info data-[state=checked]:text-info" },
    ],
    defaultVariants: {
      variant: "outline",
      color: "primary",
      size: "md",
      invalid: false,
    },
  }
);

export type RadioItemVariantsProps = VariantProps<typeof radioItemVariants>;

export const radioIndicatorVariants = cva(
  "rounded-full transition-all duration-200 transform scale-0 data-[state=checked]:scale-100",
  {
    variants: {
      variant: {
        solid: "bg-current",
        soft: "bg-current",
        outline: "bg-current",
      },
      color: {
        primary: "bg-primary",
        secondary: "bg-secondary",
        accent: "bg-accent",
        neutral: "bg-neutral",
        success: "bg-success",
        danger: "bg-danger",
        warning: "bg-warning",
        info: "bg-info",
      },
      size: {
        sm: "h-1.5 w-1.5",
        md: "h-2 w-2",
        lg: "h-2.5 w-2.5",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "outline",
      color: "primary",
      size: "md",
    },
  }
);

export type RadioIndicatorVariantsProps = VariantProps<typeof radioIndicatorVariants>;

export const radioGroupStyles = {
  root:                     "flex",
  horizontal:               "flex-row flex-wrap",
  vertical:                 "flex-col",
  gap:                      { sm: "gap-2", md: "gap-3", lg: "gap-4" },
  indicator:                "flex items-center justify-center",
  // See checkbox.styles.ts for the rationale: `items-center` by default so
  // the radio button sits on the same visual line as its label;
  // `items-start` only when a description is stacked below so the radio
  // aligns with the first line of the label block. `min-h-[44px]` was
  // dropped because it produced a tall empty row that visually detached
  // the radio from its label.
  itemWrapper:              "inline-flex items-center gap-3",
  itemWrapperWithDescription: "inline-flex items-start gap-3",
  itemWrapperReverse:       "flex-row-reverse",
  // `leading-none` on the label collapses the text line-box to the
  // font-size so the glyph-optical-centre aligns with the radio dot's
  // centre under `items-center`. See checkbox.styles.ts for the full
  // explanation.
  labelWrapper:             "flex flex-col gap-0.5",
  label:                    "text-base-content font-medium cursor-pointer select-none leading-none",
  labelSizes:               { sm: "text-sm", md: "text-base", lg: "text-lg" },
  labelDisabled:            "opacity-50 cursor-not-allowed",
  description:              "text-base-content/70 text-sm leading-tight",
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
