import { NavLink } from "react-router-dom";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

export default function DebtsReportPage() {
  return (
    <PagePlaceholder
      icon="⚖"
      title="Debt progress"
      description="Debt payoff progress, monthly payments and payoff estimation."
    >
      <NavLink to="/reports" className="link">
        ← All reports
      </NavLink>
    </PagePlaceholder>
  );
}