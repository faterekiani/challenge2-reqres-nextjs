import { getAllUsersInfoApi } from "@/app/_lib/data-services";
import { useQuery } from "@tanstack/react-query";

export function useUsers(pageNumber: string, pageSize: string) {
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
