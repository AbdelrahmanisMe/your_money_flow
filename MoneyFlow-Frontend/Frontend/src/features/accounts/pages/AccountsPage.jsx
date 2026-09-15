import { useState } from "react";
import { FiCreditCard, FiPlus, FiRepeat } from "react-icons/fi";
import PageHeader from "@/components/common/PageHeader.jsx";
import Button from "@/components/ui/Button.jsx";
import Card from "@/components/ui/Card.jsx";
import Modal from "@/components/ui/Modal.jsx";
import AccountCard from "@/features/accounts/components/AccountCard.jsx";
import AccountForm from "@/features/accounts/components/AccountForm.jsx";
import TransferDialog from "@/features/accounts/components/TransferDialog.jsx";

const ACCOUNTS = [
  { id: 1, name: "Main Bank", type: "Bank", balance: 8420.5 },
  { id: 2, name: "Vodafone Cash", type: "Wallet", balance: 640.0 },
  { id: 3, name: "Cash on Hand", type: "Cash", balance: -120.0 },
];

export default function AccountsPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [transferOpen, setTransferOpen] = useState(false);
  const total = ACCOUNTS.reduce((sum, a) => sum + a.balance, 0);

  return (
    <div>
      <PageHeader
        icon={FiCreditCard}
        title="Accounts"
        description="Every bank, wallet, and cash stash — all in one view"
        actions={
          <>
            <Button variant="outline" icon={FiRepeat} onClick={() => setTransferOpen(true)}>
              Transfer
            </Button>
            <Button icon={FiPlus} onClick={() => setFormOpen(true)}>
              Add Account
            </Button>
          </>
        }
      />

      <Card className="mb-6 bg-gradient-to-br from-teal-400/10 to-indigo-500/10">
        <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Total Net Worth</span>
        <div className={`mt-2 text-4xl font-extrabold ${total < 0 ? "text-red-400" : "text-slate-50"}`}>
          ${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {ACCOUNTS.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>

      <Modal open={formOpen} onClose={() => setFormOpen(false)} title="Add Account">
        <AccountForm onCancel={() => setFormOpen(false)} />
      </Modal>
      <TransferDialog open={transferOpen} onClose={() => setTransferOpen(false)} />
    </div>
  );
}
