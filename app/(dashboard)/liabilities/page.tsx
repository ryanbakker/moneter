import LiabilitiesAction from "@/components/dashboard/actions/LiabilitiesAction";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Separator } from "@/components/ui/separator";

const LiabilitiesPage = () => {
  return (
    <>
      <section className="dashboard-header-container">
        <DashboardPageHeader
          title="Liabilities"
          subtitle="View and manage your financial summary reports generated with Gemini."
        />

        <LiabilitiesAction />
      </section>

      <Separator className="my-5" />

      <section>
        <p>Content</p>
      </section>
    </>
  );
};

export default LiabilitiesPage;
