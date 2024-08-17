import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

// metaData
export const metadata = {
  title: {
    template: "%s | reqRes",
    default: "Welcome | reqRes",
  },
  description: "admin-panel",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full bg-primary-100">
      <Sidebar />
      <div className="flex flex-col w-full h-full ml-64 overflow-auto">
        <Header />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}

// import "@/app/(dashboard)/_styles/globals.css";

// import { Plus_Jakarta_Sans } from "next/font/google";

// import Provider from "@/app/_lib/provider";
// import Sidebar from "./_components/Sidebar";
// import Header from "./_components/Header";
// import ToastProvider from "../_lib/components/Toast";
// import HamburgerMenu from "./_components/HamburgerMenu";

// // FONT
// const jakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

// // metaData
// export const metadata = {
//   title: {
//     template: "%s | reqRes",
//     default: "Welcome | reqRes",
//   },
//   description: "admin-panel",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={jakarta.className}>
//         <div className="flex h-screen w-full bg-primary-100">
//           <Sidebar />
//           <div className="flex flex-col w-full h-full ml-64 overflow-auto">
//             <Header />
//             <div className="p-8">
//               <Provider>
//                 <ToastProvider>{children}</ToastProvider>
//               </Provider>
//             </div>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }

// // relative mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-10

// {
//   /*  */
// }

// {
//   /* <html lang="en">
//       <body className={jakarta.className}>
//         <div className="mx-auto grid grid-cols-12 h-screen">
//           <div className="hidden md:block md:col-span-2">
//             <Sidebar />
//           </div>
//           <div className="col-span-12 md:col-span-10 bg-primary-100">
//             <Header />
//             <div className="p-8">
//               <Provider>
//                 <ToastProvider>{children}</ToastProvider>
//               </Provider>
//             </div>
//           </div>
//         </div>
//       </body>
//     </html> */
// }
