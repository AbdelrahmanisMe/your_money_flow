import { FiSettings, FiMoon, FiBell } from "react-icons/fi";
import PageHeader from "@/components/common/PageHeader.jsx";
import Card from "@/components/ui/Card.jsx";
import SettingsTabs from "@/features/settings/components/SettingsTabs.jsx";

export default function AppearanceSettingsPage() {
  return (
    <div>
      <PageHeader icon={FiSettings} title="Settings" description="Manage your account and preferences" />
      <SettingsTabs />
      <Card className="max-w-2xl">
        <h3 className="mb-5 font-bold text-slate-100">Preferences</h3>
        <div className="flex flex-col divide-y divide-white/5">
          <div className="flex items-center justify-between py-4 first:pt-0">
            <div className="flex items-center gap-3">
              <FiMoon className="text-teal-300" />
              <div>
                <div className="text-sm font-semibold text-slate-100">Dark Theme</div>
                <div className="text-xs text-slate-500">MoneyFlow is optimized for dark mode</div>
              </div>
            </div>
            <span className="rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300">
              Enabled
            </span>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <FiBell className="text-teal-300" />
              <div>
                <div className="text-sm font-semibold text-slate-100">Email Notifications</div>
                <div className="text-xs text-slate-500">Debt reminders and monthly summaries</div>
              </div>
            </div>
            <button className="relative h-6 w-11 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500">
              <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
