"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

interface ToastType {
  id: number;
  message: string;
  type: string;
}

interface ToastProviderProps {
  children: ReactNode;
}

type ToastContextType = {
  showToast: (message: string, type?: string) => void;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const showToast = (message: string, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-5 right-5 z-50 space-y-2">
        {toasts.map(({ id, message, type }) => (
          <div
            key={id}
            className={`
              px-4 py-2 rounded shadow text-white animate-slide-in 
              ${type === "success" ? "bg-green-600" : "bg-red-600"}
            `}
          >
            {message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
