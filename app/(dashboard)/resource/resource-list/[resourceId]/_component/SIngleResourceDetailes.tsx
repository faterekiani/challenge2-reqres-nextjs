"use client";

import useSingleResource from "@/_lib/hook/useSingleResource";
import Spinner from "@/app/components/Spinner";

type Props = {
  resourceId: number;
};

export default function SingleResourceDetailes({ resourceId }: Props) {
  const { isLoading, singleResourceData } = useSingleResource(resourceId);

  if (isLoading) return <Spinner size="medium" />;

  if (!singleResourceData) return null;

  const { name, year, color, pantone_value } = singleResourceData?.data;

  return (
    <div className="flex flex-col gap-3 px-6 py-6">
      <p className="text-lg font-semibold capitalize text-secondary">
        name: {name}
      </p>
      <p className="text-lg font-semibold capitalize text-secondary">
        year: {year}
      </p>
      <p className="text-lg font-semibold capitalize text-secondary">
        color:
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
