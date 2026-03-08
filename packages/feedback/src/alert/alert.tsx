import React, { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import type { AlertProps } from "./alert.types";
import { alertVariants, alertStyles, ALERT_ICON_SIZES } from "./alert.styles";
import type { Color } from "@ninna-ui/core";

/**
 * Default icons for each color
 */
const DefaultIcons: Record<Color, React.JSX.Element> = {
  primary: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
    </svg>
  ),
  secondary: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
    </svg>
  ),
  accent: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
    </svg>
  ),
  neutral: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
    </svg>
  ),
  success: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
  ),
  danger: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
    </svg>
  ),
  warning: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  ),
  info: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
    </svg>
  ),
};

/**
 * Close/Dismiss icon
 */
const CloseIcon = (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
);

// Extracted components for better reconciliation
const AlertIcon = ({ icon, showIcon, color, size }: { 
  icon?: React.ReactNode; 
  showIcon?: boolean; 
  color: Color; 
  size: string; 
}) => {
  if (!showIcon && !icon) return null;
  
  const iconElement = icon || DefaultIcons[color];
  
  return (
    <div data-slot="icon" className={cn(alertStyles.iconContainer, ALERT_ICON_SIZES[size])}>  
      {iconElement}
    </div>
  );
};

const AlertContent = ({ title, description, children, action }: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
}) => {
  const hasContent = title || description || children;
  if (!hasContent) return null;

  return (
    <div data-slot="content" className={alertStyles.contentContainer}>
      {title && (
        <div data-slot="title" className={alertStyles.title}>
          {title}
        </div>
      )}
      {(description || children) && (
        <div data-slot="description" className={cn(alertStyles.description, !title && "mt-0")}>
          {description || children}
        </div>
      )}
      {action && (
        <div className={alertStyles.actionContainer}>
          {action}
        </div>
      )}
    </div>
  );
};

const AlertDismissButton = ({ onDismiss }: { onDismiss?: () => void }) => {
  return (
    <button
      data-slot="close"
      type="button"
      className={alertStyles.dismissButton}
      onClick={onDismiss}
      aria-label="Dismiss alert"
    >
      {CloseIcon}
    </button>
  );
};

/**
 * Alert component for displaying important messages
 * 
 * @example
 * ```tsx
 * <Alert color="success" title="Success!" description="Your changes have been saved." />
 * <Alert color="danger" title="Error" dismissible onDismiss={() => {}}>
 *   Something went wrong. Please try again.
 * </Alert>
 * <Alert color="warning" title="Warning" action={<Button size="sm">Retry</Button>}>
 *   Your session is about to expire.
 * </Alert>
 * ```
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = "soft",
      color = "neutral",
      size = "md",
      title,
      description,
      icon,
      showIcon = true,
      dismissible = false,
      onDismiss,
      action,
      className,
      children,
      role = "alert",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-slot="alert"
        role={role}
        aria-live={role === "alert" ? "assertive" : "polite"}
        className={cn(
          alertVariants({ variant, color, size }),
          className
        )}
        {...props}
      >
        <AlertIcon 
          icon={icon} 
          showIcon={showIcon} 
          color={color} 
          size={size} 
        />
        <AlertContent 
          title={title}
          description={description}
          action={action}
        >
          {children}
        </AlertContent>
        {dismissible && <AlertDismissButton onDismiss={onDismiss} />}
      </div>
    );
  }
);

Alert.displayName = "Alert";
