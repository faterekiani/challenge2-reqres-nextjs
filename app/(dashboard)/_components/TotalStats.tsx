"use client";

import { Folder, User } from "lucide-react";
import TotalStat from "./TotalStat";
import { useUsers } from "../../../lib/hook/useUser";
import { SearchParams } from "@/lib/types/types";
import useGetAllResources from "../../../lib/hook/useGetAllResources";

export default function TotalStats({ page, size }: SearchParams) {
	const { userData, isLoading: isLoadingUser } = useUsers({
		pageNumber: page,
		pageSize: size,
	});

	const { resourceData, isLoading: isLoadingResource } = useGetAllResources(
		page,
		size,
	);

	const totalUser = userData?.total;
	const totalResource = resourceData?.total;

	return (
		<div className="flex gap-6">
			<TotalStat
				title="user"
				count={`${isLoadingUser ? "..." : totalUser}`}
				icon={<User />}
			/>
			<TotalStat
				title="resource"
				count={`${isLoadingResource ? "..." : totalResource}`}
				icon={<Folder />}
			/>
		</div>
	);
}
