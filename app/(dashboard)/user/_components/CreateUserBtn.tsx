"use client";

import { Plus } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import Modal from "../../../_lib/components/Modal";
import CreateUserForm from "./CreateUserForm";
import { TUsers } from "@/app/_lib/types/types";

export default function CreateUserBtn({
  allUserArray,
  onSetAllUserArray,
}: {
  allUserArray: TUsers[];
  onSetAllUserArray: Dispatch<SetStateAction<TUsers[]>>;
}) {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <>
      <button
        className="bg-primary-950 px-4 py-2 text-white flex items-center gap-2"
        onClick={() => setShowCreateForm(!showCreateForm)}
      >
        <Plus />
        Add user
      </button>
      {showCreateForm && (
        <Modal isOpen={showCreateForm} onClose={() => setShowCreateForm(false)}>
          <CreateUserForm
            allUserArray={allUserArray}
            onSetAllUserArray={onSetAllUserArray}
            onClose={() => setShowCreateForm(false)}
          />
        </Modal>
      )}
    </>
  );
}
