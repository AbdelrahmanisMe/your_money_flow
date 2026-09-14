import { NavLink } from "react-router-dom";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

export default function CategoryBreakdownPage() {
  return (
    <PagePlaceholder
      icon="▦"
      title="Category breakdown"
      description="Expense distribution per category with top expenses, filterable by expense type."
    >
      <NavLink to="/reports" className="link">
        ← All reports
      </NavLink>
    </PagePlaceholder>
  );
}