export default function TrialLimitNotice() {
  return (
    <div className="card" style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <span style={{ fontSize: 20 }}>ℹ️</span>
        <strong>Trial limits apply</strong>
        <span className="chip">1 account</span>
        <span className="chip">20 entries</span>
      </div>
    </div>
  );
}