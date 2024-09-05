"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useUsers } from "../../../../_lib/hook/useUser";
import Spinner from "../../../components/Spinner";
import Pagination from "../../_components/Pagination";
import CreateUserBtn from "./CreateUserBtn";
import { useAppDispatch, useAppSelector } from "@/_lib/store/hooks";
import { addData } from "../slice";
import { SearchParams } from "@/_lib/types/types";
import { User } from "../_types/type";
import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import EditUserBtn from "./EditUserBtn";
import DeleteUserBtn from "./DeleteUserBtn";
import defaultImage from "../../../../public/default.jpg";

import Link from "next/link";
import { Eye } from "lucide-react";
import { DynamicTable } from "../../_components/DynamicTable ";

// tanstack table
const columnHelper = createColumnHelper<User>();

const columns = [
	columnHelper.accessor("id", {
		header: () => "ID",
	}),

	columnHelper.accessor("avatar", {
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
	}),
	columnHelper.accessor("first_name", {
		header: () => "Name",
	}),
	columnHelper.accessor("last_name", {
		header: () => "Last name",
	}),
	columnHelper.accessor("email", {
		header: () => "Email",
	}),
	columnHelper.accessor("id", {
		header: () => "Actions",
		cell: ({ row }) => {
			return (
				<div className="flex items-center gap-x-2">
					<Link href={`/user/user-list/${row.original.id}`}>
						<Eye size={15} className="hover:text-secondary transition-colors" />
					</Link>

					<EditUserBtn userId={row.original.id} />

					<DeleteUserBtn userId={row.original.id} />
				</div>
			);
		},
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
			<DynamicTable data={users} columns={columns} />

			<Pagination page={page} size={size} onPageChange={handlePageChange} />
		</div>
	);
}
