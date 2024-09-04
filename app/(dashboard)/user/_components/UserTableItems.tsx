import Image from "next/image";
import DeleteUserBtn from "./DeleteUserBtn";
import { Eye } from "lucide-react";
import EditUserBtn from "./EditUserBtn";
import defaultImage from "../../../../public/default.jpg";
import Link from "next/link";
import { User } from "../_types/type";

type Props = {
	userInfo: User;
	page: number;
	size: number;
};
export default function UserTableItems({ userInfo, page, size }: Props) {
	const { id: userId, avatar, first_name, last_name, email } = userInfo;

	return (
		<tr className="flex hover:bg-primary-200 py-2">
			<td className="flex items-center justify-center w-[10%] text-sm text-gray-500 whitespace-nowrap">
				{userId}
			</td>

			<td className="flex items-center justify-center  w-[10%] text-sm text-gray-500 whitespace-nowrap">
				<div className="relative size-12">
					<Image
						src={avatar ? avatar : defaultImage}
						alt="user avatar"
						fill
						className="rounded-full object-cover"
					/>
				</div>
			</td>

			<td className="flex items-center justify-center w-[20%] text-sm text-gray-500 whitespace-nowrap">
				{first_name}
			</td>

			<td
				className={
					"flex items-center justify-center w-[20%] text-sm text-gray-500 whitespace-nowrap"
				}
			>
				{last_name}
			</td>

			<td className="flex items-center justify-center w-[20%] text-sm text-gray-500 whitespace-nowrap">
				{email}
			</td>

			<td className="flex items-center justify-center gap-1 w-[20%] text-sm text-gray-500 whitespace-nowrap">
				<EditUserBtn userId={userId} />

				<DeleteUserBtn userId={userId} page={page} size={size} />

				<Link href={`/user/user-list/${userInfo.id}`}>
					<Eye size={15} className="hover:text-secondary transition-colors" />
				</Link>
			</td>
		</tr>
	);
}

// NEXT_PUBLIC_BASE_URL=https://reqres.in/api
