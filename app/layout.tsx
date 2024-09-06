import "@/app/globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";
import Provider from "../lib/providers/provider";
import ToastProvider from "../lib/_components/Toast";
import StoreProvider from "../lib/providers/StoreProvider";

// FONT
const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	display: "swap",
});

// metaData
export const metadata = {
	title: {
		template: "%s ",
		default: "Welcome ",
	},
	description: "admin-panel",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={jakarta.className}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
