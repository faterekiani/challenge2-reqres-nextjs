"use client";

import { getSingleResourceInfoApi } from "@/app/_lib/data-services";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../_components/Spinner";

export default function SingleResourceDetailes({
  resourceId,
}: {
  resourceId: number;
}) {
  const {
    data: singleResourceData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["resource", resourceId],
    queryFn: () => getSingleResourceInfoApi(resourceId),
  });

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (isError) return <div>Error: {error.message}</div>;

  const { id, name, year, color, pantone_value } = singleResourceData?.data;

  return (
    <div className="flex flex-col gap-3 px-6 py-6">
      <p className="text-lg font-semibold capitalize text-secondary">
        name: {name}
      </p>
      <p className="text-lg font-semibold capitalize text-secondary">
        year: {year}
      </p>
      <p className="text-lg font-semibold capitalize text-secondary">
        color:{" "}
        <span className={`bg-[${color}] text-white px-2 py-1 rounded-lg`}>
          {color}
        </span>
      </p>

      <p className="text-lg font-semibold capitalize text-secondary">
        pantone value: {pantone_value}
      </p>
    </div>
  );
}
