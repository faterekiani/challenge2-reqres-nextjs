"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

import { useUsers } from "../../../../_lib/hook/useUser";
import Spinner from "../../../../_lib/_components/Spinner";
import Pagination from "../../_components/Pagination";
import { useAppDispatch, useAppSelector } from "@/_lib/store/hooks";
import { addData } from "../slice";
import { SearchParams } from "@/_lib/types/types";
import { User } from "../_types/type";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import defaultImage from "../../../../public/default.jpg";

import Link from "next/link";
import { Eye } from "lucide-react";
import { DynamicTable } from "../../_components/DynamicTable ";
import DeleteUserConfirmation from "./DeleteUserConfirmation";
import CreateUserButton from "./CreateUserButton";
import EditUserModal from "./EditUserModal";

export default function UserTable({ page, size }: SearchParams) {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const columns = useMemo<ColumnDef<User>[]>(
		() => [
			{
				accessorKey: "id",
				header: "ID",
			},
			{
				accessorKey: "id",
				header: () => "Avatar",
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
				header: "Emal",
			},
			{
				accessorKey: "id",
				header: () => "Actions",
				cell: ({ row }) => {
					return (
						<div className="flex items-center gap-x-2">
							<Link href={`/user/user-list/${row.original.id}`}>
								<Eye
									size={15}
									className="hover:text-secondary transition-colors"
								/>
							</Link>

							<EditUserModal userId={row.original.id} />

							<DeleteUserConfirmation userId={row.original.id} />
						</div>
					);
				},
			},
		],
		[],
	);

	const { isLoading, userData, isFetching } = useUsers({
		pageNumber: page,
		pageSize: size,
	});

	// set all users in the redux store
	useEffect(() => {
		if (userData) {
			dispatch(addData(userData?.data));
		}
	}, [userData, dispatch, isFetching, isLoading]);

	const { users } = useAppSelector((state) => state.userReducer); //get redux store

	if (isLoading) return <Spinner size="medium" />;

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
					<CreateUserButton />
				</div>
			</div>
			<DynamicTable data={users} columns={columns} />

			<Pagination page={page} size={size} onPageChange={handlePageChange} />
		</div>
	);
}
