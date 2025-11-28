"use client";

import TransactionsAction from "@/components/dashboard/actions/TransactionsAction";
import DashboardHeader from "@/components/dashboard/DashboardPageHeader";
import { Separator } from "@/components/ui/separator";
import { Transaction } from "@/lib/types/transaction";
import { DataTable } from "./data-table";
import { createColumns } from "./columns";
import { useSorting } from "@/hooks/use-sorting";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function testTransactions(): Promise<Transaction[]> {
  return [
    {
      _id: "txn_001",
      userId: "user_123",
      date: "2025-01-14T10:25:00Z",
      amount: 1200,
      type: "income",
      category: {
        id: "cat_salary",
        name: "Salary",
        icon: "💼",
        color: "#4ade80",
        budget: 4000,
      },
      description: "Monthly Salary – January",
      merchant: "Acme Corp",
      accountId: "acc_checking",
      accountName: "Everyday Account",
      isRecurring: true,
      recurringId: "rec_salary",
      tags: ["work", "salary", "monthly"],
      notes: "After tax",
      createdAt: "2025-01-14T10:30:00Z",
      updatedAt: "2025-01-14T10:30:00Z",
    },
    {
      _id: "txn_002",
      userId: "user_123",
      date: "2025-01-16T18:45:00Z",
      amount: 42.5,
      type: "expense",
      category: {
        id: "cat_groceries",
        name: "Groceries",
        icon: "🛒",
        color: "#f97316",
        budget: 300,
      },
      description: "Countdown food shop",
      merchant: "Countdown",
      accountId: "acc_debit",
      accountName: "Debit Card",
      isRecurring: false,
      tags: ["food", "groceries"],
      notes: "Protein, veggies, bread",
      createdAt: "2025-01-16T18:50:00Z",
      updatedAt: "2025-01-16T18:50:00Z",
    },
    {
      _id: "txn_003",
      userId: "user_123",
      date: "2025-01-17T09:12:00Z",
      amount: 250,
      type: "transfer",
      category: {
        id: "cat_transfer",
        name: "Transfer",
        icon: "🔁",
        color: "#6366f1",
      },
      description: "Transfer to savings",
      accountId: "acc_savings",
      accountName: "Savings Account",
      isRecurring: false,
      recurringId: undefined,
      tags: ["savings", "transfer"],
      createdAt: "2025-01-17T09:15:00Z",
      updatedAt: "2025-01-17T09:15:00Z",
    },
  ];
}

const data = await testTransactions();

export default function TransactionsPage() {
  const { sortStates, toggleSorting } = useSorting();

  const columns = createColumns(sortStates, toggleSorting);

  return (
    <>
      <section className="dashboard-header-container">
        <DashboardHeader
          title="Transactions"
          subtitle="Manage and add transactions to your accounts and track progress."
        />

        <TransactionsAction />
      </section>

      <Separator className="my-5" />

      <section>
        <DataTable columns={columns} data={data} sortStates={sortStates} />
      </section>
    </>
  );
}
