"use client";

import Spinner from "../../../components/Spinner";

import { SearchParams } from "@/_lib/types/types";
import { useResource } from "@/_lib/hook/useResource";
import { useRouter } from "next/navigation";
import Pagination from "../../_components/Pagination";
import { Resorce } from "../_types/type";

import { useEffect, useState } from "react";
import { DynamicTable } from "@/app/(dashboard)/_components/DynamicTable ";

const columns = [
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
];

export default function ResourceTable({ page, size }: SearchParams) {
	const [resource, setResource] = useState<Resorce[]>([]);

	const router = useRouter();

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

{
	/* <Link href={`/resource/resource-list/${resourceId}`} className="w-full"></Link> */
}
