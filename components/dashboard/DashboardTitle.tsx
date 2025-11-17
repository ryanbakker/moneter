"use client";

import { useUser } from "@clerk/nextjs";
import { Separator } from "../ui/separator";

const DashboardTitle = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-extrabold text-indigo-950 dark:text-indigo-50 text-3xl tracking-tighter">
        Dashboard
      </h1>
      <h2 className="font-medium text-sm text-indigo-950/60 dark:text-indigo-100/60 max-w-[300px]">
        {user
          ? `Welcome back ${
              user.firstName || "there"
            }! Here's an overview of your financial health.`
          : ""}
      </h2>

      <Separator className="my-5" />
    </div>
  );
};

export default DashboardTitle;
