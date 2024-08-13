"use client";

import { useQuery } from "@tanstack/react-query";

import UserTableItems from "@/app/user/_components/UserTableItems";
import Pagination from "@/app/_components/Pagination";
import Spinner from "@/app/_components/Spinner";

import { getAllUsersInfoApi } from "@/app/_lib/data-services";
import { TUsers } from "@/app/_lib/types/types";
import { searchParamsType } from "../user-list/page";
import { useRouter } from "next/navigation";

export default function UserTable({ page, size }: searchParamsType) {
  const router = useRouter();
  // fetch all users
  const {
    isLoading,
    isError,
    error,
    data: userData,
  } = useQuery({
    queryKey: ["users", page, size],
    queryFn: () => getAllUsersInfoApi(page, size),
  });

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (isError) return <div>Error: {error.message}</div>;

  const allUserArray = userData.data;
  const totalCount = userData.total;

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`);
  };

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
          {allUserArray?.map((userInfo: TUsers) => (
            <UserTableItems
              key={userInfo.id}
              userInfo={userInfo}
              allUserArray={allUserArray}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        totalCount={totalCount}
        page={page}
        size={size}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

// const [pageNumber, setPageNumber] = useState(1);
// const [pageSize, setPageSize] = useState(6);
