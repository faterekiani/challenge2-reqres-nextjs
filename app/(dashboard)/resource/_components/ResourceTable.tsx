"use client";

import { useQuery } from "@tanstack/react-query";

import Spinner from "../../../components/Spinner";
import ResourceTableItems from "./ResourceTableItems";

import { getAllResorcesApi } from "@/_lib/data-services";
import { SearchParams, Resorce } from "@/_lib/types/types";
import { useRouter } from "next/navigation";
import Pagination from "../../_components/Pagination";

export default function ResourceTable({ page, size }: SearchParams) {
  const router = useRouter();

  const {
    data: resourceData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["resource", page, size],
    queryFn: () => getAllResorcesApi(page, size),
  });

  if (isLoading) return <Spinner size="medium" />;

  if (error) {
    return <div>Error fetching resources: {error.message}</div>;
  }

  const handlePageChange = (newPage: number, newSize: number) => {
    router.push(`?page=${newPage}&size=${newSize}`);
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
          {resourceData?.data.map((resourceInfos: Resorce) => (
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
