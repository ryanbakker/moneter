import BasicMetrics from "@/components/dashboard/BasicMetrics";
import CategoriesSummary from "@/components/dashboard/CategoriesSummary";
import GoalsSummary from "@/components/dashboard/GoalsSummary";
import IncomeVsSpending from "@/components/dashboard/IncomeVsSpending";
import NetWorthSummary from "@/components/dashboard/NetWorthSummary";
import QuickActions from "@/components/dashboard/QuickActions";
import UpcomingBills from "@/components/dashboard/UpcomingBills";
import DashboardTitle from "@/components/DashboardTitle";
import { FadeInUp } from "@/components/ui/animate-on-scroll";
import { checkAllFeatureEntitlements } from "@/lib/checkUserEntitlement";
import { auth } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const { userId } = await auth();

  console.log("🔐 User ID:", userId);
  console.log("🎯 Checking entitlements for ALL dashboard features...");

  const entitlements = await checkAllFeatureEntitlements(userId as string);

  console.log("📋 All entitlements result:", entitlements);

  return (
    <>
      <DashboardTitle hasWelcome />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        <BasicMetrics />

        <FadeInUp
          delay={800}
          className="col-span-1 md:col-span-2 lg:col-span-3"
        >
          <IncomeVsSpending />
        </FadeInUp>

        <FadeInUp delay={900}>
          <QuickActions />
        </FadeInUp>

        <FadeInUp delay={1000} className="col-span-1 lg:col-span-2">
          <GoalsSummary />
        </FadeInUp>

        <FadeInUp delay={1100} className="col-span-1 lg:col-span-2">
          <UpcomingBills />
        </FadeInUp>

        <FadeInUp delay={1200} className="col-span-1">
          <CategoriesSummary />
        </FadeInUp>

        <FadeInUp
          delay={1300}
          className="col-span-1 md:col-span-2 lg:col-span-3"
        >
          <NetWorthSummary />
        </FadeInUp>
      </section>
    </>
  );
}
