import { forwardRef, useId, useState, useEffect } from 'react';
import { cn } from '@ninna-ui/utils';
import { SliderEngine } from '@ninna-ui/react-internal';
import { 
  sliderRootVariants, 
  sliderTrackVariants, 
  sliderRangeVariants, 
  sliderThumbVariants, 
  sliderStyles 
} from './slider.styles';
import type { SliderProps } from './slider.types';

/**
 * Slider component for selecting numeric values
 * 
 * @example
 * ```tsx
 * <Slider defaultValue={[50]} max={100} />
 * <Slider value={[25, 75]} onValueChange={setValue} />
 * <Slider size="lg" color="success" />
 * ```
 */
export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      size = 'md',
      color = 'primary',
      variant = 'solid',
      value,
      defaultValue = [50],
      onValueChange,
      onValueCommit,
      min = 0,
      max = 100,
      step = 1,
      minStepsBetweenThumbs,
      disabled,
      orientation = 'horizontal',
      inverted,
      name,
      showValue,
      label,
      marks,
      formatValue,
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const isHorizontal = orientation === 'horizontal';
    
    // Internal state to track current values for showValue, especially when uncontrolled
    const [internalValue, setInternalValue] = useState<number[]>(value ?? defaultValue);

    // Sync with external value if controlled
    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const handleValueChange = (newValue: number[]) => {
      setInternalValue(newValue);
      onValueChange?.(newValue);
    };
    
    const safeValue = internalValue;
    
    const getMarkPositions = (): number[] => {
      if (!marks) return [];
      if (marks === true) {
        const positions: number[] = [];
        for (let i = min; i <= max; i += step) {
          positions.push(i);
        }
        return positions;
      }
      return marks.map(m => m.value);
    };

    const markPositions = getMarkPositions();

    const sliderElement = (
      <div 
        className={cn(sliderStyles.sliderRow, !isHorizontal && 'flex-col h-full min-h-[150px]')}
      >
        <SliderEngine.Root
          ref={ref}
          data-slot="slider"
          value={value}
          defaultValue={defaultValue}
          onValueChange={handleValueChange}
          onValueCommit={onValueCommit}
          min={min}
          max={max}
          step={step}
          minStepsBetweenThumbs={minStepsBetweenThumbs}
          disabled={disabled}
          orientation={orientation}
          inverted={inverted}
          name={name}
          aria-labelledby={label ? generatedId : undefined}
          className={cn(
            sliderRootVariants({ orientation, size, disabled: !!disabled }),
            className
          )}
          {...props}
        >
          <SliderEngine.Track
            data-slot="track"
            className={sliderTrackVariants({ orientation, size })}
          >
            <SliderEngine.Range
              data-slot="range"
              className={sliderRangeVariants({ variant, color, orientation })}
            />
            
            {markPositions.length > 0 && (
              <div className={sliderStyles.marksContainer}>
                {markPositions.map((markValue) => {
                  const percent = ((markValue - min) / (max - min)) * 100;
                  const isActive = safeValue.some(v => v >= markValue);
                  const style = isHorizontal
                    ? { left: `${percent}%`, top: '50%' }
                    : { bottom: `${percent}%`, left: '50%' };
                  
                  return (
                    <span
                      key={`mark-${markValue}-${percent}`}
                      className={cn(
                        sliderStyles.mark,
                        isActive && sliderStyles.markActive
                      )}
                      style={style}
                    />
                  );
                })}
              </div>
            )}
          </SliderEngine.Track>

          {safeValue.map((_, index) => (
            <SliderEngine.Thumb
              key={`slider-thumb-${index}`}
              data-slot="thumb"
              className={sliderThumbVariants({ variant, color, size, orientation })}
              aria-labelledby={label ? generatedId : undefined}
            />
          ))}
        </SliderEngine.Root>

        {showValue && (
          <span className={sliderStyles.valueLabel} data-slot="value">
            {safeValue.length === 1 
              ? formatValue ? formatValue(safeValue[0] ?? min) : (safeValue[0] ?? min)
              : `${formatValue ? formatValue(safeValue[0] ?? min) : (safeValue[0] ?? min)} - ${formatValue ? formatValue(safeValue[1] ?? max) : (safeValue[1] ?? max)}`
            }
          </span>
        )}
      </div>
    );

    if (!label) {
      return sliderElement;
    }

    return (
      <div className={sliderStyles.wrapper}>
        <label id={generatedId} className={sliderStyles.label}>
          {label}
        </label>
        {sliderElement}
      </div>
    );
  }
);

Slider.displayName = 'Slider';
