import { forwardRef, useCallback, useId, useState, useRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { fileUploadStyles, FILE_UPLOAD_SIZES } from './file-upload.styles';
import type { FileUploadProps, FileRejection, FileUploadItemProps } from './file-upload.types';

/**
 * Formats bytes to human readable string
 */
function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Generate a stable key for file items
 */
function getFileKey(file: File): string {
  return `${file.name}-${file.size}-${file.lastModified || Date.now()}`;
}

/**
 * FileUploadItem component for displaying uploaded files
 */
export function FileUploadItem({ file, onRemove, showSize = true, showPreview = true }: FileUploadItemProps) {
  const isImage = file.type.startsWith('image/');
  const previewUrl = isImage && showPreview ? URL.createObjectURL(file) : null;

  return (
    <div data-slot="file-item" className={fileUploadStyles.fileItem}>
      {previewUrl ? (
        <img src={previewUrl} alt={file.name} className={fileUploadStyles.filePreview} />
      ) : (
        <svg className={cn(fileUploadStyles.fileIcon, 'w-10 h-10')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )}
      <div className={fileUploadStyles.fileInfo}>
        <p className={fileUploadStyles.fileName}>{file.name}</p>
        {showSize && <p className={fileUploadStyles.fileSize}>{formatFileSize(file.size)}</p>}
      </div>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className={fileUploadStyles.removeButton}
          aria-label={`Remove ${file.name}`}
        >
          <svg className="w-5 h-5 text-neutral/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

/**
 * FileUpload component for uploading files with drag & drop support
 *
 * @example
 * ```tsx
 * <FileUpload
 *   accept="image/*"
 *   maxFileSize={5 * 1024 * 1024}
 *   onFilesChange={(files) => console.log(files)}
 * />
 * ```
 */
export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      size = 'md',
      accept,
      multiple = false,
      maxFileSize,
      maxFiles = 10,
      disabled = false,
      required = false,
      invalid = false,
      onFilesChange,
      onFilesRejected,
      children,
      className,
      name,
      label,
      helperText,
      showFileList = true,
      allowDrag = true,
    },
    ref
  ) => {
    const generatedId = useId();
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const validateFile = useCallback(
      (file: File): FileRejection | null => {
        if (accept) {
          const acceptedTypes = accept.split(',').map((t) => t.trim());
          const isValidType = acceptedTypes.some((type) => {
            if (type.startsWith('.')) {
              return file.name.toLowerCase().endsWith(type.toLowerCase());
            }
            if (type.endsWith('/*')) {
              return file.type.startsWith(type.replace('/*', '/'));
            }
            return file.type === type;
          });
          if (!isValidType) {
            return { file, reason: 'type', message: `File type not accepted: ${file.type}` };
          }
        }

        if (maxFileSize && file.size > maxFileSize) {
          return { file, reason: 'size', message: `File too large: ${formatFileSize(file.size)}` };
        }

        return null;
      },
      [accept, maxFileSize]
    );

    const processFiles = useCallback(
      (newFiles: FileList | File[]) => {
        const fileArray = Array.from(newFiles);
        const accepted: File[] = [];
        const rejected: FileRejection[] = [];

        fileArray.forEach((file) => {
          const rejection = validateFile(file);
          if (rejection) {
            rejected.push(rejection);
          } else {
            accepted.push(file);
          }
        });

        // Check max files limit
        const currentCount = multiple ? files.length : 0;
        const availableSlots = maxFiles - currentCount;
        const filesToAdd = accepted.slice(0, availableSlots);
        const overLimit = accepted.slice(availableSlots);

        overLimit.forEach((file) => {
          rejected.push({ file, reason: 'count', message: 'Maximum file limit reached' });
        });

        if (rejected.length > 0 && onFilesRejected) {
          onFilesRejected(rejected);
        }

        if (filesToAdd.length > 0) {
          const updatedFiles = multiple ? [...files, ...filesToAdd] : filesToAdd;
          setFiles(updatedFiles);
          onFilesChange?.(updatedFiles);
        }
      },
      [files, maxFiles, multiple, onFilesChange, onFilesRejected, validateFile]
    );

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
          processFiles(event.target.files);
        }
      },
      [processFiles]
    );

    const handleDragOver = useCallback(
      (event: React.DragEvent) => {
        if (!allowDrag || disabled) return;
        event.preventDefault();
        setIsDragging(true);
      },
      [allowDrag, disabled]
    );

    const handleDragLeave = useCallback((event: React.DragEvent) => {
      event.preventDefault();
      setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
      (event: React.DragEvent) => {
        if (!allowDrag || disabled) return;
        event.preventDefault();
        setIsDragging(false);

        if (event.dataTransfer.files) {
          processFiles(event.dataTransfer.files);
        }
      },
      [allowDrag, disabled, processFiles]
    );

    const removeFile = useCallback(
      (index: number) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        onFilesChange?.(updatedFiles);
      },
      [files, onFilesChange]
    );

    const dropzoneClasses = cn(
      fileUploadStyles.dropzone,
      FILE_UPLOAD_SIZES[size],
      isDragging && fileUploadStyles.dropzoneActive,
      disabled && fileUploadStyles.dropzoneDisabled,
      invalid && fileUploadStyles.dropzoneInvalid,
      !isDragging && !disabled && !invalid && fileUploadStyles.dropzoneDefault
    );

    return (
      <div data-slot="file-upload" className={cn(fileUploadStyles.container, className)}>
        {label && (
          <label htmlFor={generatedId} className={fileUploadStyles.label}>
            {label}
            {required && <span className="text-danger ml-1">*</span>}
          </label>
        )}

        <div
          className={dropzoneClasses}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          aria-disabled={disabled}
          aria-invalid={invalid}
        >
          <input
            ref={ref || inputRef}
            type="file"
            id={generatedId}
            name={name}
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            required={required}
            onChange={handleChange}
            className={fileUploadStyles.input}
            aria-describedby={helperText ? `${generatedId}-helper` : undefined}
          />
          
          {children || (
            <div className={fileUploadStyles.content}>
              <svg className={cn(fileUploadStyles.icon, 'w-10 h-10')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className={fileUploadStyles.text}>
                <span className="font-semibold">Click to upload</span>
                {allowDrag && <span> or drag and drop</span>}
              </p>
              <p className={fileUploadStyles.textSecondary}>
                {accept ? accept.replace(/,/g, ', ') : 'Any file type'}
                {maxFileSize && ` (max ${formatFileSize(maxFileSize)})`}
              </p>
            </div>
          )}
        </div>

        {helperText && !invalid && (
          <p id={`${generatedId}-helper`} className={fileUploadStyles.helperText}>
            {helperText}
          </p>
        )}

        {showFileList && files.length > 0 && (
          <div className={fileUploadStyles.fileList}>
            {files.map((file) => (
              <FileUploadItem
                key={getFileKey(file)}
                file={file}
                onRemove={() => removeFile(files.indexOf(file))}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';
