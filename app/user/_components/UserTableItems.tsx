import Link from "next/link";
import { TUsers } from "@/app/_lib/types/types";
import Image from "next/image";
import EditUserBtn from "@/app/user/_components/EditUserBtn";
import DeleteUserBtn from "./DeleteUserBtn";
import { Ellipsis } from "lucide-react";
import SingleUserDetailes from "../user-list/[userId]/_components/SingleUserDetailes";

export default function UserTableItems({ userInfo }: { userInfo: TUsers }) {
  return (
    <tr className="flex hover:bg-primary-200 py-2">
      <td className="flex items-center justify-center w-[10%] text-sm text-gray-500 whitespace-nowrap">
        {userInfo.id}
      </td>

      <td className="flex items-center justify-center  w-[10%] text-sm text-gray-500 whitespace-nowrap">
        <div className="relative size-12">
          <Image
            src={userInfo.avatar}
            alt="user avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </td>

      <td className="flex items-center justify-center w-[20%] text-sm text-gray-500 whitespace-nowrap">
        {userInfo.first_name}
      </td>

      <td
        className={`flex items-center justify-center w-[20%] text-sm text-gray-500 whitespace-nowrap`}
      >
        {userInfo.last_name}
      </td>

      <td className="flex items-center justify-center w-[20%] text-sm text-gray-500 whitespace-nowrap">
        {userInfo.email}
      </td>

      <td className="flex items-center justify-center gap-1 w-[20%] text-sm text-gray-500 whitespace-nowrap">
        <EditUserBtn />
        <DeleteUserBtn id={userInfo.id} />

        <Link href={`/user/user-list/${userInfo.id}`}>
          <Ellipsis
            size={15}
            className="hover:text-secondary transition-colors"
          />
        </Link>
      </td>
    </tr>
  );
}
