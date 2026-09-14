import { Outlet } from "react-router-dom";
import Sidebar from "@/layouts/MainLayout/components/Sidebar.jsx";
import Topbar from "@/layouts/MainLayout/components/Topbar.jsx";
import MobileNav from "@/layouts/MainLayout/components/MobileNav.jsx";

export default function MainLayout() {
  return (
    <div className="app-shell">
      <div className="orb orb--teal" />
      <div className="orb orb--indigo" />
      <div className="orb orb--cyan" />

      <Sidebar />

      <div className="app-main">
        <Topbar />
        <main className="app-content">
          <Outlet />
        </main>
      </div>

      <MobileNav />
    </div>
  );
}