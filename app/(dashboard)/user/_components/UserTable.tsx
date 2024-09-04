"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useUsers } from "../../../../_lib/hook/useUser";
import Spinner from "../../../components/Spinner";
import UserTableItems from "./UserTableItems";
import Pagination from "../../_components/Pagination";
import CreateUserBtn from "./CreateUserBtn";
import { useAppDispatch, useAppSelector } from "@/_lib/store/hooks";
import { addData } from "../slice";
import { SearchParams } from "@/_lib/types/types";
import { User } from "../_types/type";
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";

// tanstack table
const columnHelper = createColumnHelper<User>();

const columns = [
	columnHelper.accessor("id", {
		header: () => "ID",
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor("avatar", {
		header: () => "Avatar",
		cell: (info) => info.getValue(),
	}),
	// <Image
	// 			src={info.getValue()}
	// 			alt="User Avatar"
	// 			className="rounded-full object-cover"
	// 		/>
	columnHelper.accessor("first_name", {
		header: () => "Name",
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor("last_name", {
		header: () => "Last_name",
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor("email", {
		header: () => "Email",
		cell: (info) => info.getValue(),
	}),
];
export default function UserTable({ page, size }: SearchParams) {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const { isLoading, userData } = useUsers({
		pageNumber: page,
		pageSize: size,
	});

	// set all users in the redux store
	useEffect(() => {
		if (userData) {
			dispatch(addData(userData?.data));
		}
	}, [userData, dispatch]);

	const { users } = useAppSelector((state) => state.userReducer); //get redux store

	// tanstack table
	const table = useReactTable({
		data: users,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	if (isLoading)
		return (
			<div>
				<Spinner size="medium" />
			</div>
		);

	const handlePageChange = (newPage: number, newSize: number) => {
		router.push(`?page=${newPage}&size=${newSize}`);
	};

	return (
		<div className="overflow-auto">
			<div className="flex items-center justify-between w-[900px] mx-auto">
				<h1 className="text-secondary text-2xl font-black tracking-tight uppercase">
					List Of <span className="text-primary-950">users</span>
				</h1>
				<div className="flex justify-end pb-2">
					<CreateUserBtn />
				</div>
			</div>
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
						<tr
							key={row.id}
							className="flex justify-between hover:bg-primary-200 py-4 px-8"
						>
							{row.getVisibleCells().map((cell) => (
								<td
									key={cell.id}
									className="text-sm text-gray-500 whitespace-nowrap"
								>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			<Pagination page={page} size={size} onPageChange={handlePageChange} />
		</div>
	);
}

{
	/* {<table className="w-[900px] mx-auto bg-white my-3">
				<thead className="bg-primary-950 text-white">
					<tr className="flex justify-between py-4">
						<th className="w-[10%] text-sm tracking-wide  capitalize">ID</th>
						<th className="w-[10%] text-sm tracking-wide  capitalize">
							avatar
						</th>
						<th className="w-[20%] text-sm tracking-wide  capitalize">
							first_name
						</th>
						<th className="w-[20%] text-sm tracking-wide  capitalize">
							last_name
						</th>
						<th className="w-[20%] text-sm tracking-wide  capitalize">Email</th>
						<th className="w-[20%] text-sm tracking-wide  capitalize">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((userInfo: User) => (
						<UserTableItems
							key={userInfo.id}
							userInfo={userInfo}
							page={page}
							size={size}
						/>
					))}
				</tbody>
			</table>} */
}
