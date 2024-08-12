import Spinner from "@/app/_components/Spinner";
import UserTable from "@/app/user/_components/UserTable";
import { Suspense } from "react";

export const metadata = {
  title: "User list",
};

export default async function Page() {
  return (
    <div>
      <h1 className="mb-6 ml-40 text-secondary text-2xl font-black tracking-tighter uppercase">
        List of <span className="text-primary-950">users</span>
      </h1>

      <Suspense fallback={<Spinner />}>
        <UserTable />
      </Suspense>
    </div>
  );
}
