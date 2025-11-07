import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LANDING_NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Menu } from "lucide-react";

const NavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="visible md:hidden" title="Open menu" asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <div className="p-8">
          <Link href="/welcome">
            <Image
              src="/logo/moneter-logo-light.svg"
              alt="Moneter logo"
              width={180}
              height={72}
              className="h-4.5 w-auto cursor-pointer dark:hidden"
            />
            <Image
              src="/logo/moneter-logo-dark.svg"
              alt="Moneter logo"
              width={180}
              height={72}
              className="h-4.5 w-auto cursor-pointer hidden dark:visible"
            />
          </Link>

          <div className="pt-6 flex flex-col justify-between h-[90vh]">
            <nav className="flex flex-col gap-10">
              <ul className="flex flex-col gap-7">
                {LANDING_NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <Button size="lg" className="w-full">
                        {link.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>

              <Separator className="max-w-8! mx-auto" />

              <div className="flex flex-col gap-3">
                <Link href="/sign-up">
                  <Button size="lg" className="w-full">
                    Get Started
                  </Button>
                </Link>

                <Link href="/sign-in">
                  <Button size="lg" className="w-full">
                    Sign In
                  </Button>
                </Link>
              </div>
            </nav>

            <div className="flex flex-row gap-4 text-xs text-neutral-600 underline justify-center pt-8">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default NavMobile;
