import { Folder, User } from "lucide-react";
import TotalStat from "./TotalStat";
import useGetAllResources from "../resource/_components/useGetAllResources";

export default function TotalStats() {
  return (
    <div className="flex gap-6">
      <TotalStat title="user" count={12} icon={<User />} />
      <TotalStat title="resource" count={12} icon={<Folder />} />
    </div>
  );
}
