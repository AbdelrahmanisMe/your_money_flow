export default function StatCard({ label, value, trend, tone, icon, delta }) {
  return (
    <div className="card card--hover stat">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="stat-label">{label}</span>
        <span style={{ fontSize: 20 }}>{icon}</span>
      </div>
      <div className={`stat-value ${tone === "down" ? "stat-value--down" : ""} ${tone === "up" ? "stat-value--up" : ""}`}>
        {value}
      </div>
      <div className="stat-delta">{trend} {delta}</div>
    </div>
  );
}