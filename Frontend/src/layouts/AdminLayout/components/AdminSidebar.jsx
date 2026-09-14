import SidebarItem from "@/layouts/MainLayout/components/SidebarItem.jsx";

const ADMIN_NAV = [
  { to: "/admin/dashboard", label: "Dashboard", icon: "◈" },
  { to: "/admin/users", label: "Users", icon: "☰" },
];

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="brand">
        <div className="brand-mark">A</div>
        <div>
          <div className="brand-name">MoneyFlow</div>
          <div className="brand-sub">Admin Panel</div>
        </div>
      </div>

      <nav className="app-nav">
        <div className="nav-group-label">Management</div>
        {ADMIN_NAV.map((item) => (
          <SidebarItem key={item.to} {...item} />
        ))}
      </nav>

      <div className="sidebar-foot">
        <small>Prototype — admin structure preview</small>
      </div>
    </aside>
  );
}