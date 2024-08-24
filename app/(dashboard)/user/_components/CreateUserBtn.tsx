"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import Modal from "../../../_lib/components/Modal";
import CreateUserForm from "./CreateUserForm";

export default function CreateUserBtn({}) {
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
          <CreateUserForm onClose={() => setShowCreateForm(false)} />
        </Modal>
      )}
    </>
  );
}
