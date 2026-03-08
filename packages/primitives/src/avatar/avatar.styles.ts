import { cva, type VariantProps } from 'class-variance-authority';

export const avatarVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden shrink-0 select-none",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
      },
      color: {
        primary:   "bg-primary/10 text-primary",
        secondary: "bg-secondary/10 text-secondary",
        accent:    "bg-accent/10 text-accent",
        neutral:   "bg-neutral/10 text-neutral",
        success:   "bg-success/10 text-success",
        danger:    "bg-danger/10 text-danger",
        warning:   "bg-warning/10 text-warning",
        info:      "bg-info/10 text-info",
      },
      shape: {
        circle: "rounded-full",
        square: "",
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
      withRing: {
        true: "ring-2 ring-offset-2 ring-offset-base-100",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      color: "neutral",
      shape: "circle",
      withRing: false,
    },
  }
);

export type AvatarVariantsProps = VariantProps<typeof avatarVariants>;

/** Text sizes for initials per avatar size */
export const AVATAR_TEXT_SIZES: Record<import('@ninna-ui/core').Size, string> = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

/** Icon sizes for fallback icon per avatar size */
export const AVATAR_ICON_SIZES: Record<import('@ninna-ui/core').Size, string> = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
};

/** Ring colors per semantic color */
export const AVATAR_RING_COLORS: Record<import('@ninna-ui/core').Color, string> = {
  primary:   "ring-primary",
  secondary: "ring-secondary",
  accent:    "ring-accent",
  neutral:   "ring-neutral",
  success:   "ring-success",
  danger:    "ring-danger",
  warning:   "ring-warning",
  info:      "ring-info",
};

export const avatarGroupStyles = {
  base: "flex items-center",
  spacing: {
    tight:  "-space-x-3",
    normal: "-space-x-2",
    loose:  "-space-x-1",
  },
  item: "ring-2 ring-base-100",
  overflow: "flex items-center justify-center bg-base-200 text-base-content/80 text-xs font-medium",
};

export const AVATAR_IMAGE_CLASS = "h-full w-full object-cover";
export const AVATAR_FALLBACK_CLASS = "flex items-center justify-center h-full w-full font-medium uppercase";

