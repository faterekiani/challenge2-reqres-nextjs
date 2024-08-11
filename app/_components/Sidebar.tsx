"use client";

import React from "react";
import Logo from "./Logo";
import { Folder, LucideIcon, User } from "lucide-react";
import SidebarItem from "./SidebarItem";

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
    submenu: [
      { name: "user list", href: "/user/user-list" },
      {
        name: "new user",
        href: "/user/new-user",
      },
    ],
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
    <div className="fixed top-0 left-0 h-screen w-64 bg-white border-r-[1px] border-primary-950 z-10 py-4">
      <div className="flex flex-col w-full">
        <Logo />
        <div className="flex flex-col space-y-1 py-4">
          {items.map((item) => (
            <SidebarItem key={item.href} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
