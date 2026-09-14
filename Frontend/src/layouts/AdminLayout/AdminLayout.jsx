import { Outlet } from "react-router-dom";
import AdminSidebar from "@/layouts/AdminLayout/components/AdminSidebar.jsx";
import AdminTopbar from "@/layouts/AdminLayout/components/AdminTopbar.jsx";

export default function AdminLayout() {
  return (
    <div className="admin-shell">
      <div className="orb orb--indigo" />
      <div className="orb orb--teal" />

      <AdminSidebar />

      <div className="admin-main">
        <AdminTopbar />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}