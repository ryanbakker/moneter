"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export const description = "An interactive area chart";
const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150, visitors: 372 },
  { date: "2024-04-02", desktop: 97, mobile: 180, visitors: 277 },
  { date: "2024-04-03", desktop: 167, mobile: 120, visitors: 287 },
  { date: "2024-04-04", desktop: 242, mobile: 260, visitors: 502 },
  { date: "2024-04-05", desktop: 373, mobile: 290, visitors: 663 },
  { date: "2024-04-06", desktop: 301, mobile: 340, visitors: 641 },
  { date: "2024-04-07", desktop: 245, mobile: 180, visitors: 425 },
  { date: "2024-04-08", desktop: 409, mobile: 320, visitors: 729 },
  { date: "2024-04-09", desktop: 59, mobile: 110, visitors: 169 },
  { date: "2024-04-10", desktop: 261, mobile: 190, visitors: 451 },
  { date: "2024-04-11", desktop: 327, mobile: 350, visitors: 677 },
  { date: "2024-04-12", desktop: 292, mobile: 210, visitors: 502 },
  { date: "2024-04-13", desktop: 342, mobile: 380, visitors: 722 },
  { date: "2024-04-14", desktop: 137, mobile: 220, visitors: 357 },
  { date: "2024-04-15", desktop: 120, mobile: 170, visitors: 290 },
  { date: "2024-04-16", desktop: 138, mobile: 190, visitors: 328 },
  { date: "2024-04-17", desktop: 446, mobile: 360, visitors: 806 },
  { date: "2024-04-18", desktop: 364, mobile: 410, visitors: 774 },
  { date: "2024-04-19", desktop: 243, mobile: 180, visitors: 423 },
  { date: "2024-04-20", desktop: 89, mobile: 150, visitors: 239 },
  { date: "2024-04-21", desktop: 137, mobile: 200, visitors: 337 },
  { date: "2024-04-22", desktop: 224, mobile: 170, visitors: 394 },
  { date: "2024-04-23", desktop: 138, mobile: 230, visitors: 368 },
  { date: "2024-04-24", desktop: 387, mobile: 290, visitors: 677 },
  { date: "2024-04-25", desktop: 215, mobile: 250, visitors: 465 },
  { date: "2024-04-26", desktop: 75, mobile: 130, visitors: 205 },
  { date: "2024-04-27", desktop: 383, mobile: 420, visitors: 803 },
  { date: "2024-04-28", desktop: 122, mobile: 180, visitors: 302 },
  { date: "2024-04-29", desktop: 315, mobile: 240, visitors: 555 },
  { date: "2024-04-30", desktop: 454, mobile: 380, visitors: 834 },
  { date: "2024-05-01", desktop: 165, mobile: 220, visitors: 385 },
  { date: "2024-05-02", desktop: 293, mobile: 310, visitors: 603 },
  { date: "2024-05-03", desktop: 247, mobile: 190, visitors: 437 },
  { date: "2024-05-04", desktop: 385, mobile: 420, visitors: 805 },
  { date: "2024-05-05", desktop: 481, mobile: 390, visitors: 871 },
  { date: "2024-05-06", desktop: 498, mobile: 520, visitors: 1018 },
  { date: "2024-05-07", desktop: 388, mobile: 300, visitors: 688 },
  { date: "2024-05-08", desktop: 149, mobile: 210, visitors: 359 },
  { date: "2024-05-09", desktop: 227, mobile: 180, visitors: 407 },
  { date: "2024-05-10", desktop: 293, mobile: 330, visitors: 623 },
  { date: "2024-05-11", desktop: 335, mobile: 270, visitors: 605 },
  { date: "2024-05-12", desktop: 197, mobile: 240, visitors: 437 },
  { date: "2024-05-13", desktop: 197, mobile: 160, visitors: 357 },
  { date: "2024-05-14", desktop: 448, mobile: 490, visitors: 938 },
  { date: "2024-05-15", desktop: 473, mobile: 380, visitors: 853 },
  { date: "2024-05-16", desktop: 338, mobile: 400, visitors: 738 },
  { date: "2024-05-17", desktop: 499, mobile: 420, visitors: 919 },
  { date: "2024-05-18", desktop: 315, mobile: 350, visitors: 665 },
  { date: "2024-05-19", desktop: 235, mobile: 180, visitors: 415 },
  { date: "2024-05-20", desktop: 177, mobile: 230, visitors: 407 },
  { date: "2024-05-21", desktop: 82, mobile: 140, visitors: 222 },
  { date: "2024-05-22", desktop: 81, mobile: 120, visitors: 201 },
  { date: "2024-05-23", desktop: 252, mobile: 290, visitors: 542 },
  { date: "2024-05-24", desktop: 294, mobile: 220, visitors: 514 },
  { date: "2024-05-25", desktop: 201, mobile: 250, visitors: 451 },
  { date: "2024-05-26", desktop: 213, mobile: 170, visitors: 383 },
  { date: "2024-05-27", desktop: 420, mobile: 460, visitors: 880 },
  { date: "2024-05-28", desktop: 233, mobile: 190, visitors: 423 },
  { date: "2024-05-29", desktop: 78, mobile: 130, visitors: 208 },
  { date: "2024-05-30", desktop: 340, mobile: 280, visitors: 620 },
  { date: "2024-05-31", desktop: 178, mobile: 230, visitors: 408 },
  { date: "2024-06-01", desktop: 178, mobile: 200, visitors: 378 },
  { date: "2024-06-02", desktop: 470, mobile: 410, visitors: 880 },
  { date: "2024-06-03", desktop: 103, mobile: 160, visitors: 263 },
  { date: "2024-06-04", desktop: 439, mobile: 380, visitors: 819 },
  { date: "2024-06-05", desktop: 88, mobile: 140, visitors: 228 },
  { date: "2024-06-06", desktop: 294, mobile: 250, visitors: 544 },
  { date: "2024-06-07", desktop: 323, mobile: 370, visitors: 693 },
  { date: "2024-06-08", desktop: 385, mobile: 320, visitors: 705 },
  { date: "2024-06-09", desktop: 438, mobile: 480, visitors: 918 },
  { date: "2024-06-10", desktop: 155, mobile: 200, visitors: 355 },
  { date: "2024-06-11", desktop: 92, mobile: 150, visitors: 242 },
  { date: "2024-06-12", desktop: 492, mobile: 420, visitors: 912 },
  { date: "2024-06-13", desktop: 81, mobile: 130, visitors: 211 },
  { date: "2024-06-14", desktop: 426, mobile: 380, visitors: 806 },
  { date: "2024-06-15", desktop: 307, mobile: 350, visitors: 657 },
  { date: "2024-06-16", desktop: 371, mobile: 310, visitors: 681 },
  { date: "2024-06-17", desktop: 475, mobile: 520, visitors: 995 },
  { date: "2024-06-18", desktop: 107, mobile: 170, visitors: 277 },
  { date: "2024-06-19", desktop: 341, mobile: 290, visitors: 631 },
  { date: "2024-06-20", desktop: 408, mobile: 450, visitors: 858 },
  { date: "2024-06-21", desktop: 169, mobile: 210, visitors: 379 },
  { date: "2024-06-22", desktop: 317, mobile: 270, visitors: 587 },
  { date: "2024-06-23", desktop: 480, mobile: 530, visitors: 1010 },
  { date: "2024-06-24", desktop: 132, mobile: 180, visitors: 312 },
  { date: "2024-06-25", desktop: 141, mobile: 190, visitors: 331 },
  { date: "2024-06-26", desktop: 434, mobile: 380, visitors: 814 },
  { date: "2024-06-27", desktop: 448, mobile: 490, visitors: 938 },
  { date: "2024-06-28", desktop: 149, mobile: 200, visitors: 349 },
  { date: "2024-06-29", desktop: 103, mobile: 160, visitors: 263 },
  { date: "2024-06-30", desktop: 446, mobile: 400, visitors: 846 },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-2)",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

