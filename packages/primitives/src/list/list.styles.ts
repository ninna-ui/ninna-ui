import { cva, type VariantProps } from "class-variance-authority";
import type { Color } from "@ninna-ui/core";

export const listVariants = cva("pl-5", {
  variants: {
    spacing: {
      none: "space-y-0",
      sm: "space-y-1",
      md: "space-y-2",
      lg: "space-y-4",
    },
  },
  defaultVariants: { spacing: "md" },
});

export type ListVariantsProps = VariantProps<typeof listVariants>;

export const LIST_UNORDERED_MARKERS: Record<
  "disc" | "circle" | "square" | "none",
  string
> = {
  disc: "list-disc",
  circle: "list-[circle]",
  square: "list-[square]",
  none: "list-none",
};

export const LIST_ORDERED_MARKERS: Record<
  "decimal" | "alpha" | "roman" | "none",
  string
> = {
  decimal: "list-decimal",
  alpha: "list-[lower-alpha]",
  roman: "list-[lower-roman]",
  none: "list-none",
};

export const LIST_MARKER_COLORS: Record<Color, string> = {
  primary: "marker:text-primary-text",
  secondary: "marker:text-secondary-text",
  accent: "marker:text-accent-text",
  neutral: "marker:text-neutral-text",
  success: "marker:text-success-text",
  danger: "marker:text-danger-text",
  warning: "marker:text-warning-text",
  info: "marker:text-info-text",
};

export const LIST_ICON_COLORS: Record<Color, string> = {
  primary: "text-primary-text",
  secondary: "text-secondary-text",
  accent: "text-accent-text",
  neutral: "text-neutral-text",
  success: "text-success-text",
  danger: "text-danger-text",
  warning: "text-warning-text",
  info: "text-info-text",
};

export const listStyles = {
  customMarker: "list-none",
  itemBase: "text-base-content/80",
  itemWithIcon: "flex items-start gap-2",
  iconWrapper: "flex-shrink-0 mt-0.5",
};
