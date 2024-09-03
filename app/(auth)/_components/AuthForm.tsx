"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { showToast } from "@/app/components/Toast";
import Link from "next/link";

import { setCookie } from "@/_lib/auth/action";
import { loginUserApi, registerUserApi } from "@/_lib/data-services";
import Spinner from "@/app/components/Spinner";
import Button from "@/app/components/Button";

const schema = {
  login: z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
  }),
  register: z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
  }),
};

type FormInput = z.infer<(typeof schema)[keyof typeof schema]>;

const AuthForm = ({ type = "login" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver:
      type === "login"
        ? zodResolver(schema.login)
        : zodResolver(schema.register),
  });

  const router = useRouter();

  const { mutate: submitMutate, isPending } = useMutation({
    mutationFn: type === "login" ? loginUserApi : registerUserApi,

    onSuccess: (data: any) => {
      const successMessage =
        type === "login" ? "You are logged in" : "Registration successful!";
      showToast("success", successMessage);
      setCookie(data.token);
      router.replace("/user");
    },
    onError: () =>
      showToast("error", "Something went wrong. Please try again."),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    submitMutate(data);
  };

  return (
    <div className="flex items-center justify-center bg-primary-100 h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-8 text-secondary">
          {type === "login" ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>

            <input
              {...register("email")}
              type="email"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
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
              {...register("password")}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-950"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          <Button type="submit" variant="tertiary">
            {isPending ? (
              <Spinner size="small" />
            ) : type === "login" ? (
              "Login"
            ) : (
              "Submit"
            )}
          </Button>
        </form>

        <div className="flex items-center justify-center gap-2 mt-4 text-xs">
          {type === "login" ? (
            <p>Don&apos;t have an account?</p>
          ) : (
            <p>Already have an account?</p>
          )}

          <Link
            href={type === "login" ? "/register" : "/login"}
            className="text-primary-950 transition-all hover:underline"
          >
            {type === "login" ? "Register now" : "Login Now"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
