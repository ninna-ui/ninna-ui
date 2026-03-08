import { cva, type VariantProps } from 'class-variance-authority';

export const skeletonVariants = cva(
  "bg-base-200",
  {
    variants: {
      variant: {
        pulse: "animate-pulse motion-reduce:animate-none ninna-skeleton-animated",
        shine: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent ninna-skeleton-animated",
        none: "",
      },
      radius: {
        none: "rounded-none",
        sm:   "rounded-sm",
        md:   "rounded-md",
        lg:   "rounded-lg",
        xl:   "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "pulse",
      radius: "md",
    },
  }
);

export type SkeletonVariantsProps = VariantProps<typeof skeletonVariants>;

export const SKELETON_TEXT_LINE = "h-4 w-full";
export const SKELETON_TEXT_LINE_LAST = "w-4/5";
