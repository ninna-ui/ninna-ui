import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import type { CircularProgressProps } from "./circular-progress.types";
import {
  circularProgressStyles,
  getSizeConfig,
  getColorClass,
  getLabelSizeClass,
} from "./circular-progress.styles";
import type { Size } from "@ninna-ui/core";

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
      <div className={cn(circularProgressStyles.label.center)}>
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
        circularProgressStyles.label.base,
        circularProgressStyles.label.center,
        getLabelSizeClass(size)
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
        circularProgressStyles.label.base,
        circularProgressStyles.label.bottom,
        getLabelSizeClass(size)
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
    const sizeConfig = getSizeConfig(size);
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
          circularProgressStyles.container,
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
              circularProgressStyles.svg,
              indeterminate && circularProgressStyles.indeterminate
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
              className={cn(circularProgressStyles.track, trackClassName)}
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
                circularProgressStyles.indicator,
                getColorClass(color),
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
