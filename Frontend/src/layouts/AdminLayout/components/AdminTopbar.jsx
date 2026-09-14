import { NavLink } from "react-router-dom";

export default function AdminTopbar() {
  return (
    <header className="app-topbar">
      <div>
        <div className="page-title">MoneyFlow Admin</div>
        <div className="page-path">Prototype — admin structure preview</div>
      </div>
      <div className="topbar-actions">
        <NavLink to="/dashboard" className="chip">
          Back to app
        </NavLink>
        <div className="chip chip--danger">Admin</div>
      </div>
    </header>
  );
}