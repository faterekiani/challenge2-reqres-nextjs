"use client";

import { Folder, User } from "lucide-react";
import TotalStat from "./TotalStat";
import { useUsers } from "../user/hooks/useUser";
import { SearchParamsType } from "@/app/_lib/types/types";
import useGetAllResources from "../resource/_components/useGetAllResources";

export default function TotalStats({ page, size }: SearchParamsType) {
  const { userData, isLoading: isLoadingUser } = useUsers(page, size);

  const { resourceData, isLoading: isLoadingResource } = useGetAllResources(
    page,
    size
  );

  const totalUser = userData?.total;
  const totalResource = resourceData?.total;

  return (
    <div className="flex gap-6">
      <TotalStat
        title="user"
        count={`${isLoadingUser ? "..." : totalUser}`}
        icon={<User />}
      />
      <TotalStat
        title="resource"
        count={`${isLoadingResource ? "..." : totalResource}`}
        icon={<Folder />}
      />
    </div>
  );
}
