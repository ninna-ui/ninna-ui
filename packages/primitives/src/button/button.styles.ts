import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  "relative isolate inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none data-[loading=true]:cursor-wait data-[loading=true]:pointer-events-none before:absolute before:inset-[-4px] before:content-['']",
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outline: "",
        ghost: "",
        text: "",
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
        xs: "h-7 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
        xl: "h-12 px-6 text-base",
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
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [
      // solid
      { variant: "solid", color: "primary",   class: "bg-primary text-primary-content hover:bg-primary/90" },
      { variant: "solid", color: "secondary", class: "bg-secondary text-secondary-content hover:bg-secondary/90" },
      { variant: "solid", color: "accent",    class: "bg-accent text-accent-content hover:bg-accent/90" },
      { variant: "solid", color: "neutral",   class: "bg-neutral text-neutral-content hover:bg-neutral/90" },
      { variant: "solid", color: "success",   class: "bg-success text-success-content hover:bg-success/90" },
      { variant: "solid", color: "danger",    class: "bg-danger text-danger-content hover:bg-danger/90" },
      { variant: "solid", color: "warning",   class: "bg-warning text-warning-content hover:bg-warning/90" },
      { variant: "solid", color: "info",      class: "bg-info text-info-content hover:bg-info/90" },
      // soft
      { variant: "soft", color: "primary",   class: "bg-primary/10 text-primary hover:bg-primary/20" },
      { variant: "soft", color: "secondary", class: "bg-secondary/10 text-secondary hover:bg-secondary/20" },
      { variant: "soft", color: "accent",    class: "bg-accent/10 text-accent hover:bg-accent/20" },
      { variant: "soft", color: "neutral",   class: "bg-neutral/10 text-neutral hover:bg-neutral/20" },
      { variant: "soft", color: "success",   class: "bg-success/10 text-success hover:bg-success/20" },
      { variant: "soft", color: "danger",    class: "bg-danger/10 text-danger hover:bg-danger/20" },
      { variant: "soft", color: "warning",   class: "bg-warning/10 text-warning hover:bg-warning/20" },
      { variant: "soft", color: "info",      class: "bg-info/10 text-info hover:bg-info/20" },
      // outline
      { variant: "outline", color: "primary",   class: "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-content" },
      { variant: "outline", color: "secondary", class: "border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-content" },
      { variant: "outline", color: "accent",    class: "border border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-content" },
      { variant: "outline", color: "neutral",   class: "border border-neutral bg-transparent text-neutral hover:bg-neutral hover:text-neutral-content" },
      { variant: "outline", color: "success",   class: "border border-success bg-transparent text-success hover:bg-success hover:text-success-content" },
      { variant: "outline", color: "danger",    class: "border border-danger bg-transparent text-danger hover:bg-danger hover:text-danger-content" },
      { variant: "outline", color: "warning",   class: "border border-warning bg-transparent text-warning hover:bg-warning hover:text-warning-content" },
      { variant: "outline", color: "info",      class: "border border-info bg-transparent text-info hover:bg-info hover:text-info-content" },
      // ghost
      { variant: "ghost", color: "primary",   class: "text-primary hover:bg-primary/10" },
      { variant: "ghost", color: "secondary", class: "text-secondary hover:bg-secondary/10" },
      { variant: "ghost", color: "accent",    class: "text-accent hover:bg-accent/10" },
      { variant: "ghost", color: "neutral",   class: "text-neutral hover:bg-neutral/10" },
      { variant: "ghost", color: "success",   class: "text-success hover:bg-success/10" },
      { variant: "ghost", color: "danger",    class: "text-danger hover:bg-danger/10" },
      { variant: "ghost", color: "warning",   class: "text-warning hover:bg-warning/10" },
      { variant: "ghost", color: "info",      class: "text-info hover:bg-info/10" },
      // text
      { variant: "text", color: "primary",   class: "text-primary hover:underline" },
      { variant: "text", color: "secondary", class: "text-secondary hover:underline" },
      { variant: "text", color: "accent",    class: "text-accent hover:underline" },
      { variant: "text", color: "neutral",   class: "text-neutral hover:underline" },
      { variant: "text", color: "success",   class: "text-success hover:underline" },
      { variant: "text", color: "danger",    class: "text-danger hover:underline" },
      { variant: "text", color: "warning",   class: "text-warning hover:underline" },
      { variant: "text", color: "info",      class: "text-info hover:underline" },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "md",
      radius: "md",
      fullWidth: false,
    },
  }
);

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

/** Spinner size classes per button size */
export const BUTTON_SPINNER_SIZES: Record<import('@ninna-ui/core').Size, string> = {
  xs: "w-3 h-3",
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5",
  xl: "w-6 h-6",
};

