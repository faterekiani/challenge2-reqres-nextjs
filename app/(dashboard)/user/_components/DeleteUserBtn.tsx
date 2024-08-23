import { Trash2 } from "lucide-react";
import { TUsers } from "@/app/_lib/types/types";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserApi } from "@/app/_lib/data-services";
import { showToast } from "../../../_lib/components/Toast";
import { Dispatch, SetStateAction } from "react";
import { deleteUser } from "../slice";
import { useAppDispatch, useAppSelector } from "@/app/_lib/store/hooks";

export default function DeleteUserBtn({
  userId,
  allUserArray,
  onSetAllUserArray,
}: {
  userId: number;
  allUserArray: TUsers[];
  onSetAllUserArray: Dispatch<SetStateAction<TUsers[]>>;
}) {
  const queryClient = useQueryClient();

  const { allData } = useAppSelector((state) => state.userReducer);
  console.log("all data from selectpr:", allData);
  const dispatch = useAppDispatch();

  const { mutate: deleteUserMutate } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      dispatch(deleteUser(userId)); // Dispatch the Redux action to update state
      // onSetAllUserArray(
      // allUserArray.filter((user: TUsers) => user.id !== userId)
      // );
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
