import { cva, type VariantProps } from 'class-variance-authority';

export const drawerContentVariants = cva(
  "fixed z-50 bg-base-100 shadow-xl border-base-200 focus:outline-none flex flex-col",
  {
    variants: {
      placement: {
        right:  "inset-y-0 right-0 border-l data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right",
        left:   "inset-y-0 left-0 border-r data-[state=open]:animate-in data-[state=open]:slide-in-from-left data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left",
        top:    "inset-x-0 top-0 border-b data-[state=open]:animate-in data-[state=open]:slide-in-from-top data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom",
      },
      size: {
        xs:   "",
        sm:   "",
        md:   "",
        lg:   "",
        xl:   "",
        full: "",
      },
    },
    defaultVariants: { placement: "right", size: "md" },
  }
);

export type DrawerContentVariantsProps = VariantProps<typeof drawerContentVariants>;

export const DRAWER_SIZES_HORIZONTAL: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full', string> = {
  xs:   "w-64",
  sm:   "w-80",
  md:   "w-96",
  lg:   "w-[32rem]",
  xl:   "w-[40rem]",
  full: "w-screen",
};

export const DRAWER_SIZES_VERTICAL: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full', string> = {
  xs:   "h-48",
  sm:   "h-64",
  md:   "h-80",
  lg:   "h-96",
  xl:   "h-[32rem]",
  full: "h-screen",
};

export const drawerStyles = {
  overlay: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
  header:  "flex items-center justify-between px-6 pt-6 pb-2",
  body:    "flex-1 overflow-y-auto px-6 py-4",
  footer:  "flex items-center justify-end gap-2 px-6 pt-2 pb-6",
  close:   "absolute top-3 right-3 inline-flex items-center justify-center rounded-md p-1.5 text-base-content/70 hover:text-base-content hover:bg-base-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
};
