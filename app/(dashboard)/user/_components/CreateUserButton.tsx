"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import Modal from "../../../../lib/components/Modal";
import CreateUserForm from "./CreateUserForm";
import Button from "@/lib/components/Button";

export default function CreateUserButton() {
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

	return (
		<>
			<Button
				variant="primary"
				onClick={() => setIsCreateModalOpen(!isCreateModalOpen)}
				className="flex items-center gap-x-1"
			>
				<Plus />
				Add user
			</Button>
			{isCreateModalOpen && (
				<Modal
					isOpen={isCreateModalOpen}
					onClose={() => setIsCreateModalOpen(false)}
				>
					<CreateUserForm onClose={() => setIsCreateModalOpen(false)} />
				</Modal>
			)}
		</>
	);
}
