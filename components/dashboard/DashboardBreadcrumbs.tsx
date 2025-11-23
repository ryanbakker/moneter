"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SIDEBAR_NAV_LINKS } from "@/constants/navigation";

// Map of route paths to display names
const ROUTE_LABELS: Record<string, string> = {
  "/": "Dashboard",
  "/transactions": "Transactions",
  "/bills": "Bills",
  "/goals": "Goals",
  "/budgeting": "Budgeting",
  "/assets": "Assets",
  "/liabilities": "Liabilities",
  "/reports": "Reports",
  "/manage-plan": "Manage Plan",
};

// Helper to format route segment (e.g., "manage-plan" -> "Manage Plan")
const formatSegment = (segment: string): string => {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const DashboardBreadcrumbs = () => {
  const pathname = usePathname();

  // Don't show breadcrumbs on the root dashboard page
  if (pathname === "/") {
    return null;
  }

  // Split pathname into segments
  const segments = pathname.split("/").filter(Boolean);

  // Build breadcrumb items
  const breadcrumbItems = [
    // Always include Dashboard as the first item
    {
      label: "Dashboard",
      href: "/",
      isPage: false,
    },
  ];

  // Add each segment as a breadcrumb item
  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    // Try to get label from ROUTE_LABELS first, then from SIDEBAR_NAV_LINKS, then format the segment
    let label =
      ROUTE_LABELS[currentPath] ||
      SIDEBAR_NAV_LINKS.find((link) => link.href === currentPath)?.label ||
      formatSegment(segment);

    breadcrumbItems.push({
      label,
      href: currentPath,
      isPage: isLast,
    });
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.href}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {item.isPage ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashboardBreadcrumbs;

