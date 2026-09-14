import StatCard from "@/features/dashboard/components/StatCard.jsx";

export default function DashboardPage() {
  return (
    <div className="page">
      <header className="page-head">
        <div className="page-head-icon">◈</div>
        <div>
          <h1>Dashboard</h1>
          <p>Overview, key figures and recent activity</p>
        </div>
      </header>

      <div className="card-grid" style={{ marginBottom: 20 }}>
        <StatCard label="Balance" value="EGP 0.00" trend="overview" icon="💳" delta="total balance" />
        <StatCard label="Income" value="EGP 0.00" trend="+0%" tone="up" icon="⬆" delta="vs last month" />
        <StatCard label="Expenses" value="EGP 0.00" trend="+0%" tone="down" icon="⬇" delta="vs last month" />
        <StatCard label="Savings" value="0%" trend="target 20%" icon="★" delta="monthly rate" />
      </div>

      <div className="card-grid">
        <div className="card card--hover">
          <div className="stat-label" style={{ marginBottom: 12 }}>
            Income vs Expenses
          </div>
          <div className="placeholder">6-month chart placeholder</div>
        </div>
        <div className="card card--hover">
          <div className="stat-label" style={{ marginBottom: 12 }}>
            Recent activity
          </div>
          <div className="placeholder">Latest account &amp; transaction activity</div>
        </div>
      </div>
    </div>
  );
}