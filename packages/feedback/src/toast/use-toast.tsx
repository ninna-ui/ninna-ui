import { createContext, useContext, useCallback, useState, useRef } from 'react';
import type { ReactNode } from 'react';
import { toast } from './toaster';
import type { 
  ToastData, 
  CreateToastOptions, 
  ToastContextValue,
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
      color: 'primary',
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

  const contextValue: ToastContextValue = {
    toast: addToast,
    dismiss,
    dismissAll,
    update,
    promise: toast.promise,
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
