"use client";

import Spinner from "../../../components/Spinner";
import Link from "next/link";
// import ResourceTableItems from "./ResourceTableItems";

import { SearchParams } from "@/_lib/types/types";
import { useResource } from "@/_lib/hook/useResource";
import { useRouter } from "next/navigation";
import Pagination from "../../_components/Pagination";
import { Resorce } from "../_types/type";
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { useEffect, useState } from "react";

// tanstack table
const columnHelper = createColumnHelper<Resorce>();

const columns = [
	columnHelper.accessor("id", {
		header: () => "ID",
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor("name", {
		header: () => "Name",
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor("year", {
		header: () => "Year",
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor("color", {
		header: () => "Color",
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor("pantone_value", {
		header: () => "Pantone value",
		cell: (info) => info.getValue(),
	}),
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

	// tanstack table
	const table = useReactTable({
		data: resource,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	/////////////////////////////////////////////////////////

	if (isLoading) return <Spinner size="medium" />;

	if (error) {
		return <div>Error fetching resources: {error.message}</div>;
	}

	const handlePageChange = (newPage: number, newSize: number) => {
		router.push(`?page=${newPage}&size=${newSize}`);
	};

	return (
		<div className="overflow-auto">
			<table className="w-[900px] mx-auto bg-white rounded-md overflow-hidden my-3">
				<thead className="bg-primary-950 text-white">
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id} className="flex justify-between py-4 px-8">
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									className="text-sm tracking-wide capitalize "
								>
									{flexRender(
										header.column.columnDef.header,
										header.getContext(),
									)}
								</th>
							))}
						</tr>
					))}
				</thead>

				<tbody>
					{table.getRowModel().rows.map((row) => (
						<Link
							href={`/resource/resource-list/${row.id}`}
							className="w-full"
							key={row.id}
						>
							<tr className="flex justify-between hover:bg-primary-200 py-4 px-8">
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										className="text-sm text-gray-500 whitespace-nowrap"
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						</Link>
					))}
				</tbody>
			</table>

			<Pagination page={page} size={size} onPageChange={handlePageChange} />
		</div>
	);
}

{
	/* <table className="w-[900px] mx-auto bg-white">
				<thead className="bg-primary-950 text-white">
					<tr className="flex justify-between py-4">
						<th className="w-[10%] text-sm tracking-wide  capitalize">ID</th>
						<th className="w-[30%] text-sm tracking-wide  capitalize">name</th>
						<th className="w-[20%] text-sm tracking-wide  capitalize">year</th>
						<th className="w-[20%] text-sm tracking-wide  capitalize">color</th>
						<th className="w-[20%] text-sm tracking-wide  capitalize">
							pantone_value
						</th>
					</tr>
				</thead>
				<tbody>
					{resourceData?.data.map((resourceInfos: Resorce) => (
						<ResourceTableItems
							key={resourceInfos.id}
							resourceInfos={resourceInfos}
						/>
					))}
				</tbody>
			</table> */
}
