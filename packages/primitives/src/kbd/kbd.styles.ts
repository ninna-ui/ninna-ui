import { cva, type VariantProps } from 'class-variance-authority';

export const kbdVariants = cva(
  "inline-flex items-center justify-center font-mono font-medium border rounded shadow-sm",
  {
    variants: {
      size: {
        xs: "px-1 py-0.5 text-xs min-w-5",
        sm: "px-1.5 py-0.5 text-xs min-w-6",
        md: "px-2 py-1 text-sm min-w-7",
        lg: "px-2.5 py-1 text-base min-w-8",
      },
      color: {
        primary:   "bg-primary/10 border-primary/30 text-primary",
        secondary: "bg-secondary/10 border-secondary/30 text-secondary",
        accent:    "bg-accent/10 border-accent/30 text-accent",
        neutral:   "bg-neutral/10 border-neutral/30 text-neutral",
        success:   "bg-success/10 border-success/30 text-success",
        danger:    "bg-danger/10 border-danger/30 text-danger",
        warning:   "bg-warning/10 border-warning/30 text-warning",
        info:      "bg-info/10 border-info/30 text-info",
        default:   "bg-base-100 border-base-300 text-base-content",
      },
    },
    defaultVariants: { size: "sm", color: "neutral" },
  }
);

export type KbdVariantsProps = VariantProps<typeof kbdVariants>;
