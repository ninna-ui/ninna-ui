import { cva, type VariantProps } from 'class-variance-authority';

export const markVariants = cva(
  "px-0.5 rounded-sm",
  {
    variants: {
      color: {
        primary:   "bg-primary/20 text-primary",
        secondary: "bg-secondary/20 text-secondary",
        accent:    "bg-accent/20 text-accent",
        neutral:   "bg-neutral/20 text-neutral",
        success:   "bg-success/20 text-success",
        danger:    "bg-danger/20 text-danger",
        warning:   "bg-warning/20 text-warning",
        info:      "bg-info/20 text-info",
        default:   "bg-warning/30 text-base-content",
      },
    },
    defaultVariants: { color: "neutral" },
  }
);

export type MarkVariantsProps = VariantProps<typeof markVariants>;
