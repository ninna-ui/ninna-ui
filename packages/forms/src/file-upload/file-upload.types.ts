import type { Size } from '@ninna-ui/core';
import type { ReactNode } from 'react';

export interface FileUploadProps {
  /** Size of the file upload component */
  size?: Size;
  /** Accepted file types (e.g., "image/*", ".pdf") */
  accept?: string;
  /** Allow multiple file selection */
  multiple?: boolean;
  /** Maximum file size in bytes */
  maxFileSize?: number;
  /** Maximum number of files */
  maxFiles?: number;
  /** Whether the upload is disabled */
  disabled?: boolean;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the upload is in an invalid state */
  invalid?: boolean;
  /** Callback when files are selected */
  onFilesChange?: (files: File[]) => void;
  /** Callback when files are rejected */
  onFilesRejected?: (files: FileRejection[]) => void;
  /** Custom content for dropzone */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Name for form submission */
  name?: string;
  /** Label for the upload area */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Show file list */
  showFileList?: boolean;
  /** Allow drag and drop */
  allowDrag?: boolean;
}

export interface FileRejection {
  file: File;
  reason: 'size' | 'type' | 'count';
  message: string;
}

export interface FileUploadItemProps {
  file: File;
  onRemove?: () => void;
  showSize?: boolean;
  showPreview?: boolean;
}
