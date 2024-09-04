import { getAllResorcesApi } from "@/_lib/data-services";
import { useQuery } from "@tanstack/react-query";

type Props = {
	pageNumber: number;
	pageSize: number;
};

export function useResource({ pageNumber, pageSize }: Props) {
	const {
		data: resourceData,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["resource", pageNumber, pageSize],
		queryFn: () =>
			getAllResorcesApi({
				pageNumber,
				pageSize,
			}),
	});

	return { isLoading, error, resourceData };
}
