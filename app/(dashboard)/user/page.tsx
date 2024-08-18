import { SearchParamsType } from "@/app/_lib/types/types";
import TotalStats from "../_components/TotalStats";

export default function Home({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) {
  const pageCount = searchParams?.page || "1";
  const pageSize = searchParams?.size || "6";

  return (
    <main>
      <TotalStats page={pageCount} size={pageSize} />
    </main>
  );
}
