import { Badge } from "@/components/ui/badge";

interface AccountBadgeProps {
  name: string | null | undefined;
}

const neutralGlassStyle =
  "bg-zinc-50/40 text-zinc-700 border-zinc-200/50 shadow-sm " +
  "dark:bg-zinc-900/20 dark:text-zinc-300 dark:border-zinc-800/40";

export function AccountBadge({ name }: AccountBadgeProps) {
  if (!name) {
    return (
      <Badge
        variant="outline"
        className={`px-2.5 py-0.5 text-xs font-medium rounded-md backdrop-blur-sm opacity-60 ${neutralGlassStyle}`}
      >
        Unknown Account
      </Badge>
    );
  }

  return (
    <Badge
      variant="outline"
      className={`px-2.5 py-0.5 text-xs font-medium rounded-full backdrop-blur-sm ${neutralGlassStyle}`}
    >
      {name}
    </Badge>
  );
}
