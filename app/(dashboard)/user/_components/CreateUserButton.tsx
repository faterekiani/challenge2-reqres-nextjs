"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import Modal from "../../../../_lib/_components/Modal";
import CreateUserForm from "./CreateUserForm";
import Button from "@/_lib/_components/Button";

export default function CreateUserButton() {
	const [showCreateForm, setShowCreateForm] = useState(false);

	return (
		<>
			<Button
				variant="primary"
				onClick={() => setShowCreateForm(!showCreateForm)}
				className="flex items-center gap-x-1"
			>
				<Plus />
				Add user
			</Button>
			{showCreateForm && (
				<Modal isOpen={showCreateForm} onClose={() => setShowCreateForm(false)}>
					<CreateUserForm onClose={() => setShowCreateForm(false)} />
				</Modal>
			)}
		</>
	);
}
