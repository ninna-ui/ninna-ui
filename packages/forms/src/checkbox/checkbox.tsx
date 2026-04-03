import { forwardRef, useId, createContext, useContext, useState, useCallback } from 'react';
import { cn } from '@ninna-ui/utils';
import type { Color } from '@ninna-ui/core';
import type { CheckboxSize } from '../types';
import { checkboxStyles, checkboxGroupStyles, checkboxBoxVariants, checkboxIndicatorClasses, CHECKBOX_ICON_SIZES } from './checkbox.styles';
import type { CheckboxProps, CheckboxGroupProps, CheckboxGroupItemProps, CheckboxVariant } from './checkbox.types';

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MinusIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
    <path d="M5 12h14" strokeLinecap="round" />
  </svg>
);

// CheckboxGroup Context
interface CheckboxGroupContextValue {
  value: string[];
  onChange: (itemValue: string, checked: boolean) => void;
  disabled?: boolean;
  size?: CheckboxSize;
  color?: Color;
  variant?: CheckboxVariant;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);

/**
 * Checkbox component for boolean selection
 * 
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" />
 * <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />
 * <Checkbox size="lg" color="success" variant="solid" />
 * <Checkbox labelPosition="start" />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'md',
      color = 'primary',
      variant = 'outline',
      checked,
      defaultChecked,
      onCheckedChange,
      disabled,
      required,
      invalid,
      indeterminate,
      name,
      value,
      label,
      description,
      labelPosition = 'end',
      icon,
      indeterminateIcon,
      className,
      id: idProp,
    },
    ref
  ) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;
    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = e.target.checked;
        if (!isControlled) {
          setInternalChecked(newChecked);
        }
        onCheckedChange?.(newChecked);
      },
      [isControlled, onCheckedChange]
    );


    const checkboxElement = (
      <label data-slot="checkbox" className={cn('relative inline-flex', className)}>
        <input
          data-slot="control"
          ref={ref}
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          className={checkboxStyles.input}
          aria-invalid={invalid || undefined}
          aria-checked={indeterminate ? 'mixed' : isChecked}
          aria-describedby={description ? `${id}-description` : undefined}
        />
        <span
          data-slot="indicator"
          className={cn(
            checkboxBoxVariants({ color, size }),
            checkboxIndicatorClasses(variant, indeterminate || isChecked, !!invalid)
          )}
        >
          {indeterminate ? (
            indeterminateIcon || <MinusIcon className={cn(CHECKBOX_ICON_SIZES[size], 'text-white')} />
          ) : (
            icon || <CheckIcon
              className={cn(
                CHECKBOX_ICON_SIZES[size],
                'text-white transition-opacity',
                isChecked ? 'opacity-100' : 'opacity-0'
              )}
            />
          )}
        </span>
      </label>
    );

    if (!label && !description) {
      return checkboxElement;
    }

    return (
      <div className={cn(
        checkboxStyles.wrapper,
        labelPosition === 'start' && checkboxStyles.wrapperReverse
      )}>
        {checkboxElement}
        <div className={checkboxStyles.labelWrapper}>
          {label && (
            <label
              htmlFor={id}
              className={cn(
                checkboxStyles.label,
                disabled && checkboxStyles.labelDisabled
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <span id={`${id}-description`} className={checkboxStyles.description}>{description}</span>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

/**
 * CheckboxGroup component for managing multiple checkboxes
 * 
 * @example
 * ```tsx
 * <CheckboxGroup value={selectedValues} onValueChange={setSelectedValues}>
 *   <CheckboxGroupItem value="option1" label="Option 1" />
 *   <CheckboxGroupItem value="option2" label="Option 2" />
 * </CheckboxGroup>
 * ```
 */
export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      value: controlledValue,
      defaultValue = [],
      onValueChange,
      disabled,
      size = 'md',
      color = 'primary',
      variant = 'outline',
      orientation = 'vertical',
      gap = 'md',
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
    const value = controlledValue ?? internalValue;

    const handleChange = useCallback(
      (itemValue: string, checked: boolean) => {
        const newValue = checked
          ? [...value, itemValue]
          : value.filter((v) => v !== itemValue);
        
        if (controlledValue === undefined) {
          setInternalValue(newValue);
        }
        onValueChange?.(newValue);
      },
      [value, controlledValue, onValueChange]
    );

    return (
      <CheckboxGroupContext.Provider value={{ value, onChange: handleChange, disabled, size, color, variant }}>
        <div
          ref={ref}
          data-slot="checkbox-group"
          role="group"
          className={cn(
            checkboxGroupStyles.root,
            orientation === 'vertical' ? checkboxGroupStyles.vertical : checkboxGroupStyles.horizontal,
            checkboxGroupStyles.gap[gap],
            className
          )}
          {...props}
        >
          {children}
        </div>
      </CheckboxGroupContext.Provider>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

/**
 * CheckboxGroupItem component for use within CheckboxGroup
 */
export const CheckboxGroupItem = forwardRef<HTMLInputElement, CheckboxGroupItemProps>(
  (
    {
      value,
      disabled: disabledProp,
      size: sizeProp,
      color: colorProp,
      variant: variantProp,
      ...props
    },
    ref
  ) => {
    const context = useContext(CheckboxGroupContext);
    
    if (!context) {
      throw new Error('CheckboxGroupItem must be used within a CheckboxGroup');
    }

    const { value: groupValue, onChange, disabled: groupDisabled, size, color, variant } = context;
    const isChecked = groupValue.includes(value);

    return (
      <Checkbox
        ref={ref}
        checked={isChecked}
        onCheckedChange={(checked) => onChange(value, checked)}
        disabled={disabledProp ?? groupDisabled}
        size={sizeProp ?? size}
        color={colorProp ?? color}
        variant={variantProp ?? variant}
        value={value}
        {...props}
      />
    );
  }
);

CheckboxGroupItem.displayName = 'CheckboxGroupItem';
