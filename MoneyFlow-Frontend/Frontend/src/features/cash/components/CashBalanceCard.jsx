import { FiDollarSign } from "react-icons/fi";
import Card from "@/components/ui/Card.jsx";

export default function CashBalanceCard({ balance = 120.0 }) {
  return (
    <Card className="bg-gradient-to-br from-amber-400/10 to-red-400/5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Cash on Hand</span>
          <div className="mt-2 text-4xl font-extrabold text-slate-50">${balance.toFixed(2)}</div>
          <p className="mt-1 text-xs text-slate-500">Updated automatically after each entry</p>
        </div>
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-red-400 text-2xl text-ink-950 shadow-btn">
          <FiDollarSign />
        </div>
      </div>
    </Card>
  );
}
