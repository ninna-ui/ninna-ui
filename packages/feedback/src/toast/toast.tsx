import { forwardRef, useEffect, useRef, useCallback } from 'react';
import { cn } from '@ninna-ui/utils';
import { toastStyles, toastVariants, toastIconColors } from './toast.styles';
import type { ToastProps, ToastVariant, ToastType, ToastPosition } from './toast.types';

function getEnteringClass(position?: ToastPosition): string {
  if (!position) return toastStyles.entering;
  if (position === 'top-center' || position === 'bottom-center') return toastStyles.enteringCenter;
  if (position.startsWith('top-')) return toastStyles.enteringTop;
  if (position.endsWith('-left')) return toastStyles.enteringLeft;
  return toastStyles.enteringRight;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ toast: toastData, onDismiss, position, className }, ref) => {
    const {
      id,
      title,
      description,
      type = 'default' as ToastType,
      variant = 'soft' as ToastVariant,
      closable = true,
      icon,
      action,
    } = toastData;

    const toastRef = useRef<HTMLDivElement>(null);
    const isLoading = type === 'loading';

    const handleDismiss = useCallback(() => {
      if (onDismiss) {
        onDismiss(id);
      }
    }, [id, onDismiss]);

    // Handle Escape key to dismiss
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && closable) {
          handleDismiss();
        }
      };

      const element = toastRef.current;
      if (element) {
        element.addEventListener('keydown', handleKeyDown);
        return () => element.removeEventListener('keydown', handleKeyDown);
      }
      return undefined;
    }, [closable, handleDismiss]);

    // Determine ARIA role based on type
    const role = type === 'danger' ? 'alert' : 'status';
    const ariaLive = type === 'danger' ? 'assertive' : 'polite';

    return (
      <div
        ref={(node) => {
          // Handle both refs
          (toastRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        role={role}
        aria-live={ariaLive}
        aria-atomic="true"
        tabIndex={-1}
        className={cn(
          toastStyles.base,
          getEnteringClass(position),
          toastVariants[variant][type],
          className
        )}
        data-slot="toast"
        data-toast-id={id}
        data-toast-type={type}
      >
        <div className="flex items-start gap-3 flex-1">
          {icon && (
            <span className={cn(
              isLoading ? toastStyles.loadingIcon : toastStyles.icon,
              toastIconColors[type]
            )}>
              {icon}
            </span>
          )}
          
          <div data-slot="content" className={toastStyles.content}>
            {title && (
              <div data-slot="title" className={toastStyles.title}>
                {title}
              </div>
            )}
            {description && (
              <div className={toastStyles.description}>
                {description}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {action && (
            <button
              type="button"
              onClick={action.onClick}
              className={toastStyles.actionButton}
              aria-label={action.altText || action.label}
            >
              {action.label}
            </button>
          )}

          {closable && (
            <button
              type="button"
              onClick={handleDismiss}
              className={cn(
                toastStyles.closeButton,
                'opacity-70 hover:opacity-100'
              )}
              aria-label="Close notification"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }
);

Toast.displayName = 'Toast';
