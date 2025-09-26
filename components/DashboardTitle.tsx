"use client";

import { useUser } from "@clerk/nextjs";

type DashboardTitleProps = {
  title?: string;
  subtitle?: string;
  hasWelcome?: boolean;
};

function DashboardTitle({
  title,
  subtitle,
  hasWelcome = false,
}: DashboardTitleProps) {
  const { user } = useUser();

  const effectiveTitle = hasWelcome ? "Dashboard" : title ?? "Dashboard";
  const effectiveSubtitle = hasWelcome
    ? user
      ? `Welcome back ${
          user.firstName || "there"
        }! Here's an overview of your financial health.`
      : "Welcome back! Here's an overview of your financial health."
    : subtitle ?? "";

  return (
    <div>
      <h1 className="dashboard-heading">{effectiveTitle}</h1>
      {effectiveSubtitle ? (
        <h2 className="dashboard-subheading">{effectiveSubtitle}</h2>
      ) : null}
    </div>
  );
}

export default DashboardTitle;
