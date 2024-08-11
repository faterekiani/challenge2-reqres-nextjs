import "@/app/_styles/globals.css";
import Sidebar from "@/app/_components/Sidebar";
import Header from "@/app/_components/Header";

import { Plus_Jakarta_Sans } from "next/font/google";

import Provider from "@/app/_lib/provider";

// FONT
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

// metaData
export const metadata = {
  title: {
    template: "%s | reqRes",
    default: "Welcome | reqRes",
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
        <div className="flex h-screen w-full bg-primary-100">
          <Sidebar />
          <div className="flex flex-col w-full h-full ml-64 overflow-auto">
            <Header />
            <div className="p-8">
              <Provider>{children}</Provider>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
