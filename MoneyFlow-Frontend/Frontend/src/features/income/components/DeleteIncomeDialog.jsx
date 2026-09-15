import ConfirmDialog from "@/components/ui/ConfirmDialog.jsx";

export default function DeleteIncomeDialog({ open, onClose, onConfirm, incomeName = "this income" }) {
  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      danger
      title="Delete income source?"
      description={`Are you sure you want to delete "${incomeName}"? This action cannot be undone.`}
      confirmLabel="Delete"
    />
  );
}
