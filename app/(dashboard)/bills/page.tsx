import BillsAction from "@/components/dashboard/actions/BillsAction";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Separator } from "@/components/ui/separator";

const BillsPage = () => {
  return (
    <>
      <section className="dashboard-header-container">
        <DashboardPageHeader
          title="Bill Tracking"
          subtitle="View and manage your financial summary reports generated with Gemini."
        />

        <BillsAction />
      </section>

      <Separator className="my-5" />

      <section>
        <p>Content</p>
      </section>
    </>
  );
};

export default BillsPage;
