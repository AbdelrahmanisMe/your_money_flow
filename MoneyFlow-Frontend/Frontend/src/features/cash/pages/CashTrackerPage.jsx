import { useState } from "react";
import { FiDollarSign, FiArrowDownCircle } from "react-icons/fi";
import PageHeader from "@/components/common/PageHeader.jsx";
import Button from "@/components/ui/Button.jsx";
import DateRangeFilter from "@/components/common/DateRangeFilter.jsx";
import CashBalanceCard from "@/features/cash/components/CashBalanceCard.jsx";
import QuickAddCash from "@/features/cash/components/QuickAddCash.jsx";
import WithdrawalDialog from "@/features/cash/components/WithdrawalDialog.jsx";
import CashExpensesList from "@/features/cash/components/CashExpensesList.jsx";

export default function CashTrackerPage() {
  const [withdrawOpen, setWithdrawOpen] = useState(false);

  return (
    <div>
      <PageHeader
        icon={FiDollarSign}
        title="Cash Tracker"
        description="Keep tabs on physical cash on hand, separate from your bank"
        actions={
          <Button variant="outline" icon={FiArrowDownCircle} onClick={() => setWithdrawOpen(true)}>
            Withdraw from Bank
          </Button>
        }
      />

      <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CashBalanceCard />
        </div>
        <QuickAddCash />
      </div>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-bold text-slate-100">Cash Expenses</h3>
        <DateRangeFilter />
      </div>

      <CashExpensesList />

      <WithdrawalDialog open={withdrawOpen} onClose={() => setWithdrawOpen(false)} />
    </div>
  );
}
