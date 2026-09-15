import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Card from "@/components/ui/Card.jsx";

const accounts = [
  { name: "Main Bank", type: "Bank", balance: 8420.5, color: "bg-teal-400" },
  { name: "Vodafone Cash", type: "Wallet", balance: 640.0, color: "bg-indigo-400" },
  { name: "Cash on Hand", type: "Cash", balance: -120.0, color: "bg-amber-400" },
];

export default function AccountsOverview() {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold text-slate-100">Accounts</h3>
        <Link to="/accounts" className="flex items-center gap-1 text-xs font-semibold text-teal-300 hover:text-teal-200">
          View all <FiArrowRight />
        </Link>
      </div>
      <ul className="flex flex-col gap-3">
        {accounts.map((a) => (
          <li key={a.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${a.color}`} />
              <div>
                <div className="text-sm font-semibold text-slate-100">{a.name}</div>
                <div className="text-[11px] text-slate-500">{a.type}</div>
              </div>
            </div>
            <span className={`text-sm font-bold ${a.balance < 0 ? "text-red-400" : "text-slate-100"}`}>
              ${a.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
