import { Trash2 } from "lucide-react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserApi } from "@/_lib/data-services";
import { showToast } from "../../../../_lib/_components/Toast";
import { deleteUser } from "../slice";
import { useAppDispatch } from "@/_lib/store/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "@/_lib/_components/Modal";
import Button from "@/_lib/_components/Button";
import apiRoutes from "@/_lib/constants";

type Props = {
	userId: number;
	// page: number;
	// size: number;
};
export default function DeleteUserConfirmation({ userId }: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const queryClient = useQueryClient();

	const router = useRouter();

	const dispatch = useAppDispatch();

	const { mutate: deleteUserMutate } = useMutation({
		mutationFn: deleteUserApi,
		onSuccess: () => {
			setIsModalOpen(false);
			dispatch(deleteUser(userId)); // update the state

			showToast("success", "user successfully deleted");
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});

			router.push(apiRoutes.user + apiRoutes.userList);
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
