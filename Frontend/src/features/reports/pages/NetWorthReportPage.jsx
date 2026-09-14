import { NavLink } from "react-router-dom";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

export default function NetWorthReportPage() {
  return (
    <PagePlaceholder
      icon="◉"
      title="Net worth"
      description="Net worth history computed as accounts minus debts."
    >
      <NavLink to="/reports" className="link">
        ← All reports
      </NavLink>
    </PagePlaceholder>
  );
}