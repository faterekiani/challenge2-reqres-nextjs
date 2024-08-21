import "@/app/globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";
import Provider from "./_lib/provider";
import ToastProvider from "./_lib/components/Toast";
import StoreProvider from "./StoreProvider";

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
        <Provider>
          <ToastProvider>
            <StoreProvider>{children}</StoreProvider>
          </ToastProvider>
        </Provider>
      </body>
    </html>
  );
}
