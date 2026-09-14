import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "@/layouts/MainLayout/components/Sidebar.jsx";

// Renders on mobile (hidden via CSS on desktop).
// Shows a bottom bar with the most-used modules.
export default function MobileNav() {
  const MOBILE_ITEMS = NAV_ITEMS.filter((item) =>
    ["/dashboard", "/income", "/expenses", "/accounts", "/savings", "/reports"].includes(item.to),
  );

  return (
    <nav className="mobile-nav">
      {MOBILE_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
        >
          <span className="nav-icon">{item.icon}</span>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}