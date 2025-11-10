"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ThemeToggle from "./ThemeToggle";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import NavDesktop from "./NavDesktop";

const NavMobile = dynamic(() => import("./NavMobile"), {
  ssr: false,
});

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/60 backdrop-blur-md border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div
        className={`${
          scrolled
            ? ""
            : "bg-linear-to-b from-white dark:from-black from-50% to-99% to-transparent w-full h-[260px] absolute left-0 -top-30 -z-5!"
        }`}
      />
      <div className="container flex flex-row items-center justify-between">
        <Link href="/welcome">
          <Image
            src="/logo/moneter-logo-light.svg"
            alt="Moneter logo"
            width={180}
            height={72}
            className="h-5.5 w-auto cursor-pointer visible dark:hidden"
          />
          <Image
            src="/logo/moneter-logo-dark.svg"
            alt="Moneter logo"
            width={180}
            height={72}
            className="h-5.5 w-auto cursor-pointer hidden dark:block"
          />
        </Link>

        <div className="flex flex-row items-center gap-6">
          <NavDesktop />
          <div className="flex flex-row items-center gap-4">
            <ThemeToggle />
            <Link href="/sign-in" title="Sign in">
              <Button
                variant="outline"
                size="icon"
                className="flex items-center justify-center sm:hidden pr-0.5"
              >
                <LogIn />
              </Button>

              <Button
                variant="outline"
                className="hidden sm:flex flex-row items-center gap-1.5 cursor-pointer"
              >
                Sign in <LogIn />
              </Button>
            </Link>
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
