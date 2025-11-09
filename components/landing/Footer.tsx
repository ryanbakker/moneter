import { LANDING_FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-row items-center justify-between">
        <div>
          <Link href="/welcome">
            <Image
              src="/logo/moneter-logo-light.svg"
              alt="Moneter logo"
              width={180}
              height={72}
              className="h-4 w-auto cursor-pointer visible dark:hidden"
            />
            <Image
              src="/logo/moneter-logo-dark.svg"
              alt="Moneter logo"
              width={180}
              height={72}
              className="h-4 w-auto cursor-pointer hidden dark:block"
            />
          </Link>

          <p className="text-xs opacity-50 pt-1.5">
            © All rights resevered 2025
          </p>
        </div>

        <ul className="flex flex-row items-center gap-5">
          {LANDING_FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm hover:underline transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
