import Link from "next/link";
import { TUsers } from "../_lib/types/userTypes";
import Image from "next/image";

export default function UserTableItems({ userInfo }: { userInfo: TUsers }) {
  return (
    <Link href={`/user/user-list/${userInfo.id}`} className="w-full ">
      <tr className="hover:bg-primary-200 flex justify-between">
        <td className="px-8 py-4 text-sm text-gray-500 whitespace-nowrap">
          {userInfo.id}
        </td>

        <td className="px-8 py-4 text-sm text-gray-500 whitespace-nowrap">
          <div className="relative size-12">
            <Image
              src={userInfo.avatar}
              alt="user avatar"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </td>
        <td className="px-8 py-4 text-sm text-gray-500 whitespace-nowrap">
          {userInfo.first_name}
        </td>
        <td className="px-8 py-4 text-sm text-gray-500 whitespace-nowrap">
          {userInfo.last_name}
        </td>
        <td className="px-8 py-4 text-sm text-gray-500 whitespace-nowrap">
          {userInfo.email}
        </td>

        <td className="px-8 py-4 text-sm text-gray-500 whitespace-nowrap">
          ...
        </td>
      </tr>
    </Link>
  );
}
