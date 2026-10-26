import { cva, type VariantProps } from "class-variance-authority";

export const markVariants = cva("px-0.5 rounded-sm", {
  variants: {
    color: {
      primary: "bg-primary/20 text-primary-text",
      secondary: "bg-secondary/20 text-secondary-text",
      accent: "bg-accent/20 text-accent-text",
      neutral: "bg-neutral/20 text-neutral-text",
      success: "bg-success/20 text-success-text",
      danger: "bg-danger/20 text-danger-text",
      warning: "bg-warning/20 text-warning-text",
      info: "bg-info/20 text-info-text",
      default: "bg-warning/30 text-base-content",
    },
  },
  defaultVariants: { color: "neutral" },
});

export type MarkVariantsProps = VariantProps<typeof markVariants>;
