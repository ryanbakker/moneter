import DashboardTitle from "@/components/DashboardTitle";
import { checkFeatureAccessAndRedirect } from "@/lib/checkUserEntitlement";
import { auth } from "@clerk/nextjs/server";

async function ReportsPage() {
  const { userId } = await auth();

  // Check if user has access to generate reports feature
  await checkFeatureAccessAndRedirect(userId as string, "generate-report");

  return (
    <div className="page-content">
      <DashboardTitle
        title="Financial Reports"
        subtitle="AI-powered insights and analysis of your financial data to help
              you make informed decisions."
        hasWelcome={false}
      />
    </div>
  );
}

export default ReportsPage;
