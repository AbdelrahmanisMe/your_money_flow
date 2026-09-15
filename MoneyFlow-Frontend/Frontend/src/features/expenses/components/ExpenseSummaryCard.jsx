import { FiTrendingDown } from "react-icons/fi";
import Card from "@/components/ui/Card.jsx";

export default function ExpenseSummaryCard({ total = "$3,900.00", count = 18 }) {
  return (
    <Card className="bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Total Expenses This Month</span>
          <div className="mt-2 text-3xl font-extrabold text-slate-50">{total}</div>
          <p className="mt-1 text-xs text-slate-500">{count} expenses recorded</p>
        </div>
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-2xl text-white shadow-btn">
          <FiTrendingDown />
        </div>
      </div>
    </Card>
  );
}
