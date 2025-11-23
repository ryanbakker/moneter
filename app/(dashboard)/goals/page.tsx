import GoalsAction from "@/components/dashboard/actions/GoalsAction";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Separator } from "@/components/ui/separator";

const GoalsPage = () => {
  return (
    <>
      <section className="dashboard-header-container">
        <DashboardPageHeader
          title="Goals"
          subtitle="View and manage your financial summary reports generated with Gemini."
        />

        <GoalsAction />
      </section>

      <Separator className="my-5" />

      <section>
        <p>Content</p>
      </section>
    </>
  );
};

export default GoalsPage;
