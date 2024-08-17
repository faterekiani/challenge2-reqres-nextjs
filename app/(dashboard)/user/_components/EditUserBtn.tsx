"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Pencil } from "lucide-react";

import EditUserForm from "./EditUserForm";
import Modal from "../../_components/Modal";
import { TUsers } from "@/app/_lib/types/types";

export type TUpdateUserBody = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type Props = {
  userId: number;
  allUserArray: TUsers[];
  onSetAllUserArray: Dispatch<SetStateAction<TUsers[]>>;
};

export default function EditUserBtn({
  userId,
  allUserArray,
  onSetAllUserArray,
}: Props) {
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
            allUserArray={allUserArray}
            onSetAllUserArray={onSetAllUserArray}
            onClose={() => setShowEditForm(false)}
          />
        </Modal>
      )}
    </>
  );
}
