import { NavLink } from "react-router-dom";
import UserMenu from "@/layouts/MainLayout/components/UserMenu.jsx";

export default function Topbar() {
  return (
    <header className="app-topbar">
      <div>
        <div className="page-title">MoneyFlow</div>
        <div className="page-path">Prototype — structure preview</div>
      </div>
      <div className="topbar-actions">
        <NavLink to="/admin/login" className="chip">
          Admin
        </NavLink>
        <div className="chip chip--accent">Trial</div>
        <UserMenu />
      </div>
    </header>
  );
}