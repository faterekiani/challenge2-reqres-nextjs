"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubmenuItem from "@/app/_components/SubmenuItem";

import { ChevronDown, LucideIcon } from "lucide-react";

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

export default function SidebarItem({ item }: { item: SidebarItem }) {
  const { name, icon: Icon, submenu, href } = item;
  const pathname = usePathname();

  const [expanded, setExpanded] = useState(true);

  const onExpandSubmenu = () => {
    if (submenu && submenu?.length > 0) {
      setExpanded(!expanded);
    }
  };

  const isActive = useMemo(() => {
    return (
      href === pathname ||
      (submenu && submenu.find((subItem) => subItem.href === pathname))
    );
  }, [href, pathname, submenu]);

  return (
    <>
      <div
        className={`flex items-center justify-between w-full py-3 px-5  hover:bg-primary-100 hover:text-primary-950 transition-colors hover:border-l-4 hover:border-primary-950 ${
          isActive &&
          "bg-primary-100 text-primary-950 transition-colors border-l-4 border-primary-950"
        }`}
      >
        <Link href={href} className="flex items-center space-x-3">
          <Icon size={20} />
          <p className="text-sm font-semibold">{name}</p>
        </Link>

        {submenu && submenu?.length > 0 && (
          <ChevronDown
            size={18}
            onClick={onExpandSubmenu}
            className={
              expanded
                ? "rotate-180 transition-transform duration-200 cursor-pointer"
                : "cursor-pointer"
            }
          />
        )}
      </div>

      {expanded && (
        <div className="flex flex-col ml-10 space-y-3 mt">
          {submenu &&
            submenu.length > 0 &&
            submenu.map((sub) => <SubmenuItem key={sub.href} sub={sub} />)}
        </div>
      )}
    </>
  );
}
