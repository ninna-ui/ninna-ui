import { cva, type VariantProps } from 'class-variance-authority';

export const blockquoteVariants = cva(
  "relative my-4",
  {
    variants: {
      variant: {
        outline: "pl-4 border-l-4",
        solid:   "pl-4 border-l-4 py-4 pr-4 rounded-r-lg",
        soft:    "pl-4 border-l-4 py-4 pr-4 border rounded-lg",
      },
      color: {
        primary:   "border-primary",
        secondary: "border-secondary",
        accent:    "border-accent",
        neutral:   "border-neutral",
        success:   "border-success",
        danger:    "border-danger",
        warning:   "border-warning",
        info:      "border-info",
      },
    },
    compoundVariants: [
      { variant: "soft", color: "primary",   class: "bg-primary/10" },
      { variant: "soft", color: "secondary", class: "bg-secondary/10" },
      { variant: "soft", color: "accent",    class: "bg-accent/10" },
      { variant: "soft", color: "neutral",   class: "bg-neutral/10" },
      { variant: "soft", color: "success",   class: "bg-success/10" },
      { variant: "soft", color: "danger",    class: "bg-danger/10" },
      { variant: "soft", color: "warning",   class: "bg-warning/10" },
      { variant: "soft", color: "info",      class: "bg-info/10" },
    ],
    defaultVariants: { variant: "outline", color: "neutral" },
  }
);

export type BlockquoteVariantsProps = VariantProps<typeof blockquoteVariants>;

export const blockquoteStyles = {
  content:     "text-base-content/80 italic",
  citation:    "mt-2 text-sm text-base-content/70 not-italic",
  iconWrapper: "absolute -left-3 -top-2 text-4xl opacity-50",
  iconColors: {
    primary:   "text-primary/50",
    secondary: "text-secondary/50",
    accent:    "text-accent/50",
    neutral:   "text-neutral/50",
    success:   "text-success/50",
    danger:    "text-danger/50",
    warning:   "text-warning/50",
    info:      "text-info/50",
  },
};
