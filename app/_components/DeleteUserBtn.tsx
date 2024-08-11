import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "@/app/_lib/data-services";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteUserBtn({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const router = useRouter();
  console.log(id);

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      alert("user successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      router.push("/user/user-list");
    },
    onError: (err) => alert(err.message),
  });

  return (
    <button
      className="border-[2px] border-secondary  p-2 rounded-lg hover:border-red-600 hover:text-red-600 transition-all"
      onClick={() => mutate(id)}
    >
      <Trash2 size={20} />
    </button>
  );
}
