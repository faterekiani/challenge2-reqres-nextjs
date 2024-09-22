import { getAllResorcesApi } from "@/app/_lib/data-services";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllResources(
  pageNumber: string,
  pageSize: string
) {
  const {
    data: resourceData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["resource", pageNumber, pageSize],
    queryFn: () => getAllResorcesApi(pageNumber, pageSize),
  });

  return { resourceData, isLoading, error };
}
