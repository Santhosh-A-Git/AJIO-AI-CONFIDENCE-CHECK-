"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ message: string, id: number } | null>(null);

  const showToast = (message: string) => {
    const id = Date.now();
    setToast({ message, id });
    setTimeout(() => {
      setToast((prev) => (prev?.id === id ? null : prev));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: 'var(--surface)',
          border: '1px solid var(--primary)',
          color: 'var(--primary)',
          padding: '1rem 2rem',
          borderRadius: 'var(--radius-md)',
          fontWeight: 600,
          boxShadow: '0 4px 20px rgba(12, 218, 171, 0.2)',
          zIndex: 9999,
          animation: 'slideIn 0.3s ease-out forwards'
        }}>
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};
