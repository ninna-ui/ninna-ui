import { cva, type VariantProps } from 'class-variance-authority';

export const checkboxVariants = cva(
  "relative shrink-0 rounded border-2 flex items-center justify-center transition-all duration-200 cursor-pointer focus-visible:outline-none focus:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        solid: "border-base-300 bg-base-100",
        soft: "border-transparent bg-base-200",
        outline: "border-base-300 bg-base-100",
      },
      color: {
        primary: "peer-focus-visible:ring-primary",
        secondary: "peer-focus-visible:ring-secondary",
        accent: "peer-focus-visible:ring-accent",
        neutral: "peer-focus-visible:ring-neutral",
        success: "peer-focus-visible:ring-success",
        danger: "peer-focus-visible:ring-danger",
        warning: "peer-focus-visible:ring-warning",
        info: "peer-focus-visible:ring-info",
      },
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
    },
    compoundVariants: [
      // solid variants
      { variant: "solid", color: "primary", class: "peer-checked:bg-primary peer-checked:border-primary peer-data-[state=indeterminate]:bg-primary peer-data-[state=indeterminate]:border-primary text-primary-content" },
      { variant: "solid", color: "secondary", class: "peer-checked:bg-secondary peer-checked:border-secondary peer-data-[state=indeterminate]:bg-secondary peer-data-[state=indeterminate]:border-secondary text-secondary-content" },
      { variant: "solid", color: "accent", class: "peer-checked:bg-accent peer-checked:border-accent peer-data-[state=indeterminate]:bg-accent peer-data-[state=indeterminate]:border-accent text-accent-content" },
      { variant: "solid", color: "neutral", class: "peer-checked:bg-neutral peer-checked:border-neutral peer-data-[state=indeterminate]:bg-neutral peer-data-[state=indeterminate]:border-neutral text-neutral-content" },
      { variant: "solid", color: "success", class: "peer-checked:bg-success peer-checked:border-success peer-data-[state=indeterminate]:bg-success peer-data-[state=indeterminate]:border-success text-success-content" },
      { variant: "solid", color: "danger", class: "peer-checked:bg-danger peer-checked:border-danger peer-data-[state=indeterminate]:bg-danger peer-data-[state=indeterminate]:border-danger text-danger-content" },
      { variant: "solid", color: "warning", class: "peer-checked:bg-warning peer-checked:border-warning peer-data-[state=indeterminate]:bg-warning peer-data-[state=indeterminate]:border-warning text-warning-content" },
      { variant: "solid", color: "info", class: "peer-checked:bg-info peer-checked:border-info peer-data-[state=indeterminate]:bg-info peer-data-[state=indeterminate]:border-info text-info-content" },
      
      // soft variants
      { variant: "soft", color: "primary", class: "peer-checked:bg-primary/20 peer-checked:border-transparent peer-data-[state=indeterminate]:bg-primary/20 peer-data-[state=indeterminate]:border-transparent text-primary" },
      { variant: "soft", color: "secondary", class: "peer-checked:bg-secondary/20 peer-checked:border-transparent peer-data-[state=indeterminate]:bg-secondary/20 peer-data-[state=indeterminate]:border-transparent text-secondary" },
      { variant: "soft", color: "accent", class: "peer-checked:bg-accent/20 peer-checked:border-transparent peer-data-[state=indeterminate]:bg-accent/20 peer-data-[state=indeterminate]:border-transparent text-accent" },
      { variant: "soft", color: "neutral", class: "peer-checked:bg-neutral/20 peer-checked:border-transparent peer-data-[state=indeterminate]:bg-neutral/20 peer-data-[state=indeterminate]:border-transparent text-neutral" },
      { variant: "soft", color: "success", class: "peer-checked:bg-success/20 peer-checked:border-transparent peer-data-[state=indeterminate]:bg-success/20 peer-data-[state=indeterminate]:border-transparent text-success" },
      { variant: "soft", color: "danger", class: "peer-checked:bg-danger/20 peer-checked:border-transparent peer-data-[state=indeterminate]:bg-danger/20 peer-data-[state=indeterminate]:border-transparent text-danger" },
      { variant: "soft", color: "warning", class: "peer-checked:bg-warning/20 peer-checked:border-transparent peer-data-[state=indeterminate]:bg-warning/20 peer-data-[state=indeterminate]:border-transparent text-warning" },
      { variant: "soft", color: "info", class: "peer-checked:bg-info/20 peer-checked:border-transparent peer-data-[state=indeterminate]:bg-info/20 peer-data-[state=indeterminate]:border-transparent text-info" },

      // outline variants
      { variant: "outline", color: "primary", class: "peer-checked:border-primary peer-checked:bg-transparent peer-data-[state=indeterminate]:border-primary peer-data-[state=indeterminate]:bg-transparent text-primary" },
      { variant: "outline", color: "secondary", class: "peer-checked:border-secondary peer-checked:bg-transparent peer-data-[state=indeterminate]:border-secondary peer-data-[state=indeterminate]:bg-transparent text-secondary" },
      { variant: "outline", color: "accent", class: "peer-checked:border-accent peer-checked:bg-transparent peer-data-[state=indeterminate]:border-accent peer-data-[state=indeterminate]:bg-transparent text-accent" },
      { variant: "outline", color: "neutral", class: "peer-checked:border-neutral peer-checked:bg-transparent peer-data-[state=indeterminate]:border-neutral peer-data-[state=indeterminate]:bg-transparent text-neutral" },
      { variant: "outline", color: "success", class: "peer-checked:border-success peer-checked:bg-transparent peer-data-[state=indeterminate]:border-success peer-data-[state=indeterminate]:bg-transparent text-success" },
      { variant: "outline", color: "danger", class: "peer-checked:border-danger peer-checked:bg-transparent peer-data-[state=indeterminate]:border-danger peer-data-[state=indeterminate]:bg-transparent text-danger" },
      { variant: "outline", color: "warning", class: "peer-checked:border-warning peer-checked:bg-transparent peer-data-[state=indeterminate]:border-warning peer-data-[state=indeterminate]:bg-transparent text-warning" },
      { variant: "outline", color: "info", class: "peer-checked:border-info peer-checked:bg-transparent peer-data-[state=indeterminate]:border-info peer-data-[state=indeterminate]:bg-transparent text-info" },
    ],
    defaultVariants: {
      variant: "outline",
      color: "primary",
      size: "md",
    },
  }
);

