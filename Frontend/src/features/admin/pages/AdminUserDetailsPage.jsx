import { useParams, NavLink } from "react-router-dom";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

export default function AdminUserDetailsPage() {
  const { id } = useParams();

  return (
    <>
      <NavLink to="/admin/users" className="link">
        ← Back to users
      </NavLink>
      <div style={{ height: 14 }} />
      <PagePlaceholder
        icon="☰"
        title={`User #${id}`}
        description="User profile, subscription updates, suspend / activate and action logs."
      />
    </>
  );
}