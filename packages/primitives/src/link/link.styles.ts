import { cva, type VariantProps } from "class-variance-authority";

export const linkVariants = cva(
  "inline-flex items-center gap-1 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm",
  {
    variants: {
      color: {
        primary: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
        neutral: "text-neutral",
        success: "text-success",
        danger: "text-danger",
        warning: "text-warning",
        info: "text-info",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
      },
      underline: {
        always: "underline underline-offset-2",
        hover: "hover:underline underline-offset-2",
        none: "no-underline",
      },
    },
    defaultVariants: { color: "neutral", underline: "hover" },
  },
);

export type LinkVariantsProps = VariantProps<typeof linkVariants>;

export const LINK_EXTERNAL_ICON_CLASS = "inline-block w-3.5 h-3.5 ml-0.5";
