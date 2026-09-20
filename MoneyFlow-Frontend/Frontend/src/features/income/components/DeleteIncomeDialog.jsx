import ConfirmDialog from "@/components/ui/ConfirmDialog.jsx";

export default function DeleteIncomeDialog({ open, onClose, onConfirm, incomeName = "income source" }) {
  return <ConfirmDialog open={open} onClose={onClose} onConfirm={onConfirm} danger title="Are you sure?" description={`This will delete "${incomeName}" and stop all future recurrences.`} confirmLabel="Delete" cancelLabel="Cancel" />;
}
