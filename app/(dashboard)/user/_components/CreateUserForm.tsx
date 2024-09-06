"use client";

import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch } from "@/lib/store/hooks";
import { showToast } from "@/lib/_components/Toast";

import { createNewUserApi } from "@/lib/data-services";
import { createNewUser } from "../slice";

// import Spinner from "@/app/components/Spinner";
import Button from "@/lib/_components/Button";
import { User } from "../_types/type";

type Props = {
	onClose: () => void;
};

export default function CreateUserForm({ onClose }: Props) {
	const [formData, setFormData] = useState({
		name: "",
		lastName: "",
		newEmail: "",
		job: "",
	});

	const { name, lastName, newEmail, job } = formData;

	const onChange = (e: ChangeEvent<HTMLInputElement>) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const queryClient = useQueryClient();

	const dispatch = useAppDispatch();

	// fetch data
	const { mutate: createUserMutate, isPending } = useMutation({
		mutationFn: createNewUserApi,
		onSuccess: (data: User) => {
			const newUser = {
				...data,
				first_name: name,
				last_name: lastName,
				email: newEmail,
			};
			dispatch(createNewUser(newUser));

			showToast("success", "user successfully created");
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
			onClose();
		},
		onError: (err) => showToast("error", err.message),
	});

	function handleSubmitCreateUserForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		createUserMutate({ job, name });
	}

	return (
		<div>
			<h2 className="text-2xl font-bold mb-8 text-secondary">Create User</h2>
			<form onSubmit={handleSubmitCreateUserForm}>
				<div className="mb-4">
					<label
						htmlFor="name"
						className="block text-gray-700
     text-sm font-bold mb-2"
					>
						Name
					</label>
					<input
						value={name}
						onChange={(e) => onChange(e)}
						name="name"
						className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="lastName"
						className="block text-gray-700 text-sm font-bold mb-2"
					>
						Last name
					</label>
					<input
						value={lastName}
						onChange={(e) => onChange(e)}
						name="lastName"
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
						onChange={(e) => onChange(e)}
						name="newEmail"
						className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
					/>
				</div>

				<Button
					type="submit"
					disabled={!name || !lastName || !newEmail}
					variant="primary"
					isLoading={isPending}
				>
					Create user
				</Button>
			</form>
		</div>
	);
}
