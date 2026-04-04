import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { SelectEngine } from '@ninna-ui/react-internal';
import { selectStyles, selectTriggerVariants } from './select.styles';
import type { SelectProps, SelectItemProps, SelectGroupProps } from './select.types';

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

/**
 * Select component for dropdown selection
 * 
 * @example
 * ```tsx
 * <Select placeholder="Select an option" value={value} onValueChange={setValue}>
 *   <SelectItem value="option1">Option 1</SelectItem>
 *   <SelectItem value="option2">Option 2</SelectItem>
 * </Select>
 * ```
 */
export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      size = 'md',
      variant = 'outline',
      color = 'primary',
      value,
      defaultValue,
      onValueChange,
      open,
      defaultOpen,
      onOpenChange,
      disabled,
      required,
      name,
      placeholder,
      invalid,
      fullWidth = true,
      clearable,
      onClear,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      className,
      children,
    },
    ref
  ) => {
    const isInvalid = invalid;
    const hasValue = value !== undefined ? value !== '' : undefined;
    const showClear = clearable && hasValue && !disabled;

    return (
      <SelectEngine.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        disabled={disabled}
        required={required}
        name={name}
      >
        <div className={cn('relative flex items-center', fullWidth ? 'w-full' : 'w-auto')}>
          <SelectEngine.Trigger
            ref={ref}
            data-slot="trigger"
            data-invalid={isInvalid || undefined}
            data-disabled={disabled || undefined}
            data-variant={variant}
            className={cn(
              selectTriggerVariants({ selectVariant: variant as 'outline' | 'filled' | 'flushed', color, size, invalid: !!isInvalid, fullWidth: !!fullWidth }),
              showClear && 'pr-8',
              className
            )}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
          >
            <SelectEngine.Value placeholder={placeholder} />
            <SelectEngine.Icon>
              <ChevronDownIcon className={selectStyles.icon} />
            </SelectEngine.Icon>
          </SelectEngine.Trigger>
          {showClear && (
            <button
              type="button"
              aria-label="Clear selection"
              tabIndex={-1}
              className="absolute right-8 h-4 w-4 flex items-center justify-center rounded-full hover:bg-base-300 text-base-content/50 hover:text-base-content transition-colors cursor-pointer z-10"
              onPointerDown={(e) => { e.preventDefault(); }}
              onClick={(e) => { e.stopPropagation(); onClear?.(); }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
        <SelectEngine.Portal>
          <SelectEngine.Content data-slot="content" className={cn(selectStyles.content)} position="popper" sideOffset={4}>
            <SelectEngine.ScrollUpButton className={selectStyles.scrollButton}>
              <ChevronDownIcon className="h-4 w-4 rotate-180" />
            </SelectEngine.ScrollUpButton>
            <SelectEngine.Viewport className={selectStyles.viewport}>
              {children}
            </SelectEngine.Viewport>
            <SelectEngine.ScrollDownButton className={selectStyles.scrollButton}>
              <ChevronDownIcon className="h-4 w-4" />
            </SelectEngine.ScrollDownButton>
          </SelectEngine.Content>
        </SelectEngine.Portal>
      </SelectEngine.Root>
    );
  }
);

Select.displayName = 'Select';

/**
 * SelectItem component for individual select options
 */
export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value, disabled, textValue, className, children, ...props }, ref) => {
    return (
      <SelectEngine.Item
        ref={ref}
        data-slot="item"
        value={value}
        disabled={disabled}
        textValue={textValue}
        className={cn(selectStyles.item, 'pl-8', className)}
        {...props}
      >
        <SelectEngine.ItemIndicator className={selectStyles.itemIndicator}>
          <CheckIcon className="h-4 w-4" />
        </SelectEngine.ItemIndicator>
        <SelectEngine.ItemText>{children}</SelectEngine.ItemText>
      </SelectEngine.Item>
    );
  }
);

SelectItem.displayName = 'SelectItem';

/**
 * SelectGroup component for grouping select options
 */
export const SelectGroup = forwardRef<HTMLDivElement, SelectGroupProps>(
  ({ label, className, children, ...props }, ref) => {
    return (
      <SelectEngine.Group ref={ref} className={cn(selectStyles.group, className)} {...props}>
        {label && <SelectEngine.Label className={selectStyles.groupLabel}>{label}</SelectEngine.Label>}
        {children}
      </SelectEngine.Group>
    );
  }
);

SelectGroup.displayName = 'SelectGroup';

/**
 * SelectSeparator component for visual separation
 */
export const SelectSeparator = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <SelectEngine.Separator ref={ref} className={cn(selectStyles.separator, className)} {...props} />
    );
  }
);

SelectSeparator.displayName = 'SelectSeparator';
