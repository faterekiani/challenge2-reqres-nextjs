"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast, ToastContent, ToastOptions, Slide, Id } from "react-toastify";

interface ToastProviderProps {
  children: React.ReactNode;
}

const contextClass = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
};

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " relative flex items-center p-1 min-h-10  justify-between overflow-hidden"
        }
        bodyClassName={() => "text-sm text-white block p-3"}
      />
    </>
  );
}

export const defaultToastOptions: ToastOptions = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: "colored",
  transition: Slide,
};

type ToastType = "success" | "error" | "default";

export const showToast = (
  type: ToastType,
  content: ToastContent,
  options: Partial<ToastOptions> = {}
): Id => {
  return toast(content, { type, ...defaultToastOptions, ...options });
};
