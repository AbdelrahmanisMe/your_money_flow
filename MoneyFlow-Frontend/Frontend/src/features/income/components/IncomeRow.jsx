import { FiEdit2, FiTrash2, FiRepeat } from "react-icons/fi";
import { TR, TD } from "@/components/ui/Table.jsx";
import Badge from "@/components/ui/Badge.jsx";

export default function IncomeRow({ income, onEdit, onDelete }) {
  return (
    <TR>
      <TD className="font-semibold text-slate-100">
        <div className="flex items-center gap-2">
          {income.name}
          {income.recurring && (
            <Badge color="teal" icon={FiRepeat}>
              {income.recurrence}
            </Badge>
          )}
        </div>
      </TD>
      <TD>
        <Badge color="slate">{income.type}</Badge>
      </TD>
      <TD className="text-slate-400">{income.date}</TD>
      <TD className="font-bold text-emerald-400">+${income.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</TD>
      <TD>
        <div className="flex items-center gap-2">
          <button onClick={onEdit} className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-400 hover:bg-white/5 hover:text-teal-300">
            <FiEdit2 className="text-xs" />
          </button>
          <button onClick={onDelete} className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-400 hover:bg-red-400/10 hover:text-red-400">
            <FiTrash2 className="text-xs" />
          </button>
        </div>
      </TD>
    </TR>
  );
}
