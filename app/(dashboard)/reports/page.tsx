import ReportsAction from "@/components/dashboard/actions/ReportsAction";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Separator } from "@/components/ui/separator";

const ReportsPage = () => {
  return (
    <>
      <section className="dashboard-header-container">
        <DashboardPageHeader
          title="Reports"
          subtitle="View and manage your financial summary reports generated with Gemini."
        />

        <ReportsAction />
      </section>

      <Separator className="my-5" />

      <section>
        <p>Content</p>
      </section>
    </>
  );
};

export default ReportsPage;
