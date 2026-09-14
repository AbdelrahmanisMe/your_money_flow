import { NavLink } from "react-router-dom";

export default function SidebarItem({ to, label, icon, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
    >
      <span className="nav-icon">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
}