export type CheckboxVariantsProps = VariantProps<typeof checkboxVariants>;

export const CHECKBOX_ICON_SIZES: Record<import('@ninna-ui/core').CompactSize, string> = {
  sm: "w-3 h-3",
  md: "w-3.5 h-3.5",
  lg: "w-4 h-4",
};

export const checkboxStyles = {
  input: "sr-only peer",
  // NOTE: We use `items-center` for the common (label-only) case so the
  // checkbox visually sits on the same line as its label. When a description
  // is present we switch to `items-start` so the checkbox aligns with the
  // first line of the label block rather than being centred between label
  // and description. The previous `min-h-[44px]` was dropped: it forced
  // every checkbox row to be 44px tall which (a) disconnected the box from
  // the label visually and (b) added large empty space between stacked
  // checkboxes. Touch-target size is already adequate because the label
  // element wrapping the input is the click target and expands with text.
  wrapper: "inline-flex items-center gap-3",
  wrapperWithDescription: "inline-flex items-start gap-3",
  wrapperReverse: "flex-row-reverse",
  labelWrapper: "flex flex-col gap-0.5 leading-tight",
  label: "text-base-content font-medium cursor-pointer select-none leading-tight",
  // Keep label typography proportional to the checkbox size, otherwise the
  // sm/md/lg variants look deceptively similar on the page (the 4px step
  // between boxes alone is hard to read next to a fixed-size label).
  labelSizes: {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  },
  labelDisabled: "opacity-50 cursor-not-allowed",
  description: "text-base-content/70 text-sm leading-tight",
};

export const checkboxGroupStyles = {
  root: "flex",
  vertical: "flex-col",
  horizontal: "flex-row flex-wrap",
  gap: { sm: "gap-2", md: "gap-3", lg: "gap-4" },
};
