import { useParams, NavLink } from "react-router-dom";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

export default function AccountDetailsPage() {
  const { id } = useParams();

  return (
    <>
      <NavLink to="/accounts" className="link">
        ← Back to accounts
      </NavLink>
      <div style={{ height: 14 }} />
      <PagePlaceholder
        icon="▣"
        title={`Account #${id}`}
        description="Account details and its transaction history with date filtering."
      />
    </>
  );
}