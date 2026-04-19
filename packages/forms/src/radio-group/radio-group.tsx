import { forwardRef, createContext, useContext, useId } from 'react';
import { cn } from '@ninna-ui/utils';
import { useFormControlProps } from '../form-control';
import { RadioEngine } from '@ninna-ui/react-internal';
import { radioItemVariants, radioIndicatorVariants, radioGroupStyles, radioCardStyles } from './radio-group.styles';
import type { Color } from '@ninna-ui/core';
import type { RadioSize } from '../types';
import type { RadioGroupProps, RadioGroupItemProps, RadioCardProps, RadioVariant } from './radio-group.types';

interface RadioGroupContextValue {
  size: RadioSize;
  color: Color;
  variant: RadioVariant;
  disabled?: boolean;
  invalid?: boolean;
  value?: string;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

/**
 * RadioGroup component for single selection from multiple options
 * 
 * @example
 * ```tsx
 * <RadioGroup value={value} onValueChange={setValue}>
 *   <RadioGroupItem value="option1" label="Option 1" />
 *   <RadioGroupItem value="option2" label="Option 2" />
 * </RadioGroup>
 * ```
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      size = 'md',
      color = 'primary',
      variant = 'outline',
      value,
      defaultValue,
      onValueChange,
      disabled,
      required,
      invalid,
      name,
      orientation = 'vertical',
      loop = true,
      gap = 'md',
      className,
      children,
    },
    ref
  ) => {
    return (
      <RadioGroupContext.Provider value={{ size, color, variant, disabled, invalid, value }}>
        <RadioEngine.Root
          ref={ref}
          data-slot="radio-group"
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={disabled}
          required={required}
          name={name}
          orientation={orientation}
          loop={loop}
          data-invalid={invalid || undefined}
          data-disabled={disabled || undefined}
          className={cn(
            radioGroupStyles.root,
            orientation === 'horizontal' ? radioGroupStyles.horizontal : radioGroupStyles.vertical,
            radioGroupStyles.gap[gap],
            className
          )}
        >
          {children}
        </RadioEngine.Root>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

/**
 * RadioGroupItem component for individual radio options
 */
export const RadioGroupItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  (
    {
      value,
      disabled: disabledProp,
      label,
      description,
      labelPosition = 'end',
      className,
      id: idProp,
      ...props
    },
    ref
  ) => {
    const context = useContext(RadioGroupContext);
    const size = context?.size ?? 'md';
    const color = context?.color ?? 'primary';
    const variant = context?.variant ?? 'outline';
    const generatedId = useId();
    const formControlProps = useFormControlProps({
      id: idProp,
      disabled: disabledProp,
      invalid: context?.invalid,
    });

    const id = formControlProps.id ?? generatedId;
    const isDisabled = disabledProp || formControlProps.disabled;
    const isInvalid = context?.invalid || !!formControlProps['aria-invalid'];
    
    const radioElement = (
      <RadioEngine.Item
        ref={ref}
        data-slot="radio"
        id={id}
        value={value}
        disabled={isDisabled}
        aria-invalid={isInvalid || undefined}
        data-invalid={isInvalid || undefined}
        className={cn(
          radioItemVariants({ variant, color, size, invalid: isInvalid }),
          className
        )}
        aria-describedby={description ? `${id}-description` : formControlProps['aria-describedby']}
        {...props}
      >
        <RadioEngine.Indicator 
          className={cn(radioIndicatorVariants({ variant, color, size }))}
        />
      </RadioEngine.Item>
    );

    if (!label && !description) {
      return radioElement;
    }

    return (
      <div className={cn(
        description ? radioGroupStyles.itemWrapperWithDescription : radioGroupStyles.itemWrapper,
        labelPosition === 'start' && radioGroupStyles.itemWrapperReverse
      )}>
        {radioElement}
        <div className={radioGroupStyles.labelWrapper}>
          {label && (
            <label
              htmlFor={id}
              className={cn(
                radioGroupStyles.label,
                radioGroupStyles.labelSizes[size],
                isDisabled && radioGroupStyles.labelDisabled
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <span id={`${id}-description`} className={radioGroupStyles.description}>{description}</span>
          )}
        </div>
      </div>
    );
  }
);

RadioGroupItem.displayName = 'RadioGroupItem';

/**
 * RadioCard component for card-style radio buttons
 * 
 * @example
 * ```tsx
 * <RadioGroup value={value} onValueChange={setValue}>
 *   <RadioCard value="option1" title="Option 1" description="Description" />
 *   <RadioCard value="option2" title="Option 2" icon={<Icon />} />
 * </RadioGroup>
 * ```
 */
export const RadioCard = forwardRef<HTMLButtonElement, RadioCardProps>(
  (
    {
      value,
      disabled: disabledProp,
      title,
      description,
      icon,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      className,
    },
    ref
  ) => {
    const context = useContext(RadioGroupContext);
    const disabled = disabledProp ?? context?.disabled;
    const invalid = context?.invalid;

    return (
      <RadioEngine.Item
        ref={ref}
        data-slot="radio-card"
        value={value}
        disabled={disabled}
        data-invalid={invalid || undefined}
        className={cn(
          'group',
          radioCardStyles.card,
          'border-base-200 bg-base-100',
          'data-[state=checked]:border-primary data-[state=checked]:bg-primary/5',
          invalid && radioCardStyles.cardInvalid,
          className
        )}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
      >
        <div className={cn(
          radioCardStyles.indicator,
          "transition-colors group-data-[state=checked]:border-primary group-data-[state=checked]:bg-primary"
        )}>
          <RadioEngine.Indicator className={cn(radioCardStyles.indicatorDot, "block")} />
        </div>
        
        {icon && (
          <div className="w-8 h-8 text-base-content/80 mb-2">
            {icon}
          </div>
        )}
        
        {title && <div className={radioCardStyles.title}>{title}</div>}
        {description && <div className={radioCardStyles.description}>{description}</div>}
      </RadioEngine.Item>
    );
  }
);

RadioCard.displayName = 'RadioCard';
