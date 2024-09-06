import UsersList from "../_components/UsersList";
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

	return <UsersList page={pageCount} size={pageSize} />;
}
