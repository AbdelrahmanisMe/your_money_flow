import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { FiTrendingUp } from "react-icons/fi";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table.jsx";
import EmptyState from "@/components/common/EmptyState.jsx";
import IncomeRow from "@/features/income/components/IncomeRow.jsx";
import DeleteIncomeDialog from "@/features/income/components/DeleteIncomeDialog.jsx";
import { editIncome, fetchIncome, removeIncome } from "@/store/incomeSlice";
import { formatCurrencyTotals, getIncomeOccurrences } from "@/features/income/incomeUtils.js";

export default function IncomeList({ filters, onEdit }) {
  const [deleteTarget, setDeleteTarget] = useState(null);
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.income);
  useEffect(() => { dispatch(fetchIncome()); }, [dispatch]);

  const incomes = useMemo(() => getIncomeOccurrences(items, filters.month).filter((income) => {
    const matchesSearch = income.name.toLowerCase().includes(filters.search.toLowerCase());
    return matchesSearch && (filters.category === "all" || income.category === filters.category) && (filters.recurrence === "all" || income.recurrence === filters.recurrence);
  }), [items, filters]);

  const deleteSelected = async () => {
    try { await dispatch(removeIncome(deleteTarget._id)).unwrap(); setDeleteTarget(null); Swal.fire({ icon: "success", title: "Income deleted successfully", toast: true, position: "bottom-start", showConfirmButton: false, timer: 3000 }); }
    catch (message) { Swal.fire({ icon: "error", title: message || "Unable to delete income", toast: true, position: "bottom-start", showConfirmButton: false, timer: 3000 }); }
  };
  const stopRecurring = async (income) => {
    const data = { name: income.name, category: income.category, amount: income.amount, currency: income.currency, receivedDate: income.receivedDate.slice(0, 10), recurrence: "once", status: income.status || "cleared", notes: income.notes || "", accountId: typeof income.account === "object" ? income.account?._id : income.account || "" };
    try { await dispatch(editIncome({ id: income._id, data })).unwrap(); Swal.fire({ icon: "success", title: "Recurrence stopped successfully", toast: true, position: "bottom-start", showConfirmButton: false, timer: 3000 }); }
    catch (message) { Swal.fire({ icon: "error", title: message || "Unable to stop recurrence", toast: true, position: "bottom-start", showConfirmButton: false, timer: 3000 }); }
  };

  if (status === "loading" && items.length === 0) return <p className="py-8 text-center text-sm text-slate-400">Loading income sources...</p>;
  if (error && items.length === 0) return <p className="py-8 text-center text-sm text-red-400">{error}</p>;
  if (incomes.length === 0) return <EmptyState icon={FiTrendingUp} title="No income for the selected month" description="Change the month or add a new income source." />;

  return <><Table><THead><TR><TH>Source</TH><TH>Type</TH><TH>Date</TH><TH>Amount</TH><TH>Actions</TH></TR></THead><TBody>{incomes.map((income) => <IncomeRow key={`${income._id}-${income.receivedDate}`} income={income} onEdit={() => onEdit(income.sourceIncome)} onDelete={() => setDeleteTarget(income.sourceIncome)} onStopRecurring={() => stopRecurring(income.sourceIncome)} />)}</TBody><tfoot><TR className="bg-white/[0.03]"><TD className="font-bold text-slate-100" colSpan="3">Monthly total</TD><TD className="font-bold text-emerald-400">{formatCurrencyTotals(incomes)}</TD><TD /></TR></tfoot></Table><DeleteIncomeDialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)} onConfirm={deleteSelected} incomeName={deleteTarget?.name} /></>;
}


