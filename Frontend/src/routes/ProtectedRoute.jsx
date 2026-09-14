import { Outlet } from "react-router-dom";

// Prototype guard: renders the protected app shell.
// Real authentication (JWT validation) is implemented in a later stage.
export default function ProtectedRoute() {
  return <Outlet />;
}