import { SortableHeaderProps } from "@/lib/types/table";
import { Button } from "./ui/button";
import { ArrowUpDown, MoveDown, MoveUp } from "lucide-react";

const SortableHeader = ({
  columnId,
  sortState,
  onToggleSort,
  children,
  className = "",
}: SortableHeaderProps) => {
  return (
    <Button
      variant="ghost"
      onClick={() => onToggleSort(columnId)}
      className={`
        h-auto 
        px-0! 
        py-2 
        font-semibold 
        cursor-pointer 
        hover:bg-transparent! 
        group 
        flex
        flex-row
        items-center 
        gap-2 
        whitespace-nowrap 
        w-max 

        ${sortState ? "table-header-sorted" : ""}
        ${className}
      `}
    >
      <span className="flex-shrink-0">{children}</span>

      {sortState === "asc" ? (
        <MoveUp className="h-4 w-4 flex-shrink-0 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500" />
      ) : sortState === "desc" ? (
        <MoveDown className="h-4 w-4 flex-shrink-0 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500" />
      ) : (
        <ArrowUpDown className="h-4 w-4 flex-shrink-0 text-slate-400 group-hover:text-indigo-500" />
      )}
    </Button>
  );
};

export default SortableHeader;
