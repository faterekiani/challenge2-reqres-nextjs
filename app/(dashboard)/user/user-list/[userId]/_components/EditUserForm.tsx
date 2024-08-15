import { showToast } from "@/app/(dashboard)/_components/Toast";
import { updateUserApi } from "@/app/_lib/data-services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

// onSubmit={() => mutate({ name, job })}
export default function EditUserForm() {
  const [editUserName, setEditUserName] = useState("");
  const [editUserJob, setEditUserJob] = useState("");

  const [isOpen, setIsOpen] = useState(true);

  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      showToast("success", "user successfully Updated");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      router.push("/user/user-list");
    },
    onError: (err) => alert(err.message),
  });

  function handleSubmitEditUserForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // mutate()
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <div className="flex items-center justify-center  bg-primary-100">
          <div
            className="bg-white p-8 rounded-lg shadow-md
       w-96"
          >
            <h2 className="text-2xl font-bold mb-8 text-secondary">
              Create User
            </h2>
            <form onSubmit={handleSubmitEditUserForm}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700
       text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  value={editUserName}
                  onChange={(e) => setEditUserName(e.target.value)}
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
                  value={editUserJob}
                  onChange={(e) => setEditUserJob(e.target.value)}
                  name="job"
                  className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
                />
              </div>
              <button
                type="submit"
                className="bg-primary-950 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-red-900 mt-2 transition-all"
              >
                Edit user
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
