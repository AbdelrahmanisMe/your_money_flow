import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiEdit2, FiSlash } from "react-icons/fi";
import PageHeader from "@/components/common/PageHeader.jsx";
import Card from "@/components/ui/Card.jsx";
import Button from "@/components/ui/Button.jsx";
import DateRangeFilter from "@/components/common/DateRangeFilter.jsx";
import AccountTransactionsList from "@/features/accounts/components/AccountTransactionsList.jsx";
import AdjustBalanceDialog from "@/features/accounts/components/AdjustBalanceDialog.jsx";
import ArchiveAccountButton from "@/features/accounts/components/ArchiveAccountButton.jsx";

export default function AccountDetailsPage() {
  const { id } = useParams();
  const [adjustOpen, setAdjustOpen] = useState(false);

  return (
    <div>
      <Link to="/accounts" className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-teal-300">
        <FiArrowLeft /> Back to Accounts
      </Link>

      <PageHeader
        title={`Main Bank`}
        description={`Account #${id} · Bank · Opened Jan 2025`}
        actions={
          <>
            <Button variant="outline" icon={FiEdit2} onClick={() => setAdjustOpen(true)}>
              Adjust Balance
            </Button>
            <ArchiveAccountButton onClick={() => {}} />
          </>
        }
      />

      <Card className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Current Balance</span>
          <div className="mt-2 text-4xl font-extrabold text-slate-50">$8,420.50</div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <FiSlash className="text-red-400" /> Disabled accounts can&apos;t receive new transactions
        </div>
      </Card>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-bold text-slate-100">Transaction History</h3>
        <DateRangeFilter />
      </div>

      <AccountTransactionsList />

      <AdjustBalanceDialog open={adjustOpen} onClose={() => setAdjustOpen(false)} />
    </div>
  );
}
