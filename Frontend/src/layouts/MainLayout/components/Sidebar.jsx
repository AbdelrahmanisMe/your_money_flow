import SidebarItem from "@/layouts/MainLayout/components/SidebarItem.jsx";

const FINANCE_ITEMS = [
  { to: "/dashboard", label: "Dashboard", icon: "◈" },
  { to: "/income", label: "Income", icon: "⬆" },
  { to: "/expenses", label: "Expenses", icon: "⬇" },
  { to: "/expense-categories", label: "Categories", icon: "▦" },
  { to: "/accounts", label: "Accounts", icon: "▣" },
];

const MORE_ITEMS = [
  { to: "/transactions", label: "Transactions", icon: "⇄" },
  { to: "/debts", label: "Debts", icon: "⚖" },
  { to: "/savings", label: "Savings", icon: "★" },
  { to: "/reports", label: "Reports", icon: "◮" },
  { to: "/settings", label: "Settings", icon: "⚙", end: true },
  { to: "/subscription", label: "Subscription", icon: "◆" },
];

export const NAV_ITEMS = [...FINANCE_ITEMS, ...MORE_ITEMS];

export default function Sidebar() {
  return (
    <aside className="app-sidebar">
      <div className="brand">
        <div className="brand-mark">M</div>
        <div>
          <div className="brand-name">MoneyFlow</div>
          <div className="brand-sub">Money Tracker</div>
        </div>
      </div>

      <nav className="app-nav">
        <div className="nav-group-label">Finance</div>
        {FINANCE_ITEMS.map((item) => (
          <SidebarItem key={item.to} {...item} />
        ))}

        <div className="nav-group-label" style={{ marginTop: 12 }}>
          More
        </div>
        {MORE_ITEMS.map((item) => (
          <SidebarItem key={item.to} {...item} />
        ))}
      </nav>

      <div className="sidebar-foot">
        <small>Prototype — navigation structure preview</small>
      </div>
    </aside>
  );
}