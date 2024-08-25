"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SearchParamsType, TUsers } from "@/app/_lib/types/types";

import { useUsers } from "../hooks/useUser";
import Spinner from "../../../_lib/components/Spinner";
import UserTableItems from "./UserTableItems";
import Pagination from "../../_components/Pagination";
import CreateUserBtn from "./CreateUserBtn";
import { useAppDispatch, useAppSelector } from "@/app/_lib/store/hooks";
import { addData } from "../slice";

export default function UserTable({ page, size }: SearchParamsType) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isLoading, userData } = useUsers(page, size); //get all users

  // set all users in the redux store
  useEffect(() => {
    if (userData) {
      dispatch(addData(userData?.data));
    }
  }, [userData, dispatch]);

  const { allDataRedux } = useAppSelector((state) => state.userReducer); //get redux store
  console.log(allDataRedux);

  if (isLoading)
    return (
      <div>
        <Spinner className="spinner" />
      </div>
    );

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
          <CreateUserBtn />
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
          {allDataRedux?.map((userInfo: TUsers) => (
            <UserTableItems key={userInfo.id} userInfo={userInfo} />
          ))}
        </tbody>
      </table>

      <Pagination page={page} size={size} onPageChange={handlePageChange} />
    </div>
  );
}
