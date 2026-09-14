import SettingsTabs from "@/features/settings/components/SettingsTabs.jsx";
import PagePlaceholder from "@/components/common/PagePlaceholder.jsx";

export default function AppearanceSettingsPage() {
  return (
    <div className="page">
      <header className="page-head">
        <div className="page-head-icon">🎨</div>
        <div>
          <h1>Settings</h1>
          <p>Profile, security and appearance</p>
        </div>
      </header>
      <SettingsTabs />
      <PagePlaceholder
        icon="🌐"
        title="Appearance"
        description="Interface language — Arabic (RTL), English or Turkish."
      />
    </div>
  );
}