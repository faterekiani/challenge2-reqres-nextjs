// import "@/app/(dashboard)/_styles/globals.css";

// import { Plus_Jakarta_Sans } from "next/font/google";

// import Provider from "@/app/_lib/provider";
// import ToastProvider from "../_lib/components/Toast";

// // FONT
// const jakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

// // metaData
// export const metadata = {
//   title: {
//     template: "%s | reqRes",
//     default: "Authentication | reqRes",
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
//         <div>
//           <Provider>
//             <ToastProvider>{children}</ToastProvider>
//           </Provider>
//         </div>
//       </body>
//     </html>
//   );
// }
