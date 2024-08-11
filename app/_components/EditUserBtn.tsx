import { Pencil } from "lucide-react";

export default function EditUserBtn() {
  return (
    <button className="border-[2px] border-secondary  p-2 rounded-lg hover:border-primary-950 hover:text-primary-950 transition-all ">
      <Pencil size={20} />
    </button>
  );
}
