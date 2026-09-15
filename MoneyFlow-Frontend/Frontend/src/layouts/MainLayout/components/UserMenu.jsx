import { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiSettings, FiLogOut, FiChevronDown, FiShield } from "react-icons/fi";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-3 transition hover:bg-white/5"
      >
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-teal-400 to-indigo-500 text-sm font-bold text-ink-950">
          SA
        </div>
        <div className="hidden text-left sm:block">
          <div className="text-xs font-bold leading-tight text-slate-100">Sara Ahmed</div>
          <div className="text-[10.5px] leading-tight text-slate-500">sara@example.com</div>
        </div>
        <FiChevronDown className={`text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-30 cursor-default"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <div className="absolute right-0 z-40 mt-2 w-60 overflow-hidden rounded-xl border border-white/10 bg-ink-800/95 p-1.5 shadow-card backdrop-blur-xl animate-page-in">
            <Link
              to="/settings/profile"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              <FiUser /> My Profile
            </Link>
            <Link
              to="/settings/security"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              <FiShield /> Security
            </Link>
            <Link
              to="/settings/appearance"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              <FiSettings /> Preferences
            </Link>
            <div className="my-1.5 h-px bg-white/10" />
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-400 hover:bg-red-400/10"
            >
              <FiLogOut /> Log Out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
