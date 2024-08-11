import Link from "next/link";
import { usePathname } from "next/navigation";
type SubItem = {
  name: string;
  href: string;
};

export default function SubmenuItem({ sub }: { sub: SubItem }) {
  const pathname = usePathname();
  const { name, href } = sub;

  return (
    <Link
      href={href}
      className={`text-sm font-medium hover:font-semibold hover:text-primary-950 transition-all px-3 ${
        pathname === href && "font-semibold text-primary-950 "
      }`}
    >
      {name}
    </Link>
  );
}
