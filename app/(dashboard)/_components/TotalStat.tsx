import { User } from "lucide-react";

type Props = {
  title: string;
  count: number;
  icon?: JSX.Element;
};

export default function TotalStat({ title, count, icon = <User /> }: Props) {
  return (
    <div className="flex flex-col w-64 gap-y-4 shadow-sm rounded-lg bg-white text-secondary px-8 py-6 text-nowrap">
      <div className="flex items-center gap-2">
        <span className="rounded-full p-1.5 bg-primary-200 text-primary-950">
          {icon}
        </span>
        <p className="text-md font-medium">
          total <span className="uppercase font-semibold">{title}</span>
        </p>
      </div>
      <div className="px-2 font-semibold">{count}</div>
    </div>
  );
}
