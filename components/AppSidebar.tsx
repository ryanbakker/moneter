"use client";

import {
  LogOut,
  Moon,
  Sun,
  LayoutDashboard,
  ChevronRight,
  ArrowRightLeft,
  ChartPie,
  ChartNoAxesCombined,
  ReceiptText,
  CreditCard,
  Target,
  FileChartColumn,
  WalletCards,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constants";
import { useUser, useClerk } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import { FadeInUp } from "./ui/animate-on-scroll";
import { getUserEntitlements } from "@/lib/actions/entitlements.actions";
import { FeatureFlag } from "@/lib/featureFlags";

// Mapping between menu items and their corresponding feature flags
// Dashboard ("/") is always enabled and not included in this mapping
const menuItemFeatureMap: Record<string, FeatureFlag> = {
  "/transactions": FeatureFlag.TRANSACTIONS,
  "/bills": FeatureFlag.BILLS,
  "/goals": FeatureFlag.GOALS,
  "/budgeting": FeatureFlag.BUDGETS,
  "/assets": FeatureFlag.ASSETS,
  "/liabilities": FeatureFlag.LIABILITIES,
  "/reports": FeatureFlag.GENERATE_REPORTS,
};

// Sidebar Theme Toggle Component
function SidebarThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      // If system, toggle to light first
      setTheme("light");
    }
  };

  const isDark = theme === "dark";

  return (
    <SidebarMenuButton
      onClick={toggleTheme}
      className="flex items-center gap-3 p-2 rounded-md transition-colors cursor-pointer w-fit glass-hoverable"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Moon className="w-5 h-5 sidebar-icon" />
      ) : (
        <Sun className="w-5 h-5 sidebar-icon" />
      )}
      <span className="text-sm sidebar-label">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
    </SidebarMenuButton>
  );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, isLoaded } = useUser();
  const { openUserProfile, signOut } = useClerk();
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();
  const [entitlements, setEntitlements] = useState<
    Record<
      string,
      { success: boolean; error?: string; usage?: number; allocation?: number }
    >
  >({});
  const [entitlementsLoaded, setEntitlementsLoaded] = useState(false);

  // Check user entitlements when user is loaded
  useEffect(() => {
    const checkEntitlements = async () => {
      if (isLoaded && user?.id) {
        try {
          const result = await getUserEntitlements(user.id);
          if (result.success && result.entitlements) {
            setEntitlements(result.entitlements);
          } else {
            console.error("Failed to get entitlements:", result.error);
          }
          setEntitlementsLoaded(true);
        } catch (error) {
          console.error("Failed to check user entitlements:", error);
          setEntitlementsLoaded(true);
        }
      }
    };

    checkEntitlements();
  }, [isLoaded, user?.id]);

  const handleNavClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  const handleUserClick = () => {
    openUserProfile();
  };

  const handleSignOut = async () => {
    try {
      await signOut({ redirectUrl: "/welcome" });
    } catch (_error) {}
  };

  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
      className="glassmorphism-scrollbar"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {isLoaded && user ? (
              <FadeInUp>
                <SidebarMenuButton
                  onClick={handleUserClick}
                  className="flex items-center gap-3 w-full py-6 pr-2 rounded-md transition-colors cursor-pointer pl-4 glass-hoverable"
                  title="User Profile"
                >
                  <Avatar className="h-[32px] w-[32px] rounded-md -ml-1.5">
                    <AvatarImage
                      src={user.imageUrl}
                      alt={user.fullName || "User"}
                    />
                    <AvatarFallback>
                      {user.firstName?.charAt(0)}
                      {user.lastName?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="flex-1 text-left">
                    <div className="text-sm font-medium">
                      {user.fullName || "User"}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {user.primaryEmailAddress?.emailAddress}
                    </div>
                  </span>
                </SidebarMenuButton>
              </FadeInUp>
            ) : (
              <div className="flex items-center gap-3 p-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex-1 overflow-visible!">
        <SidebarGroup className="flex-1 space-y-1">
          <SidebarMenu className="space-y-1">
            {isLoaded && entitlementsLoaded
              ? menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  const featureFlag = menuItemFeatureMap[item.href];
                  // Dashboard is always enabled
                  const isEntitled =
                    item.href === "/" ||
                    (featureFlag ? entitlements[featureFlag]?.success : true);
                  const isDisabled = !isEntitled;

                  return (
                    <FadeInUp delay={400 + index * 150} key={index}>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          className={`h-9 pl-3 pr-3 rounded-md transition-colors ${
                            isActive ? "glass-active" : "glass-hoverable"
                          } ${
                            isDisabled ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                          title={
                            isDisabled
                              ? "This feature is not available on your current plan"
                              : item.title
                          }
                          disabled={isDisabled}
                        >
                          <Link
                            href={isDisabled ? "#" : item.href}
                            className="flex items-center gap-3 hover:border! hover:border-gray-200! dark:hover:border-gray-600!"
                            onClick={
                              isDisabled
                                ? (e) => e.preventDefault()
                                : handleNavClick
                            }
                            aria-disabled={isDisabled}
                          >
                            {item.icon === "dashboard" && (
                              <LayoutDashboard className="w-6 h-6 sidebar-icon" />
                            )}
                            {item.icon === "transactions" && (
                              <ArrowRightLeft className="w-6 h-6 sidebar-icon" />
                            )}
                            {item.icon === "budgets" && (
                              <ChartPie className="w-6 h-6 sidebar-icon" />
                            )}
                            {item.icon === "assets" && (
                              <ChartNoAxesCombined className="w-6 h-6 sidebar-icon" />
                            )}
                            {item.icon === "liabilities" && (
                              <CreditCard className="w-6 h-6 sidebar-icon" />
                            )}
                            {item.icon === "bills" && (
                              <ReceiptText className="w-6 h-6 sidebar-icon" />
                            )}
                            {item.icon === "goals" && (
                              <Target className="w-6 h-6 sidebar-icon" />
                            )}
                            {item.icon === "reports" && (
                              <FileChartColumn className="w-6 h-6 sidebar-icon" />
                            )}
                            <span className="text-sm font-medium sidebar-label">
                              {item.label}
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </FadeInUp>
                  );
                })
              : // Skeleton loaders for menu items
                Array.from({ length: 8 }).map((_, index) => (
                  <SidebarMenuItem key={index}>
                    <div className="h-9 px-3 rounded-md flex items-center gap-3">
                      <Skeleton className="w-6 h-6 rounded" />
                      <Skeleton className="h-4 flex-1" />
                    </div>
                  </SidebarMenuItem>
                ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarMenu>
          {isLoaded && user ? (
            <>
              <SidebarMenuItem>
                <FadeInUp>
                  <SidebarMenuButton
                    asChild
                    title="Manage Plan"
                    className={`h-8 px-2 rounded-md transition-all w-fit ${
                      pathname === "/manage-plan"
                        ? "glass-active"
                        : "glass-hoverable"
                    }`}
                  >
                    <Link
                      href="/manage-plan"
                      className="flex items-center gap-3"
                      onClick={handleNavClick}
                    >
                      <WalletCards className="w-5 h-5" />
                      <span className="text-sm">Manage Plan</span>
                    </Link>
                  </SidebarMenuButton>
                </FadeInUp>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <FadeInUp delay={120}>
                  <SidebarThemeToggle />
                </FadeInUp>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <FadeInUp delay={240} triggerOnMount>
                  <SidebarMenuButton
                    onClick={handleSignOut}
                    className="flex items-center gap-3 p-2 rounded-md transition-colors cursor-pointer text-red-800 dark:text-red-500/80 w-fit glass-hoverable"
                    title="Sign Out"
                  >
                    <LogOut className="w-5 h-5 sidebar-icon" />
                    <span className="text-sm sidebar-label">Sign Out</span>
                  </SidebarMenuButton>
                </FadeInUp>
              </SidebarMenuItem>
            </>
          ) : (
            <div className="flex items-center gap-3 p-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          )}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
