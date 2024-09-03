import { getAllUsersInfoApi } from "@/_lib/data-services";
import { useQuery } from "@tanstack/react-query";
import { UsersInfo } from "@/_lib/types/types";

// TODO- take it to the lib folder
export function useUsers(pageNumber: number, pageSize: number) {
  const {
    isLoading,
    data: userData,
    error,
  } = useQuery({
    queryKey: ["users", pageNumber, pageSize],
    queryFn: () => getAllUsersInfoApi(pageNumber, pageSize),
  });
  return { isLoading, error, userData };
}
