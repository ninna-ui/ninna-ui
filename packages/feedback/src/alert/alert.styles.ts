import { cva, type VariantProps } from "class-variance-authority";
import type { Size } from "@ninna-ui/core";

export const alertVariants = cva(
  "relative w-full rounded-lg flex items-start",
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outline: "",
      },
      color: {
        primary: "",
        secondary: "",
        accent: "",
        neutral: "",
        success: "",
        danger: "",
        warning: "",
        info: "",
      },
      size: {
        xs: "p-2 text-xs gap-2",
        sm: "p-3 text-sm gap-2",
        md: "p-4 text-sm gap-3",
        lg: "p-5 text-base gap-3",
        xl: "p-6 text-base gap-4",
      },
    },
    compoundVariants: [
      // solid
      {
        variant: "solid",
        color: "primary",
        class: "bg-primary text-primary-content",
      },
      {
        variant: "solid",
        color: "secondary",
        class: "bg-secondary text-secondary-content",
      },
      {
        variant: "solid",
        color: "accent",
        class: "bg-accent text-accent-content",
      },
      {
        variant: "solid",
        color: "neutral",
        class: "bg-neutral text-neutral-content",
      },
      {
        variant: "solid",
        color: "success",
        class: "bg-success text-success-content",
      },
      {
        variant: "solid",
        color: "danger",
        class: "bg-danger text-danger-content",
      },
      {
        variant: "solid",
        color: "warning",
        class: "bg-warning text-warning-content",
      },
      { variant: "solid", color: "info", class: "bg-info text-info-content" },
      // soft
      {
        variant: "soft",
        color: "primary",
        class: "bg-primary/10 text-primary-text",
      },
      {
        variant: "soft",
        color: "secondary",
        class: "bg-secondary/10 text-secondary-text",
      },
      {
        variant: "soft",
        color: "accent",
        class: "bg-accent/10 text-accent-text",
      },
      {
        variant: "soft",
        color: "neutral",
        class: "bg-neutral/10 text-neutral-text",
      },
      {
        variant: "soft",
        color: "success",
        class: "bg-success/10 text-success-text",
      },
      {
        variant: "soft",
        color: "danger",
        class: "bg-danger/10 text-danger-text",
      },
      {
        variant: "soft",
        color: "warning",
        class: "bg-warning/10 text-warning-text",
      },
      { variant: "soft", color: "info", class: "bg-info/10 text-info-text" },
      // outline
      {
        variant: "outline",
        color: "primary",
        class: "border border-primary bg-transparent text-primary-text",
      },
      {
        variant: "outline",
        color: "secondary",
        class: "border border-secondary bg-transparent text-secondary-text",
      },
      {
        variant: "outline",
        color: "accent",
        class: "border border-accent bg-transparent text-accent-text",
      },
      {
        variant: "outline",
        color: "neutral",
        class: "border border-neutral bg-transparent text-neutral-text",
      },
      {
        variant: "outline",
        color: "success",
        class: "border border-success bg-transparent text-success-text",
      },
      {
        variant: "outline",
        color: "danger",
        class: "border border-danger bg-transparent text-danger-text",
      },
      {
        variant: "outline",
        color: "warning",
        class: "border border-warning bg-transparent text-warning-text",
      },
      {
        variant: "outline",
        color: "info",
        class: "border border-info bg-transparent text-info-text",
      },
    ],
    defaultVariants: {
      variant: "soft",
      color: "neutral",
      size: "md",
    },
  },
);

export type AlertVariantsProps = VariantProps<typeof alertVariants>;

export const ALERT_ICON_SIZES: Record<Size, string> = {
  xs: "h-4 w-4",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-7 w-7",
};

export const alertStyles = {
  iconContainer: "flex-shrink-0 mt-0.5",
  contentContainer: "flex-1 min-w-0",
  title: "font-semibold text-sm",
  description: "text-sm mt-1 opacity-90",
  actionContainer: "mt-3",
  dismissButton:
    "flex-shrink-0 ml-auto -mr-1 -mt-1 p-1 rounded-md opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2",
};
