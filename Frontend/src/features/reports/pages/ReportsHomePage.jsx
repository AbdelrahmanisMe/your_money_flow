import { NavLink } from "react-router-dom";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

const REPORT_LINKS = [
  { to: "income-expenses", label: "Income vs Expenses", icon: "⇅" },
  { to: "categories", label: "Category breakdown", icon: "▦" },
  { to: "cash-flow", label: "Cash flow", icon: "≋" },
  { to: "savings-rate", label: "Savings rate", icon: "★" },
  { to: "net-worth", label: "Net worth", icon: "◉" },
  { to: "debts", label: "Debt progress", icon: "⚖" },
  { to: "habits", label: "Spending habits", icon: "◔" },
];

export default function ReportsHomePage() {
  return (
    <PagePlaceholder
      icon="◮"
      title="Reports"
      description="Select a report to preview its module."
    >
      <div className="card-grid" style={{ marginTop: 20 }}>
        {REPORT_LINKS.map((r) => (
          <NavLink key={r.to} to={`/reports/${r.to}`} className="card card--hover">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22 }}>{r.icon}</span>
              <strong>{r.label}</strong>
            </div>
          </NavLink>
        ))}
      </div>
    </PagePlaceholder>
  );
}