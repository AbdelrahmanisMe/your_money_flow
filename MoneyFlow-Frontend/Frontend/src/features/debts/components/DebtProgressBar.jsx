import ProgressBar from "@/components/ui/ProgressBar.jsx";

export default function DebtProgressBar({ paid, total }) {
  const pct = Math.round((paid / total) * 100);
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs font-semibold text-slate-400">
        <span>${paid.toLocaleString()} paid</span>
        <span>${total.toLocaleString()} total</span>
      </div>
      <ProgressBar value={pct} color={pct > 66 ? "emerald" : pct > 33 ? "teal" : "amber"} showLabel />
    </div>
  );
}
