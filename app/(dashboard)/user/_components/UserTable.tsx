"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchParamsType, TUsers } from "@/app/_lib/types/types";

import { useUsers } from "../hooks/useUser";
import Spinner from "../../../_lib/components/Spinner";
import UserTableItems from "./UserTableItems";
import Pagination from "../../_components/Pagination";
import CreateUserBtn from "./CreateUserBtn";
import { useAppSelector } from "@/app/_lib/store/hooks";

export default function UserTable({ page, size }: SearchParamsType) {
  const router = useRouter();

  const { isLoading, userData } = useUsers(page, size);

  const { allData } = useAppSelector((state) => state.userReducer);
  console.log("alldata", allData[0]);

  const [allDataArray, setAllDataArray] = useState<TUsers[]>([]);

  useEffect(() => {
    if (userData) setAllDataArray(userData?.data);
  }, [userData]);

  if (isLoading)
    return (
      <div>
        <Spinner className="spinner" />
      </div>
    );

  const totalUserCount = userData.total;

  const handlePageChange = (newPage: string) => {
    router.push(`?page=${newPage}`);
  };

  return (
    <div className="overflow-auto">
      <div className="flex items-center justify-between w-[900px] mx-auto">
        <h1 className="text-secondary text-2xl font-black tracking-tight uppercase">
          List Of <span className="text-primary-950">users</span>
        </h1>
        <div className="flex justify-end pb-2">
          <CreateUserBtn
            allUserArray={allDataArray}
            onSetAllUserArray={setAllDataArray}
          />
        </div>
      </div>

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
          {allDataArray?.map((userInfo: TUsers) => (
            <UserTableItems
              key={userInfo.id}
              userInfo={userInfo}
              allUserArray={allDataArray}
              onSetAllUserArray={setAllDataArray}
            />
          ))}
        </tbody>
      </table>

      <Pagination
        totalUserCount={totalUserCount}
        page={page}
        size={size}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
