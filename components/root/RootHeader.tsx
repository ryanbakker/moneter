import Logo from "@/components/Logo";
import { rootNavLinks } from "@/constants";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import RootMobileNav from "./RootMobileNav";
import { LogIn } from "lucide-react";

function RootHeader() {
  return (
    <header className="w-full fixed left-0 right-0 top-0 z-[9999] backdrop-blur-xl bg-white/60 dark:bg-neutral-950/60 border-b border-white/20 dark:border-neutral-800/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-row justify-between items-center">
        <Logo size="lg" />

        <nav>
          <ul className="flex flex-row items-center gap-6">
            {rootNavLinks.map((link, index) => (
              <li key={index} className="hidden md:flex">
                <Link
                  href={link.href}
                  className="group relative text-sky-950 dark:text-sky-50 hover:text-sky-950! dark:hover:text-sky-50! transition-all duration-300 font-medium text-sm uppercase tracking-wide cursor-pointer"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 group-hover:w-full transition-all duration-300 ease-out" />
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 group-hover:opacity-0 transition-opacity duration-300" />
                </Link>
              </li>
            ))}
            <li className="flex items-center flex-row gap-3">
              {/* Clerk sign in button */}
              <SignedOut>
                <SignInButton mode="modal">
                  <Button className="group relative overflow-hidden bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white border-0 transition-all duration-300 px-6 py-2.5 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span className="relative z-10">Sign in</span>
                      <LogIn className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </Button>
                </SignInButton>
              </SignedOut>

              <div className="hidden md:flex md:flex-row md:items-center md:gap-3">
                <SignedIn>
                  <Link href="/">
                    <Button>Dashboard</Button>
                  </Link>
                </SignedIn>
                <SignedIn>
                  <Button asChild>
                    <SignOutButton>Sign out</SignOutButton>
                  </Button>
                </SignedIn>

                <ThemeToggle />

                <div className="group block md:hidden">
                  <RootMobileNav />
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default RootHeader;
