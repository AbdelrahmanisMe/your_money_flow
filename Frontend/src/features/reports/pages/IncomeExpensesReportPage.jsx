import { NavLink } from "react-router-dom";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

export default function IncomeExpensesReportPage() {
  return (
    <PagePlaceholder
      icon="⇅"
      title="Income vs Expenses"
      description="Monthly income vs expenses with averages over a selectable period."
    >
      <NavLink to="/reports" className="link">
        ← All reports
      </NavLink>
    </PagePlaceholder>
  );
}