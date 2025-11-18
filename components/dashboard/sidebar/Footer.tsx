"use client";

import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogOut, WalletCards } from "lucide-react";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <Link href="manage-plan">
            <SidebarMenuButton className="cursor-pointer">
              <WalletCards />
              <span>Manage plan</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <ThemeToggle />
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={handleSignOut}
            className="text-rose-700 dark:text-rose-500 cursor-pointer hover:text-rose-600"
          >
            <LogOut />
            <span>Sign out</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default Footer;
