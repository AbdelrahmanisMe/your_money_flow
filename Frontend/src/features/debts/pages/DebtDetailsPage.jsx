import { useParams, NavLink } from "react-router-dom";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

export default function DebtDetailsPage() {
  const { id } = useParams();

  return (
    <>
      <NavLink to="/debts" className="link">
        ← Back to debts
      </NavLink>
      <div style={{ height: 14 }} />
      <PagePlaceholder
        icon="⚖"
        title={`Debt #${id}`}
        description="Debt progress, payments history and mark-as-paid actions."
      />
    </>
  );
}