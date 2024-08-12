"use client";

import { getAllUsersInfoApi } from "@/app/_lib/data-services";
import { TUsers } from "@/app/_lib/types/types";
import { useState } from "react";
import UserTableItems from "@/app/user/_components/UserTableItems";
import { useQuery } from "@tanstack/react-query";

export default function UserTable() {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["users", pageNumber, pageSize],
    queryFn: () => getAllUsersInfoApi(pageNumber, pageSize),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="overflow-auto">
      <table className="w-[900px] mx-auto bg-white">
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
          {data?.data?.map((userInfo: TUsers) => (
            <UserTableItems key={userInfo.id} userInfo={userInfo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
