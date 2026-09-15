import ConfirmDialog from "@/components/ui/ConfirmDialog.jsx";

export default function DeleteDebtDialog({ open, onClose, onConfirm, creditorName = "this debt" }) {
  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      danger
      title="Delete debt?"
      description={`Delete the debt with "${creditorName}"? All payment history will be lost.`}
      confirmLabel="Delete"
    />
  );
}
