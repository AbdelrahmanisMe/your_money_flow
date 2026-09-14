import SettingsTabs from "@/features/settings/components/SettingsTabs.jsx";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

export default function SecuritySettingsPage() {
  return (
    <div className="page">
      <header className="page-head">
        <div className="page-head-icon">🛡️</div>
        <div>
          <h1>Settings</h1>
          <p>Profile, security and appearance</p>
        </div>
      </header>
      <SettingsTabs />
      <PagePlaceholder
        icon="🔑"
        title="Security"
        description="Change password with current password verification."
      />
    </div>
  );
}