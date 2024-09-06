import { SearchParams } from "@/lib/types/types";
import TotalStats from "./_components/TotalStats";

export default function UsersPage({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	const pageCount = searchParams?.page || 1;
	const pageSize = searchParams?.size || 6;

	return (
		<main>
			<TotalStats page={pageCount} size={pageSize} />
		</main>
	);
}
