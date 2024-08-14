import { Trash2 } from "lucide-react";
import { TUsers } from "@/app/_lib/types/types";

import useDeleteUser from "../hooks/useDeleteUser";
import { useState } from "react";

export default function DeleteUserBtn({
  userId,
  allUserArray,
}: {
  userId: number;
  allUserArray: TUsers[];
}) {
  const [updatedUser, setUpdaterdUser] = useState(allUserArray);

  const { deleteUserMutate } = useDeleteUser();

  return (
    <button
      className="hover:text-red-600 transition-all"
      onClick={() => deleteUserMutate(userId)}
    >
      <Trash2 size={15} />
    </button>
  );
}
