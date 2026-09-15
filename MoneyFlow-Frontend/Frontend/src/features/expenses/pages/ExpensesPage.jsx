import { useState } from "react";
import { FiTrendingDown, FiPlus } from "react-icons/fi";
import PageHeader from "@/components/common/PageHeader.jsx";
import Button from "@/components/ui/Button.jsx";
import Modal from "@/components/ui/Modal.jsx";
import Card from "@/components/ui/Card.jsx";
import ExpenseSummaryCard from "@/features/expenses/components/ExpenseSummaryCard.jsx";
import ExpenseFilters from "@/features/expenses/components/ExpenseFilters.jsx";
import ExpenseForm from "@/features/expenses/components/ExpenseForm.jsx";
import ExpenseList from "@/features/expenses/components/ExpenseList.jsx";

export default function ExpensesPage() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div>
      <PageHeader
        icon={FiTrendingDown}
        title="Expenses"
        description="See exactly where your money goes, expense by expense"
        actions={
          <Button icon={FiPlus} onClick={() => setFormOpen(true)}>
            Add Expense
          </Button>
        }
      />

      <div className="mb-6">
        <ExpenseSummaryCard />
      </div>

      <Card padding="p-5" className="mb-5">
        <ExpenseFilters />
      </Card>

      <ExpenseList />

      <Modal open={formOpen} onClose={() => setFormOpen(false)} title="Add Expense" description="Fill in the details below" size="lg">
        <ExpenseForm onCancel={() => setFormOpen(false)} />
      </Modal>
    </div>
  );
}
