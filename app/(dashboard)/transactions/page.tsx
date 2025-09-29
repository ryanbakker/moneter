import DashboardTitle from "@/components/DashboardTitle";

function TransactionsPage() {
  return (
    <div className="page-content">
      <DashboardTitle
        title="Transactions"
        subtitle="View, categorize, and analyze your financial transactions to
            understand your spending patterns."
        hasWelcome={false}
      />
    </div>
  );
}

export default TransactionsPage;
