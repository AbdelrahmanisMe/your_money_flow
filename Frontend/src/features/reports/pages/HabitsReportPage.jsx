import { NavLink } from "react-router-dom";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

export default function HabitsReportPage() {
  return (
    <PagePlaceholder
      icon="◔"
      title="Spending habits"
      description="Top categories, day-of-week patterns and spending spike alerts."
    >
      <NavLink to="/reports" className="link">
        ← All reports
      </NavLink>
    </PagePlaceholder>
  );
}