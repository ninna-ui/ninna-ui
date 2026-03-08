import { forwardRef, useState, useCallback, useEffect, useRef, useId } from 'react';
import { cn } from '@ninna-ui/utils';
import { inputVariants } from "../input/input.styles";
import { useFormControlProps } from '../form-control';
import { textareaStyles, textareaVariants } from './textarea.styles';
import type { TextareaProps } from './textarea.types';

/**
 * Textarea component for multi-line text entry
 * 
 * @example
 * ```tsx
 * <Textarea placeholder="Enter your message" rows={4} />
 * <Textarea size="lg" variant="filled" resize="none" />
 * <Textarea autoResize minRows={3} maxRows={10} />
 * <Textarea maxLength={500} showCounter />
 * ```
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size = 'md',
      variant = 'outline',
      color = 'primary',
      invalid,
      resize = 'vertical',
      fullWidth: _fullWidth = true,
      autoResize = false,
      minRows = 3,
      maxRows,
      showCounter = false,
      maxLength,
      className,
      rows,
      value,
      defaultValue,
      onChange,
      id: idProp,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = idProp || generatedId;
    const formControlProps = useFormControlProps(props);
    const isInvalid = invalid ?? formControlProps['aria-invalid'];
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const textareaRef = (ref as React.RefObject<HTMLTextAreaElement>) || internalRef;

    const [internalValue, setInternalValue] = useState<string>(
      (defaultValue as string) ?? ''
    );
    const currentValue = value !== undefined ? String(value) : internalValue;
    const charCount = currentValue.length;
    const isOverLimit = maxLength !== undefined && charCount > maxLength;

    // Auto-resize logic
    const adjustHeight = useCallback(() => {
      const textarea = textareaRef.current;
      if (!textarea || !autoResize) return;

      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = 'auto';
      
      // Calculate line height
      const computedStyle = window.getComputedStyle(textarea);
      const lineHeight = parseInt(computedStyle.lineHeight) || 20;
      const paddingTop = parseInt(computedStyle.paddingTop) || 0;
      const paddingBottom = parseInt(computedStyle.paddingBottom) || 0;
      const borderTop = parseInt(computedStyle.borderTopWidth) || 0;
      const borderBottom = parseInt(computedStyle.borderBottomWidth) || 0;
      
      const minHeight = lineHeight * minRows + paddingTop + paddingBottom + borderTop + borderBottom;
      const maxHeight = maxRows 
        ? lineHeight * maxRows + paddingTop + paddingBottom + borderTop + borderBottom
        : Infinity;
      
      const newHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight);
      textarea.style.height = `${newHeight}px`;
    }, [autoResize, minRows, maxRows, textareaRef]);

    useEffect(() => {
      adjustHeight();
    }, [currentValue, adjustHeight]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (value === undefined) {
          setInternalValue(e.target.value);
        }
        onChange?.(e);
        if (autoResize) {
          adjustHeight();
        }
      },
      [value, onChange, autoResize, adjustHeight]
    );

    const textareaElement = (
      <textarea
        ref={textareaRef}
        data-slot="textarea"
        id={textareaId}
        rows={autoResize ? minRows : (rows ?? 3)}
        value={value}
        defaultValue={value === undefined ? defaultValue : undefined}
        onChange={handleChange}
        maxLength={maxLength}
        data-invalid={isInvalid || undefined}
        data-disabled={props.disabled || undefined}
        className={cn(
          variant === 'unstyled' && textareaStyles.unstyled,
          variant !== 'unstyled' && textareaVariants({ size, resize: autoResize ? 'none' : resize }),
          variant !== 'unstyled' && inputVariants({ inputVariant: variant as 'outline' | 'filled' | 'flushed', color, size, invalid: !!isInvalid }),
          autoResize && textareaStyles.autoResize,
          className
        )}
        aria-invalid={isInvalid || undefined}
        {...formControlProps}
        {...props}
      />
    );

    if (!showCounter) {
      return textareaElement;
    }

    return (
      <div className={textareaStyles.wrapper}>
        {textareaElement}
        {showCounter && maxLength !== undefined && (
          <div className={cn(textareaStyles.counter, isOverLimit && textareaStyles.counterError)}>
            {charCount}/{maxLength}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
