import React from "react";

export default function Page() {
  return (
    <div className="flex items-center justify-center bg-primary-100 h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-8 text-secondary">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700   
   text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
            />
          </div>
           
          <button
            type="submit"
            className="bg-primary-950 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-red-900 mt-2 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
