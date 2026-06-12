import { useEffect, type ReactNode } from "react";

export type AlertType = "success" | "warning" | "error";

export interface AlertData {
  id: number;
  message: ReactNode;
  type: AlertType;
}

const styles: Record<AlertType, string> = {
  success: "bg-green-50/90 border-green-400 text-green-800",
  warning: "bg-yellow-50/90 border-yellow-400 text-yellow-800",
  error: "bg-red-50/90 border-red-400 text-red-800",
};

interface AlertProps {
  data: AlertData;
  onClose: (id: number) => void;
  duration?: number;
}

export function Alert({ data, onClose, duration = 3000 }: AlertProps) {
  const { id, message, type } = data;

  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div
      className={`flex items-center gap-3 rounded-lg border-2 px-4 py-3 shadow-sm backdrop-blur-sm ${styles[type]}`}
    >
      <span className="text-sm font-medium">{message}</span>
      <button onClick={() => onClose(id)} className="ml-2 opacity-60 hover:opacity-100">
        ✕
      </button>
    </div>
  );
}