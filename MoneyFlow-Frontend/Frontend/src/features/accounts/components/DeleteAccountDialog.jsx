import ConfirmDialog from "@/components/ui/ConfirmDialog.jsx";

export default function DeleteAccountDialog({ open, onClose, onConfirm, accountName = "this account" }) {
  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      danger
      title="Delete account?"
      description={`Deleting "${accountName}" will permanently remove it along with its transaction history.`}
      confirmLabel="Delete"
    />
  );
}
