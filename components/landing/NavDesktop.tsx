import { LANDING_NAV_LINKS } from "@/constants";
import Link from "next/link";

const NavDesktop = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex flex-row items-center gap-4">
        {LANDING_NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="py-1 px-4 font-medium">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDesktop;
