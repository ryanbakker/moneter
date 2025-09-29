import DashboardTitle from "@/components/DashboardTitle";
import SchematicComponent from "@/components/providers/SchematicComponent";

function ManagePlan() {
  return (
    <div className="page-content">
      <DashboardTitle
        title="Plan & Billing"
        subtitle="Manage your Moneter subscription and billing details."
        hasWelcome={false}
      />

      <SchematicComponent
        componentId={process.env.NEXT_PUBLIC_SCHEMATIC_COMPONENT_ID!}
      />
    </div>
  );
}

export default ManagePlan;
