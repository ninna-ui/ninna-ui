import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-xl transition-all duration-200 isolate relative",
  {
    variants: {
      variant: {
        outline: "border border-base-200 bg-base-100 shadow-sm",
        elevated: "bg-base-100 shadow-md",
        filled: "bg-base-200/50", // This is 'soft' in our system
        soft: "bg-base-200/50", // Alias for filled
        ghost: "bg-transparent",
        solid: "",
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
      interactive: {
        true: "cursor-pointer hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-text",
        false: "",
      },
    },
    compoundVariants: [
      // Primary
      {
        variant: "outline",
        color: "primary",
        class: "border-primary/50 text-primary-text",
      },
      {
        variant: "filled",
        color: "primary",
        class: "bg-primary/10 text-primary-text border-transparent",
      },
      {
        variant: "soft",
        color: "primary",
        class: "bg-primary/10 text-primary-text border-transparent",
      },
      {
        variant: "elevated",
        color: "primary",
        class: "border-t-4 border-t-primary",
      },
      {
        variant: "solid",
        color: "primary",
        class: "bg-primary text-primary-content",
      },

      // Secondary
      {
        variant: "outline",
        color: "secondary",
        class: "border-secondary/50 text-secondary-text",
      },
      {
        variant: "filled",
        color: "secondary",
        class: "bg-secondary/10 text-secondary-text border-transparent",
      },
      {
        variant: "soft",
        color: "secondary",
        class: "bg-secondary/10 text-secondary-text border-transparent",
      },
      {
        variant: "elevated",
        color: "secondary",
        class: "border-t-4 border-t-secondary",
      },
      {
        variant: "solid",
        color: "secondary",
        class: "bg-secondary text-secondary-content",
      },

      // Accent
      {
        variant: "outline",
        color: "accent",
        class: "border-accent/50 text-accent-text",
      },
      {
        variant: "filled",
        color: "accent",
        class: "bg-accent/10 text-accent-text border-transparent",
      },
      {
        variant: "soft",
        color: "accent",
        class: "bg-accent/10 text-accent-text border-transparent",
      },
      {
        variant: "elevated",
        color: "accent",
        class: "border-t-4 border-t-accent",
      },
      {
        variant: "solid",
        color: "accent",
        class: "bg-accent text-accent-content",
      },

      // Neutral
      {
        variant: "outline",
        color: "neutral",
        class: "border-neutral/50 text-neutral-text",
      },
      {
        variant: "filled",
        color: "neutral",
        class: "bg-neutral/10 text-neutral-text border-transparent",
      },
      {
        variant: "soft",
        color: "neutral",
        class: "bg-neutral/10 text-neutral-text border-transparent",
      },
      {
        variant: "elevated",
        color: "neutral",
        class: "border-t-4 border-t-neutral",
      },
      {
        variant: "solid",
        color: "neutral",
        class: "bg-neutral text-neutral-content",
      },

      // Success
      {
        variant: "outline",
        color: "success",
        class: "border-success/50 text-success-text",
      },
      {
        variant: "filled",
        color: "success",
        class: "bg-success/10 text-success-text border-transparent",
      },
      {
        variant: "soft",
        color: "success",
        class: "bg-success/10 text-success-text border-transparent",
      },
      {
        variant: "elevated",
        color: "success",
        class: "border-t-4 border-t-success",
      },
      {
        variant: "solid",
        color: "success",
        class: "bg-success text-success-content",
      },

      // Danger
      {
        variant: "outline",
        color: "danger",
        class: "border-danger/50 text-danger-text",
      },
      {
        variant: "filled",
        color: "danger",
        class: "bg-danger/10 text-danger-text border-transparent",
      },
      {
        variant: "soft",
        color: "danger",
        class: "bg-danger/10 text-danger-text border-transparent",
      },
      {
        variant: "elevated",
        color: "danger",
        class: "border-t-4 border-t-danger",
      },
      {
        variant: "solid",
        color: "danger",
        class: "bg-danger text-danger-content",
      },

      // Warning
      {
        variant: "outline",
        color: "warning",
        class: "border-warning/50 text-warning-text",
      },
      {
        variant: "filled",
        color: "warning",
        class: "bg-warning/10 text-warning-text border-transparent",
      },
      {
        variant: "soft",
        color: "warning",
        class: "bg-warning/10 text-warning-text border-transparent",
      },
      {
        variant: "elevated",
        color: "warning",
        class: "border-t-4 border-t-warning",
      },
      {
        variant: "solid",
        color: "warning",
        class: "bg-warning text-warning-content",
      },

      // Info
      {
        variant: "outline",
        color: "info",
        class: "border-info/50 text-info-text",
      },
      {
        variant: "filled",
        color: "info",
        class: "bg-info/10 text-info-text border-transparent",
      },
      {
        variant: "soft",
        color: "info",
        class: "bg-info/10 text-info-text border-transparent",
      },
      { variant: "elevated", color: "info", class: "border-t-4 border-t-info" },
      { variant: "solid", color: "info", class: "bg-info text-info-content" },
    ],
    defaultVariants: { variant: "outline", interactive: false },
  },
);

export type CardVariantsProps = VariantProps<typeof cardVariants>;

export const cardStyles = {
  header: "flex flex-col gap-1.5 p-4 sm:p-6",
  body: "p-4 sm:p-6 pt-0",
  footer: "flex items-center p-4 sm:p-6 pt-0",
  title: "text-xl font-bold leading-none tracking-tight",
  description: "text-sm opacity-80",
};
