import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";
import ResourceTable from "@/app/resource/_components/ResourceTable";

export const metadata = {
  title: "Resource list",
};

export default function page() {
  return (
    <div>
      <h1 className="mb-6 ml-40 text-secondary text-2xl font-black tracking-tighter uppercase">
        List of <span className="text-primary-950">resources</span>
      </h1>
      <Suspense fallback={<Spinner />}>
        <ResourceTable />
      </Suspense>
    </div>
  );
}
