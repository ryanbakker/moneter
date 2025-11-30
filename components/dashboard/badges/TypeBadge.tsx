import { Badge } from "@/components/ui/badge";
import { TransactionType } from "@/lib/types/transaction";

interface TypeBadgeProps {
  type: string | null | undefined;
}

export function TypeBadge({ type }: TypeBadgeProps) {
  if (!type) return <Badge variant="outline">Unknown</Badge>;

  // Clean & normalize
  const normalized = type.toLowerCase() as TransactionType;

  const typeStyles: Record<TransactionType, string> = {
    income:
      "bg-emerald-50/50 text-emerald-700 border-emerald-200/60 shadow-sm " +
      "dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800/40",

    expense:
      "bg-rose-50/50 text-rose-700 border-rose-200/60 shadow-sm " +
      "dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800/40",

    transfer:
      "bg-blue-50/50 text-blue-700 border-blue-200/60 shadow-sm " +
      "dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/40",

    other:
      "bg-zinc-50/50 text-zinc-700 border-zinc-200/60 shadow-sm " +
      "dark:bg-zinc-900/20 dark:text-zinc-300 dark:border-zinc-800/40",
  };

  const style = typeStyles[normalized] ?? typeStyles.other;

  return (
    <Badge
      variant="outline"
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${style}`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </Badge>
  );
}
