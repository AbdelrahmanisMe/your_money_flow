import { FiShoppingBag, FiTrendingUp, FiCreditCard, FiHome } from "react-icons/fi";
import Card from "@/components/ui/Card.jsx";

const activity = [
  { icon: FiShoppingBag, label: "Grocery shopping", account: "Main Bank", amount: -84.2, date: "Today" },
  { icon: FiTrendingUp, label: "Freelance payment", account: "Vodafone Cash", amount: 650, date: "Yesterday" },
  { icon: FiHome, label: "Rent", account: "Main Bank", amount: -900, date: "Sep 10" },
  { icon: FiCreditCard, label: "Debt payment — Ahmed", account: "Main Bank", amount: -200, date: "Sep 8" },
];

export default function RecentActivityList() {
  return (
    <Card>
      <h3 className="mb-4 font-bold text-slate-100">Recent Activity</h3>
      <ul className="flex flex-col divide-y divide-white/5">
        {activity.map((item) => (
          <li key={item.label} className="flex items-center gap-3.5 py-3.5 first:pt-0 last:pb-0">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-slate-300">
              <item.icon />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-slate-100">{item.label}</div>
              <div className="text-[11px] text-slate-500">
                {item.account} · {item.date}
              </div>
            </div>
            <span className={`shrink-0 text-sm font-bold ${item.amount < 0 ? "text-red-400" : "text-emerald-400"}`}>
              {item.amount < 0 ? "-" : "+"}${Math.abs(item.amount).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
