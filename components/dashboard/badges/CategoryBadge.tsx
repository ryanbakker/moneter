// components/CategoryBadge.tsx

import { Badge } from "@/components/ui/badge";
import {
  categoryIconMap,
  findCategoryTypeByName,
} from "@/constants/categories";
import { Tag } from "lucide-react";

interface CategoryBadgeProps {
  name: string;
}

const categoryTypeStyles: Record<string, string> = {
  income:
    "bg-emerald-50/50 text-emerald-700 border-emerald-200/60 shadow-sm " +
    "dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800/40",

  expenses:
    "bg-rose-50/50 text-rose-700 border-rose-200/60 shadow-sm " +
    "dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800/40",

  bills:
    "bg-amber-50/50 text-amber-700 border-amber-200/60 shadow-sm " +
    "dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/40",

  assets:
    "bg-sky-50/50 text-sky-700 border-sky-200/60 shadow-sm " +
    "dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-800/40",

  liabilities:
    "bg-violet-50/50 text-violet-700 border-violet-200/60 shadow-sm " +
    "dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800/40",

  goals:
    "bg-indigo-50/50 text-indigo-700 border-indigo-200/60 shadow-sm " +
    "dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800/40",

  budgets:
    "bg-zinc-50/50 text-zinc-700 border-zinc-200/60 shadow-sm " +
    "dark:bg-zinc-900/20 dark:text-zinc-300 dark:border-zinc-800/40",
};

export function CategoryBadge({ name }: CategoryBadgeProps) {
  const Icon = categoryIconMap[name] ?? Tag;

  // Find what category group this name belongs to (income, expenses, etc.)
  const type = findCategoryTypeByName(name);
  const style = type ? categoryTypeStyles[type] : categoryTypeStyles["budgets"]; // fallback

  return (
    <Badge
      variant="outline"
      className={`inline-flex items-center gap-1 px-2 py-0.5 ${style}`}
    >
      <Icon className="h-3 w-3 opacity-80" />
      <span>{name}</span>
    </Badge>
  );
}
