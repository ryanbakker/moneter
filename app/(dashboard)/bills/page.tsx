import DashboardTitle from "@/components/DashboardTitle";

function BillsPage() {
  return (
    <div className="page-content">
      <DashboardTitle
        title="Bills"
        subtitle="Manage recurring bills, track due dates, and monitor your payment
            obligations to stay on top of your finances."
        hasWelcome={false}
      />
    </div>
  );
}

export default BillsPage;
