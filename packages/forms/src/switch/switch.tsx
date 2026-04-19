import { forwardRef, useId } from 'react';
import { cn } from '@ninna-ui/utils';
import { SwitchEngine } from '@ninna-ui/react-internal';
import { switchStyles, switchRootVariants, switchThumbVariants } from './switch.styles';
import type { SwitchProps } from './switch.types';

const LoadingSpinner = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
);

/**
 * Switch component for toggling boolean values
 * 
 * @example
 * ```tsx
 * <Switch label="Enable notifications" />
 * <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
 * <Switch size="lg" color="success" variant="outline" />
 * <Switch loading />
 * <Switch trackLabels={{ on: 'ON', off: 'OFF' }} />
 * ```
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      size = 'md',
      color = 'primary',
      variant = 'solid',
      checked,
      defaultChecked,
      onCheckedChange,
      disabled,
      required,
      invalid,
      loading,
      name,
      value,
      label,
      description,
      labelPosition = 'end',
      trackLabels,
      thumbIcon,
      className,
      id: idProp,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;

    const isDisabled = disabled || loading;

    const switchElement = (
      <SwitchEngine.Root
        ref={ref}
        data-slot="switch"
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={isDisabled}
        required={required}
        name={name}
        value={value}
        data-invalid={invalid || undefined}
        data-loading={loading || undefined}
        className={cn(
          switchRootVariants({ variant: variant as 'solid' | 'outline', color, size, invalid: !!invalid }),
          className
        )}
        {...props}
      >
        {trackLabels && (
          <>
            <span className={cn(switchStyles.trackLabel, switchStyles.trackLabelOn)}>
              {trackLabels.on}
            </span>
            <span className={cn(switchStyles.trackLabel, switchStyles.trackLabelOff)}>
              {trackLabels.off}
            </span>
          </>
        )}
        <SwitchEngine.Thumb
          data-slot="thumb"
          className={cn(
            switchThumbVariants({ variant: variant as 'solid' | 'soft' | 'outline', color, size })
          )}
        >
          {loading ? (
            <LoadingSpinner className={switchStyles.spinner} />
          ) : thumbIcon}
        </SwitchEngine.Thumb>
      </SwitchEngine.Root>
    );

    if (!label && !description) {
      return switchElement;
    }

    return (
      <div className={cn(
        // See switch.styles.ts for the rationale: centre-align by default
        // so the switch shares a line with its label; switch to
        // top-alignment only when a description is stacked below.
        description ? switchStyles.wrapperWithDescription : switchStyles.wrapper,
        labelPosition === 'start' && switchStyles.wrapperReverse
      )}>
        {switchElement}
        <div className={switchStyles.labelWrapper}>
          {label && (
            <label
              htmlFor={id}
              className={cn(
                switchStyles.label,
                switchStyles.labelSizes[size],
                isDisabled && switchStyles.labelDisabled
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <span className={switchStyles.description}>{description}</span>
          )}
        </div>
      </div>
    );
  }
);

Switch.displayName = 'Switch';
