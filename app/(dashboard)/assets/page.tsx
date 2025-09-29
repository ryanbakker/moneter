import DashboardTitle from "@/components/DashboardTitle";
import { checkFeatureAccessAndRedirect } from "@/lib/checkUserEntitlement";
import { auth } from "@clerk/nextjs/server";

async function AssetsPage() {
  const { userId } = await auth();

  // Check if user has access to assets feature
  await checkFeatureAccessAndRedirect(userId as string, "asset");

  return (
    <div className="page-content">
      <DashboardTitle
        title="Assets"
        subtitle="Track and manage your financial assets, investments, and property
            values."
        hasWelcome={false}
      />
    </div>
  );
}

export default AssetsPage;
