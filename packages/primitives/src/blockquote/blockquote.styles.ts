import { cva, type VariantProps } from 'class-variance-authority';

export const blockquoteVariants = cva(
  "relative my-4 pl-4 border-l-4 py-4 pr-4 text-base-content",
  {
    variants: {
      variant: {
        outline: "",
        solid: "rounded-r-lg",
        soft: "rounded-r-lg",
      },
      color: {
        primary: "border-primary",
        secondary: "border-secondary",
        accent: "border-accent",
        neutral: "border-neutral",
        success: "border-success",
        danger: "border-danger",
        warning: "border-warning",
        info: "border-info",
      },
    },
    compoundVariants: [
      // solid - full solid background, text uses the color's content token for WCAG contrast
      { variant: "solid", color: "primary", class: "bg-primary text-primary-content" },
      { variant: "solid", color: "secondary", class: "bg-secondary text-secondary-content" },
      { variant: "solid", color: "accent", class: "bg-accent text-accent-content" },
      { variant: "solid", color: "neutral", class: "bg-neutral text-neutral-content" },
      { variant: "solid", color: "success", class: "bg-success text-success-content" },
      { variant: "solid", color: "danger", class: "bg-danger text-danger-content" },
      { variant: "solid", color: "warning", class: "bg-warning text-warning-content" },
      { variant: "solid", color: "info", class: "bg-info text-info-content" },
      // soft - tinted background, inherits base-content text
      { variant: "soft", color: "primary", class: "bg-primary/15" },
      { variant: "soft", color: "secondary", class: "bg-secondary/15" },
      { variant: "soft", color: "accent", class: "bg-accent/15" },
      { variant: "soft", color: "neutral", class: "bg-neutral/10" },
      { variant: "soft", color: "success", class: "bg-success/15" },
      { variant: "soft", color: "danger", class: "bg-danger/15" },
      { variant: "soft", color: "warning", class: "bg-warning/15" },
      { variant: "soft", color: "info", class: "bg-info/15" },
    ],
    defaultVariants: { variant: "outline", color: "primary" },
  }
);

export type BlockquoteVariantsProps = VariantProps<typeof blockquoteVariants>;

export const blockquoteStyles = {
  content: "text-current/80 italic",
  citation: "mt-2 text-sm text-current/60 not-italic",
  iconWrapper: "absolute -left-3 -top-2 text-4xl opacity-50",
  iconColors: {
    primary: "text-primary/50",
    secondary: "text-secondary/50",
    accent: "text-accent/50",
    neutral: "text-neutral/50",
    success: "text-success/50",
    danger: "text-danger/50",
    warning: "text-warning/50",
    info: "text-info/50",
  },
};
