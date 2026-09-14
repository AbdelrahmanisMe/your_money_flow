import { NavLink } from "react-router-dom";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

export default function CashFlowReportPage() {
  return (
    <PagePlaceholder
      icon="≋"
      title="Cash flow"
      description="Running-balance timeline and daily chart over a selectable period."
    >
      <NavLink to="/reports" className="link">
        ← All reports
      </NavLink>
    </PagePlaceholder>
  );
}