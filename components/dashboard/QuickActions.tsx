"use client";

import { FileText, Plus } from "lucide-react";
import { FadeInUp } from "../ui/animate-on-scroll";
import { Card } from "../ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import QuickTransactionDialog from "./QuickTransactionDialog";

function QuickActions() {
  const [isContributionDialogOpen, setIsContributionDialogOpen] =
    useState(false);
  const [isTransactionDialogOpen, setIsTransactionDialogOpen] = useState(false);

  const router = useRouter();

  const quickActions = [
    {
      id: 1,
      title: "Add Transaction",
      description: "Record a new expense or income",
      icon: Plus,
      action: () => setIsTransactionDialogOpen(true),
      disabled: false,
    },
    {
      id: 2,
      title: "Add Contribution",
      description: "Record a new savings or balance contribution",
      icon: Plus,
      action: () => setIsContributionDialogOpen(true),
      disabled: false,
    },
    {
      id: 3,
      title: "Generate Report",
      description: "Use AI to create a report to get financial insights",
      icon: FileText,
      action: () => router.push("/reports"),
      disabled: true,
    },
  ];

  return (
    <Card className="dashboard-card">
      <div>
        <h2 className="dashboard-card-title">Quick Actions</h2>
        <p className="dashboard-card-subtitle">
          Update your financial data and generate reports.
        </p>
      </div>

      <div className="space-y-1.5">
        {quickActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <button
              key={action.id}
              onClick={action.disabled ? undefined : action.action}
              disabled={action.disabled}
              className={`w-full rounded-md border transition-all duration-200 flex justify-between group backdrop-blur-lg ${
                action.disabled
                  ? "cursor-not-allowed opacity-50 bg-white/55 dark:bg-white/8 border-indigo-200/30 dark:border-indigo-700/20"
                  : "cursor-pointer bg-white/90 dark:bg-white/12 border-indigo-300/40 dark:border-indigo-600/25 hover:bg-white/80 dark:hover:bg-white/18 hover:border-indigo-400/50 dark:hover:border-indigo-500/30 shadow-lg hover:shadow-xl dark:shadow-lg dark:shadow-indigo-500/5 hover:dark:shadow-indigo-400/10"
              }`}
            >
              <div className="p-3 text-left max-w-[80%]">
                <div
                  className={`dashboard-card-title text-sm! ${
                    action.disabled ? "opacity-50" : ""
                  }`}
                >
                  {action.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {action.description}
                </div>
              </div>

              <div className="dashboard-icon flex items-center justify-center my-auto border-l rounded-r-lg rounded-l-none mr-2">
                <IconComponent
                  className={`icon-primary w-full! flex-1! ${
                    action.disabled ? "opacity-50" : ""
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      <QuickTransactionDialog
        isOpen={isTransactionDialogOpen}
        onClose={() => setIsTransactionDialogOpen(false)}
      />
    </Card>
  );
}

export default QuickActions;
