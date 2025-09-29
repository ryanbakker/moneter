"use client";

import { Pie, PieChart } from "recharts";

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
import { categories as categoriesConst } from "@/constants/categories";

export const description = "A pie chart with a legend";

// Build main category list from constants
const mainCategories = categoriesConst.map((obj) => Object.keys(obj)[0]);

// Deterministic test values for each main category (largest -> smallest)
const testValues = [900, 800, 700, 600, 500, 400, 300, 200, 100];

// Base data with category name under `browser` and value under `visitors` to reuse existing chart keys
const baseChartData = mainCategories.map((name, index) => ({
  browser: name,
  visitors: testValues[index] ?? 0,
}));

// Rank data and assign category colors 1..9 (largest to smallest)
const rankedChartData = [...baseChartData]
  .sort((a, b) => b.visitors - a.visitors)
  .map((item, index) => ({
    ...item,
    fill: `var(--chart-category-${Math.min(index + 1, 9)})`,
  }));

// Dynamic chart config to label legend items and ensure color variables are available
const chartConfig = rankedChartData.reduce(
  (acc, item, index) => {
    const key = item.browser;
    const label = key
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");
    acc[key] = {
      label,
      color: `var(--chart-category-${Math.min(index + 1, 9)})`,
    };
    return acc;
  },
  { visitors: { label: "Amount" } } as ChartConfig
);

export function CatergoriesSummaryChart() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full -mt-6">
      <ChartContainer
        config={chartConfig}
        className="mx-auto w-full h-[300px] flex items-center flex-col justify-center"
      >
        <PieChart>
          {/* Rank values descending and map largest -> var(--chart-category-1), smallest -> var(--chart-category-9) */}
          <Pie data={rankedChartData} dataKey="visitors" nameKey="browser" />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <ChartLegend
            content={<ChartLegendContent nameKey="browser" />}
            className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
