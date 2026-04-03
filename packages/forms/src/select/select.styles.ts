import { cva, type VariantProps } from 'class-variance-authority';

export const selectTriggerVariants = cva(
  "inline-flex items-center justify-between gap-2 text-base-content transition-colors duration-200 focus:outline-none focus-visible:outline-none !outline-none disabled:opacity-50 disabled:cursor-not-allowed data-[placeholder]:text-base-content/70",
  {
    variants: {
      selectVariant: {
        outline: "rounded-md border border-base-300 bg-base-100 disabled:bg-base-50",
        filled:  "rounded-md border border-transparent bg-base-200 focus:bg-base-100",
        flushed: "rounded-none border-x-0 border-t-0 border-b-2 border-base-300 bg-transparent px-0",
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
        xs: "h-7 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-4 text-base",
        xl: "h-12 px-5 text-base",
      },
      invalid: {
        true:  "",
        false: "",
      },
      fullWidth: {
        true:  "w-full",
        false: "",
      },
    },
    compoundVariants: [
      // outline + color: colored border at rest + focus ring
      { selectVariant: "outline", color: "primary",   class: "border-primary/40 focus:ring-2 focus:ring-primary/30 focus:border-primary" },
      { selectVariant: "outline", color: "secondary", class: "border-secondary/40 focus:ring-2 focus:ring-secondary/30 focus:border-secondary" },
      { selectVariant: "outline", color: "accent",    class: "border-accent/40 focus:ring-2 focus:ring-accent/30 focus:border-accent" },
      { selectVariant: "outline", color: "neutral",   class: "border-neutral/40 focus:ring-2 focus:ring-neutral/30 focus:border-neutral" },
      { selectVariant: "outline", color: "success",   class: "border-success/40 focus:ring-2 focus:ring-success/30 focus:border-success" },
      { selectVariant: "outline", color: "danger",    class: "border-danger/40 focus:ring-2 focus:ring-danger/30 focus:border-danger" },
      { selectVariant: "outline", color: "warning",   class: "border-warning/40 focus:ring-2 focus:ring-warning/30 focus:border-warning" },
      { selectVariant: "outline", color: "info",      class: "border-info/40 focus:ring-2 focus:ring-info/30 focus:border-info" },
      // filled + color: tinted bg at rest + focus ring
      { selectVariant: "filled", color: "primary",   class: "bg-primary/10 focus:bg-base-100 focus:ring-2 focus:ring-primary/30 focus:border-primary" },
      { selectVariant: "filled", color: "secondary", class: "bg-secondary/10 focus:bg-base-100 focus:ring-2 focus:ring-secondary/30 focus:border-secondary" },
      { selectVariant: "filled", color: "accent",    class: "bg-accent/10 focus:bg-base-100 focus:ring-2 focus:ring-accent/30 focus:border-accent" },
      { selectVariant: "filled", color: "neutral",   class: "bg-neutral/10 focus:bg-base-100 focus:ring-2 focus:ring-neutral/30 focus:border-neutral" },
      { selectVariant: "filled", color: "success",   class: "bg-success/10 focus:bg-base-100 focus:ring-2 focus:ring-success/30 focus:border-success" },
      { selectVariant: "filled", color: "danger",    class: "bg-danger/10 focus:bg-base-100 focus:ring-2 focus:ring-danger/30 focus:border-danger" },
      { selectVariant: "filled", color: "warning",   class: "bg-warning/10 focus:bg-base-100 focus:ring-2 focus:ring-warning/30 focus:border-warning" },
      { selectVariant: "filled", color: "info",      class: "bg-info/10 focus:bg-base-100 focus:ring-2 focus:ring-info/30 focus:border-info" },
      // flushed + color: colored bottom border at rest + focus
      { selectVariant: "flushed", color: "primary",   class: "border-primary/40 focus:border-primary" },
      { selectVariant: "flushed", color: "secondary", class: "border-secondary/40 focus:border-secondary" },
      { selectVariant: "flushed", color: "accent",    class: "border-accent/40 focus:border-accent" },
      { selectVariant: "flushed", color: "neutral",   class: "border-neutral/40 focus:border-neutral" },
      { selectVariant: "flushed", color: "success",   class: "border-success/40 focus:border-success" },
      { selectVariant: "flushed", color: "danger",    class: "border-danger/40 focus:border-danger" },
      { selectVariant: "flushed", color: "warning",   class: "border-warning/40 focus:border-warning" },
      { selectVariant: "flushed", color: "info",      class: "border-info/40 focus:border-info" },
      // invalid states (override color)
      { selectVariant: "outline", invalid: true, class: "border-danger focus:ring-2 focus:ring-danger/30 focus:border-danger" },
      { selectVariant: "filled",  invalid: true, class: "bg-danger/10 border-danger focus:ring-2 focus:ring-danger/30 focus:border-danger" },
      { selectVariant: "flushed", invalid: true, class: "border-danger focus:border-danger" },
    ],
    defaultVariants: { selectVariant: "outline", color: "primary", size: "md", invalid: false, fullWidth: true },
  }
);

export type SelectTriggerVariantsProps = VariantProps<typeof selectTriggerVariants>;

export const selectStyles = {
  icon:         "h-4 w-4 text-base-content/70 shrink-0",
  content:      "overflow-hidden rounded-md border border-base-200 bg-base-100 shadow-lg z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
  viewport:     "p-1",
  item:         "relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-base-content text-sm outline-none focus:bg-base-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  itemIndicator:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
  group:        "",
  groupLabel:   "px-3 py-1.5 text-xs font-semibold text-base-content/70",
  separator:    "my-1 h-px bg-base-200",
  scrollButton: "flex cursor-default items-center justify-center py-1 text-base-content/70",
};
