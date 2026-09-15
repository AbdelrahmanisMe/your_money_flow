import { useState } from "react";
import { FiTrendingUp, FiPlus } from "react-icons/fi";
import PageHeader from "@/components/common/PageHeader.jsx";
import Button from "@/components/ui/Button.jsx";
import Modal from "@/components/ui/Modal.jsx";
import Card from "@/components/ui/Card.jsx";
import IncomeSummaryCard from "@/features/income/components/IncomeSummaryCard.jsx";
import IncomeFilters from "@/features/income/components/IncomeFilters.jsx";
import IncomeForm from "@/features/income/components/IncomeForm.jsx";
import IncomeList from "@/features/income/components/IncomeList.jsx";

export default function IncomePage() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div>
      <PageHeader
        icon={FiTrendingUp}
        title="Income"
        description="Every source of money coming in, organized in one place"
        actions={
          <Button icon={FiPlus} onClick={() => setFormOpen(true)}>
            Add Income
          </Button>
        }
      />

      <div className="mb-6">
        <IncomeSummaryCard />
      </div>

      <Card padding="p-5" className="mb-5">
        <IncomeFilters />
      </Card>

      <IncomeList />

      <Modal open={formOpen} onClose={() => setFormOpen(false)} title="Add Income Source" description="Fill in the details below">
        <IncomeForm onCancel={() => setFormOpen(false)} />
      </Modal>
    </div>
  );
}
