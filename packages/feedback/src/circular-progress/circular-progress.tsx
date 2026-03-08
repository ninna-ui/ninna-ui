import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import type { Size } from "@ninna-ui/core";
import type { CircularProgressProps } from "./circular-progress.types";
import {
  circularProgressLabelStyles,
  CIRCULAR_PROGRESS_SIZES,
  CIRCULAR_PROGRESS_STROKE_COLORS,
  CIRCULAR_PROGRESS_LABEL_SIZES,
  CIRCULAR_PROGRESS_SVG_CLASS,
  CIRCULAR_PROGRESS_TRACK_CLASS,
  CIRCULAR_PROGRESS_INDICATOR_CLASS,
  CIRCULAR_PROGRESS_INDETERMINATE_CLASS,
} from "./circular-progress.styles";

// Extracted components for better reconciliation
const CircularProgressCenterContent = ({ children, showValue, labelPosition, formattedLabel, size }: {
  children?: React.ReactNode;
  showValue?: boolean;
  labelPosition?: string;
  formattedLabel: React.ReactNode;
  size: Size;
}) => {
  if (children) {
    return (
      <div className={cn(circularProgressLabelStyles.center)}>
        {children}
      </div>
    );
  }

  if (!showValue || labelPosition !== "center") {
    return null;
  }

  return (
    <span
      className={cn(
        circularProgressLabelStyles.base,
        circularProgressLabelStyles.center,
        CIRCULAR_PROGRESS_LABEL_SIZES[size]
      )}
    >
      {formattedLabel}
    </span>
  );
};

const CircularProgressBottomLabel = ({ showValue, labelPosition, formattedLabel, size }: {
  showValue?: boolean;
  labelPosition?: string;
  formattedLabel: React.ReactNode;
  size: Size;
}) => {
  if (!showValue || labelPosition !== "bottom") {
    return null;
  }

  return (
    <span
      className={cn(
        circularProgressLabelStyles.base,
        circularProgressLabelStyles.bottom,
        CIRCULAR_PROGRESS_LABEL_SIZES[size]
      )}
    >
      {formattedLabel}
    </span>
  );
};

/**
 * Default label formatter
 */
const defaultFormatLabel = (value: number, max: number): string => {
  const percentage = Math.round((value / max) * 100);
  return `${percentage}%`;
};

/**
 * CircularProgress component for displaying circular progress indicators
 * 
 * @example
 * ```tsx
 * <CircularProgress value={50} />
 * <CircularProgress value={75} color="success" showValue />
 * <CircularProgress indeterminate color="primary" />
 * ```
 */
export const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(
  (
    {
      value = 0,
      max = 100,
      size = "md",
      color = "primary",
      strokeWidth: customStrokeWidth,
      showValue = false,
      labelPosition = "center",
      formatLabel = defaultFormatLabel,
      indeterminate = false,
      label,
      className,
      trackClassName,
      indicatorClassName,
      children,
      ...props
    },
    ref
  ) => {
    const sizeConfig = CIRCULAR_PROGRESS_SIZES[size];
    const diameter = sizeConfig.size;
    const strokeWidth = customStrokeWidth ?? sizeConfig.strokeWidth;
    const radius = (diameter - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    
    const clampedValue = Math.min(Math.max(value, 0), max);
    const percentage = (clampedValue / max) * 100;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    const formattedLabel = formatLabel(clampedValue, max);

    return (
      <div
        ref={ref}
        data-slot="circular-progress"
        className={cn(
          "relative inline-flex items-center justify-center",
          labelPosition === "bottom" && "flex-col",
          className
        )}
        {...props}
      >
        <div className="relative">
          <svg
            width={diameter}
            height={diameter}
            className={cn(
              CIRCULAR_PROGRESS_SVG_CLASS,
              indeterminate && CIRCULAR_PROGRESS_INDETERMINATE_CLASS
            )}
            role="progressbar"
            aria-valuenow={indeterminate ? undefined : clampedValue}
            aria-valuemin={0}
            aria-valuemax={max}
            aria-label={label || `Progress: ${Math.round(percentage)}%`}
            aria-busy={indeterminate}
          >
            {/* Track (background circle) */}
            <circle
              data-slot="track"
              cx={diameter / 2}
              cy={diameter / 2}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              className={cn(CIRCULAR_PROGRESS_TRACK_CLASS, trackClassName)}
            />
            {/* Indicator (progress circle) */}
            <circle
              data-slot="indicator"
              cx={diameter / 2}
              cy={diameter / 2}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={indeterminate ? circumference * 0.75 : strokeDashoffset}
              className={cn(
                CIRCULAR_PROGRESS_INDICATOR_CLASS,
                CIRCULAR_PROGRESS_STROKE_COLORS[color],
                indicatorClassName
              )}
            />
          </svg>
          <CircularProgressCenterContent 
            showValue={showValue}
            labelPosition={labelPosition}
            formattedLabel={formattedLabel}
            size={size}
          >
            {children}
          </CircularProgressCenterContent>
        </div>
        <CircularProgressBottomLabel 
          showValue={showValue}
          labelPosition={labelPosition}
          formattedLabel={formattedLabel}
          size={size}
        />
      </div>
    );
  }
);

CircularProgress.displayName = "CircularProgress";
