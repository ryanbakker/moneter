"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Test data for net worth over 12 months - dramatic fluctuations
const netWorthData = [
  {
    month: "Jan",
    netWorth: 120000,
    totalLiabilities: 380000,
    totalAssets: 500000,
  },
  {
    month: "Feb",
    netWorth: 85000,
    totalLiabilities: 385000,
    totalAssets: 470000,
  },
  {
    month: "Mar",
    netWorth: 150000,
    totalLiabilities: 370000,
    totalAssets: 520000,
  },
  {
    month: "Apr",
    netWorth: 220000,
    totalLiabilities: 360000,
    totalAssets: 580000,
  },
  {
    month: "May",
    netWorth: 180000,
    totalLiabilities: 375000,
    totalAssets: 555000,
  },
  {
    month: "Jun",
    netWorth: 250000,
    totalLiabilities: 365000,
    totalAssets: 615000,
  },
  {
    month: "Jul",
    netWorth: 320000,
    totalLiabilities: 355000,
    totalAssets: 675000,
  },
  {
    month: "Aug",
    netWorth: 280000,
    totalLiabilities: 370000,
    totalAssets: 650000,
  },
  {
    month: "Sep",
    netWorth: 350000,
    totalLiabilities: 360000,
    totalAssets: 710000,
  },
  {
    month: "Oct",
    netWorth: 420000,
    totalLiabilities: 350000,
    totalAssets: 770000,
  },
  {
    month: "Nov",
    netWorth: 380000,
    totalLiabilities: 365000,
    totalAssets: 745000,
  },
  {
    month: "Dec",
    netWorth: 450000,
    totalLiabilities: 355000,
    totalAssets: 805000,
  },
];

const chartConfig = {
  totalAssets: {
    label: "Total Assets",
    color: "var(--chart-1)",
  },
  totalLiabilities: {
    label: "Total Liabilities",
    color: "var(--chart-2)",
  },
  netWorth: {
    label: "Net Worth",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

function NetWorthSummaryChart() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <AreaChart data={netWorthData}>
        <defs>
          <linearGradient id="fillTotalAssets" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-totalAssets)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-totalAssets)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillTotalLiabilities" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-totalLiabilities)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-totalLiabilities)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillNetWorth" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-netWorth)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-netWorth)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          className="text-xs"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => {
            return `$${(value / 1000).toFixed(0)}k`;
          }}
          className="text-xs"
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              labelFormatter={(value) => {
                return `Month: ${value}`;
              }}
              indicator="dot"
            />
          }
        />
        <Area
          dataKey="totalAssets"
          type="natural"
          fill="url(#fillTotalAssets)"
          stackId="a"
        />
        <Area
          dataKey="totalLiabilities"
          type="natural"
          fill="url(#fillTotalLiabilities)"
          stackId="a"
        />
        <Area
          dataKey="netWorth"
          type="natural"
          fill="url(#fillNetWorth)"
          stackId="a"
        />
        <ChartLegend content={<ChartLegendContent />} />
      </AreaChart>
    </ChartContainer>
  );
}

export default NetWorthSummaryChart;
