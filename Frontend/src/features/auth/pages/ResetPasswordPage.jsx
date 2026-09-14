import { NavLink } from "react-router-dom";

export default function ResetPasswordPage() {
  return (
    <div className="card auth-card">
      <div className="auth-card-head">
        <div className="auth-emblem">
          <span aria-hidden>🔑</span>
        </div>
        <h2>New password</h2>
        <p>Enter the token from your email</p>
      </div>

      <div className="auth-field">
        <div className="fake-input">Reset token</div>
        <div className="fake-input">New password</div>
        <div className="fake-input">Confirm password</div>
      </div>

      <div className="btn btn-gradient btn-block btn-lg">Update password</div>

      <p className="auth-alt">
        <NavLink to="/login" className="link">
          Back to sign in
        </NavLink>
      </p>
    </div>
  );
}