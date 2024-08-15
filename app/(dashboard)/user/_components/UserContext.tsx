// "use client";

// import { useContext } from "react";

// import { getAllUsersInfoApi } from "@/app/_lib/data-services";
// import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
// import { createContext } from "vm";

// const UserContext = createContext();

// function UserProvider() {
//   const [allDataArray, setAllDataArray] = useState<TUsers[]>();

//   const { isLoading, data: userData } = useQuery({
//     queryKey: ["users", page, size],
//     queryFn: () => getAllUsersInfoApi(page, size),
//   });

//   useEffect(() => {
//     if (userData) setAllDataArray(userData?.data);
//   }, [userData]);
// }

// function useUser() {
//   const context = useContext(UserContext);

//   if (context === undefined)
//     throw new Error("Context was used outside provider");
//   return context;
// }
