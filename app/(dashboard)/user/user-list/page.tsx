import { Suspense } from "react";
import UserTable from "../_components/UserTable";
import Spinner from "../../../_lib/components/Spinner";
import { SearchParamsType } from "@/app/_lib/types/types";

// meatdata
export const metadata = {
  title: "User list",
};

export default function Page({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) {
  const pageCount = searchParams?.page || "1";
  const pageSize = searchParams?.size || "6";

  return (
    <Suspense fallback={<Spinner className="spinner" />}>
      <UserTable page={pageCount} size={pageSize} />
    </Suspense>
  );
}
