import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Card from "@/components/ui/Card.jsx";

const data = [
  { name: "Food", value: 820, color: "#2dd4bf" },
  { name: "Transport", value: 340, color: "#6366f1" },
  { name: "Bills", value: 610, color: "#22d3ee" },
  { name: "Health", value: 210, color: "#fbbf24" },
  { name: "Other", value: 180, color: "#f87171" },
];

export default function CategoryBreakdownChart() {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <Card>
      <div className="mb-4">
        <h3 className="font-bold text-slate-100">Expense Breakdown</h3>
        <p className="text-xs text-slate-500">Top spending categories this month</p>
      </div>
      <div className="relative h-52 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={58} outerRadius={82} paddingAngle={3}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} stroke="transparent" />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#141d3f",
                border: "1px solid rgba(148,163,255,0.2)",
                borderRadius: 12,
                fontSize: 12,
                color: "#eef2ff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-extrabold text-slate-50">${total.toLocaleString()}</span>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Total Spent</span>
        </div>
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-2.5">
        {data.map((item) => (
          <li key={item.name} className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />
            {item.name} <span className="ml-auto font-semibold text-slate-200">${item.value}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
