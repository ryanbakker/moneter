import AssetsAction from "@/components/dashboard/actions/AssetsAction";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Separator } from "@/components/ui/separator";

const AssetsPage = () => {
  return (
    <>
      <section className="dashboard-header-container">
        <DashboardPageHeader
          title="Assets"
          subtitle="View and manage your financial summary reports generated with Gemini."
        />

        <AssetsAction />
      </section>

      <Separator className="my-5" />

      <section>
        <p>Content</p>
      </section>
    </>
  );
};

export default AssetsPage;
