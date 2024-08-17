import { removeCookie } from "@/app/_lib/auth/action";
import { LogOut } from "lucide-react";

function SignOutBtn() {
  return (
    <button
      className="flex items-center gap-3 w-full py-3 px-5  hover:bg-primary-100 hover:text-primary-950 transition-colors hover:border-l-4 hover:border-primary-950"
      onClick={removeCookie}
    >
      <LogOut size={20} />
      <span className="text-sm font-semibold">Sign out</span>
    </button>
  );
}

export default SignOutBtn;

// import { LogOut } from "lucide-react";
// import { useRouter } from "next/navigation";

// function SignOutBtn() {
//   const router = useRouter();

//   const handleSignOut = async () => {
//     const response = await fetch("/app/api/logout", { method: "POST" });
//     if (response.ok) {
//       router.push("/login"); // or any desired redirect location
//     } else {
//       console.error("Error logging out:", response.statusText);
//     }
//   };

//   return (
//     <div>
//       <button
//         className="flex items-center gap-3 w-full py-3 px-5  hover:bg-primary-100 hover:text-primary-950 transition-colors hover:border-l-4 hover:border-primary-950 "
//         onClick={handleSignOut}
//       >
//         <LogOut size={20} />
//         <span className="text-sm font-semibold">Sign out</span>
//       </button>
//     </div>
//   );
// }

// export default SignOutBtn;
