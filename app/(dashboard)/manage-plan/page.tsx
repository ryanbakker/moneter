import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Separator } from "@/components/ui/separator";

const ManagePlanPage = () => {
  return (
    <>
      <section className="dashboard-header-container">
        <DashboardPageHeader
          title="Manage Plan"
          subtitle="View and manage your financial summary reports generated with Gemini."
        />
      </section>

      <Separator className="my-5" />

      <section>
        <p>Schematic Portal</p>
      </section>
    </>
  );
};

export default ManagePlanPage;
