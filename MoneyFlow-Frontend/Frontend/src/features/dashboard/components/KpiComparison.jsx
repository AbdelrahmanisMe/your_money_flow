import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import Card from "@/components/ui/Card.jsx";

const rows = [
  { label: "Income", current: 5600, previous: 4900, up: true },
  { label: "Expenses", current: 3900, previous: 4100, up: false },
];

export default function KpiComparison() {
  return (
    <Card>
      <h3 className="mb-1 font-bold text-slate-100">This Month vs. Last Month</h3>
      <p className="mb-4 text-xs text-slate-500">Comparing key totals period over period</p>
      <div className="flex flex-col gap-4">
        {rows.map((r) => {
          const pct = (((r.current - r.previous) / r.previous) * 100).toFixed(1);
          return (
            <div key={r.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{r.label}</div>
                <div className="mt-1 text-lg font-extrabold text-slate-50">${r.current.toLocaleString()}</div>
                <div className="text-[11px] text-slate-500">Was ${r.previous.toLocaleString()}</div>
              </div>
              <div className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-bold ${
                r.up ? "bg-emerald-400/10 text-emerald-300" : "bg-red-400/10 text-red-300"
              }`}>
                {r.up ? <FiArrowUp /> : <FiArrowDown />}
                {Math.abs(pct)}%
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
