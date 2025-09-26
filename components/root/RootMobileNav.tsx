"use client";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { rootNavLinks } from "@/constants";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { Menu } from "lucide-react";

function RootMobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="group relative overflow-hidden border-sky-500/20 dark:border-sky-400/20 bg-gradient-to-r from-sky-500/5 to-cyan-500/5 dark:from-sky-500/10 dark:to-cyan-500/10 hover:from-sky-500/15 hover:to-cyan-500/15 dark:hover:from-sky-500/20 dark:hover:to-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20 dark:hover:shadow-sky-400/20 hover:border-sky-500/40 dark:hover:border-sky-400/40 cursor-pointer"
        >
          <div className="relative z-10 text-sky-600 dark:text-sky-300">
            <Menu className="h-[1.2rem] w-[1.2rem] text-sky-700" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 ring-1 ring-sky-500/0 group-hover:ring-sky-500/30 dark:group-hover:ring-sky-400/30 transition-all duration-300 rounded-md"></div>
          <span className="sr-only">Toggle mobile menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>Menu</SheetHeader>
        <ul>
          {rootNavLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <SheetFooter className="flex items-center flex-row gap-2">
          <SignedOut>
            <Button>
              <SignInButton mode="modal">Sign in</SignInButton>
            </Button>
          </SignedOut>

          <SignedIn>
            <Link href="/">
              <Button>Dashboard</Button>
            </Link>
          </SignedIn>
          <SignedIn>
            <Button>
              <SignOutButton>Sign out</SignOutButton>
            </Button>
          </SignedIn>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default RootMobileNav;
