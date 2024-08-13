import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserApi } from "@/app/_lib/data-services";
import { Trash2 } from "lucide-react";
import { TUsers } from "@/app/_lib/types/types";

export default function DeleteUserBtn({
  userId,
  allUserArray,
}: {
  userId: number;
  allUserArray: TUsers[];
}) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      alert("user successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => alert(err.message),
  });

  // allUserArray.filter((item) => item.id === userId);

  return (
    <button
      className="hover:text-red-600 transition-all"
      onClick={() => mutate(userId)}
    >
      <Trash2 size={15} />
    </button>
  );
}
