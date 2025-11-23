import TransactionsAction from "@/components/dashboard/actions/TransactionsAction";
import DashboardHeader from "@/components/dashboard/DashboardPageHeader";
import { Separator } from "@/components/ui/separator";

const TransactionsPage = () => {
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
        <p>Content</p>
      </section>
    </>
  );
};

export default TransactionsPage;
