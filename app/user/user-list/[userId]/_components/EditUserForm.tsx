import { useState } from "react";

export default function EditUserForm() {
  const [editUserName, setEditUserName] = useState("");
  const [editUserJob, setEditUserJob] = useState("");
  // onSubmit={() => mutate({ name, job })}
  return (
    <div className="flex items-center justify-center  bg-primary-100">
      <div
        className="bg-white p-8 rounded-lg shadow-md
 w-96"
      >
        <h2 className="text-2xl font-bold mb-8 text-secondary">Create User</h2>
        <form>
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
              //   onChange={(e) => setUserName(e.target.value)}
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
              value={editUserJob}
              //   onChange={(e) => setJob(e.target.value)}
              id="job"
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
  );
}
