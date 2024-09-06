"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast, ToastOptions, Slide } from "react-toastify";

const contextClass = {
	success: "bg-green-600",
	error: "bg-red-600",
	default: "bg-indigo-600",
	info: "bg-gray-600",
	warning: "bg-orange-400",
};

export default function ToastProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{children}
			<ToastContainer
				toastClassName={(context) =>
					`${contextClass[context?.type || "default"]} relative flex items-center p-1 min-h-10 justify-between overflow-hidden`
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

type ToastType = "success" | "error";

export const showToast = (
	type: ToastType,
	content: string,
	options: Partial<ToastOptions> = {},
): ReturnType<typeof toast> => {
	return toast(content, { type, ...defaultToastOptions, ...options });
};
