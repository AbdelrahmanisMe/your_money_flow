import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="auth-screen">
      <div className="orb orb--teal" />
      <div className="orb orb--indigo" />

      <div className="auth-shell">
        <div className="auth-brand">
          <div className="brand-mark">M</div>
          <div>
            <div className="brand-name">MoneyFlow</div>
            <div className="brand-sub">Money Tracker &amp; Wallet</div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}