"use client";

import { getAllResorcesApi } from "@/app/_lib/data-services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ResourceTableItems from "./ResourceTableItems";
import { TResorces } from "@/app/_lib/types/userTypes";

export default function ResourceTable() {
  const [pageNumber, setPageNumber] = useState(2);
  const [pageSize, setPageSize] = useState(6);

  const {
    data: resourceData,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["resource", pageNumber, pageSize],
    queryFn: () => getAllResorcesApi(pageNumber, pageSize),
  });

  if (isLoading) return <div>is Loading...</div>;
  if (isError) return <div>Error...</div>;

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
    </div>
  );
}
