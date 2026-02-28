import { forwardRef, useId } from 'react';
import { cn } from '@ninna-ui/utils';
import { SliderEngine } from '@ninna-ui/react-internal';
import { SLIDER_SIZES, SLIDER_COLORS, sliderStyles } from './slider.styles';
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
      className,
      formatValue, // Add this prop
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const isHorizontal = orientation === 'horizontal';
    const colorStyles = SLIDER_COLORS[color];
    const sizeStyles = SLIDER_SIZES[size];

    const currentValue = value ?? defaultValue;

    // Calculate mark positions
    const getMarkPositions = (): number[] => {
      if (!marks) return [];
      if (marks === true) {
        // Auto-generate marks at step intervals
        const positions: number[] = [];
        for (let i = min; i <= max; i += step) {
          positions.push(i);
        }
        return positions;
      }
      // marks is an array of SliderMark objects
      return marks.map(m => m.value);
    };

    const markPositions = getMarkPositions();

    const sliderElement = (
      <div className={cn(sliderStyles.sliderRow, !isHorizontal && 'flex-col h-full')}>
        <SliderEngine.Root
          ref={ref}
          data-slot="slider"
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          onValueCommit={onValueCommit}
          min={min}
          max={max}
          step={step}
          minStepsBetweenThumbs={minStepsBetweenThumbs}
          disabled={disabled}
          orientation={orientation}
          inverted={inverted}
          name={name}
          data-disabled={disabled || undefined}
          data-orientation={orientation}
          className={cn(
            sliderStyles.root,
            isHorizontal ? sliderStyles.rootHorizontal : sliderStyles.rootVertical,
            sizeStyles.root,
            disabled && 'opacity-50 cursor-not-allowed',
            className
          )}
          aria-labelledby={label ? generatedId : undefined}
          aria-disabled={disabled || undefined}
          {...(props as Omit<SliderProps, 'formatValue'>)}
        >
          <SliderEngine.Track
            data-slot="track"
            className={cn(
              sliderStyles.track,
              isHorizontal ? sliderStyles.trackHorizontal : sliderStyles.trackVertical,
              sizeStyles.track
            )}
          >
            <SliderEngine.Range
              data-slot="range"
              className={cn(
                sliderStyles.range,
                isHorizontal ? sliderStyles.rangeHorizontal : sliderStyles.rangeVertical,
                colorStyles.range
              )}
            />
            {/* Render marks */}
            {markPositions.length > 0 && (
              <div className={sliderStyles.marksContainer}>
                {markPositions.map((markValue) => {
                  const percent = ((markValue - min) / (max - min)) * 100;
                  const style = isHorizontal
                    ? { left: `${percent}%` }
                    : { bottom: `${percent}%` };
                  return (
                    <span
                      key={markValue}
                      className={cn(
                        sliderStyles.mark,
                        isHorizontal ? sliderStyles.markHorizontal : sliderStyles.markVertical
                      )}
                      style={style}
                    />
                  );
                })}
              </div>
            )}
          </SliderEngine.Track>
          {currentValue.map((value) => (
            <SliderEngine.Thumb
              key={`slider-thumb-value-${value}`}
              data-slot="thumb"
              className={cn(
                sliderStyles.thumb,
                sizeStyles.thumb,
                colorStyles.thumb
              )}
            />
          ))}
        </SliderEngine.Root>
        {showValue && (
          <span className={sliderStyles.valueLabel}>
            {currentValue.length === 1 
              ? formatValue && currentValue[0] !== undefined ? formatValue(currentValue[0]) : currentValue[0]
              : `${formatValue && currentValue[0] !== undefined ? formatValue(currentValue[0]) : currentValue[0]} - ${formatValue && currentValue[1] !== undefined ? formatValue(currentValue[1]) : currentValue[1]}`
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
