import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { TR, TD } from "@/components/ui/Table.jsx";
import Badge from "@/components/ui/Badge.jsx";

const NATURE_COLOR = { Daily: "amber", "Monthly Fixed": "slate", Emergency: "red" };

export default function ExpenseRow({ expense, onEdit, onDelete }) {
  return (
    <TR>
      <TD className="font-semibold text-slate-100">{expense.description}</TD>
      <TD>
        <Badge color="indigo">{expense.category}</Badge>
      </TD>
      <TD>
        <Badge color={NATURE_COLOR[expense.nature] || "slate"}>{expense.nature}</Badge>
      </TD>
      <TD className="text-slate-400">{expense.account}</TD>
      <TD className="text-slate-400">{expense.date}</TD>
      <TD className="font-bold text-red-400">-${expense.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</TD>
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
