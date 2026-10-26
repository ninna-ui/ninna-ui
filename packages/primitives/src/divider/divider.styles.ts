import { cva, type VariantProps } from "class-variance-authority";
import type { Color } from "@ninna-ui/core";

export const dividerVariants = cva("", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "h-full border-l",
    },
    weight: {
      soft: "border-base-300/50",
      solid: "border-base-300",
    },
  },
  defaultVariants: { orientation: "horizontal", weight: "soft" },
});

export type DividerVariantsProps = VariantProps<typeof dividerVariants>;

export const DIVIDER_TEXT_COLORS: Record<Color, string> = {
  primary: "text-primary-text",
  secondary: "text-secondary-text",
  accent: "text-accent-text",
  neutral: "text-neutral-text",
  success: "text-success-text",
  danger: "text-danger-text",
  warning: "text-warning-text",
  info: "text-info-text",
};

export const dividerStyles = {
  withTextContainer: "flex items-center gap-3 w-full",
  withTextLine: "flex-1 border-t",
  withTextContent: "text-sm font-medium whitespace-nowrap",
};
