import { cva, type VariantProps } from 'class-variance-authority';

export const codeVariants = cva(
  "inline-block px-1.5 py-0.5 rounded font-mono",
  {
    variants: {
      color: {
        primary:   "bg-primary/10 text-primary",
        secondary: "bg-secondary/10 text-secondary",
        accent:    "bg-accent/10 text-accent",
        neutral:   "bg-neutral/10 text-neutral",
        success:   "bg-success/10 text-success",
        danger:    "bg-danger/10 text-danger",
        warning:   "bg-warning/10 text-warning",
        info:      "bg-info/10 text-info",
        default:   "bg-base-200 text-base-content",
      },
      size: {
        xs:   "text-xs",
        sm:   "text-sm",
        base: "text-base",
        md:   "text-base",
        lg:   "text-lg",
        xl:   "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
      },
    },
    defaultVariants: { color: "neutral" },
  }
);

export type CodeVariantsProps = VariantProps<typeof codeVariants>;
