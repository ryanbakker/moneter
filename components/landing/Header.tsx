import Image from "next/image";
import Link from "next/link";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className="bg-neutral-400">
      <div className="container flex flex-row items-center justify-between">
        <Link href="/welcome">
          <Image
            src="/logo/moneter-logo-light.svg"
            alt="Moneter logo"
            width={180}
            height={72}
            className="h-5.5 w-auto cursor-pointer dark:hidden"
          />
          <Image
            src="/logo/moneter-logo-dark.svg"
            alt="Moneter logo"
            width={180}
            height={72}
            className="h-5.5 w-auto cursor-pointer hidden dark:visible"
          />
        </Link>

        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
