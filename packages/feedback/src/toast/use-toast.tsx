import { createContext, useContext, useCallback, useState, useRef } from 'react';
import type { ReactNode } from 'react';
import type { 
  ToastData, 
  CreateToastOptions, 
  ToastContextValue,
  ToastType,
} from './toast.types';

let toastCount = 0;

function generateId(): string {
  toastCount = (toastCount + 1) % Number.MAX_SAFE_INTEGER;
  return `toast-${toastCount}-${Date.now()}`;
}

const ToastContext = createContext<ToastContextValue | null>(null);

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const toastsRef = useRef<ToastData[]>([]);

  // Keep ref in sync with state
  toastsRef.current = toasts;

  const addToast = useCallback((options: CreateToastOptions): string => {
    const id = generateId();
    const newToast: ToastData = {
      id,
      type: 'default',
      variant: 'soft',
      duration: 5000,
      closable: true,
      ...options,
    };

    setToasts((prev) => [...prev, newToast]);
    return id;
  }, []);

  const dismiss = useCallback((id?: string) => {
    setToasts((prev) => 
      id ? prev.filter((t) => t.id !== id) : []
    );
  }, []);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

  const update = useCallback((id: string, options: Partial<CreateToastOptions>) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...options } : t))
    );
  }, []);

  const createTypedToast = useCallback(
    (type: ToastType) => (options: CreateToastOptions | string): string => {
      const toastOptions: CreateToastOptions =
        typeof options === 'string'
          ? { title: options, type }
          : { ...options, type };
      return addToast(toastOptions);
    },
    [addToast]
  );

  const promise = useCallback(
    async <T,>(
      promiseOrFn: Promise<T>,
      options: {
        loading: CreateToastOptions | string;
        success: CreateToastOptions | string | ((data: T) => CreateToastOptions | string);
        error: CreateToastOptions | string | ((error: unknown) => CreateToastOptions | string);
      }
    ): Promise<T> => {
      const loadingOptions: CreateToastOptions =
        typeof options.loading === 'string'
          ? { title: options.loading, type: 'loading' }
          : { ...options.loading, type: 'loading' };

      const id = addToast({ ...loadingOptions, duration: 0 });

      try {
        const result = await promiseOrFn;
        
        const successOptions =
          typeof options.success === 'function'
            ? options.success(result)
            : options.success;
        
        const successToast: CreateToastOptions =
          typeof successOptions === 'string'
            ? { title: successOptions, type: 'success' }
            : { ...successOptions, type: 'success' };

        update(id, { ...successToast, duration: 5000 });
        
        return result;
      } catch (err) {
        const errorOptions =
          typeof options.error === 'function'
            ? options.error(err)
            : options.error;
        
        const errorToast: CreateToastOptions =
          typeof errorOptions === 'string'
            ? { title: errorOptions, type: 'danger' }
            : { ...errorOptions, type: 'danger' };

        update(id, { ...errorToast, duration: 5000 });
        
        throw err;
      }
    },
    [addToast, update]
  );

  const contextValue: ToastContextValue = {
    toast: addToast,
    success: createTypedToast('success'),
    error: createTypedToast('danger'),
    warning: createTypedToast('warning'),
    info: createTypedToast('info'),
    loading: createTypedToast('loading'),
    dismiss,
    dismissAll,
    update,
    promise,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

// Note: useToasts hook is managed internally by the Toaster component
// The ToastProvider exposes the toast methods via useToast()
