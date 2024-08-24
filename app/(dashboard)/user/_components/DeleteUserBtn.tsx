import { Trash2 } from "lucide-react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserApi } from "@/app/_lib/data-services";
import { showToast } from "../../../_lib/components/Toast";
import { deleteUser } from "../slice";
import { useAppDispatch } from "@/app/_lib/store/hooks";

export default function DeleteUserBtn({ userId }: { userId: number }) {
  const queryClient = useQueryClient();

  const dispatch = useAppDispatch();

  const { mutate: deleteUserMutate } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      dispatch(deleteUser(userId)); // Dispatch the Redux action to update state

      showToast("success", "user successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => showToast("error", err.message),
  });

  return (
    <button
      className="hover:text-red-600 transition-all"
      onClick={() => deleteUserMutate(userId)}
    >
      <Trash2 size={15} />
    </button>
  );
}

// onSuccess: () => {
//   onSetAllUserArray(
//     allUserArray.filter((user: TUsers) => user.id !== userId)
//   );
