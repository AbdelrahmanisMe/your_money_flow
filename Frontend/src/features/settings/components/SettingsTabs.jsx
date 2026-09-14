import { NavLink } from "react-router-dom";

const TABS = [
  { to: "/settings/profile", label: "Profile" },
  { to: "/settings/security", label: "Security" },
  { to: "/settings/appearance", label: "Appearance" },
];

export default function SettingsTabs() {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
      {TABS.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) => `chip${isActive ? " chip--accent" : ""}`}
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}