"use client";

import { useQuery } from "@tanstack/react-query";

import Spinner from "../../../_lib/components/Spinner";
import ResourceTableItems from "./ResourceTableItems";

import { getAllResorcesApi } from "@/app/_lib/data-services";
import { SearchParamsType, TResorces } from "@/app/_lib/types/types";
import { useRouter } from "next/navigation";
import Pagination from "../../_components/Pagination";

export default function ResourceTable({ page, size }: SearchParamsType) {
  const router = useRouter();

  const { data: resourceData, isLoading } = useQuery({
    queryKey: ["resource", page, size],
    queryFn: () => getAllResorcesApi(page, size),
  });

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
      <Pagination page={page} size={size} onPageChange={handlePageChange} />
    </div>
  );
}
