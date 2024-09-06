import { useQuery } from "@tanstack/react-query";
import { getSingleResourceInfoApi } from "../data-services";

export default function useSingleResource(resourceId: number) {
  const { data: singleResourceData, isLoading } = useQuery({
    queryKey: ["resource", resourceId],
    queryFn: () => getSingleResourceInfoApi(resourceId),
  });

  return { isLoading, singleResourceData };
}
