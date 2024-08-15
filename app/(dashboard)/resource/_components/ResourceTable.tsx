"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import Spinner from "../../_components/Spinner";
import ResourceTableItems from "./ResourceTableItems";

import { getAllResorcesApi } from "@/app/_lib/data-services";
import { SearchParamsType, TResorces } from "@/app/_lib/types/types";
import { useRouter } from "next/navigation";
import Pagination from "../../_components/Pagination";
import { useUsers } from "../../user/hooks/useUser";

export default function ResourceTable({ page, size }: SearchParamsType) {
  const router = useRouter();

  const totalUserCount = 12;

  const {
    data: resourceData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["resource", page, size],
    queryFn: () => getAllResorcesApi(page, size),
  });

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );

  const handlePageChange = (newPage: string) => {
    router.push(`?page=${newPage}`);
  };

  return (
    <div className="overflow-auto">
      <table className="w-[900px] mx-auto bg-white">
        <thead className="bg-primary-950 text-white">
          <tr className="flex justify-between py-4">
            <th className="w-[10%] text-sm tracking-wide  capitalize">ID</th>
            <th className="w-[30%] text-sm tracking-wide  capitalize">name</th>
            <th className="w-[20%] text-sm tracking-wide  capitalize">year</th>
            <th className="w-[20%] text-sm tracking-wide  capitalize">color</th>
            <th className="w-[20%] text-sm tracking-wide  capitalize">
              pantone_value
            </th>
          </tr>
        </thead>
        <tbody>
          {resourceData?.data?.map((resourceInfos: TResorces) => (
            <ResourceTableItems
              key={resourceInfos.id}
              resourceInfos={resourceInfos}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        page={page}
        size={size}
        totalUserCount={totalUserCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
