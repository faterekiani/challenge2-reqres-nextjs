import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserApi } from "@/app/_lib/data-services";
import { Trash2 } from "lucide-react";

export default function DeleteUserBtn({ id }: { id: number }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      alert("user successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => alert(err.message),
  });

  return (
    <button
      className="hover:text-red-600 transition-all"
      onClick={() => mutate(id)}
    >
      <Trash2 size={15} />
    </button>
  );
}
