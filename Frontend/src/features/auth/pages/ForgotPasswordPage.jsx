import { NavLink } from "react-router-dom";

export default function ForgotPasswordPage() {
  return (
    <div className="card auth-card">
      <div className="auth-card-head">
        <div className="auth-emblem">
          <span aria-hidden>📧</span>
        </div>
        <h2>Reset password</h2>
        <p>We&apos;ll email you a reset link</p>
      </div>

      <div className="auth-field">
        <div className="fake-input">Email address</div>
      </div>

      <div className="btn btn-gradient btn-block btn-lg">Send reset link</div>

      <p className="auth-alt">
        <NavLink to="/login" className="link">
          Back to sign in
        </NavLink>
      </p>
    </div>
  );
}