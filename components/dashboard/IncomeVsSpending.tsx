import { FadeInUp } from "../ui/animate-on-scroll";
import { Card } from "../ui/card";
import { CircleDollarSign, TrendingDown, TrendingUp } from "lucide-react";
import IncomeVsSpendingChart from "./IncomeVsSpendingChart";

function IncomeVsSpending() {
  return (
    <Card className="dashboard-card">
      <div className="flex flex-col md:flex-row gap-5 h-full">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-0">
            <div>
              <h2 className="dashboard-card-title">Income vs Spending</h2>
              <p className="dashboard-card-subtitle">
                Monthly trends in your income and spending patterns.
              </p>
            </div>

            {/* <Link href="/transactions" className=" w-full sm:w-auto">
                <Button className="dashboard-card-btn">
                  Transactions
                  <MoveRight />
                </Button>
              </Link> */}
          </div>

          <div className="flex flex-col items-center justify-between gap-3 mt-3">
            <div className="bg-gradient-to-tr from-indigo-200/60 to-indigo-150/50 dark:from-indigo-900/25 dark:to-indigo-800/15 backdrop-blur-lg px-3 py-3 rounded-lg flex flex-row items-center border border-indigo-300/70 dark:border-indigo-600/80 w-full gap-2 shadow-lg shadow-indigo-500/20 dark:shadow-indigo-400/12">
              <TrendingUp
                className="text-indigo-700/70 dark:text-indigo-300/70 bg-indigo-300/30 p-1 rounded-sm"
                size={24}
              />
              <p className="font-bold text-indigo-800 dark:text-indigo-200">
                $8,500
              </p>
              <span className="text-sm text-indigo-700 dark:text-indigo-300">
                Income
              </span>
            </div>
            <div className="bg-gradient-to-tr from-teal-200/60 to-teal-150/50 dark:from-teal-900/25 dark:to-teal-800/15 backdrop-blur-lg px-3 py-3 rounded-lg flex flex-row items-center border border-teal-300/70 dark:border-teal-600/80 w-full gap-2 shadow-lg shadow-teal-500/20 dark:shadow-teal-400/12">
              <TrendingDown
                className="text-teal-700/70 dark:text-teal-300/70 bg-teal-300/30 p-1 rounded-sm"
                size={24}
              />
              <p className="font-bold text-teal-800 dark:text-teal-200">
                $8,500
              </p>
              <span className="text-sm text-teal-700 dark:text-teal-300">
                Spending
              </span>
            </div>
            <div className="bg-gradient-to-tr from-sky-200/60 to-sky-150/50 dark:from-sky-900/25 dark:to-sky-800/15 backdrop-blur-lg px-3 py-3 rounded-lg flex flex-row items-center border border-sky-300/70 dark:border-sky-600/80 w-full gap-2 shadow-lg shadow-sky-500/20 dark:shadow-sky-400/12">
              <CircleDollarSign
                className="text-sky-700/70 dark:text-sky-300/70 bg-sky-300/30 p-1 rounded-sm"
                size={24}
              />
              <p className="font-bold text-sky-800 dark:text-sky-200">$8,500</p>
              <span className="text-sm text-sky-700 dark:text-sky-300">
                Surplus
              </span>
            </div>
          </div>
        </div>

        <IncomeVsSpendingChart />
      </div>
    </Card>
  );
}

export default IncomeVsSpending;
