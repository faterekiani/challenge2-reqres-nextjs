import { updateUserApi } from "@/app/_lib/data-services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "../../../_lib/components/Toast";
import { TUpdateUserBody } from "../_components/EditUserBtn";

export default function useEditUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUserMutate } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      showToast("success", "user successfully updated");
      (updatedUser: TUpdateUserBody) => {
        queryClient.setQueryData(["user", updatedUser.id], updatedUser);
      };
    },
    onError: (err) => showToast("error", err.message),
  });

  return { updateUserMutate };
}
