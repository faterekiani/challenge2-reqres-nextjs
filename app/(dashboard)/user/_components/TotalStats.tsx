"use client";

import { Folder, User } from "lucide-react";
import { SearchParams } from "@/lib/types/types";
import { useUsers } from "@/lib/hook/useUsers";
import TotalStat from "./TotalStat";
import { useResources } from "@/lib/hook/useResources";

export default function TotalStats({ page, size }: SearchParams) {
	const { userData, isLoading: isLoadingUser } = useUsers({
		pageNumber: page,
		pageSize: size,
	});

	const { resourceData, isLoading: isLoadingResource } = useResources({
		pageNumber: page,
		pageSize: size,
	});

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
