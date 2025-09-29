import { FadeInUp } from "../ui/animate-on-scroll";
import { Card } from "../ui/card";
import { CatergoriesSummaryChart } from "./CategoriesSummaryChart";

function CategoriesSummary() {
  return (
    <Card className="dashboard-card">
      <div>
        <h2 className="dashboard-card-title">Categories Summary</h2>
        <p className="dashboard-card-subtitle">
          Spending breakdown by category.
        </p>
      </div>

      <CatergoriesSummaryChart />
    </Card>
  );
}

export default CategoriesSummary;
