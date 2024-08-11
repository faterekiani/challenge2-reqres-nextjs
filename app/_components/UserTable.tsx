"use client";

import { getAllUsersInfo } from "@/app/_lib/data-services";
import { TUsers } from "@/app/_lib/types/userTypes";
import { useState } from "react";
import UserTableItems from "./UserTableItems";
import { useQuery } from "@tanstack/react-query";

export default function UserTable() {
  const [pageNumber, setPageNumber] = useState(2);
  const [pageSize, setPageSize] = useState(6);

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["users", pageNumber, pageSize],
    queryFn: () => getAllUsersInfo(pageNumber, pageSize),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="overflow-auto">
      <table className="min-w-full bg-white rounded-lg">
        <thead className=" bg-primary-950 text-white divide divide-gray-200 rounded-t-lg">
          <tr className="flex justify-between">
            <th className="px-8 py-4 text-sm tracking-wide text-left capitalize">
              ID
            </th>
            <th className="px-8 py-4 text-sm tracking-wide text-left capitalize">
              avatar
            </th>
            <th className="px-8 py-4 text-sm tracking-wide text-left capitalize">
              first_name
            </th>
            <th className="px-8 py-4 text-sm tracking-wide text-left capitalize">
              last_name
            </th>
            <th className="py-4 text-sm tracking-wide text-left capitalize">
              Email
            </th>
            <th className="px-8 py-4 text-sm tracking-wide text-left capitalize">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 rounded-b-lg">
          {data?.data?.map((userInfo: TUsers) => (
            <UserTableItems key={userInfo.id} userInfo={userInfo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
