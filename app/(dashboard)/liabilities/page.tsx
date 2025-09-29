import DashboardTitle from "@/components/DashboardTitle";
import { checkFeatureAccessAndRedirect } from "@/lib/checkUserEntitlement";
import { auth } from "@clerk/nextjs/server";

async function LiabilitiesPage() {
  const { userId } = await auth();

  // Check if user has access to liabilities feature
  await checkFeatureAccessAndRedirect(userId as string, "liability");

  return (
    <div className="page-content">
      <DashboardTitle
        title="Liabilities"
        subtitle="Track and manage your financial liabilities, loans, and debt
              obligations."
        hasWelcome={false}
      />
    </div>
  );
}

export default LiabilitiesPage;
