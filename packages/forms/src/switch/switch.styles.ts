import { cva, type VariantProps } from 'class-variance-authority';

export const switchRootVariants = cva(
  "relative inline-flex items-center shrink-0 cursor-pointer rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        solid: "bg-base-200",
        soft: "bg-base-200",
        outline: "bg-transparent border-2 border-base-300",
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
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
      },
      invalid: {
        true: "ring-2 ring-danger ring-offset-1",
        false: "",
      },
    },
    compoundVariants: [
      // solid variants
      { variant: "solid", color: "primary", class: "data-[state=checked]:bg-primary" },
      { variant: "solid", color: "secondary", class: "data-[state=checked]:bg-secondary" },
      { variant: "solid", color: "accent", class: "data-[state=checked]:bg-accent" },
      { variant: "solid", color: "neutral", class: "data-[state=checked]:bg-neutral" },
      { variant: "solid", color: "success", class: "data-[state=checked]:bg-success" },
      { variant: "solid", color: "danger", class: "data-[state=checked]:bg-danger" },
      { variant: "solid", color: "warning", class: "data-[state=checked]:bg-warning" },
      { variant: "solid", color: "info", class: "data-[state=checked]:bg-info" },
      
      // soft variants
      { variant: "soft", color: "primary", class: "data-[state=checked]:bg-primary/20" },
      { variant: "soft", color: "secondary", class: "data-[state=checked]:bg-secondary/20" },
      { variant: "soft", color: "accent", class: "data-[state=checked]:bg-accent/20" },
      { variant: "soft", color: "neutral", class: "data-[state=checked]:bg-neutral/20" },
      { variant: "soft", color: "success", class: "data-[state=checked]:bg-success/20" },
      { variant: "soft", color: "danger", class: "data-[state=checked]:bg-danger/20" },
      { variant: "soft", color: "warning", class: "data-[state=checked]:bg-warning/20" },
      { variant: "soft", color: "info", class: "data-[state=checked]:bg-info/20" },

      // outline variants
      { variant: "outline", color: "primary", class: "border-base-300 data-[state=checked]:border-primary" },
      { variant: "outline", color: "secondary", class: "border-base-300 data-[state=checked]:border-secondary" },
      { variant: "outline", color: "accent", class: "border-base-300 data-[state=checked]:border-accent" },
      { variant: "outline", color: "neutral", class: "border-base-300 data-[state=checked]:border-neutral" },
      { variant: "outline", color: "success", class: "border-base-300 data-[state=checked]:border-success" },
      { variant: "outline", color: "danger", class: "border-base-300 data-[state=checked]:border-danger" },
      { variant: "outline", color: "warning", class: "border-base-300 data-[state=checked]:border-warning" },
      { variant: "outline", color: "info", class: "border-base-300 data-[state=checked]:border-info" },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "md",
      invalid: false,
    },
  }
);

export type SwitchRootVariantsProps = VariantProps<typeof switchRootVariants>;

export const switchThumbVariants = cva(
  "pointer-events-none flex items-center justify-center rounded-full bg-base-100 shadow-sm ring-0 transition-all duration-200 data-[state=unchecked]:translate-x-0.5",
  {
    variants: {
      variant: {
        solid: "bg-base-100",
        soft: "bg-base-100",
        outline: "bg-base-300 data-[state=checked]:bg-primary",
      },
      color: {
        primary: "",
        secondary: "",
        accent: "",
        neutral: "",
        success: "",
        danger: "",
        warning: "",
        info: "",
      },
      size: {
        sm: "h-4 w-4 data-[state=checked]:translate-x-4",
        md: "h-5 w-5 data-[state=checked]:translate-x-5",
        lg: "h-6 w-6 data-[state=checked]:translate-x-7",
      },
    },
    compoundVariants: [
      // colored thumb for outline variant
      { variant: "outline", color: "primary", class: "data-[state=checked]:bg-primary" },
      { variant: "outline", color: "secondary", class: "data-[state=checked]:bg-secondary" },
      { variant: "outline", color: "accent", class: "data-[state=checked]:bg-accent" },
      { variant: "outline", color: "neutral", class: "data-[state=checked]:bg-neutral" },
      { variant: "outline", color: "success", class: "data-[state=checked]:bg-success" },
      { variant: "outline", color: "danger", class: "data-[state=checked]:bg-danger" },
      { variant: "outline", color: "warning", class: "data-[state=checked]:bg-warning" },
      { variant: "outline", color: "info", class: "data-[state=checked]:bg-info" },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "md",
    },
  }
);

export type SwitchThumbVariantsProps = VariantProps<typeof switchThumbVariants>;

export const switchStyles = {
  trackLabel: "absolute top-1/2 -translate-y-1/2 text-[10px] font-semibold select-none uppercase tracking-wide",
  trackLabelOn: "left-1.5 text-base-100 opacity-0 data-[state=checked]:opacity-100 transition-opacity",
  trackLabelOff: "right-1.5 text-base-content/80 opacity-100 data-[state=checked]:opacity-0 transition-opacity",
  spinner: "animate-spin h-3 w-3 text-base-content/70",
  // See checkbox.styles.ts for the rationale. `items-center` by default so
  // the switch sits on the same visual line as its label; `items-start`
  // only when a description is stacked below the label.
  wrapper: "inline-flex items-center gap-3",
  wrapperWithDescription: "inline-flex items-start gap-3",
  wrapperReverse: "flex-row-reverse",
  labelWrapper: "flex flex-col gap-0.5 leading-tight",
  label: "text-base-content font-medium cursor-pointer select-none leading-tight",
  labelSizes: { sm: "text-sm", md: "text-base", lg: "text-lg" },
  labelDisabled: "opacity-50 cursor-not-allowed",
  description: "text-base-content/70 text-sm leading-tight",
};
