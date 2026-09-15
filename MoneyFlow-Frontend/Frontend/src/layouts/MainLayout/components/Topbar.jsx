import { FiBell, FiSearch } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import UserMenu from "@/layouts/MainLayout/components/UserMenu.jsx";

const TITLES = {
  "/dashboard": ["Dashboard", "Your financial overview at a glance"],
  "/income": ["Income", "Track every source of money coming in"],
  "/expenses": ["Expenses", "See where your money is going"],
  "/expense-categories": ["Categories", "Organize expenses your way"],
  "/cash": ["Cash Tracker", "Keep tabs on physical cash on hand"],
  "/accounts": ["Accounts", "All your banks and wallets in one place"],
  "/transactions": ["Transactions", "Full history across every account"],
  "/savings": ["Savings Goals", "Save with purpose"],
  "/debts": ["Debts", "Stay on top of what you owe"],
  "/reports": ["Reports", "Deep dive into your finances"],
  "/settings": ["Settings", "Manage your account"],
  "/subscription": ["Subscription", "Manage your plan"],
};

export default function Topbar() {
  const { pathname } = useLocation();
  const match = Object.keys(TITLES).find((key) => pathname.startsWith(key));
  const [title, subtitle] = TITLES[match] || ["MoneyFlow", "Welcome back"];

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-ink-950/60 px-6 py-4 backdrop-blur-xl sm:px-10">
      <div>
        <h1 className="text-lg font-extrabold text-slate-50 sm:text-xl">{title}</h1>
        <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="hidden h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:bg-white/5 hover:text-slate-100 sm:grid">
          <FiSearch />
        </button>
        <button className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:bg-white/5 hover:text-slate-100">
          <FiBell />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-teal-400" />
        </button>
        <UserMenu />
      </div>
    </header>
  );
}
