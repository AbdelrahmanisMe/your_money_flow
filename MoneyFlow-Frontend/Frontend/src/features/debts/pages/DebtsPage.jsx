import { useState } from "react";
import { FiAlertCircle, FiPlus } from "react-icons/fi";
import PageHeader from "@/components/common/PageHeader.jsx";
import Button from "@/components/ui/Button.jsx";
import Card from "@/components/ui/Card.jsx";
import Modal from "@/components/ui/Modal.jsx";
import Tabs from "@/components/ui/Tabs.jsx";
import DebtCard from "@/features/debts/components/DebtCard.jsx";
import DebtForm from "@/features/debts/components/DebtForm.jsx";

const DEBTS = [
  { id: 1, creditor: "Ahmed Hassan", total: 3000, paid: 700, dueDate: "Oct 1, 2026", overdue: false, dueSoon: true },
  { id: 2, creditor: "Cairo Furniture Co.", total: 1200, paid: 1200, dueDate: "Aug 15, 2026", overdue: false, dueSoon: false },
  { id: 3, creditor: "Mona Saeed", total: 500, paid: 100, dueDate: "Sep 5, 2026", overdue: true, dueSoon: false },
];

export default function DebtsPage() {
  const [tab, setTab] = useState("active");
  const [formOpen, setFormOpen] = useState(false);
  const active = DEBTS.filter((d) => d.paid < d.total);
  const completed = DEBTS.filter((d) => d.paid >= d.total);
  const totalRemaining = active.reduce((sum, d) => sum + (d.total - d.paid), 0);

  return (
    <div>
      <PageHeader
        icon={FiAlertCircle}
        title="Debts"
        description="Stay ahead of what you owe and when it's due"
        actions={
          <Button icon={FiPlus} onClick={() => setFormOpen(true)}>
            Add Debt
          </Button>
        }
      />

      <Card className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center bg-gradient-to-br from-amber-400/10 to-red-400/5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Total Remaining</span>
          <div className="mt-1 text-3xl font-extrabold text-slate-50">${totalRemaining.toLocaleString()}</div>
        </div>
        <p className="text-xs text-slate-400">
          Nearest due date: <span className="font-bold text-amber-300">Sep 5, 2026</span> (overdue)
        </p>
      </Card>

      <div className="mb-5">
        <Tabs
          tabs={[
            { value: "active", label: `Active (${active.length})` },
            { value: "completed", label: `Completed (${completed.length})` },
          ]}
          active={tab}
          onChange={setTab}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {(tab === "active" ? active : completed).map((debt) => (
          <DebtCard key={debt.id} debt={debt} />
        ))}
      </div>

      <Modal open={formOpen} onClose={() => setFormOpen(false)} title="Add Debt">
        <DebtForm onCancel={() => setFormOpen(false)} />
      </Modal>
    </div>
  );
}
