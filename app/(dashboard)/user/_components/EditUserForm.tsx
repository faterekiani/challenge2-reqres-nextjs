import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/store/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUserApi } from "@/lib/data-services";
import { useSingleUSer } from "../../../../lib/hook/useSingleUser";
import { editUser } from "../slice";

import { useRouter } from "next/navigation";
import apiRoutes from "@/lib/constants";
import { showToast } from "@/lib/components/Toast";
import Button from "@/lib/components/Button";

type Props = {
	userId: number;
	onClose: () => void;
};

export default function EditUserForm({ userId, onClose }: Props) {
	const [newName, setNewName] = useState("");
	const [newLastName, setNewLastName] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [editUserJob] = useState("");

	const queryClient = useQueryClient();
	const dispatch = useAppDispatch();
	const router = useRouter();

	// SINGLE USER
	const { singleUserData } = useSingleUSer(userId);

	// EDIT
	const { mutate: EditUserMutate, isPending } = useMutation({
		mutationFn: updateUserApi,
		onSuccess: () => {
			const updateUser = {
				first_name: newName,
				last_name: newLastName,
				email: newEmail,
			};

			dispatch(editUser({ userId, updateUser }));

			showToast("success", "user successfully Updated");
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
			onClose();
			router.push(apiRoutes.user + apiRoutes.userList);
		},
		onError: (err) => showToast("error", err.message),
	});

	useEffect(() => {
		if (singleUserData) {
			setNewName(singleUserData.data.first_name);
			setNewLastName(singleUserData.data.last_name);
			setNewEmail(singleUserData.data.email);
		}
	}, [singleUserData]);

	function handleSubmitEditUserForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		EditUserMutate({ userId, name: newName, job: editUserJob });
	}

	return (
		<div>
			<h2 className="text-2xl font-bold mb-8 text-secondary">Edit User</h2>
			<form onSubmit={handleSubmitEditUserForm}>
				<div className="mb-4">
					<label
						htmlFor="name"
						className="block text-gray-700
       text-sm font-bold mb-2"
					>
						Name
					</label>
					<input
						value={newName}
						onChange={(e) => setNewName(e.target.value)}
						name="name"
						className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="newLastName"
						className="block text-gray-700 text-sm font-bold mb-2"
					>
						Last name
					</label>
					<input
						value={newLastName}
						onChange={(e) => setNewLastName(e.target.value)}
						name="newLastName"
						className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="newEmail"
						className="block text-gray-700 text-sm font-bold mb-2"
					>
						Email
					</label>
					<input
						value={newEmail}
						onChange={(e) => setNewEmail(e.target.value)}
						name="email"
						className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
					/>
				</div>

				<Button
					type="submit"
					variant="primary"
					isLoading={isPending}
					disabled={!newName || !newLastName || !newEmail}
				>
					Edit User
				</Button>
			</form>
		</div>
	);
}
