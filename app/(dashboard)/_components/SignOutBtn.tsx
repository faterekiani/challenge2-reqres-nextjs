import { LogOut } from "lucide-react";
import Link from "next/link";

function SignOutBtn() {
  return (
    <Link
      href="/login"
      className="flex items-center gap-3 w-full py-3 px-5  hover:bg-primary-100 hover:text-primary-950 transition-colors hover:border-l-4 hover:border-primary-950 "
    >
      <LogOut size={20} />
      <span className="text-sm font-semibold">Sign out</span>
    </Link>
  );
}

export default SignOutBtn;
