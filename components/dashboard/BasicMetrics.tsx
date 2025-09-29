import { FadeInUp } from "../ui/animate-on-scroll";
import { Card } from "../ui/card";
import { Calculator, PiggyBank, TrendingDown, TrendingUp } from "lucide-react";

function BasicMetrics() {
  return (
    <>
      <FadeInUp delay={100}>
        <Card className="dashboard-card">
          <div className="dashboard-icon">
            <TrendingUp className="icon-primary" />
          </div>
          <div className="dashboard-content">
            <h3 className="dashboard-label">Income</h3>
            <h4 className="dashboard-value">$1,320,450</h4>
            <span>This month</span>
          </div>
        </Card>
      </FadeInUp>

      <FadeInUp delay={300}>
        <Card className="dashboard-card">
          <div className="dashboard-icon">
            <TrendingDown className="icon-primary" />
          </div>
          <div className="dashboard-content">
            <h3 className="dashboard-label">Expenses</h3>
            <h4 className="dashboard-value">$1,320,450</h4>
            <span>This month</span>
          </div>
        </Card>
      </FadeInUp>

      <FadeInUp delay={500}>
        <Card className="dashboard-card">
          <div className="dashboard-icon">
            <PiggyBank className="icon-primary" />
          </div>
          <div className="dashboard-content">
            <h3 className="dashboard-label">Savings Contribution</h3>
            <h4 className="dashboard-value">$1,320,450</h4>
            <span>This month</span>
          </div>
        </Card>
      </FadeInUp>

      <FadeInUp delay={700}>
        <Card className="dashboard-card">
          <div className="dashboard-icon">
            <Calculator className="icon-primary" />
          </div>
          <div className="dashboard-content">
            <h3 className="dashboard-label">Surplus</h3>
            <h4 className="dashboard-value">$1,320,450</h4>
            <span>This month</span>
          </div>
        </Card>
      </FadeInUp>
    </>
  );
}

export default BasicMetrics;
