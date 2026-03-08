import { cva, type VariantProps } from 'class-variance-authority';

export const separatorVariants = cva(
  "shrink-0",
  {
    variants: {
      orientation: {
        horizontal: "h-px w-full",
        vertical:   "h-full w-px",
      },
      color: {
        default:   "bg-base-200",
        primary:   "bg-primary/30",
        secondary: "bg-secondary/30",
        accent:    "bg-accent/30",
        neutral:   "bg-neutral/30",
        success:   "bg-success/30",
        warning:   "bg-warning/30",
        danger:    "bg-danger/30",
        info:      "bg-info/30",
      },
    },
    defaultVariants: { orientation: "horizontal", color: "default" },
  }
);

export type SeparatorVariantsProps = VariantProps<typeof separatorVariants>;
