"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

import { useUsers } from "../../../../lib/hook/useUser";
import Pagination from "../../../../lib/_components/Pagination";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { usersData } from "../slice";
import { SearchParams } from "@/lib/types/types";
import { User } from "../_types/type";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import defaultImage from "../../../../public/default.jpg";

import { DynamicTable } from "../../../../lib/_components/DynamicTable ";
import DeleteUserConfirmation from "./DeleteUserConfirmation";
import CreateUserButton from "./CreateUserButton";
import EditUserModal from "./EditUserModal";

export default function UsersList({ page, size }: SearchParams) {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const columns = useMemo<ColumnDef<User>[]>(
		() => [
			{
				accessorKey: "id",
				header: "ID",
			},
			{
				accessorKey: "avatar",
				header: "Avatar",
				cell: ({ row }) => {
					return (
						<Image
							src={row.original.avatar ? row.original.avatar : defaultImage}
							alt="Avatar"
							width={40}
							height={40}
							className="rounded-full"
						/>
					);
				},
			},
			{
				accessorKey: "first_name",
				header: "Name",
			},
			{
				accessorKey: "last_name",
				header: "Last name",
			},
			{
				accessorKey: "email",
				header: "Email",
			},
			{
				header: "Actions",
				cell: ({ row }) => {
					return (
						<div className="flex items-center gap-x-2">
							<EditUserModal userId={row.original.id} />

							<DeleteUserConfirmation userId={row.original.id} />
						</div>
					);
				},
			},
		],
		[],
	);

	const { isLoading, userData } = useUsers({
		pageNumber: page,
		pageSize: size,
	});

	// set all users in the redux store
	useEffect(() => {
		if (userData) {
			dispatch(usersData(userData?.data));
		}
	}, [userData, dispatch]);

	const { users } = useAppSelector((state) => state.userReducer); //get redux store

	const handlePageChange = (newPage: number, newSize: number) => {
		router.push(`?page=${newPage}&size=${newSize}`);
	};

	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-secondary text-2xl font-black tracking-tight uppercase">
					List Of <span className="text-primary-950">users</span>
				</h1>
				<div className="flex justify-end pb-2">
					<CreateUserButton />
				</div>
			</div>
			<DynamicTable
				data={users}
				columns={columns}
				isLoading={isLoading}
				onClick={(row) => router.push(`/user/user-list/${row.original.id}`)}
			/>

			<Pagination page={page} size={size} onPageChange={handlePageChange} />
		</>
	);
}
