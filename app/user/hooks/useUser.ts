import { getAllUsersInfoApi } from "@/app/_lib/data-services";
import { useQuery } from "@tanstack/react-query";
import { searchParamsType } from "@/app/_lib/types/types";

export function useUsers({ page, size }: searchParamsType) {
  const { isLoading, data: userData } = useQuery({
    queryKey: ["users", page, size],
    queryFn: () => getAllUsersInfoApi(page, size),
  });

  return { isLoading, userData };
}
