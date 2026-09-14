export default function ExpiredSubscriptionNotice() {
  return (
    <div className="card" style={{ borderColor: "rgba(248,113,113,0.35)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 20 }}>⏰</span>
        <div>
          <strong style={{ color: "var(--danger)" }}>Subscription expired</strong>
          <p style={{ color: "var(--text-2)", fontSize: 13.5, marginTop: 4 }}>
            Renew to keep using the full features.
          </p>
        </div>
      </div>
    </div>
  );
}