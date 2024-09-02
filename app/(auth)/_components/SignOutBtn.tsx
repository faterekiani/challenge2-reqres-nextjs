import { removeCookie } from "@/_lib/auth/action";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SignOutBtn() {
  const [openModal, setOpenModal] = useState(false);

  const router = useRouter();

  async function handleSignOut() {
    await removeCookie();
    router.replace("/user/login");
  }

  return (
    <>
      <button
        className="flex items-center gap-3 w-full py-3 px-5  hover:bg-primary-100 hover:text-primary-950 transition-colors hover:border-l-4 hover:border-primary-950"
        onClick={() => setOpenModal((modal) => !modal)}
      >
        <LogOut size={20} />
        <span className="text-sm font-semibold">Sign out</span>
      </button>

      {openModal && (
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <h2 className="text-2xl font-bold mb-2 text-secondary">Sign out</h2>
          <p className="tooltip">Are you sure you want to sign out?</p>
          <div className="flex items-center justify-end gap-x-4 text-sm pt-6">
            <Button variant="secondary" onClick={() => setOpenModal(false)}>
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
