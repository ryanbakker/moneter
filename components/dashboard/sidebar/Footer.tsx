import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogOut, WalletCards } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <Link href="manage-plan">
            <SidebarMenuButton>
              <WalletCards />
              <span>Manage plan</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <ThemeToggle />
        <SidebarMenuItem>
          <SidebarMenuButton>
            <LogOut />
            <span>Sign out</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default Footer;
