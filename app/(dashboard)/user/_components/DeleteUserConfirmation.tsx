import { Trash2 } from "lucide-react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserApi } from "@/lib/data-services";
import { showToast } from "../../../../lib/_components/Toast";
import { deleteUser } from "../slice";
import { useAppDispatch } from "@/lib/store/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "@/lib/_components/Modal";
import Button from "@/lib/_components/Button";
import apiRoutes from "@/lib/constants";

type Props = {
	userId: number;
};

export default function DeleteUserConfirmation({ userId }: Props) {
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const queryClient = useQueryClient();

	const router = useRouter();

	const dispatch = useAppDispatch();

	const { mutate: deleteUserMutate } = useMutation({
		mutationFn: deleteUserApi,
		onSuccess: () => {
			setIsDeleteModalOpen(false);
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
		setIsDeleteModalOpen(false);
	};

	return (
		<>
			<button
				className="hover:text-red-600 transition-all"
				onClick={() => setIsDeleteModalOpen(true)}
			>
				<Trash2 size={15} />
			</button>
			<Modal
				isOpen={isDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
			>
				<h2 className="text-2xl font-bold mb-2 text-secondary">Delete user</h2>
				<p className="text-base text-secondary">
					Are you sure you want to delete this user?
				</p>
				<div className="flex items-center justify-end gap-x-4 text-sm pt-6">
					<Button
						variant="secondary"
						onClick={() => setIsDeleteModalOpen(false)}
					>
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
