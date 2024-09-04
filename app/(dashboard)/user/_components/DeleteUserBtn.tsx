import { Trash2 } from "lucide-react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserApi, getAllUsersInfoApi } from "@/_lib/data-services";
import { showToast } from "../../../components/Toast";
import { deleteUser } from "../slice";
import { useAppDispatch } from "@/_lib/store/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";

type Props = {
	userId: number;
	page: number;
	size: number;
};
export default function DeleteUserBtn({ userId, page, size }: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const queryClient = useQueryClient();

	const router = useRouter();

	const dispatch = useAppDispatch();

	const { mutate: deleteUserMutate } = useMutation({
		mutationFn: deleteUserApi,
		onSuccess: async () => {
			setIsModalOpen(false);
			dispatch(deleteUser(userId)); // update the state

			const nextPage = await queryClient.fetchQuery({
				queryKey: ["users", { page: page + 1 }],
				queryFn: () =>
					getAllUsersInfoApi({ pageNumber: page + 1, pageSize: size }),
				// staleTime: Infinity,
			});

			console.log("next", nextPage);

			showToast("success", "user successfully deleted");
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});

			router.push("/user/user-list");
		},
		onError: (err) => showToast("error", err.message),
	});

	const handleDelete = () => {
		deleteUserMutate(userId);
		setIsModalOpen(false);
	};

	return (
		<>
			<button
				className="hover:text-red-600 transition-all"
				onClick={() => setIsModalOpen(true)}
			>
				<Trash2 size={15} />
			</button>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<h2 className="text-2xl font-bold mb-2 text-secondary">Delete user</h2>
				<p className="text-base text-secondary">
					Are you sure you want to delete this user?
				</p>
				<div className="flex items-center justify-end gap-x-4 text-sm pt-6">
					<Button variant="secondary" onClick={() => setIsModalOpen(false)}>
						Cancel
					</Button>
					<Button variant="primary" onClick={handleDelete}>
						Yes, Delete
					</Button>
				</div>
			</Modal>
		</>
	);
}

//  const nextPage = await queryClient.fetchQuery({
//   queryKey: ["users", { page: page + 1 }],
//   queryFn: () => getAllUsersInfoApi(page + 1, size),
//   staleTime: Infinity, // Keep the data fresh
// });
// console.log("nextPage", nextPage);

// const updatedUsers = userData?.data?.filter((user) => user.id !== userId);
// if (updatedUsers && nextPage) {
//   updatedUsers.push(nextPage[0]);
//   queryClient.setQueryData(["users"], updatedUsers);
// }

// console.log("updatedUsers", updatedUsers);
