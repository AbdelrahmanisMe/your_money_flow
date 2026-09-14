import { NavLink } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="card auth-card">
      <div className="auth-card-head">
        <div className="auth-emblem">
          <span aria-hidden>🔐</span>
        </div>
        <h2>Sign in</h2>
        <p>Welcome back to MoneyFlow</p>
      </div>

      <div className="auth-field">
        <div className="fake-input">Email address</div>
        <div className="fake-input">Password</div>
      </div>

      <div className="btn btn-gradient btn-block btn-lg">Sign in</div>

      <p className="auth-alt">
        Need an account?{" "}
        <NavLink to="/register" className="link">
          Create one
        </NavLink>
      </p>
      <p className="auth-alt">
        <NavLink to="/forgot-password" className="link">
          Forgot password?
        </NavLink>
      </p>
    </div>
  );
}