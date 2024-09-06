"use client";

import Spinner from "../../../../../_lib/_components/Spinner";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";

import Pagination from "../../../_components/Pagination";
import { SearchParams } from "@/_lib/types/types";
import { useResource } from "@/_lib/hook/useResource";
import { Resource } from "../../_types/type";
import { DynamicTable } from "@/app/(dashboard)/_components/DynamicTable ";

export default function ResourceTable({ page, size }: SearchParams) {
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
			{
				accessorKey: "id",
				header: () => "Actions",
				cell: ({ row }) => {
					return (
						<div className="flex items-center gap-x-2">
							<Link href={`/resource/resource-list/${row.original.id}`}>
								<Eye
									size={15}
									className="hover:text-secondary transition-colors"
								/>
							</Link>
						</div>
					);
				},
			},
		],
		[],
	);

	const { isLoading, resourceData, error } = useResource({
		pageNumber: page,
		pageSize: size,
	});

	useEffect(() => {
		if (resourceData) {
			setResource(resourceData?.data);
		}
	}, [resourceData]);

	if (isLoading) return <Spinner size="medium" />;
	if (error) {
		return <div>Error fetching resources: {error.message}</div>;
	}

	const handlePageChange = (newPage: number, newSize: number) => {
		router.push(`?page=${newPage}&size=${newSize}`);
	};

	return (
		<div className="overflow-auto">
			<DynamicTable data={resource} columns={columns} />
			<Pagination page={page} size={size} onPageChange={handlePageChange} />
		</div>
	);
}
