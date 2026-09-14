import { NavLink } from "react-router-dom";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

export default function SavingsRatePage() {
  return (
    <PagePlaceholder
      icon="★"
      title="Savings rate"
      description="Monthly savings rate and average rate against the 20% target."
    >
      <NavLink to="/reports" className="link">
        ← All reports
      </NavLink>
    </PagePlaceholder>
  );
}