export default function UserMenu() {
  return (
    <div
      className="chip"
      style={{ display: "flex", alignItems: "center", gap: 8 }}
    >
      <span
        aria-hidden
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
          display: "grid",
          placeItems: "center",
          fontSize: 13,
          fontWeight: 800,
          color: "#04121a",
          transform: "rotate(-6deg)",
        }}
      >
        D
      </span>
      <span style={{ fontWeight: 700 }}>Demo User</span>
    </div>
  );
}