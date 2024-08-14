import { deleteUserApi } from "@/app/_lib/data-services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "../../_components/Toast";

export default function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate: deleteUserMutate } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      showToast("success", "user successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => showToast("error", err.message),
  });

  return { deleteUserMutate };
}
