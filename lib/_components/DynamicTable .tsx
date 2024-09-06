import {
	useReactTable,
	getCoreRowModel,
	flexRender,
	ColumnDef,
	CoreRow,
} from "@tanstack/react-table";
import Spinner from "@/lib/_components/Spinner";

type DynamicTableProps<T extends object> = {
	data: T[];
	columns: ColumnDef<T>[];
	isLoading: boolean;
	onClick?: (row: CoreRow<T>) => void;
};

export const DynamicTable = <T extends object>({
	data,
	columns,
	isLoading,
	onClick,
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
					<tr key={headerGroup.id}>
						{headerGroup.headers.map((header) => (
							<th
								key={header.id}
								className="text-sm tracking-wide capitalize px-4 py-4"
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
							className={`hover:bg-primary-200 py-2 ${!!onClick ? "cursor-pointer" : "cursor-default"} `}
							onClick={() => {
								if (onClick) onClick(row);
							}}
						>
							{row.getVisibleCells().map((cell) => (
								<td
									key={cell.id}
									className="text-sm text-gray-500 whitespace-nowrap p-4 border-b"
								>
									<div className="flex justify-center items-center">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</div>
								</td>
							))}
						</tr>
					))
				)}
			</tbody>
		</table>
	);
};
