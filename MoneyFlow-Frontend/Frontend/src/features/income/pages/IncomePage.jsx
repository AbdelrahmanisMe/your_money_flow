import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { FiTrendingUp, FiPlus } from "react-icons/fi";
import PageHeader from "@/components/common/PageHeader.jsx";
import Button from "@/components/ui/Button.jsx";
import Modal from "@/components/ui/Modal.jsx";
import Card from "@/components/ui/Card.jsx";
import IncomeSummaryCard from "@/features/income/components/IncomeSummaryCard.jsx";
import IncomeFilters from "@/features/income/components/IncomeFilters.jsx";
import IncomeForm from "@/features/income/components/IncomeForm.jsx";
import IncomeList from "@/features/income/components/IncomeList.jsx";
import { getIncomeOccurrences } from "@/features/income/incomeUtils.js";

const currentMonth = () => new Date().toISOString().slice(0, 7);

export default function IncomePage() {
  const [formOpen, setFormOpen] = useState(false);
  const [editingIncome, setEditingIncome] = useState(null);
  const [filters, setFilters] = useState({ month: currentMonth(), search: "", category: "all", recurrence: "all" });
  const { items } = useSelector((state) => state.income);
  const selectedMonthIncome = useMemo(() => getIncomeOccurrences(items, filters.month), [items, filters.month]);

  const closeForm = () => { setFormOpen(false); setEditingIncome(null); };
  const openEdit = (income) => { setEditingIncome(income); setFormOpen(true); };

  return <div>
    <PageHeader icon={FiTrendingUp} title="Income" description="Every source of money coming in, organized in one place" actions={<Button icon={FiPlus} onClick={() => { setEditingIncome(null); setFormOpen(true); }}>Add Income</Button>} />
    <div className="mb-6"><IncomeSummaryCard incomes={selectedMonthIncome} month={filters.month} /></div>
    <Card padding="p-5" className="mb-5"><IncomeFilters filters={filters} onChange={setFilters} /></Card>
    <IncomeList filters={filters} onEdit={openEdit} />
    <Modal open={formOpen} onClose={closeForm} title={editingIncome ? "Edit Income Source" : "Add Income Source"} description={editingIncome ? "Update the details and save your changes" : "Fill in the details below"}>
      <IncomeForm income={editingIncome} onCancel={closeForm} />
    </Modal>
  </div>;
}

