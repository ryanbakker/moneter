import { FadeInUp } from "../ui/animate-on-scroll";
import { Card } from "../ui/card";
import {
  CreditCard,
  Home,
  Car,
  Wifi,
  Phone,
  Zap,
  Droplets,
  Shield,
  Calendar,
  AlertTriangle,
} from "lucide-react";

// Test bill data
const testBills = [
  {
    id: 1,
    name: "Rent Payment",
    amount: 1200,
    dueDate: "2024-01-15",
    category: "Housing",
    icon: Home,
    isRecurring: true,
  },
  {
    id: 2,
    name: "Electric Bill",
    amount: 85,
    dueDate: "2024-01-18",
    category: "Utilities",
    icon: Zap,
    isRecurring: true,
  },
  {
    id: 3,
    name: "Credit Card Payment",
    amount: 450,
    dueDate: "2024-01-22",
    category: "Debt",
    icon: CreditCard,
    isRecurring: true,
  },
  {
    id: 4,
    name: "Car Insurance",
    amount: 125,
    dueDate: "2024-01-25",
    category: "Insurance",
    icon: Shield,
    isRecurring: true,
  },
  {
    id: 5,
    name: "Internet Bill",
    amount: 65,
    dueDate: "2024-01-28",
    category: "Utilities",
    icon: Wifi,
    isRecurring: true,
  },
  {
    id: 6,
    name: "Phone Bill",
    amount: 95,
    dueDate: "2024-02-01",
    category: "Utilities",
    icon: Phone,
    isRecurring: true,
  },
  {
    id: 7,
    name: "Water Bill",
    amount: 45,
    dueDate: "2024-02-05",
    category: "Utilities",
    icon: Droplets,
    isRecurring: true,
  },
  {
    id: 8,
    name: "Car Payment",
    amount: 380,
    dueDate: "2024-02-08",
    category: "Transportation",
    icon: Car,
    isRecurring: true,
  },
];

function UpcomingBills() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "Overdue";
    if (diffDays === 0) return "Due Today";
    if (diffDays === 1) return "Due Tomorrow";
    if (diffDays < 7) return `${diffDays} days`;
    if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} week${weeks > 1 ? "s" : ""}`;
    }
    return "Next Month";
  };

  const getUrgencyColor = (dueDate: string) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "text-red-600 dark:text-red-400";
    if (diffDays <= 1) return "text-orange-600 dark:text-orange-400";
    if (diffDays <= 7) return "text-yellow-600 dark:text-yellow-400";
    return "text-slate-600 dark:text-slate-400";
  };

  const getUrgencyIcon = (dueDate: string) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return AlertTriangle;
    if (diffDays <= 1) return AlertTriangle;
    return Calendar;
  };

  return (
    <Card className="dashboard-card">
      <div>
        <h2 className="dashboard-card-title">Upcoming Bills</h2>
        <p className="dashboard-card-subtitle">
          Bills due in the next 30 days.
        </p>
      </div>

      <div
        className="space-y-2 max-h-[350px] overflow-y-auto px-3 py-4 border border-slate-200 rounded-lg bills-scrollbar"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(99, 102, 241, 0.6) transparent",
        }}
      >
        {testBills.map((bill) => {
          const IconComponent = bill.icon;
          const UrgencyIconComponent = getUrgencyIcon(bill.dueDate);
          const urgencyColor = getUrgencyColor(bill.dueDate);

          return (
            <div
              key={bill.id}
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
                      {bill.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300 opacity-90">
                      <span className="font-medium">
                        {formatCurrency(bill.amount)}
                      </span>
                      <span>•</span>
                      <span>{bill.category}</span>
                      {bill.isRecurring && (
                        <>
                          <span>•</span>
                          <span className="text-indigo-600 dark:text-indigo-400">
                            Recurring
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right ml-3">
                  <div className="flex items-center gap-1 text-xs mb-1">
                    <UrgencyIconComponent
                      className={`w-3 h-3 ${urgencyColor}`}
                    />
                    <span className={urgencyColor}>
                      {getDaysUntilDue(bill.dueDate)}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {new Date(bill.dueDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
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

export default UpcomingBills;
