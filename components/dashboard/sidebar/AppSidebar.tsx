"use client";

import { MouseEvent, useEffect, useState } from "react";
import { SIDEBAR_NAV_LINKS } from "@/constants";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../../ui/sidebar";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, FileChartColumn } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ReportsActionSub from "./ReportsActionSub";

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const path = usePathname();
  const [isReportsOpen, setIsReportsOpen] = useState(
    path === "/reports" || path.startsWith("/reports/")
  );

  const isReportsRoute = path === "/reports" || path.startsWith("/reports/");

  useEffect(() => {
    setIsReportsOpen(isReportsRoute);
  }, [isReportsRoute]);

  const handleReportsClick = () => {
    setIsReportsOpen((prev) => !prev);
  };

  const reportItems = [
    "Test Report Two",
    "Test Report Three",
    "Test Report Four",
    "Test Report Five",
    "Test Report Six",
    "Test Report Seven",
  ];

  const handleSheenMove = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    target.style.setProperty("--sheen-x", `${x}px`);
    target.style.setProperty("--sheen-y", `${y}px`);
  };

  const handleSheenLeave = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    target.style.setProperty("--sheen-x", "50%");
    target.style.setProperty("--sheen-y", "50%");
  };

  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <Header />
      <div className="relative overflow-hidden">
        <div className="h-5 w-[90%] absolute -bottom-2 left-0 bg-linear-to-b to-[#fafafa] dark:to-[#171717] z-20 to-50%" />
        <SidebarContent className="mt-2 group-data-[collapsible=icon]:pl-0 group-data-[collapsible=icon]:mt-4">
          <SidebarGroup>
            <SidebarMenu className="flex flex-col items-start gap-1">
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
                          {/* Glow effect - hide when collapsed */}
                          <div className="absolute inset-0 rounded-xl bg-indigo-400/5 dark:bg-indigo-500/10 transition-colors duration-300 -z-10 blur-xl group-data-[collapsible=icon]:hidden" />
                        </>
                      )}
                      <SidebarMenuButton
                        onMouseMove={handleSheenMove}
                        onMouseLeave={handleSheenLeave}
                        isActive={active}
                        className={`group px-2 py-[22px] rounded-xl font-semibold relative transition-all duration-300 cursor-pointer overflow-hidden group-data-[collapsible=icon]:py-2! group-data-[collapsible=icon]:px-2! group-data-[collapsible=icon]:rounded-md ${
                          active
                            ? "bg-white/80 dark:bg-indigo-900/20 backdrop-blur-sm border-2 border-indigo-200/50 dark:border-indigo-800/50 shadow-lg shadow-indigo-100/50 dark:shadow-indigo-900/20 text-indigo-900 dark:text-indigo-100 hover:shadow-xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30 hover:border-indigo-300 dark:hover:border-indigo-700 group-data-[collapsible=icon]:border group-data-[collapsible=icon]:shadow-md group-data-[collapsible=icon]:shadow-indigo-100/30 dark:group-data-[collapsible=icon]:shadow-indigo-900/10 group-data-[collapsible=icon]:hover:shadow-lg"
                            : "border border-transparent hover:border-indigo-200/60 dark:hover:border-indigo-800/60 hover:bg-white/60 dark:hover:bg-indigo-950/20 hover:shadow-lg hover:shadow-indigo-200/30 dark:hover:shadow-indigo-900/30 group-data-[collapsible=icon]:hover:shadow-md group-data-[collapsible=icon]:hover:shadow-indigo-200/20 dark:group-data-[collapsible=icon]:hover:shadow-indigo-900/20"
                        } before:absolute before:inset-0 before:rounded-xl before:bg-[radial-gradient(ellipse_145%_150%_at_var(--sheen-x,50%)_var(--sheen-y,50%),rgba(99,102,241,0.35),rgba(15,23,42,0)_66%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 group-data-[collapsible=icon]:before:rounded-md`}
                      >
                        <div
                          className={`p-1.5 rounded-md transition-transform duration-300 group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:rounded-sm group-data-[collapsible=icon]:border-0! group-data-[collapsible=icon]:shadow-none! group-data-[collapsible=icon]:bg-transparent! ${
                            active
                              ? "bg-linear-to-br from-indigo-100 to-indigo-50 dark:from-indigo-950/50 dark:to-indigo-900/30 border border-indigo-200 dark:border-indigo-800/50 shadow shadow-indigo-200 group-hover:scale-110 group-data-[collapsible=icon]:group-hover:scale-100"
                              : "bg-white/40 dark:bg-indigo-950/30 text-indigo-500/80 dark:text-indigo-200/80 border border-transparent group-hover:scale-110 group-hover:border-indigo-200/60 dark:group-hover:border-indigo-700/60 group-data-[collapsible=icon]:group-hover:scale-100"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 shrink-0 ${
                              active
                                ? "text-indigo-600 dark:text-indigo-400"
                                : ""
                            }`}
                          />
                        </div>
                        <span
                          className={`${
                            active && "pl-1"
                          } group-data-[collapsible=icon]:hidden`}
                        >
                          {link.label}
                        </span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup className="-mt-5">
            <SidebarMenu>
              <Collapsible
                className="group/collapsible"
                id="reports-collapsible"
                open={isReportsOpen}
                onOpenChange={setIsReportsOpen}
                defaultOpen={false}
              >
                <SidebarMenuItem className="w-full">
                  <CollapsibleTrigger asChild className="cursor-pointer mb-0.5">
                    <SidebarMenuButton
                      onMouseMove={handleSheenMove}
                      onMouseLeave={handleSheenLeave}
                      asChild
                      isActive={isReportsRoute}
                      className={`group px-2 py-[22px] rounded-xl font-semibold relative transition-all duration-300 cursor-pointer overflow-hidden group-data-[collapsible=icon]:py-2! group-data-[collapsible=icon]:px-2! group-data-[collapsible=icon]:rounded-md ${
                        isReportsRoute
                          ? "bg-white/80 dark:bg-indigo-900/20 backdrop-blur-sm border-2 border-indigo-200/50 dark:border-indigo-800/50 shadow-lg shadow-indigo-100/50 dark:shadow-indigo-900/20 text-indigo-900 dark:text-indigo-100 hover:shadow-xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30 hover:border-indigo-300 dark:hover:border-indigo-700 group-data-[collapsible=icon]:border group-data-[collapsible=icon]:shadow-md group-data-[collapsible=icon]:shadow-indigo-100/30 dark:group-data-[collapsible=icon]:shadow-indigo-900/10 group-data-[collapsible=icon]:hover:shadow-lg"
                          : "border border-transparent hover:border-indigo-200/60 dark:hover:border-indigo-800/60 hover:bg-white/60 dark:hover:bg-indigo-950/20 hover:shadow-lg hover:shadow-indigo-200/30 dark:hover:shadow-indigo-900/30 group-data-[collapsible=icon]:hover:shadow-md group-data-[collapsible=icon]:hover:shadow-indigo-200/20 dark:group-data-[collapsible=icon]:hover:shadow-indigo-900/20"
                      } before:absolute before:inset-0 before:rounded-xl before:bg-[radial-gradient(ellipse_145%_150%_at_var(--sheen-x,50%)_var(--sheen-y,50%),rgba(99,102,241,0.35),rgba(15,23,42,0)_66%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 group-data-[collapsible=icon]:before:rounded-md`}
                    >
                      <Link
                        href="/reports"
                        className="flex items-center gap-3 group-data-[collapsible=icon]:gap-0"
                        onClick={handleReportsClick}
                        title="Reports"
                      >
                        <div
                          className={`p-1.5 rounded-md transition-transform duration-300 group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:rounded-sm group-data-[collapsible=icon]:border-0! group-data-[collapsible=icon]:shadow-none! group-data-[collapsible=icon]:bg-transparent! ${
                            isReportsRoute
                              ? "bg-linear-to-br from-indigo-100 to-indigo-50 dark:from-indigo-950/50 dark:to-indigo-900/30 border border-indigo-200 dark:border-indigo-800/50 shadow shadow-indigo-200 group-hover:scale-110 group-data-[collapsible=icon]:group-hover:scale-100"
                              : "bg-white/40 dark:bg-indigo-950/30 text-indigo-500/80 dark:text-indigo-200/80 border border-transparent group-hover:scale-110 group-hover:border-indigo-200/60 dark:group-hover:border-indigo-700/60 group-data-[collapsible=icon]:group-hover:scale-100"
                          }`}
                        >
                          <FileChartColumn
                            className={`w-4 h-4 shrink-0 ${
                              isReportsRoute
                                ? "text-indigo-600 dark:text-indigo-400"
                                : ""
                            }`}
                          />
                        </div>
                        <span
                          className={`${
                            isReportsRoute && "pl-1"
                          } group-data-[collapsible=icon]:hidden`}
                        >
                          Reports
                        </span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 group-data-[collapsible=icon]:hidden" />
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="relative group-data-[collapsible=icon]:hidden">
                      <div className="max-h-[200px] overflow-y-auto pr-1">
                        <SidebarMenuSub className="pt-1 space-y-0.5">
                          <SidebarMenuSubItem>
                            <ReportsActionSub />
                          </SidebarMenuSubItem>
                          {reportItems.map((label) => (
                            <SidebarMenuSubItem key={label}>
                              <SidebarMenuSubButton asChild>
                                <Link href="#" className="text-xs">
                                  {label}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </div>
                      {/* Fade overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none bg-linear-to-t from-sidebar to-transparent" />
                    </div>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </div>
      <Footer />
    </Sidebar>
  );
};

export default AppSidebar;
