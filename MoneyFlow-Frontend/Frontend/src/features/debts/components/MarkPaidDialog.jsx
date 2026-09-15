import ConfirmDialog from "@/components/ui/ConfirmDialog.jsx";

export default function MarkPaidDialog({ open, onClose, onConfirm }) {
  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      title="Mark debt as paid?"
      description="This will move the debt to your completed list."
      confirmLabel="Mark as Paid"
    />
  );
}
