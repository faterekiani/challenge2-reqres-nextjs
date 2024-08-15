// "use client";

// import { createContext, useContext, useState } from "react";

// type TUserContext = {
//   size: string;
//   page: string;
//   setSize: (size: string) => void;
//   setPage: (page: string) => void;
// };

// const UserContext = createContext<TUserContext>({
//   size: "6",
//   page: "1",
//   setSize: () => {},
//   setPage: () => {},
// });

// function UserProvider({ children }: { children: React.ReactNode }) {
//   const [size, setSize] = useState<string>("");
//   const [page, setPage] = useState<string>("");

//   return (
//     <UserContext.Provider value={{ size, page, setSize, setPage }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// function useUserPageAndSize() {
//   const context = useContext(UserContext);

//   if (context === undefined)
//     throw new Error("Context was used outside provider");
//   return context;
// }
// export { UserProvider, UserContext, useUserPageAndSize };
