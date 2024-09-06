"use client";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { registerUserApi } from "@/_lib/data-services";
import { showToast } from "@/_lib/_components/Toast";
import { setCookie } from "@/_lib/auth/action";
import apiRoutes from "@/_lib/constants";
import Spinner from "@/_lib/_components/Spinner";
import Button from "@/_lib/_components/Button";
import Link from "next/link";

import schema from "../_schema/authSchema";
import { RegisterResult } from "../_types/type";

type FormFields = z.infer<typeof schema>;

export default function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const router = useRouter();

	const { mutate: registerMutate, isPending } = useMutation({
		mutationFn: registerUserApi,
		onSuccess: (data: RegisterResult) => {
			showToast("success", "Registration successful!");
			setCookie(data.token);
			router.replace(apiRoutes.Login);
		},

		onError: () => showToast("error", "Incorrect username or password"),
	});

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		registerMutate(data);
	};

	return (
		<div className="flex items-center justify-center bg-primary-100 h-screen">
			<div className="bg-white p-8 rounded-lg shadow-md w-96">
				<h2 className="text-2xl font-bold mb-8 text-secondary">Register </h2>

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
						{isPending ? <Spinner size="small" /> : "Submit"}
					</Button>
				</form>

				<div className="flex items-center justify-center gap-2 mt-4 text-xs">
					<p>Already have an account?</p>

					<Link
						href={apiRoutes.Login}
						className="text-primary-950 transition-all hover:underline"
					>
						Login Now
					</Link>
				</div>
			</div>
		</div>
	);
}
