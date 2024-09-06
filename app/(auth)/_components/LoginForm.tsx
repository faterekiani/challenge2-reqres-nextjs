"use client";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { loginUserApi } from "@/lib/data-services";
import { showToast } from "@/lib/_components/Toast";
import { setCookie } from "@/lib/auth/action";
import apiRoutes from "@/lib/constants";
import Spinner from "@/lib/_components/Spinner";
import Button from "@/lib/_components/Button";
import Link from "next/link";

import schema from "../_schema/authSchema";
import { LoginResult } from "../_types/type";

type FormFields = z.infer<typeof schema>;

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const router = useRouter();

	const { mutate: loginMutate, isPending } = useMutation({
		mutationFn: loginUserApi,
		onSuccess: (data: LoginResult) => {
			showToast("success", "You are logged in");
			setCookie(data.token);
			router.replace(apiRoutes.user);
		},

		onError: () => showToast("error", "Incorrect username or password"),
	});

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		loginMutate(data);
	};

	return (
		<div className="flex items-center justify-center bg-primary-100 h-screen">
			<div className="bg-white p-8 rounded-lg shadow-md w-96">
				<h2 className="text-2xl font-bold mb-8 text-secondary">Login </h2>

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
						{isPending ? <Spinner size="small" /> : "Login"}
					</Button>
				</form>

				<div className="flex items-center justify-center gap-2 mt-4 text-xs">
					<p>Don&apos;t have an account?</p>

					<Link
						href={apiRoutes.register}
						className="text-primary-950 transition-all hover:underline"
					>
						Register now
					</Link>
				</div>
			</div>
		</div>
	);
}
