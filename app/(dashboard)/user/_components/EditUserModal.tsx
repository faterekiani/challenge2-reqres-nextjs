"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";

import EditUserForm from "./EditUserForm";
import Modal from "../../../../lib/components/Modal";

type Props = {
	userId: number;
};

export default function EditUserModal({ userId }: Props) {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	return (
		<>
			<button
				className="hover:text-indigo-700 transition-all"
				onClick={(event) => {
					event.stopPropagation();
					setIsEditModalOpen((show) => !show);
				}}
			>
				<Pencil size={15} />
			</button>
			{isEditModalOpen && (
				<Modal
					isOpen={isEditModalOpen}
					onClose={() => setIsEditModalOpen(false)}
				>
					<EditUserForm
						userId={userId}
						onClose={() => setIsEditModalOpen(false)}
					/>
				</Modal>
			)}
		</>
	);
}
