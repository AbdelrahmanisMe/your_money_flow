import { Link } from "react-router-dom";
import { FiUser, FiCalendar } from "react-icons/fi";
import Card from "@/components/ui/Card.jsx";
import Badge from "@/components/ui/Badge.jsx";
import DebtProgressBar from "@/features/debts/components/DebtProgressBar.jsx";

export default function DebtCard({ debt }) {
  return (
    <Card hover className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.05] text-slate-300">
            <FiUser />
          </div>
          <div>
            <div className="font-bold text-slate-100">{debt.creditor}</div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <FiCalendar /> Due {debt.dueDate}
            </div>
          </div>
        </div>
        {debt.overdue ? (
          <Badge color="red">Overdue</Badge>
        ) : debt.dueSoon ? (
          <Badge color="amber">Due Soon</Badge>
        ) : (
          <Badge color="slate">On Track</Badge>
        )}
      </div>

      <DebtProgressBar paid={debt.paid} total={debt.total} />

      <p className="text-xs text-slate-500">
        Remaining: <span className="font-bold text-slate-200">${(debt.total - debt.paid).toLocaleString()}</span>
      </p>

      <Link to={`/debts/${debt.id}`} className="rounded-xl border border-white/10 py-2 text-center text-xs font-semibold text-slate-300 transition hover:bg-white/5">
        View Details
      </Link>
    </Card>
  );
}
