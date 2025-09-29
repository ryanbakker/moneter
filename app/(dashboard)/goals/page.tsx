import DashboardTitle from "@/components/DashboardTitle";

function GoalsPage() {
  return (
    <div className="page-content">
      <DashboardTitle
        title="Financial Goals"
        subtitle="Set, track, and achieve your financial goals with progress
            monitoring and milestone tracking."
        hasWelcome={false}
      />
    </div>
  );
}

export default GoalsPage;
