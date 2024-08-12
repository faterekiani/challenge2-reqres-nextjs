"use client";

import { Pencil } from "lucide-react";
import { useState } from "react";
import EditUserForm from "@/app/user/user-list/[userId]/_components/EditUserForm";

export default function EditUserBtn() {
  const [showEditForm, setShowEditForm] = useState(false);
  return (
    <>
      <button
        className="hover:text-indigo-700 transition-all"
        onClick={() => setShowEditForm((show) => !show)}
      >
        <Pencil size={15} />
      </button>
      <div>{showEditForm && <EditUserForm />}</div>
    </>
  );
}
