"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import { useSingleUSer } from "../../../../../../lib/hook/useSingleUser";
import Spinner from "@/lib/_components/Spinner";
import EditUserBtn from "../../../_components/EditUserModal";
import DeleteUserBtn from "../../../_components/DeleteUserConfirmation";

type Props = {
	userId: number;
};

export default function UserDetails({ userId }: Props) {
	const { singleUserData, isLoading } = useSingleUSer(userId);

	if (isLoading) return <Spinner size="medium" />;

	if (!singleUserData) return null;

	const { avatar, last_name, first_name, email } = singleUserData?.data;

	return (
		<div className="flex flex-col items-center md:justify-between md:flex-row  gap-6 pb-4  md:border-b-[1px] md:border-indigo-300 px-8">
			<div className="flex items-center gap-8">
				<div className="relative size-28">
					<Image
						src={avatar}
						alt={avatar}
						fill
						className="object-cover rounded-full"
					/>
				</div>
				<div className="flex flex-col gap-y-2 items-start text-secondary">
					<div className="font-bold text-3xl space-x-2">
						<span>{last_name}</span>
						<span>{first_name}</span>
					</div>
					<h2 className="flex items-center justify-between gap-2 text-sm">
						<Mail size={15} /> {email}
					</h2>
				</div>
			</div>
			<div className="space-x-2 mr-10">
				<EditUserBtn userId={userId} />
				<DeleteUserBtn userId={userId} />
			</div>
		</div>
	);
}
