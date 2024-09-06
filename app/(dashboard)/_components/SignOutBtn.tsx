import { removeCookie } from "@/lib/auth/action";
import apiRoutes from "@/lib/constants";
import Button from "@/lib/_components/Button";
import Modal from "@/lib/_components/Modal";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SignOutBtn() {
	const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

	const router = useRouter();

	async function handleSignOut() {
		await removeCookie();
		router.replace(apiRoutes.Login);
	}

	return (
		<>
			<button
				className="flex items-center gap-3 w-full py-3 px-5  hover:bg-primary-100 hover:text-primary-950 transition-colors hover:border-l-4 hover:border-primary-950"
				onClick={() => setIsSignOutModalOpen((modal) => !modal)}
			>
				<LogOut size={20} />
				<span className="text-sm font-semibold">Sign out</span>
			</button>

			{isSignOutModalOpen && (
				<Modal
					isOpen={isSignOutModalOpen}
					onClose={() => setIsSignOutModalOpen(false)}
				>
					<h2 className="text-2xl font-bold mb-2 text-secondary">Sign out</h2>
					<p className="tooltip">Are you sure you want to sign out?</p>
					<div className="flex items-center justify-end gap-x-4 text-sm pt-6">
						<Button
							variant="secondary"
							onClick={() => setIsSignOutModalOpen(false)}
						>
							Cancel
						</Button>
						<Button variant="primary" onClick={handleSignOut}>
							Sign out
						</Button>
					</div>
				</Modal>
			)}
		</>
	);
}

export default SignOutBtn;
