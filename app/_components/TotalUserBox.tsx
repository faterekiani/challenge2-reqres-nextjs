import { User } from "lucide-react";

export default function TotalUserBox({}) {
  return (
    <div className="flex flex-col w-64 gap-y-4 shadow-sm rounded-lg bg-white text-secondary capitalize px-8 py-6 text-nowrap">
      <div className="flex items-center gap-2  ">
        <span className="rounded-full p-1.5 bg-primary-200 text-primary-950">
          <User />
        </span>
        <p className="text-md font-medium">total number </p>
      </div>
      <div className="px-2">12</div>
    </div>
  );
}
