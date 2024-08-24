"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewUserApi } from "@/app/_lib/data-services";
import { ChangeEvent, useState } from "react";
import { showToast } from "@/app/_lib/components/Toast";
import { TUsers } from "@/app/_lib/types/types";
import Spinner from "@/app/_lib/components/Spinner";
import { useAppDispatch } from "@/app/_lib/store/hooks";
import { createNewUser } from "../slice";

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

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const queryClient = useQueryClient();

  const dispatch = useAppDispatch();

  // fetch data
  const { mutate: createUserMutate, isPending } = useMutation({
    mutationFn: createNewUserApi,
    onSuccess: (data: TUsers) => {
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

        <button
          type="submit"
          disabled={!name || !lastName || !newEmail}
          className="bg-primary-950 hover:bg-primary-700 disabled:bg-slate-400 text-white font-bold py-2 px-4 rounded  mt-2 transition-all w-32 flex items-center justify-center"
        >
          {isPending ? <Spinner className="spinner-mini" /> : "Create user"}
        </button>
      </form>
    </div>
  );
}
