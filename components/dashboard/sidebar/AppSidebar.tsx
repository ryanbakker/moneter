"use client";

import { SIDEBAR_NAV_LINKS } from "@/constants";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const path = usePathname();

  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <Header />
      <SidebarContent className="mt-8 pl-1.5">
        <SidebarMenu className="flex flex-col items-start gap-3">
          {SIDEBAR_NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const active = link.href === path;

            return (
              <SidebarMenuItem key={link.label} className="w-full">
                <Link
                  href={link.href}
                  className="relative group cursor-pointer"
                >
                  {active && (
                    <>
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-indigo-400/5 dark:bg-indigo-500/10 transition-colors duration-300 -z-10 blur-xl" />
                    </>
                  )}
                  <SidebarMenuButton
                    isActive={active}
                    className={`px-2 py-[22px] rounded-lg font-semibold relative transition-all duration-300 cursor-pointer ${
                      active
                        ? "bg-white/80 dark:bg-indigo-900/20 backdrop-blur-sm border-2 border-indigo-200/50 dark:border-indigo-800/50 shadow-lg shadow-indigo-100/50 dark:shadow-indigo-900/20 text-indigo-900 dark:text-indigo-100 hover:shadow-xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30 hover:border-indigo-300 dark:hover:border-indigo-700"
                        : ""
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-md transition-transform duration-300 ${
                        active
                          ? "bg-linear-to-br from-indigo-100 to-indigo-50 dark:from-indigo-950/50 dark:to-indigo-900/30 border border-indigo-200 dark:border-indigo-800/50 shadow shadow-indigo-200 group-hover:scale-110"
                          : ""
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 shrink-0 ${
                          active ? "text-indigo-600 dark:text-indigo-400" : ""
                        }`}
                      />
                    </div>
                    <span className={`${active && "pl-1"}`}>{link.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <Footer />
    </Sidebar>
  );
};

export default AppSidebar;
