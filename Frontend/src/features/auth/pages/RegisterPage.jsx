import { NavLink } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="card auth-card">
      <div className="auth-card-head">
        <div className="auth-emblem">
          <span aria-hidden>🪙</span>
        </div>
        <h2>Create account</h2>
        <p>Start tracking your money flow</p>
      </div>

      <div className="auth-field">
        <div className="fake-input">Full name</div>
        <div className="fake-input">Email address</div>
        <div className="fake-input">Password</div>
      </div>

      <div className="btn btn-gradient btn-block btn-lg">Create account</div>

      <p className="auth-alt">
        Already have an account?{" "}
        <NavLink to="/login" className="link">
          Sign in
        </NavLink>
      </p>
    </div>
  );
}