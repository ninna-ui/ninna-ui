import { cva, type VariantProps } from 'class-variance-authority';

export const inputVariants = cva(
  "w-full rounded-md border bg-base-100 text-base-content placeholder:text-base-content/70 transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-base-50 read-only:bg-base-50 read-only:cursor-default",
  {
    variants: {
      inputVariant: {
        outline: "",
        filled:  "bg-base-200 border-transparent focus:bg-base-100",
        flushed: "border-x-0 border-t-0 rounded-none border-base-300",
      },
      color: {
        primary:   "",
        secondary: "",
        accent:    "",
        neutral:   "",
        success:   "",
        danger:    "",
        warning:   "",
        info:      "",
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
    },
    compoundVariants: [
      // outline + color focus rings
      { inputVariant: "outline", color: "primary",   class: "border-base-300 focus:ring-primary/30 focus:border-primary" },
      { inputVariant: "outline", color: "secondary", class: "border-base-300 focus:ring-secondary/30 focus:border-secondary" },
      { inputVariant: "outline", color: "accent",    class: "border-base-300 focus:ring-accent/30 focus:border-accent" },
      { inputVariant: "outline", color: "neutral",   class: "border-base-300 focus:ring-neutral/30 focus:border-neutral" },
      { inputVariant: "outline", color: "success",   class: "border-base-300 focus:ring-success/30 focus:border-success" },
      { inputVariant: "outline", color: "danger",    class: "border-base-300 focus:ring-danger/30 focus:border-danger" },
      { inputVariant: "outline", color: "warning",   class: "border-base-300 focus:ring-warning/30 focus:border-warning" },
      { inputVariant: "outline", color: "info",      class: "border-base-300 focus:ring-info/30 focus:border-info" },
      // filled + color focus borders
      { inputVariant: "filled", color: "primary",   class: "focus:border-primary" },
      { inputVariant: "filled", color: "secondary", class: "focus:border-secondary" },
      { inputVariant: "filled", color: "accent",    class: "focus:border-accent" },
      { inputVariant: "filled", color: "neutral",   class: "focus:border-neutral" },
      { inputVariant: "filled", color: "success",   class: "focus:border-success" },
      { inputVariant: "filled", color: "danger",    class: "focus:border-danger" },
      { inputVariant: "filled", color: "warning",   class: "focus:border-warning" },
      { inputVariant: "filled", color: "info",      class: "focus:border-info" },
      // flushed + color focus borders
      { inputVariant: "flushed", color: "primary",   class: "focus:border-primary" },
      { inputVariant: "flushed", color: "secondary", class: "focus:border-secondary" },
      { inputVariant: "flushed", color: "accent",    class: "focus:border-accent" },
      { inputVariant: "flushed", color: "neutral",   class: "focus:border-neutral" },
      { inputVariant: "flushed", color: "success",   class: "focus:border-success" },
      { inputVariant: "flushed", color: "danger",    class: "focus:border-danger" },
      { inputVariant: "flushed", color: "warning",   class: "focus:border-warning" },
      { inputVariant: "flushed", color: "info",      class: "focus:border-info" },
      // invalid states
      { inputVariant: "outline", invalid: true, class: "border-danger focus:ring-danger/30 focus:border-danger" },
      { inputVariant: "filled",  invalid: true, class: "bg-danger/10 border-transparent focus:border-danger" },
      { inputVariant: "flushed", invalid: true, class: "border-danger focus:border-danger" },
    ],
    defaultVariants: { inputVariant: "outline", color: "primary", size: "md", invalid: false },
  }
);

export type InputVariantsProps = VariantProps<typeof inputVariants>;

export const inputStyles = {
  wrapper:          "relative w-full",
  wrapperInline:    "inline-block",
  unstyled:         "border-0 bg-transparent focus:ring-0 p-0",
  clearButton:      "absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full text-base-content/70 hover:text-base-content hover:bg-base-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 transition-colors duration-150",
  withClearButton:  "pr-9",
  counter:          "text-xs text-base-content/70 mt-1 text-right",
  counterError:     "text-danger",
  floatingWrapper:  "relative pt-4",
  floatingLabel:    "absolute left-3 top-1/2 -translate-y-1/2 text-base-content/70 pointer-events-none transition-all duration-200 ease-out peer-focus:top-0 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-75 origin-left bg-base-100 px-1 -ml-1",
  floatingInput:    "peer placeholder-transparent",
  floatingLabelSizes: { xs: "text-xs", sm: "text-sm", md: "text-sm", lg: "text-base", xl: "text-base" },
};
