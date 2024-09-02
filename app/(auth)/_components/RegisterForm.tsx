"use client";

import { setCookie } from "@/_lib/auth/action";
import Spinner from "@/app/components/Spinner";
import { showToast } from "@/app/components/Toast";
import { registerUserApi } from "@/_lib/data-services";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const { mutate: registerMutate, isPending } = useMutation({
    mutationFn: registerUserApi,
    onSuccess: (data) => {
      showToast("success", "Registration successful!");
      setCookie(data.token);
      router.replace("/login");
    },
    onError: () => showToast("error", "Incorrect username or password"),
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    email && password && registerMutate({ email, password });
  }

  return (
    <div className="flex items-center justify-center bg-primary-100 h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-8 text-secondary">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
            />
          </div>
          <div className="mb-8">
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
            className="bg-primary-950 hover:bg-primary-700 disabled:bg-slate-400 text-white font-bold py-2 px-4 rounded transition-all w-full flex items-center justify-center"
          >
            {isPending ? <Spinner size="small" /> : "Register"}
          </button>
        </form>
        <div className="flex items-center justify-center gap-2 mt-4 text-xs">
          <p>Already have an account?</p>

          <Link
            href="/login"
            className="text-primary-950 transition-all hover:underline"
          >
            Login Now
          </Link>
        </div>
      </div>
    </div>
  );
}
