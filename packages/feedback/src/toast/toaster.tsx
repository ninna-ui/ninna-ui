import { forwardRef, useState, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@ninna-ui/utils';
import { Toast } from './toast';
import { viewportPositions, viewportDirections, VIEWPORT_BASE_CLASS } from './toast.styles';
import type { ToasterProps, ToastData, CreateToastOptions, ToastPosition } from './toast.types';

let toastCount = 0;
let idCounter = 0;

function generateId(): string {
  toastCount = (toastCount + 1) % Number.MAX_SAFE_INTEGER;
  idCounter = (idCounter + 1) % Number.MAX_SAFE_INTEGER;
  return `toast-${toastCount}-${idCounter}`;
}

// Global toast state for imperative API
type ToastListener = (toasts: ToastData[]) => void;
const listeners: Set<ToastListener> = new Set();
let globalToasts: ToastData[] = [];

function notifyListeners() {
  listeners.forEach((listener) => listener([...globalToasts]));
}

// Imperative toast API
export const toast = {
  create: (options: CreateToastOptions): string => {
    const id = generateId();
    const newToast: ToastData = {
      id,
      type: 'default',
      variant: 'soft',
      duration: 5000,
      closable: true,
      ...options,
    };
    globalToasts = [...globalToasts, newToast];
    notifyListeners();
    return id;
  },

  success: (options: CreateToastOptions | string): string => {
    const toastOptions: CreateToastOptions =
      typeof options === 'string' ? { title: options } : options;
    return toast.create({ ...toastOptions, type: 'success' });
  },

  error: (options: CreateToastOptions | string): string => {
    const toastOptions: CreateToastOptions =
      typeof options === 'string' ? { title: options } : options;
    return toast.create({ ...toastOptions, type: 'danger' });
  },

  warning: (options: CreateToastOptions | string): string => {
    const toastOptions: CreateToastOptions =
      typeof options === 'string' ? { title: options } : options;
    return toast.create({ ...toastOptions, type: 'warning' });
  },

  info: (options: CreateToastOptions | string): string => {
    const toastOptions: CreateToastOptions =
      typeof options === 'string' ? { title: options } : options;
    return toast.create({ ...toastOptions, type: 'info' });
  },

  loading: (options: CreateToastOptions | string): string => {
    const toastOptions: CreateToastOptions =
      typeof options === 'string' ? { title: options } : options;
    return toast.create({ ...toastOptions, type: 'loading', duration: 0 });
  },

  dismiss: (id?: string): void => {
    if (id) {
      globalToasts = globalToasts.filter((t) => t.id !== id);
    } else {
      globalToasts = [];
    }
    notifyListeners();
  },

  dismissAll: (): void => {
    globalToasts = [];
    notifyListeners();
  },

  update: (id: string, options: Partial<CreateToastOptions>): void => {
    globalToasts = globalToasts.map((t) =>
      t.id === id ? { ...t, ...options } : t
    );
    notifyListeners();
  },

  promise: async <T,>(
    promise: Promise<T>,
    options: {
      loading: CreateToastOptions | string;
      success: CreateToastOptions | string | ((data: T) => CreateToastOptions | string);
      error: CreateToastOptions | string | ((error: unknown) => CreateToastOptions | string);
    }
  ): Promise<T> => {
    const loadingOptions: CreateToastOptions =
      typeof options.loading === 'string'
        ? { title: options.loading }
        : options.loading;

    const id = toast.loading(loadingOptions);

    try {
      const result = await promise;

      const successOptions =
        typeof options.success === 'function'
          ? options.success(result)
          : options.success;

      const successToast: Partial<CreateToastOptions> =
        typeof successOptions === 'string'
          ? { title: successOptions, type: 'success', duration: 5000 }
          : { ...successOptions, type: 'success', duration: 5000 };

      toast.update(id, successToast);
      return result;
    } catch (err) {
      const errorOptions =
        typeof options.error === 'function' ? options.error(err) : options.error;

      const errorToast: Partial<CreateToastOptions> =
        typeof errorOptions === 'string'
          ? { title: errorOptions, type: 'danger', duration: 5000 }
          : { ...errorOptions, type: 'danger', duration: 5000 };

      toast.update(id, errorToast);
      throw err;
    }
  },
};

export const Toaster = forwardRef<HTMLDivElement, ToasterProps>(
  (
    {
      position = 'bottom-right',
      max = 5,
      gap = 8,
      offset = '1rem',
      pauseOnHover = true,
      id,
      className,
      children,
    },
    ref
  ) => {
    const [toasts, setToasts] = useState<ToastData[]>([]);
    const [isPaused, setIsPaused] = useState(false);
    const [mounted, setMounted] = useState(false);
    const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());
    const pausedAtRef = useRef<Map<string, number>>(new Map());

    // Handle client-side mounting for portal
    useEffect(() => {
      setMounted(true);
    }, []);

    // Subscribe to global toast state — filter by toasterId if provided
    useEffect(() => {
      const filter = (all: ToastData[]) =>
        id !== undefined
          ? all.filter((t) => t.toasterId === id)
          : all.filter((t) => t.toasterId === undefined);

      const listener: ToastListener = (newToasts) => {
        setToasts(filter(newToasts).slice(-max));
      };

      listeners.add(listener);
      setToasts(filter([...globalToasts]).slice(-max));

      return () => {
        listeners.delete(listener);
      };
    }, [max, id]);

    // Auto-dismiss toasts with pause support
    useEffect(() => {
      if (isPaused) {
        // Store remaining time for each toast
        toasts.forEach((t) => {
          const timer = timersRef.current.get(t.id);
          if (timer) {
            clearTimeout(timer);
            timersRef.current.delete(t.id);
            // Store when we paused
            if (!pausedAtRef.current.has(t.id)) {
              pausedAtRef.current.set(t.id, Date.now());
            }
          }
        });
        return;
      }

      // Resume or start timers
      toasts.forEach((t) => {
        if (t.duration && t.duration > 0 && !timersRef.current.has(t.id)) {
          const pausedAt = pausedAtRef.current.get(t.id);
          const remainingTime = pausedAt 
            ? Math.max(0, t.duration - (pausedAt - (Date.now() - t.duration)))
            : t.duration;

          const timer = setTimeout(() => {
            toast.dismiss(t.id);
            timersRef.current.delete(t.id);
            pausedAtRef.current.delete(t.id);
          }, remainingTime);

          timersRef.current.set(t.id, timer);
        }
      });

      return () => {
        timersRef.current.forEach((timer) => clearTimeout(timer));
        timersRef.current.clear();
      };
    }, [toasts, isPaused]);

    // Global Escape key handler
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && toasts.length > 0) {
          // Dismiss the most recent toast
          const lastToast = toasts[toasts.length - 1];
          if (lastToast && lastToast.closable !== false) {
            toast.dismiss(lastToast.id);
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [toasts]);

    const handleDismiss = useCallback((id: string) => {
      toast.dismiss(id);
    }, []);

    const handleMouseEnter = useCallback(() => {
      if (pauseOnHover) {
        setIsPaused(true);
      }
    }, [pauseOnHover]);

    const handleMouseLeave = useCallback(() => {
      if (pauseOnHover) {
        setIsPaused(false);
        pausedAtRef.current.clear();
      }
    }, [pauseOnHover]);

    const handleFocus = useCallback(() => {
      setIsPaused(true);
    }, []);

    const handleBlur = useCallback(() => {
      setIsPaused(false);
      pausedAtRef.current.clear();
    }, []);

    const resolvedPosition = (position as ToastPosition) in viewportPositions ? (position as ToastPosition) : 'bottom-right';
    const positionClass = viewportPositions[resolvedPosition];
    const directionClass = viewportDirections[resolvedPosition];

    // Don't render on server
    if (!mounted) {
      return <div suppressHydrationWarning />;
    }

    const toasterContent = (
      <div
        ref={ref}
        data-slot="toaster"
        className={cn(VIEWPORT_BASE_CLASS, directionClass, positionClass, className)}
        style={{
          gap: `${gap}px`,
          padding: typeof offset === 'number' ? `${offset}px` : offset,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label="Notifications"
        role="region"
      >
        {toasts.map((t) => (
          <Toast key={t.id} toast={t} onDismiss={handleDismiss} position={resolvedPosition} />
        ))}
      </div>
    );

    return (
      <>
        {children}
        {createPortal(toasterContent, document.body)}
      </>
    );
  }
);

Toaster.displayName = 'Toaster';
