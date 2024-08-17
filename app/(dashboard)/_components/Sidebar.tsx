"use client";

import { Folder, LucideIcon, User } from "lucide-react";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import SignOutBtn from "@/app/(auth)/_components/SignOutBtn";

type SidebarItem = {
  name: string;
  icon: LucideIcon;
  href: string;
  submenu?: SubItem[];
};

type SubItem = {
  name: string;
  href: string;
};

const items: SidebarItem[] = [
  {
    name: "User",
    icon: User,
    href: "/",
    submenu: [{ name: "user list", href: "/user/user-list" }],
  },
  {
    name: "Resource",
    icon: Folder,
    href: "/resource",
    submenu: [{ name: "resource list", href: "/resource/resource-list" }],
  },
];

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white border-r-[1px] border-primary-950 z-20 py-4 ">
      <div className="flex flex-col w-full">
        <Link
          href="/"
          className="text-2xl text-primary font-black text-primary-950 text-center border-b-[1px] border-primary-950 pb-4"
        >
          reqRes
        </Link>
        <ul className="flex flex-col space-y-1 py-4 h-full overflow-y-auto">
          {items.map((item) => (
            <SidebarItem key={item.href} item={item} />
          ))}
          <li className="absolute bottom-0 left-0 w-full">
            <SignOutBtn />
          </li>
        </ul>
      </div>
    </div>
  );
}
