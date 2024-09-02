"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";

import EditUserForm from "./EditUserForm";
import Modal from "../../../components/Modal";

type Props = {
  userId: number;
};

export default function EditUserBtn({ userId }: Props) {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <>
      <button
        className="hover:text-indigo-700 transition-all"
        onClick={() => setShowEditForm((show) => !show)}
      >
        <Pencil size={15} />
      </button>
      {showEditForm && (
        <Modal isOpen={showEditForm} onClose={() => setShowEditForm(false)}>
          <EditUserForm
            userId={userId}
            onClose={() => setShowEditForm(false)}
          />
        </Modal>
      )}
    </>
  );
}
