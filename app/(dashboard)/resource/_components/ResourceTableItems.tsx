import { TResorces } from "@/app/_lib/types/types";
import Link from "next/link";

type Props = {
  resourceInfos: TResorces;
};

export default function ResourceTableItems({ resourceInfos }: Props) {
  const { id: resourceId, name, year, color, pantone_value } = resourceInfos;

  return (
    <Link href={`/resource/resource-list/${resourceId}`} className="w-full">
      <tr className="flex hover:bg-primary-200 py-2">
        <td className="flex items-center justify-center w-[10%] text-sm text-gray-500 whitespace-nowrap">
          {resourceId}
        </td>

        <td className="flex items-center justify-center  w-[30%] text-sm text-gray-500 whitespace-nowrap">
          {name}
        </td>
        <td className="flex items-center justify-center w-[20%] text-sm text-gray-500 whitespace-nowrap">
          {year}
        </td>
        <td
          className={`flex items-center justify-center w-[20%] text-sm text-gray-500 whitespace-nowrap`}
        >
          <span className={`bg-[${color}] text-gray-500 p-1 w-[85px]`}>
            {color}
          </span>
        </td>

        <td className="flex items-center justify-center w-[20%] text-sm text-gray-500 whitespace-nowrap ">
          {pantone_value}
        </td>
      </tr>
    </Link>
  );
}
