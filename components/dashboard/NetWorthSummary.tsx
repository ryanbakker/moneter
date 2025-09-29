"use client";

import * as React from "react";
import { TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import NetWorthSummaryChart from "./NetWorthSummaryChart";

// Test data for net worth over 12 months
const netWorthData = [
  {
    month: "Jan",
    netWorth: 180000,
    totalLiabilities: 300000,
    totalAssets: 480000,
  },
  {
    month: "Feb",
    netWorth: 185000,
    totalLiabilities: 302000,
    totalAssets: 487000,
  },
  {
    month: "Mar",
    netWorth: 190000,
    totalLiabilities: 301000,
    totalAssets: 491000,
  },
  {
    month: "Apr",
    netWorth: 192000,
    totalLiabilities: 303000,
    totalAssets: 495000,
  },
  {
    month: "May",
    netWorth: 195000,
    totalLiabilities: 304000,
    totalAssets: 499000,
  },
  {
    month: "Jun",
    netWorth: 198000,
    totalLiabilities: 305000,
    totalAssets: 503000,
  },
  {
    month: "Jul",
    netWorth: 200000,
    totalLiabilities: 304000,
    totalAssets: 504000,
  },
  {
    month: "Aug",
    netWorth: 202000,
    totalLiabilities: 305000,
    totalAssets: 507000,
  },
  {
    month: "Sep",
    netWorth: 205000,
    totalLiabilities: 306000,
    totalAssets: 511000,
  },
  {
    month: "Oct",
    netWorth: 208000,
    totalLiabilities: 305000,
    totalAssets: 513000,
  },
  {
    month: "Nov",
    netWorth: 210000,
    totalLiabilities: 304000,
    totalAssets: 514000,
  },
  {
    month: "Dec",
    netWorth: 180000,
    totalLiabilities: 290000,
    totalAssets: 470000,
  },
];

function NetWorthSummary() {
  const currentNetWorth = netWorthData[netWorthData.length - 1].netWorth;
  const previousNetWorth = netWorthData[netWorthData.length - 2].netWorth;
  const changePercentage =
    ((currentNetWorth - previousNetWorth) / previousNetWorth) * 100;
  const currentAssets = netWorthData[netWorthData.length - 1].totalAssets;
  const currentLiabilities =
    netWorthData[netWorthData.length - 1].totalLiabilities;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="dashboard-card">
      <div className="flex flex-col md:flex-row gap-5 h-full">
        {/* Left Panel - Summary Statistics */}
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="dashboard-card-title">Net Worth Summary</h2>
            <p className="dashboard-card-subtitle">
              Your total financial position over time
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <div className="dashboard-value">
                {formatCurrency(currentNetWorth)}
              </div>
              <div className="flex items-center text-red-600 dark:text-red-400 text-sm font-medium">
                <TrendingDown className="w-4 h-4 mr-1" />
                {Math.abs(changePercentage).toFixed(1)}% from last month
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <div>
                <p className="dashboard-label">Total Assets</p>
                <p className="dashboard-value">
                  {formatCurrency(currentAssets)}
                </p>
              </div>
              <div>
                <p className="dashboard-label">Total Liabilities</p>
                <p className="dashboard-value">
                  {formatCurrency(currentLiabilities)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Area Chart */}
        <div className="min-w-0 flex items-center justify-center">
          <NetWorthSummaryChart />
        </div>
      </div>
    </Card>
  );
}

export default NetWorthSummary;
