import { FadeInUp } from "../ui/animate-on-scroll";
import { Card } from "../ui/card";
import {
  Building2,
  Plane,
  Car,
  DollarSign,
  Calendar,
  Clock,
  Home,
  GraduationCap,
  Heart,
} from "lucide-react";

// Test goal data
const testGoals = [
  {
    id: 1,
    title: "Emergency Fund",
    targetAmount: 10000,
    currentAmount: 6000,
    targetDate: "2024-12-31",
    icon: Building2,
  },
  {
    id: 2,
    title: "Vacation to Japan",
    targetAmount: 5000,
    currentAmount: 4400,
    targetDate: "2024-08-15",
    icon: Plane,
  },
  {
    id: 3,
    title: "New Car Down Payment",
    targetAmount: 15000,
    currentAmount: 12000,
    targetDate: "2024-10-01",
    icon: Car,
  },
  {
    id: 4,
    title: "House Down Payment",
    targetAmount: 50000,
    currentAmount: 28000,
    targetDate: "2025-06-30",
    icon: Home,
  },
  {
    id: 5,
    title: "College Fund",
    targetAmount: 25000,
    currentAmount: 5200,
    targetDate: "2026-09-01",
    icon: GraduationCap,
  },
  {
    id: 6,
    title: "Wedding Fund",
    targetAmount: 20000,
    currentAmount: 18500,
    targetDate: "2024-11-15",
    icon: Heart,
  },
];

function GoalsSummary() {
  const getProgressGradient = (percentage: number) => {
    if (percentage >= 85) {
      return "bg-gradient-to-r from-sky-400 via-teal-500 to-indigo-600 dark:from-sky-300 dark:via-teal-400 dark:to-indigo-500";
    }
    if (percentage >= 70) {
      return "bg-gradient-to-r from-sky-400 to-teal-500 dark:from-sky-300 dark:to-teal-400";
    }
    return "bg-gradient-to-r from-sky-400 to-sky-500 dark:from-sky-300 dark:to-sky-400";
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getTimeLeft = (targetDate: string) => {
    const target = new Date(targetDate);
    const now = new Date();
    const diffTime = target.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "Overdue";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "1 day left";
    if (diffDays < 30) return `${diffDays} days left`;
    if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} month${months > 1 ? "s" : ""} left`;
    }
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? "s" : ""} left`;
  };

  return (
    <Card className="dashboard-card">
      <div>
        <h2 className="dashboard-card-title">Goals</h2>
        <p className="dashboard-card-subtitle">
          Track your progress towards financial milestones.
        </p>
      </div>

      <div
        className="space-y-2 max-h-[350px] overflow-y-auto px-3 py-4 border border-slate-200 rounded-lg goals-scrollbar"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(99, 102, 241, 0.6) transparent",
        }}
      >
        {testGoals.map((goal) => {
          const percentage = Math.min(
            (goal.currentAmount / goal.targetAmount) * 100,
            100
          );
          const progressGradient = getProgressGradient(percentage);
          const IconComponent = goal.icon;

          return (
            <div
              key={goal.id}
              className="w-full rounded-md border transition-all duration-200 backdrop-blur-lg bg-white/90 dark:bg-white/8 border-indigo-300/40 dark:border-indigo-500/30 hover:bg-white/80 dark:hover:bg-white/12 hover:border-indigo-400/50 dark:hover:border-indigo-400/40 shadow-lg hover:shadow-xl dark:shadow-lg dark:shadow-indigo-500/10 hover:dark:shadow-indigo-400/15"
            >
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3 flex-1">
                  <div className="dashboard-icon">
                    <IconComponent className="icon-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-sm font-semibold tracking-tight transition-all duration-250 ease-out leading-tight bg-gradient-to-tr from-slate-700 via-slate-600 to-slate-500 text-transparent bg-clip-text truncate dark:from-slate-200 dark:via-slate-100 dark:to-slate-50 pb-0.5"
                      style={{
                        textShadow:
                          "0 1px 2px color-mix(in oklch, oklch(0.145 0 0) 6%, transparent)",
                        filter:
                          "drop-shadow(0 1px 1px color-mix(in oklch, oklch(0.145 0 0) 4%, transparent))",
                      }}
                    >
                      {goal.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300 opacity-90">
                      <span>
                        {formatCurrency(goal.currentAmount)} /{" "}
                        {formatCurrency(goal.targetAmount)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right ml-3">
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <Clock className="w-3 h-3" />
                    <span>{getTimeLeft(goal.targetDate)}</span>
                  </div>
                  <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                    {percentage.toFixed(0)}%
                  </div>
                </div>
              </div>

              {/* Compact Progress Bar */}
              <div className="px-3 pb-3">
                <div className="w-full bg-gray-200/60 dark:bg-gray-800/60 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${progressGradient} rounded-full transition-all duration-500 ease-out relative overflow-hidden`}
                    style={{ width: `${percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default GoalsSummary;
