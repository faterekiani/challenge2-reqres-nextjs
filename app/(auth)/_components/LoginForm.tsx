"use client";

import { setCookie } from "@/app/_lib/auth/action";
import { showToast } from "@/app/_lib/components/Toast";
import { loginUserApi } from "@/app/_lib/data-services";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const { mutate: loginMutate } = useMutation({
    mutationFn: loginUserApi,
    onSuccess: (data) => {
      router.replace("/user/user-list");
      showToast("success", "You are logged in");
      setCookie(data.token);
    },
    onError: () => showToast("error", "Incorrect username or password"),
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    email && password && loginMutate({ email, password });
  }

  function onSubmit() {
    email && password && loginMutate({ email, password });
  }

  return (
    <div className="flex items-center justify-center bg-primary-100 h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-8 text-secondary">Login</h2>
        <form onSubmit={handleSubmit}>
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
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
            />
          </div>

          <button
            type="submit"
            disabled={!email || !password}
            className="bg-primary-950 hover:bg-primary-700 disabled:bg-slate-400 text-white font-bold py-2 px-4 rounded focus:outline-red-900 mt-2 transition-all"
            // onClick={onSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
