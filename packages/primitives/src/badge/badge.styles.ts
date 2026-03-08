import { cva, type VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(
  "inline-flex items-center justify-center font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outline: "",
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
        xs: "px-1 py-0 text-[10px]",
        sm: "px-1.5 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-base",
        xl: "px-4 py-2 text-lg",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      // solid
      { variant: "solid", color: "primary",   class: "bg-primary text-primary-content" },
      { variant: "solid", color: "secondary", class: "bg-secondary text-secondary-content" },
      { variant: "solid", color: "accent",    class: "bg-accent text-accent-content" },
      { variant: "solid", color: "neutral",   class: "bg-neutral text-neutral-content" },
      { variant: "solid", color: "success",   class: "bg-success text-success-content" },
      { variant: "solid", color: "danger",    class: "bg-danger text-danger-content" },
      { variant: "solid", color: "warning",   class: "bg-warning text-warning-content" },
      { variant: "solid", color: "info",      class: "bg-info text-info-content" },
      // soft
      { variant: "soft", color: "primary",   class: "bg-primary/10 text-primary" },
      { variant: "soft", color: "secondary", class: "bg-secondary/10 text-secondary" },
      { variant: "soft", color: "accent",    class: "bg-accent/10 text-accent" },
      { variant: "soft", color: "neutral",   class: "bg-neutral/10 text-neutral" },
      { variant: "soft", color: "success",   class: "bg-success/10 text-success" },
      { variant: "soft", color: "danger",    class: "bg-danger/10 text-danger" },
      { variant: "soft", color: "warning",   class: "bg-warning/10 text-warning" },
      { variant: "soft", color: "info",      class: "bg-info/10 text-info" },
      // outline
      { variant: "outline", color: "primary",   class: "border border-primary bg-transparent text-primary" },
      { variant: "outline", color: "secondary", class: "border border-secondary bg-transparent text-secondary" },
      { variant: "outline", color: "accent",    class: "border border-accent bg-transparent text-accent" },
      { variant: "outline", color: "neutral",   class: "border border-neutral bg-transparent text-neutral" },
      { variant: "outline", color: "success",   class: "border border-success bg-transparent text-success" },
      { variant: "outline", color: "danger",    class: "border border-danger bg-transparent text-danger" },
      { variant: "outline", color: "warning",   class: "border border-warning bg-transparent text-warning" },
      { variant: "outline", color: "info",      class: "border border-info bg-transparent text-info" },
    ],
    defaultVariants: {
      variant: "soft",
      color: "primary",
      size: "md",
      radius: "md",
    },
  }
);

export type BadgeVariantsProps = VariantProps<typeof badgeVariants>;
