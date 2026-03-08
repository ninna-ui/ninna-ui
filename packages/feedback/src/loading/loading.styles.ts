import { cva, type VariantProps } from 'class-variance-authority';

export const loadingVariants = cva(
  "",
  {
    variants: {
      variant: {
        spin: "animate-spin rounded-full border-2 border-current border-t-transparent",
        ping: "animate-ping rounded-full",
        pulse: "animate-pulse rounded-full",
        dots: "inline-flex items-center gap-2",
      },
      color: {
        primary:   "text-primary",
        secondary: "text-secondary",
        accent:    "text-accent",
        neutral:   "text-neutral",
        success:   "text-success",
        danger:    "text-danger",
        warning:   "text-warning",
        info:      "text-info",
      },
      size: {
        xs:  "h-3 w-3",
        sm:  "h-4 w-4",
        md:  "h-5 w-5",
        lg:  "h-6 w-6",
        xl:  "h-8 w-8",
        "2xl": "h-10 w-10",
        "3xl": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "spin",
      color: "primary",
      size: "md",
    },
  }
);

export type LoadingVariantsProps = VariantProps<typeof loadingVariants>;

/** Standalone color classes for dots (avoids CVA base class leaking into dot spans) */
export const LOADING_COLORS: Record<import('@ninna-ui/core').Color, string> = {
  primary:   "text-primary",
  secondary: "text-secondary",
  accent:    "text-accent",
  neutral:   "text-neutral",
  success:   "text-success",
  danger:    "text-danger",
  warning:   "text-warning",
  info:      "text-info",
};
