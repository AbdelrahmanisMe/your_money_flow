import { useMemo } from "react";
import { FiTrendingUp } from "react-icons/fi";
import Card from "@/components/ui/Card.jsx";
import { formatCurrencyTotals } from "@/features/income/incomeUtils.js";

export default function IncomeSummaryCard({ incomes, month }) {
  const title = useMemo(() => new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(new Date(`${month}-01T00:00:00`)), [month]);
  return <Card className="bg-gradient-to-br from-teal-400/10 to-cyan-400/5"><div className="flex items-center justify-between"><div><span className="text-xs font-bold uppercase tracking-wide text-slate-500">Total income for {title}</span><div className="mt-2 text-3xl font-extrabold text-slate-50">{formatCurrencyTotals(incomes)}</div><p className="mt-1 text-xs text-slate-500">{incomes.length} income entries in the selected period</p>{new Set(incomes.map((income) => income.currency)).size > 1 && <p className="mt-1 text-xs text-amber-300">Totals are separated by currency because exchange rates are unavailable.</p>}</div><div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-400 text-2xl text-ink-950 shadow-btn"><FiTrendingUp /></div></div></Card>;
}
