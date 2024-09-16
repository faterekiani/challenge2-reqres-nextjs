"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";
import ToastProvider from "../components/Toast";
import StoreProvider from "./StoreProvider";

type Props = {
	children: ReactNode;
};

export default function Provider({ children }: Props) {
	const [queryCLient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryCLient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<ToastProvider>
				<StoreProvider>{children}</StoreProvider>
			</ToastProvider>
		</QueryClientProvider>
	);
}
