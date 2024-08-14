import { Suspense } from "react";
import UserTable from "../_components/UserTable";
import { searchParamsType } from "@/app/_lib/types/types";
import Spinner from "../../_components/Spinner";

// meatdata
export const metadata = {
  title: "User list",
};

export default function Page({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  const pageCount = searchParams?.page || "1";
  const pageSize = searchParams?.size || "6";

  return (
    <div>
      <h1 className="mb-6 ml-40 text-secondary text-2xl font-black tracking-tighter uppercase">
        List of <span className="text-primary-950">users</span>
      </h1>

      <Suspense fallback={<Spinner />}>
        <UserTable page={pageCount} size={pageSize} />
      </Suspense>
    </div>
  );
}
