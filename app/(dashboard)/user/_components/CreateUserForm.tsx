"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createNewUserApi } from "@/app/_lib/data-services";
import { Dispatch, SetStateAction, useState } from "react";
import { showToast } from "@/app/(dashboard)/_components/Toast";
import { TUsers } from "@/app/_lib/types/types";

export default function CreateUserForm({
  allUserArray,
  onSetAllUserArray,
  onClose,
}: {
  allUserArray: TUsers[];
  onSetAllUserArray: Dispatch<SetStateAction<TUsers[]>>;
  onClose: () => void;
}) {
  const [name, setUserName] = useState("");
  const [job, setJob] = useState("");

  const queryClient = useQueryClient();
  const router = useRouter();

  // fetch data
  const { mutate: createUserMutate, isSuccess } = useMutation({
    mutationFn: createNewUserApi,
    onSuccess: (data: TUsers) => {
      onSetAllUserArray((user) => [...user, data]);
      showToast("success", "user successfully created");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      router.push("/user/user-list");
    },
    onError: (err) => alert(err.message),
  });

  function handleSubmitCreateUserForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createUserMutate({ name, job });
    onClose();
  }

  return (
    <div className="flex items-center justify-center  bg-primary-100">
      <div
        className="bg-white p-8 rounded-lg shadow-md
     w-96"
      >
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
              onChange={(e) => setUserName(e.target.value)}
              name="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="job"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Job
            </label>
            <input
              value={job}
              onChange={(e) => setJob(e.target.value)}
              name="job"
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
            />
          </div>

          <button
            type="submit"
            className="bg-primary-950 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-red-900 mt-2 transition-all"
          >
            Create user
          </button>
        </form>
      </div>
    </div>
  );
}
