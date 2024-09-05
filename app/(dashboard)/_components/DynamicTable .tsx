import React from "react";
import {
	useReactTable,
	getCoreRowModel,
	flexRender,
} from "@tanstack/react-table";

type ColumnDef<T> = {
	accessorKey: keyof T | string;
	header: string;
	cell?: (info: any) => JSX.Element;
};

type DynamicTableProps<T extends object> = {
	data: T[];
	columns: ColumnDef<T>[];
};

export const DynamicTable = <T extends object>({
	data,
	columns,
}: DynamicTableProps<T>) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="overflow-auto">
			<table className="w-[900px] mx-auto bg-white rounded-md overflow-hidden my-3">
				<thead className="bg-primary-950 text-white">
					{table.getHeaderGroups().map((headerGroup) => (
						<tr
							key={headerGroup.id}
							className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr] py-4"
						>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									className="text-sm tracking-wide capitalize "
								>
									{header.isPlaceholder
										? null
										: flexRender(
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
						// <Link href="/" key={row.id}>
						<tr
							key={row.id}
							className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr] hover:bg-primary-200 py-2"
						>
							{row.getVisibleCells().map((cell) => (
								<td
									key={cell.id}
									className="text-sm text-gray-500 whitespace-nowrap flex justify-center items-center"
								>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
						// </Link>
					))}
				</tbody>
			</table>
		</div>
	);
};
