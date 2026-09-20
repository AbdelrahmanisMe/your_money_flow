import { FiEdit2, FiPauseCircle, FiTrash2, FiRepeat } from "react-icons/fi";
import { TR, TD } from "@/components/ui/Table.jsx";
import Badge from "@/components/ui/Badge.jsx";

const categoryLabels = { salary: "Salary", freelance: "Freelance", rental: "Rental", investment: "Investment", other: "Other" };
const recurrenceLabels = { weekly: "Weekly", monthly: "Monthly", yearly: "Yearly" };

export default function IncomeRow({ income, onEdit, onDelete, onStopRecurring }) {
  const receivedDate = new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", year: "numeric" }).format(new Date(income.receivedDate));
  const formattedAmount = new Intl.NumberFormat("en-US", { style: "currency", currency: income.currency || "EGP" }).format(income.amount);
  const recurring = income.recurrence && income.recurrence !== "once";
  return <TR><TD className="font-semibold text-slate-100"><div className="flex items-center gap-2">{income.name}{recurring && <Badge color="teal" icon={FiRepeat}>{recurrenceLabels[income.recurrence] || income.recurrence}</Badge>}</div></TD><TD><Badge color="slate">{categoryLabels[income.category] || income.category}</Badge></TD><TD className="text-slate-400">{receivedDate}</TD><TD className="font-bold text-emerald-400">+{formattedAmount}</TD><TD><div className="flex items-center gap-2">{recurring && <button onClick={onStopRecurring} title="Stop recurrence" aria-label="Stop income recurrence" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-400 hover:bg-amber-400/10 hover:text-amber-300"><FiPauseCircle className="text-xs" /></button>}<button onClick={onEdit} aria-label="Edit income source" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-400 hover:bg-white/5 hover:text-teal-300"><FiEdit2 className="text-xs" /></button><button onClick={onDelete} aria-label="Delete income source" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-400 hover:bg-red-400/10 hover:text-red-400"><FiTrash2 className="text-xs" /></button></div></TD></TR>;
}
