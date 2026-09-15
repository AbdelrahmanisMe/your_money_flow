import { Link } from "react-router-dom";
import { FiCreditCard, FiSmartphone, FiDollarSign, FiArchive } from "react-icons/fi";
import Card from "@/components/ui/Card.jsx";
import Badge from "@/components/ui/Badge.jsx";

const TYPE_META = {
  Bank: { icon: FiCreditCard, tone: "from-teal-400 to-cyan-400" },
  Wallet: { icon: FiSmartphone, tone: "from-indigo-500 to-fuchsia-500" },
  Cash: { icon: FiDollarSign, tone: "from-amber-400 to-red-400" },
};

export default function AccountCard({ account }) {
  const meta = TYPE_META[account.type] || TYPE_META.Bank;
  return (
    <Card hover className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${meta.tone} text-xl text-white shadow-btn`}>
          <meta.icon />
        </div>
        <Badge color="slate">{account.type}</Badge>
      </div>
      <div>
        <div className="font-bold text-slate-100">{account.name}</div>
        <div className={`mt-1 text-2xl font-extrabold ${account.balance < 0 ? "text-red-400" : "text-slate-50"}`}>
          ${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link to={`/accounts/${account.id}`} className="flex-1 rounded-xl border border-white/10 py-2 text-center text-xs font-semibold text-slate-300 transition hover:bg-white/5">
          View History
        </Link>
        <button className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:bg-white/5" title="Archive">
          <FiArchive className="text-sm" />
        </button>
      </div>
    </Card>
  );
}
