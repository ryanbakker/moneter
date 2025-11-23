import BudgetsAction from "@/components/dashboard/actions/BudgetsAction";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Separator } from "@/components/ui/separator";

const BudgetsPage = () => {
  return (
    <>
      <section className="dashboard-header-container">
        <DashboardPageHeader
          title="Budgets"
          subtitle="View and manage your financial summary reports generated with Gemini."
        />

        <BudgetsAction />
      </section>

      <Separator className="my-5" />

      <section>
        <p>Content</p>
      </section>
    </>
  );
};

export default BudgetsPage;
