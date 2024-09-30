"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { ColumnDef } from "@tanstack/react-table";

import Pagination from "../../../../../lib/components/Pagination";
import { SearchParams } from "@/lib/types/types";
import { useResources } from "@/lib/hook/useResources";
import { Resource } from "../../_types/type";
import { DynamicTable } from "@/lib/components/DynamicTable ";

export default function ResourcesList({ page, size }: SearchParams) {
	const [resource, setResource] = useState<Resource[]>([]);
	const router = useRouter();

	const columns = useMemo<ColumnDef<Resource>[]>(
		() => [
			{
				accessorKey: "id",
				header: "ID",
			},
			{
				accessorKey: "name",
				header: "Name",
			},
			{
				accessorKey: "year",
				header: "Year",
			},
			{
				accessorKey: "color",
				header: "Color",
			},
			{
				accessorKey: "pantone_value",
				header: "Pantone_value",
			},
		],
		[],
	);

	const { isLoading, resourceData, error } = useResources({
		pageNumber: page,
		pageSize: size,
	});

	useEffect(() => {
		if (resourceData) {
			setResource(resourceData?.data);
		}
	}, [resourceData]);

	if (error) {
		return <div>Error fetching resources: {error.message}</div>;
	}

	const handlePageChange = (newPage: number, newSize: number) => {
		router.push(`?page=${newPage}&size=${newSize}`);
	};

	return (
		<div className="overflow-auto">
			<DynamicTable
				data={resource}
				columns={columns}
				isLoading={isLoading}
				onClick={(row) =>
					router.push(`/resource/resource-list/${row.original.id}`)
				}
			/>
			<Pagination page={page} size={size} onPageChange={handlePageChange} />
		</div>
	);
}
