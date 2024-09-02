import { getSingleUserInfoApi } from "@/_lib/data-services";
import { useQuery } from "@tanstack/react-query";

// TODO- take it to the lib folder
export function useSingleUSer(userId: number) {
  const {
    data: singleUserData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getSingleUserInfoApi(userId),
  });

  return { isLoading, singleUserData, isError, error };
}
