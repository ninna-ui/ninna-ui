import { forwardRef, useState, useCallback, useId } from 'react';
import { cn } from '@ninna-ui/utils';
import { useFormControlProps } from '../form-control';
import { inputStyles, inputVariants } from './input.styles';
import type { InputProps } from './input.types';

const ClearIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
);

/**
 * Input component for text entry
 * 
 * @example
 * ```tsx
 * <Input placeholder="Enter your email" />
 * <Input size="lg" variant="filled" />
 * <Input clearable onClear={() => setValue('')} />
 * <Input floatingLabel="Email" />
 * <Input maxLength={100} showCounter />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'outline',
      color = 'primary',
      invalid,
      fullWidth = true,
      clearable = false,
      onClear,
      maxLength,
      showCounter = false,
      floatingLabel,
      className,
      value,
      defaultValue,
      onChange,
      id: idProp,
      placeholder,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = idProp || generatedId;
    const formControlProps = useFormControlProps(props);
    const isInvalid = invalid ?? formControlProps['aria-invalid'];

    const [internalValue, setInternalValue] = useState<string>(
      (defaultValue as string) ?? ''
    );
    const currentValue = value !== undefined ? String(value) : internalValue;
    const charCount = currentValue.length;
    const isOverLimit = maxLength !== undefined && charCount > maxLength;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (value === undefined) {
          setInternalValue(e.target.value);
        }
        onChange?.(e);
      },
      [value, onChange]
    );

    const handleClear = useCallback(() => {
      if (value === undefined) {
        setInternalValue('');
      }
      onClear?.();
    }, [value, onClear]);

    const showClearButton = clearable && currentValue.length > 0 && !props.disabled && !props.readOnly;

    // NOTE: `formControlProps` already contains the original `props` merged
    // with FormControl context overrides (disabled, required, aria-*, id…).
    // Spread it FIRST, then layer our computed attributes so that:
    //  - context-provided fields win over the user's raw props (the whole
    //    point of `<FormControl>`),
    //  - our wrapped `onChange`, computed className, and size/variant-based
    //    attributes still take precedence where we actually need control.
    //  - `id` falls back to the locally computed `inputId` only when neither
    //    the context nor the caller provided one.
    const resolvedId = formControlProps.id ?? inputId;

    const inputElement = (
      <input
        {...formControlProps}
        ref={ref}
        data-slot="input"
        id={resolvedId}
        value={value}
        defaultValue={value === undefined ? defaultValue : undefined}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder={floatingLabel ? ' ' : placeholder}
        data-invalid={isInvalid || undefined}
        data-disabled={formControlProps.disabled || undefined}
        className={cn(
          variant === 'unstyled' && inputStyles.unstyled,
          variant !== 'unstyled' && inputVariants({ inputVariant: variant as 'outline' | 'filled' | 'flushed', color, size, invalid: !!isInvalid }),
          showClearButton && inputStyles.withClearButton,
          floatingLabel && inputStyles.floatingInput,
          className
        )}
        aria-invalid={isInvalid || undefined}
      />
    );

    const needsWrapper = clearable || showCounter || floatingLabel;

    if (!needsWrapper) {
      return inputElement;
    }

    return (
      <div className={cn(inputStyles.wrapper, !fullWidth && inputStyles.wrapperInline)}>
        <div className={floatingLabel ? inputStyles.floatingWrapper : 'relative'}>
          {inputElement}
          
          {floatingLabel && (
            <label
              htmlFor={resolvedId}
              className={cn(
                inputStyles.floatingLabel,
                inputStyles.floatingLabelSizes[size]
              )}
            >
              {floatingLabel}
            </label>
          )}

          {showClearButton && (
            <button
              type="button"
              onClick={handleClear}
              className={cn(inputStyles.clearButton)}
              aria-label="Clear input"
              tabIndex={-1}
            >
              <ClearIcon />
            </button>
          )}
        </div>

        {showCounter && maxLength !== undefined && (
          <div className={cn(inputStyles.counter, isOverLimit && inputStyles.counterError)}>
            {charCount}/{maxLength}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
