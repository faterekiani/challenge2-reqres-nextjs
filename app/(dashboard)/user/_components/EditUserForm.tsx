import { updateUserApi } from "@/app/_lib/data-services";
import { TUsers } from "@/app/_lib/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSingleUSer } from "../hooks/useSingleUser";
import { showToast } from "@/app/_lib/components/Toast";

type Props = {
  userId: number;
  allUserArray: TUsers[];
  onSetAllUserArray: Dispatch<SetStateAction<TUsers[]>>;

  onClose: () => void;
};
export default function EditUserForm({
  userId,
  onClose,
  allUserArray,
  onSetAllUserArray,
}: Props) {
  const [editUserName, setEditUserName] = useState("");
  const [editUserJob, setEditUserJob] = useState("");
  const [lastName, setLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const queryClient = useQueryClient();
  const router = useRouter();

  // SINGLE USER
  const { singleUserData } = useSingleUSer(userId);

  // EDIT
  const { mutate: EditUserMutate } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: (data) => {
      onSetAllUserArray(
        allUserArray.map((item) => {
          if (item.id === userId)
            return {
              ...item,
              first_name: data.name,
              last_name: lastName,
              email: newEmail,
            };
          else return item;
        })
      );
      showToast("success", "user successfully Updated");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      onClose();
    },
    onError: (err) => showToast("error", err.message),
  });

  useEffect(() => {
    if (singleUserData) {
      setEditUserName(singleUserData.data.first_name);
      setEditUserJob(singleUserData.data.job);
      setLastName(singleUserData.data.last_name);
      setNewEmail(singleUserData.data.email);
    }
  }, [singleUserData]);

  function handleSubmitEditUserForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    EditUserMutate({ userId, name: editUserName, job: editUserJob });
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-secondary">Edit User</h2>
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
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last name
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            onChange={(e) => setNewEmail(e.target.value)}
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
  );
}
