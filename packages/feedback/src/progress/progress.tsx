import { forwardRef, useEffect } from 'react';
import { cn } from '@ninna-ui/utils';
import type { ProgressProps } from './progress.types';
import {
  progressTrackVariants,
  progressIndicatorVariants,
  progressLabelStyles,
  PROGRESS_CONTAINER_CLASS,
  PROGRESS_INDETERMINATE_CLASS,
  progressAnimations,
  PROGRESS_KEYFRAMES,
} from './progress.styles';

// Extracted components for better reconciliation
const ProgressLabel = ({ children, position, className }: { children: React.ReactNode; position: 'left' | 'right' | 'top' | 'inside'; className?: string }) => (
  <span className={cn(progressLabelStyles.base, progressLabelStyles[position], className)}>
    {children}
  </span>
);

const ProgressInsideLabel = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn(progressLabelStyles.inside, "absolute inset-0 flex items-center justify-center", className)}>
    {children}
  </span>
);

/**
 * Inject keyframes into document head (only once per document)
 * This approach is preferred for component libraries because:
 * 1. Self-contained - no external CSS dependencies required
 * 2. SSR-safe - only injects on client-side
 * 3. Efficient - uses singleton pattern to inject only once
 */
let keyframesInjected = false;
function injectKeyframes() {
  if (typeof document === "undefined") return;
  if (keyframesInjected) return;
  
  const styleId = "ninna-ui-progress-keyframes";
  const existingStyle = document.getElementById(styleId);
  
  if (existingStyle) {
    keyframesInjected = true;
    return;
  }
  
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = PROGRESS_KEYFRAMES;
  document.head.appendChild(style);
  keyframesInjected = true;
}

/**
 * Default label formatter
 */
const defaultFormatLabel = (value: number, max: number): string => {
  const percentage = Math.round((value / max) * 100);
  return `${percentage}%`;
};

/**
 * Progress component for displaying progress indicators
 * 
 * @example
 * ```tsx
 * <Progress value={50} />
 * <Progress value={75} color="success" showValue labelPosition="right" />
 * <Progress indeterminate color="primary" />
 * <Progress value={30} variant="striped" />
 * ```
 */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value = 0,
      max = 100,
      size = "md",
      color = "primary",
      variant = "default",
      showValue = false,
      labelPosition = "right",
      formatLabel = defaultFormatLabel,
      indeterminate = false,
      label,
      className,
      trackClassName,
      indicatorClassName,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      if (variant === "animated" || indeterminate) {
        injectKeyframes();
      }
    }, [variant, indeterminate]);

    const clampedValue = Math.min(Math.max(value, 0), max);
    const percentage = (clampedValue / max) * 100;
    const formattedLabel = formatLabel(clampedValue, max);
    
    const getAnimationStyle = () => {
      if (indeterminate) {
        return progressAnimations.indeterminate;
      }
      if (variant === "animated") {
        return progressAnimations.stripes;
      }
      return undefined;
    };

    const animationStyle = getAnimationStyle();
    
    const progressBar = (
      <div
        data-slot="track"
        className={cn(
          progressTrackVariants({ size }),
          trackClassName
        )}
      >
        <div
          data-slot="indicator"
          className={cn(
            progressIndicatorVariants({ color, variant }),
            indeterminate && PROGRESS_INDETERMINATE_CLASS,
            (variant === 'animated' || indeterminate) && 'ninna-progress-animated',
            indicatorClassName
          )}
          style={{
            ...(indeterminate ? undefined : { width: `${percentage}%` }),
            ...animationStyle,
          }}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : clampedValue}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label || `Progress: ${Math.round(percentage)}%`}
          aria-busy={indeterminate}
        />
      </div>
    );

    if (labelPosition === "top") {
      return (
        <div ref={ref} data-slot="progress" className={cn(PROGRESS_CONTAINER_CLASS, className)} {...props}>
          <div className="flex justify-between items-center mb-1">
            {label && (
              <span className={cn(progressLabelStyles.base, progressLabelStyles.top, "mb-0")}>
                {label}
              </span>
            )}
            {showValue && (
              <span className={cn(progressLabelStyles.base, progressLabelStyles.right)}>
                {formattedLabel}
              </span>
            )}
          </div>
          {progressBar}
        </div>
      );
    }

    if (labelPosition === "left" && showValue) {
      return (
        <div ref={ref} className={cn(PROGRESS_CONTAINER_CLASS, "flex items-center gap-3", className)} {...props}>
          <ProgressLabel position="left">{formattedLabel}</ProgressLabel>
          <div className="flex-1">{progressBar}</div>
        </div>
      );
    }

    if (labelPosition === "right" && showValue) {
      return (
        <div ref={ref} className={cn(PROGRESS_CONTAINER_CLASS, "flex items-center gap-3", className)} {...props}>
          <div className="flex-1">{progressBar}</div>
          <ProgressLabel position="right">{formattedLabel}</ProgressLabel>
        </div>
      );
    }

    if (labelPosition === "inside") {
      return (
        <div ref={ref} className={cn(PROGRESS_CONTAINER_CLASS, "relative", className)} {...props}>
          {progressBar}
          <ProgressInsideLabel>{formattedLabel}</ProgressInsideLabel>
        </div>
      );
    }

    return (
      <div ref={ref} className={cn(PROGRESS_CONTAINER_CLASS, className)} {...props}>
        {progressBar}
      </div>
    );
  }
);

Progress.displayName = "Progress";