function IncomeVsSpendingChart() {
  const hasChartData = chartData && chartData.length > 0;
  const [timeRange, setTimeRange] = React.useState("30d");
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return hasChartData ? (
    <div className="w-full">
      <div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-md sm:ml-auto sm:flex z-20 relative"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[250px] w-full mt-3"
      >
        <AreaChart data={filteredData}>
          <defs>
            <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-visitors)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-visitors)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-desktop)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-desktop)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-mobile)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-mobile)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={32}
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
            }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => {
              return `${value.toLocaleString()}`;
            }}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                labelFormatter={(value) => {
                  return new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
                indicator="dot"
              />
            }
          />
          <Area
            dataKey="visitors"
            type="natural"
            fill="url(#fillVisitors)"
            stroke="var(--color-visitors)"
            stackId="a"
          />
          <Area
            dataKey="mobile"
            type="natural"
            fill="url(#fillMobile)"
            stroke="var(--color-mobile)"
            stackId="a"
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="url(#fillDesktop)"
            stroke="var(--color-desktop)"
            stackId="a"
          />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
    </div>
  ) : (
    <div className="w-full h-full bg-neutral-100/80 dark:bg-neutral-800/30 flex-1 min-h-[200px] rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 flex items-center justify-center text-center text-neutral-600 dark:text-neutral-400 font-bold uppercase text-sm backdrop-blur-sm">
      Add transactions
      <br />
      to get insights
    </div>
  );
}

export default IncomeVsSpendingChart;
