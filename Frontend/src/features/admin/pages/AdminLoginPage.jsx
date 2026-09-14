import { NavLink } from "react-router-dom";

export default function AdminLoginPage() {
  return (
    <div className="card auth-card">
      <div className="auth-card-head">
        <div className="auth-emblem">
          <span aria-hidden>🛡️</span>
        </div>
        <h2>Admin sign in</h2>
        <p>Restricted access · MoneyFlow panel</p>
      </div>

      <div className="auth-field">
        <div className="fake-input">Admin email</div>
        <div className="fake-input">Password</div>
      </div>

      <div className="btn btn-gradient btn-block btn-lg">Enter admin panel</div>

      <p className="auth-alt">
        <NavLink to="/dashboard" className="link">
          Back to the app
        </NavLink>
      </p>
    </div>
  );
}