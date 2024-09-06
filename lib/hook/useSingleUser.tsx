import { getSingleUserInfoApi } from "@/lib/data-services";
import { useQuery } from "@tanstack/react-query";

export function useSingleUSer(userId: number) {
	const { data: singleUserData, isLoading } = useQuery({
		queryKey: ["users", userId],
		queryFn: () => getSingleUserInfoApi(userId),
	});

	return { isLoading, singleUserData };
}
