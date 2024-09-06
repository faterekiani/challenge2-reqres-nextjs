import { Suspense } from "react";
import UsersList from "../_components/UsersList";
import Spinner from "../../../../lib/_components/Spinner";
import { SearchParams } from "@/lib/types/types";

// meatdata
export const metadata = {
	title: "User list",
};

export default function UsersListPage({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	const pageCount = searchParams?.page || 1;
	const pageSize = searchParams?.size || 6;

	return (
		<Suspense fallback={<Spinner size="medium" />}>
			<UsersList page={pageCount} size={pageSize} />
		</Suspense>
	);
}
