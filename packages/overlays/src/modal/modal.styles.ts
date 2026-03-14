import { cva, type VariantProps } from 'class-variance-authority';

export const modalContentVariants = cva(
  "fixed z-50 bg-base-100 rounded-xl shadow-xl border border-base-200 focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 max-h-[85vh] overflow-y-auto",
  {
    variants: {
      size: {
        xs:   "w-[calc(100%-1rem)] max-w-xs sm:w-full sm:max-w-xs",
        sm:   "w-[calc(100%-1rem)] max-w-sm sm:w-full sm:max-w-sm",
        md:   "w-[calc(100%-1rem)] max-w-md sm:w-full sm:max-w-md",
        lg:   "w-[calc(100%-1rem)] max-w-lg sm:w-full sm:max-w-lg",
        xl:   "w-[calc(100%-1rem)] max-w-xl sm:w-full sm:max-w-xl",
        full: "w-[calc(100%-1rem)] h-[calc(100%-1rem)] max-w-none max-h-none sm:w-[calc(100%-2rem)] sm:h-[calc(100%-2rem)]",
      },
      placement: {
        center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
        top:    "left-1/2 top-[1rem] -translate-x-1/2 sm:left-1/2 sm:top-[4rem] sm:-translate-x-1/2",
      },
    },
    defaultVariants: { size: "md", placement: "center" },
  }
);

export type ModalContentVariantsProps = VariantProps<typeof modalContentVariants>;

export const modalStyles = {
  overlay: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
  header:  "flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-2",
  body:    "px-4 sm:px-6 py-4",
  footer:  "flex flex-wrap items-center justify-end gap-2 px-4 sm:px-6 pt-2 pb-4 sm:pb-6",
  close:   "absolute top-3 right-3 inline-flex items-center justify-center rounded-md p-1.5 text-base-content/70 hover:text-base-content hover:bg-base-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 before:absolute before:inset-[-6px] before:content-[''] min-h-[44px] min-w-[44px]",
};
