export default function PlanCard({ title, price, period, features }) {
  return (
    <div className="card card--hover">
      <div className="stat-label" style={{ marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ fontSize: 26, fontWeight: 800, marginBottom: 14 }}>
        {price} <span style={{ fontSize: 13, color: "var(--text-3)", fontWeight: 600 }}>{period}</span>
      </div>
      <ul style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13.5, color: "var(--text-2)" }}>
        {features.map((f) => (
          <li key={f}>· {f}</li>
        ))}
      </ul>
    </div>
  );
}