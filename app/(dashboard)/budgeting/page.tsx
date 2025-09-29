import DashboardTitle from "@/components/DashboardTitle";
import { checkFeatureAccessAndRedirect } from "@/lib/checkUserEntitlement";
import { auth } from "@clerk/nextjs/server";

async function BudgetingPage() {
  const { userId } = await auth();

  // Check if user has access to budgeting feature
  await checkFeatureAccessAndRedirect(userId as string, "budget");

  return (
    <div className="page-content">
      <DashboardTitle
        title="Budgeting"
        subtitle="Set budgets, track spending, and achieve your financial goals."
        hasWelcome={false}
      />
    </div>
  );
}

export default BudgetingPage;
