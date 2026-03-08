import { cva, type VariantProps } from 'class-variance-authority';

export const fileUploadDropzoneVariants = cva(
  "relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  {
    variants: {
      size: {
        xs: "min-h-20 text-xs",
        sm: "min-h-24 text-sm",
        md: "min-h-32 text-sm",
        lg: "min-h-40 text-base",
        xl: "min-h-48 text-base",
      },
      state: {
        default:  "border-base-300 bg-base-50 hover:border-base-400",
        active:   "border-primary bg-primary/10",
        disabled: "cursor-not-allowed opacity-50 bg-base-100",
        invalid:  "border-danger bg-danger/10",
      },
    },
    defaultVariants: { size: "md", state: "default" },
  }
);

export type FileUploadDropzoneVariantsProps = VariantProps<typeof fileUploadDropzoneVariants>;

export const FILE_UPLOAD_SIZES: Record<import('@ninna-ui/core').Size, string> = {
  xs: "min-h-20 text-xs",
  sm: "min-h-24 text-sm",
  md: "min-h-32 text-sm",
  lg: "min-h-40 text-base",
  xl: "min-h-48 text-base",
};

export const fileUploadStyles = {
  container: 'w-full',
  dropzone: 'relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  dropzoneDefault: 'border-base-300 bg-base-50 hover:border-base-400',
  dropzoneActive: 'border-primary bg-primary/10',
  dropzoneDisabled: 'cursor-not-allowed opacity-50 bg-base-100',
  dropzoneInvalid: 'border-danger bg-danger/10',
  input: 'absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed',
  content: 'flex flex-col items-center justify-center gap-2 p-6 pointer-events-none',
  icon: 'text-base-content/70',
  text: 'text-base-content/80',
  textSecondary: 'text-base-content/70 text-sm',
  label: 'text-sm font-medium text-base-content/80 mb-2',
  helperText: 'text-sm text-base-content/70 mt-2',
  errorText: 'text-sm text-danger mt-2',
  fileList: 'mt-4 space-y-2',
  fileItem: 'flex items-center gap-3 p-3 rounded-lg bg-base-50 border border-base-200',
  fileIcon: 'flex-shrink-0 text-base-content/70',
  fileInfo: 'flex-1 min-w-0',
  fileName: 'text-sm font-medium text-base-content truncate',
  fileSize: 'text-xs text-base-content/70',
  filePreview: 'w-10 h-10 rounded object-cover',
  removeButton: 'flex-shrink-0 p-1 rounded-full hover:bg-base-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
};
