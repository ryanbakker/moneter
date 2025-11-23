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
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  const { signOut } = useClerk();
  const pathname = usePathname();
  const isManagePlanActive = pathname === "/manage-plan";

  const handleSignOut = () => {
    signOut();
  };

  return (
    <SidebarFooter className="mt-auto">
      <SidebarMenu>
        <SidebarMenuItem>
          <Link href="manage-plan">
            <SidebarMenuButton
              isActive={isManagePlanActive}
              className={`cursor-pointer transition-all duration-200 ${
                isManagePlanActive
                  ? "bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/40 dark:border-indigo-800/40 text-indigo-700 dark:text-indigo-300 shadow-sm shadow-indigo-100/30 dark:shadow-indigo-900/20"
                  : "hover:bg-sidebar-accent"
              }`}
            >
              <WalletCards
                className={
                  isManagePlanActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : ""
                }
              />
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
