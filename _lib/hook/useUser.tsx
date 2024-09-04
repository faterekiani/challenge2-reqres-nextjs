import { getAllUsersInfoApi } from "@/_lib/data-services";
import { useQuery } from "@tanstack/react-query";

type Props = {
	pageNumber: number;
	pageSize: number;
};

export function useUsers({ pageNumber, pageSize }: Props) {
	const {
		isLoading,
		data: userData,
		error,
	} = useQuery({
		queryKey: ["users", pageNumber, pageSize],
		queryFn: () =>
			getAllUsersInfoApi({
				pageNumber,
				pageSize,
			}),
	});

	return { isLoading, error, userData };
}
