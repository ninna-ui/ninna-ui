import { cva, type VariantProps } from "class-variance-authority";

export const switchRootVariants = cva(
  "group/switch relative inline-flex items-center shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        solid: "bg-neutral text-neutral-content",
        soft: "bg-base-200 text-base-content",
        outline: "bg-transparent text-base-content border-2 border-border",
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
      {
        variant: "solid",
        color: "primary",
        class:
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-content",
      },
      {
        variant: "solid",
        color: "secondary",
        class:
          "data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-content",
      },
      {
        variant: "solid",
        color: "accent",
        class:
          "data-[state=checked]:bg-accent data-[state=checked]:text-accent-content",
      },
      {
        variant: "solid",
        color: "neutral",
        class:
          "data-[state=checked]:bg-neutral data-[state=checked]:text-neutral-content",
      },
      {
        variant: "solid",
        color: "success",
        class:
          "data-[state=checked]:bg-success data-[state=checked]:text-success-content",
      },
      {
        variant: "solid",
        color: "danger",
        class:
          "data-[state=checked]:bg-danger data-[state=checked]:text-danger-content",
      },
      {
        variant: "solid",
        color: "warning",
        class:
          "data-[state=checked]:bg-warning data-[state=checked]:text-warning-content",
      },
      {
        variant: "solid",
        color: "info",
        class:
          "data-[state=checked]:bg-info data-[state=checked]:text-info-content",
      },

      // soft variants
      {
        variant: "soft",
        color: "primary",
        class:
          "data-[state=checked]:bg-primary/20 data-[state=checked]:text-primary",
      },
      {
        variant: "soft",
        color: "secondary",
        class:
          "data-[state=checked]:bg-secondary/20 data-[state=checked]:text-secondary",
      },
      {
        variant: "soft",
        color: "accent",
        class:
          "data-[state=checked]:bg-accent/20 data-[state=checked]:text-accent",
      },
      {
        variant: "soft",
        color: "neutral",
        class:
          "data-[state=checked]:bg-neutral/20 data-[state=checked]:text-neutral",
      },
      {
        variant: "soft",
        color: "success",
        class:
          "data-[state=checked]:bg-success/20 data-[state=checked]:text-success",
      },
      {
        variant: "soft",
        color: "danger",
        class:
          "data-[state=checked]:bg-danger/20 data-[state=checked]:text-danger",
      },
      {
        variant: "soft",
        color: "warning",
        class:
          "data-[state=checked]:bg-warning/20 data-[state=checked]:text-warning",
      },
      {
        variant: "soft",
        color: "info",
        class: "data-[state=checked]:bg-info/20 data-[state=checked]:text-info",
      },

      // outline variants
      {
        variant: "outline",
        color: "primary",
        class:
          "border-border data-[state=checked]:border-primary data-[state=checked]:text-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        class:
          "border-border data-[state=checked]:border-secondary data-[state=checked]:text-secondary",
      },
      {
        variant: "outline",
        color: "accent",
        class:
          "border-border data-[state=checked]:border-accent data-[state=checked]:text-accent",
      },
      {
        variant: "outline",
        color: "neutral",
        class:
          "border-border data-[state=checked]:border-neutral data-[state=checked]:text-neutral",
      },
      {
        variant: "outline",
        color: "success",
        class:
          "border-border data-[state=checked]:border-success data-[state=checked]:text-success",
      },
      {
        variant: "outline",
        color: "danger",
        class:
          "border-border data-[state=checked]:border-danger data-[state=checked]:text-danger",
      },
      {
        variant: "outline",
        color: "warning",
        class:
          "border-border data-[state=checked]:border-warning data-[state=checked]:text-warning",
      },
      {
        variant: "outline",
        color: "info",
        class:
          "border-border data-[state=checked]:border-info data-[state=checked]:text-info",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "md",
      invalid: false,
    },
  },
);

export type SwitchRootVariantsProps = VariantProps<typeof switchRootVariants>;

export const switchThumbVariants = cva(
  "pointer-events-none flex items-center justify-center rounded-full bg-base-100 shadow-sm ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0.5",
  {
    variants: {
      variant: {
        solid: "bg-base-100 text-base-content",
        soft: "bg-border text-base-content",
        outline: "bg-border text-base-content",
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
      {
        variant: ["outline", "soft"],
        color: "primary",
        class:
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-content",
      },
      {
        variant: ["outline", "soft"],
        color: "secondary",
        class:
          "data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-content",
      },
      {
        variant: ["outline", "soft"],
        color: "accent",
        class:
          "data-[state=checked]:bg-accent data-[state=checked]:text-accent-content",
      },
      {
        variant: ["outline", "soft"],
        color: "neutral",
        class:
          "data-[state=checked]:bg-neutral data-[state=checked]:text-neutral-content",
      },
      {
        variant: ["outline", "soft"],
        color: "success",
        class:
          "data-[state=checked]:bg-success data-[state=checked]:text-success-content",
      },
      {
        variant: ["outline", "soft"],
        color: "danger",
        class:
          "data-[state=checked]:bg-danger data-[state=checked]:text-danger-content",
      },
      {
        variant: ["outline", "soft"],
        color: "warning",
        class:
          "data-[state=checked]:bg-warning data-[state=checked]:text-warning-content",
      },
      {
        variant: ["outline", "soft"],
        color: "info",
        class:
          "data-[state=checked]:bg-info data-[state=checked]:text-info-content",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "md",
    },
  },
);

export type SwitchThumbVariantsProps = VariantProps<typeof switchThumbVariants>;

export const switchStyles = {
  trackLabel:
    "absolute top-1/2 -translate-y-1/2 text-[10px] font-semibold select-none uppercase tracking-wide",
  trackLabelOn:
    "left-1.5 text-current opacity-0 group-data-[state=checked]/switch:opacity-100",
  trackLabelOff:
    "right-1.5 text-current opacity-100 group-data-[state=checked]/switch:opacity-0",
  spinner: "animate-spin h-3 w-3 text-base-content/70",
  // See checkbox.styles.ts for the rationale. `items-center` by default so
  // the switch sits on the same visual line as its label; `items-start`
  // only when a description is stacked below the label.
  wrapper: "inline-flex items-center gap-3",
  wrapperWithDescription: "inline-flex items-start gap-3",
  wrapperReverse: "flex-row-reverse",
  // `leading-none` on the label collapses the text line-box to the
  // font-size so the glyph-optical-centre aligns with the switch's
  // centre under `items-center`. See checkbox.styles.ts for the full
  // explanation.
  labelWrapper: "flex flex-col gap-0.5",
  label:
    "text-base-content font-medium cursor-pointer select-none leading-none",
  labelSizes: { sm: "text-sm", md: "text-base", lg: "text-lg" },
  labelDisabled: "opacity-50 cursor-not-allowed",
  description: "text-base-content/70 text-sm leading-tight",
};
