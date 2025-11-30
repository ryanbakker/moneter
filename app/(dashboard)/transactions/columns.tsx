"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Transaction } from "@/lib/types/transaction";
import { Checkbox } from "@/components/ui/checkbox";
import SortableHeader from "@/components/SortableHeader";
import { formatDate, formatToDollars } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, Eye, MoreHorizontal, Trash2 } from "lucide-react";
import { CategoryBadge } from "@/components/dashboard/badges/CategoryBadge";
import { TypeBadge } from "@/components/dashboard/badges/TypeBadge";
import { AccountBadge } from "@/components/dashboard/badges/AccountBadge";

interface ActionHandlers {
  onView: (transaction: Transaction) => void;
  onEdit: (transaction: Transaction) => void;
  onDelete: (transaction: Transaction) => void;
}

let globalActionHandlers: ActionHandlers | null = null;
export const setGlobalActionHandlers = (handlers: ActionHandlers) => {
  globalActionHandlers = handlers;
};

export const createColumns = (
  sortStates: Record<string, "asc" | "desc" | false>,
  onToggleSort: (columnId: string) => void
): ColumnDef<Transaction>[] => [
  // SELECT
  {
    id: "select",
    enableHiding: false,
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
        aria-label="Select all"
        className="mr-1"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(v) => row.toggleSelected(!!v)}
        aria-label="Select row"
        className="mr-1"
      />
    ),
  },

  // DESCRIPTION (always shown)
  {
    accessorKey: "description",
    header: () => (
      <SortableHeader
        columnId="description"
        sortState={sortStates.description || false}
        onToggleSort={onToggleSort}
        className="text-xs sm:text-sm"
      >
        Description
      </SortableHeader>
    ),
    cell: ({ row }) => (
      <span
        className="
          text-zinc-800 dark:text-zinc-200
          text-xs sm:text-sm
          max-w-[160px] sm:max-w-[240px] md:max-w-[320px]
          truncate
          block
        "
      >
        {row.getValue("description")}
      </span>
    ),
  },

  // AMOUNT (always shown)
  {
    accessorKey: "amount",
    header: () => (
      <SortableHeader
        columnId="amount"
        sortState={sortStates.amount || false}
        onToggleSort={onToggleSort}
        className="text-xs sm:text-sm"
      >
        Amount
      </SortableHeader>
    ),
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number;
      const type = row.original.type;

      const getAmountStyle = (amount: number, type: string) => {
        if (type === "transfer")
          return "text-blue-700 dark:text-blue-300 font-semibold";
        if (amount < 0) return "text-rose-700 dark:text-rose-300 font-semibold";
        if (amount > 0)
          return "text-emerald-700 dark:text-emerald-300 font-semibold";
        return "text-zinc-700 dark:text-zinc-300";
      };

      return (
        <span className={`${getAmountStyle(amount, type)} text-xs sm:text-sm`}>
          {formatToDollars(amount)}
        </span>
      );
    },
  },

  // DATE / hidden until sm
  {
    accessorKey: "date",
    meta: {
      className: "hidden xs:table-cell",
    },
    header: () => (
      <SortableHeader
        columnId="date"
        sortState={sortStates.date || false}
        onToggleSort={onToggleSort}
        className="text-xs sm:text-sm"
      >
        Date
      </SortableHeader>
    ),
    cell: ({ row }) => (
      <span className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
        {formatDate(row.getValue("date") as string)}
      </span>
    ),
  },

  // ACCOUNT / hidden until md
  {
    accessorKey: "accountName",
    meta: {
      className: "hidden md:table-cell",
    },
    header: () => (
      <SortableHeader
        columnId="accountName"
        sortState={sortStates.accountName || false}
        onToggleSort={onToggleSort}
        className="text-xs sm:text-sm"
      >
        Account
      </SortableHeader>
    ),
    cell: ({ row }) => <AccountBadge name={row.original.accountName} />,
  },

  // CATEGORY / hidden until xl
  {
    id: "category.name",
    accessorFn: (row) => row.category.name,
    meta: {
      className: "hidden xl:table-cell",
    },
    header: () => (
      <SortableHeader
        columnId="category.name"
        sortState={sortStates["category.name"] || false}
        onToggleSort={onToggleSort}
        className="text-xs sm:text-sm"
      >
        Category
      </SortableHeader>
    ),
    cell: ({ row }) => <CategoryBadge name={row.original.category.name} />,
  },

  // TYPE / hidden until lg
  {
    accessorKey: "type",
    meta: {
      className: "hidden lg:table-cell",
    },
    header: () => (
      <SortableHeader
        columnId="type"
        sortState={sortStates.type || false}
        onToggleSort={onToggleSort}
        className="text-xs sm:text-sm"
      >
        Type
      </SortableHeader>
    ),
    cell: ({ row }) => <TypeBadge type={row.getValue("type") as string} />,
  },

  // ACTIONS
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const transaction = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 rounded-md hover:bg-zinc-50/40 dark:hover:bg-zinc-900/20 backdrop-blur-sm transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="
      rounded-md backdrop-blur-md
      bg-white/40 dark:bg-zinc-900/30
      border border-neutral-200/80 dark:border-zinc-800/40
      shadow-xl space-y-1 transition-all
    "
          >
            {/* ---- VIEW ---- */}
            <DropdownMenuItem
              className="cursor-pointer hover:bg-zinc-100/40 dark:hover:bg-zinc-800/30 transition"
              onClick={() => {
                globalActionHandlers?.onView(transaction);
              }}
            >
              <Eye className="mr-2 h-4 w-4" />
              View details
            </DropdownMenuItem>

            {/* ---- EDIT ---- */}
            <DropdownMenuItem
              className="cursor-pointer hover:bg-zinc-100/40 dark:hover:bg-zinc-800/30 transition"
              onClick={() => {
                globalActionHandlers?.onEdit(transaction);
              }}
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>

            {/* ---- DELETE ---- */}
            <DropdownMenuItem
              className="
        cursor-pointer
        bg-red-50/40 text-red-700 dark:bg-red-900/20 dark:text-red-300
        border border-red-200/40 dark:border-red-800/40
        hover:bg-red-100/50 dark:hover:bg-red-900/30
        font-medium transition
      "
              onClick={() => {
                globalActionHandlers?.onDelete(transaction);
              }}
            >
              <Trash2 className="mr-2 h-4 w-4 text-red-500 dark:text-red-300" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
