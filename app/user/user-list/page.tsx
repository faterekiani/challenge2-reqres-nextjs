import Spinner from "@/app/_components/Spinner";
import UserTable from "@/app/_components/UserTable";
import { Suspense } from "react";

export const metadata = {
  title: "User list",
};

export default async function Page() {
  return (
    <div>
      <h1 className="mb-6 font-semibold text-secondary text-2xl">
        List of users
      </h1>
      <Suspense fallback={<Spinner />}>
        <UserTable />
      </Suspense>
    </div>
  );
}
