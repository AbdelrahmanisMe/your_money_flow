import ConfirmDialog from "@/components/ui/ConfirmDialog.jsx";

export default function DeleteExpenseDialog({ open, onClose, onConfirm, expenseName = "this expense" }) {
  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      danger
      title="Delete expense?"
      description={`Are you sure you want to delete "${expenseName}"? The linked account balance will be restored.`}
      confirmLabel="Delete"
    />
  );
}
