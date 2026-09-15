import { FiTrendingUp } from "react-icons/fi";
import Card from "@/components/ui/Card.jsx";

export default function IncomeSummaryCard({ total = "$5,600.00", count = 4 }) {
  return (
    <Card className="bg-gradient-to-br from-teal-400/10 to-cyan-400/5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Total Income This Month</span>
          <div className="mt-2 text-3xl font-extrabold text-slate-50">{total}</div>
          <p className="mt-1 text-xs text-slate-500">{count} income sources recorded</p>
        </div>
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-400 text-2xl text-ink-950 shadow-btn">
          <FiTrendingUp />
        </div>
      </div>
    </Card>
  );
}
