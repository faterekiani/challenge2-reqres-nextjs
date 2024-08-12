"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createNewUserApi } from "@/app/_lib/data-services";
import { useState } from "react";

export default function CreateNewUser() {
  const [name, setUserName] = useState("");
  const [job, setJob] = useState("");

  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: createNewUserApi,
    onSuccess: () => {
      alert("user successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      router.push("/user/user-list");
    },
    onError: (err) => alert(err.message),
  });

  return (
    <div className="flex items-center justify-center  bg-primary-100">
      <div
        className="bg-white p-8 rounded-lg shadow-md
     w-96"
      >
        <h2 className="text-2xl font-bold mb-8 text-secondary">Create User</h2>
        <form onSubmit={() => mutate({ name, job })}>
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
              id="name"
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
              id="job"
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
