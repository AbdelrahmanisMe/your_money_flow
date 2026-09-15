import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiPlus, FiCheckCircle } from "react-icons/fi";
import PageHeader from "@/components/common/PageHeader.jsx";
import Card from "@/components/ui/Card.jsx";
import Button from "@/components/ui/Button.jsx";
import DebtProgressBar from "@/features/debts/components/DebtProgressBar.jsx";
import PaymentsList from "@/features/debts/components/PaymentsList.jsx";
import AddPaymentDialog from "@/features/debts/components/AddPaymentDialog.jsx";
import MarkPaidDialog from "@/features/debts/components/MarkPaidDialog.jsx";

export default function DebtDetailsPage() {
  const { id } = useParams();
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [markPaidOpen, setMarkPaidOpen] = useState(false);

  return (
    <div>
      <Link to="/debts" className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-teal-300">
        <FiArrowLeft /> Back to Debts
      </Link>

      <PageHeader
        title="Ahmed Hassan"
        description={`Debt #${id} · Originated Jan 2026 · Expected payoff based on your payment rate: Dec 2026`}
        actions={
          <>
            <Button variant="outline" icon={FiCheckCircle} onClick={() => setMarkPaidOpen(true)}>
              Mark as Paid
            </Button>
            <Button icon={FiPlus} onClick={() => setPaymentOpen(true)}>
              Add Payment
            </Button>
          </>
        }
      />

      <Card className="mb-6">
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Original Amount</span>
            <div className="mt-1 text-2xl font-extrabold text-slate-50">$3,000</div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Total Paid</span>
            <div className="mt-1 text-2xl font-extrabold text-emerald-400">$700</div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Remaining</span>
            <div className="mt-1 text-2xl font-extrabold text-amber-300">$2,300</div>
          </div>
        </div>
        <DebtProgressBar paid={700} total={3000} />
      </Card>

      <h3 className="mb-4 font-bold text-slate-100">Payment History</h3>
      <PaymentsList />

      <AddPaymentDialog open={paymentOpen} onClose={() => setPaymentOpen(false)} />
      <MarkPaidDialog open={markPaidOpen} onClose={() => setMarkPaidOpen(false)} onConfirm={() => setMarkPaidOpen(false)} />
    </div>
  );
}
