"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";

import EditUserForm from "../user-list/[userId]/_components/EditUserForm";
import Modal from "../../_components/Modal";

export type TUpdateUserBody = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export default function EditUserBtn({ userId }: { userId: number }) {
  const [showEditForm, setShowEditForm] = useState(false);

  // const { updateUserMutate } = useEditUser();

  // function handleEditUser(userId: number, updatedUserData: TUpdateUserBody) {
  //   setShowEditForm(!showEditForm);
  //   updateUserMutate({ id, ...updatedUserData });
  // }

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
          <EditUserForm />
        </Modal>
      )}
    </>
  );
}
