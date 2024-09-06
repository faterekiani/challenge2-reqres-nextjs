import { Suspense } from "react";
import UserTable from "../_components/UserTable";
import Spinner from "../../../../_lib/_components/Spinner";
import { SearchParams } from "@/_lib/types/types";

// meatdata
export const metadata = {
	title: "User list",
};

export default function Page({ searchParams }: { searchParams: SearchParams }) {
	const pageCount = searchParams?.page || 1;
	const pageSize = searchParams?.size || 6;

	return (
		<Suspense fallback={<Spinner size="medium" />}>
			<UserTable page={pageCount} size={pageSize} />
		</Suspense>
	);
}
