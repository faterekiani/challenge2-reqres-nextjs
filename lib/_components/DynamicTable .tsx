import {
	useReactTable,
	getCoreRowModel,
	flexRender,
	ColumnDef,
} from "@tanstack/react-table";
import Spinner from "@/lib/_components/Spinner";

type DynamicTableProps<T extends object> = {
	data: T[];
	columns: ColumnDef<T>[];
	isLoading: boolean;
};

export const DynamicTable = <T extends object>({
	data,
	columns,
	isLoading,
}: DynamicTableProps<T>) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<table className=" bg-white rounded-md overflow-hidden my-4 w-full shadow-sm">
			<thead className="bg-primary-950 text-white">
				{table.getHeaderGroups().map((headerGroup) => (
					<tr
						key={headerGroup.id}
						className="grid grid-cols-[1fr,2fr,2fr,2fr,3fr,2fr] py-4"
					>
						{headerGroup.headers.map((header) => (
							<th key={header.id} className="text-sm tracking-wide capitalize ">
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
				{isLoading ? (
					<tr>
						<td>
							<Spinner size="medium" />
						</td>
					</tr>
				) : (
					table.getRowModel().rows.map((row) => (
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
					))
				)}
			</tbody>
		</table>
	);
};
