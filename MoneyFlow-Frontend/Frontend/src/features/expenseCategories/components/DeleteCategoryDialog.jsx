import ConfirmDialog from "@/components/ui/ConfirmDialog.jsx";

export default function DeleteCategoryDialog({ open, onClose, onConfirm, categoryName = "this category" }) {
  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      danger
      title="Delete category?"
      description={`Delete "${categoryName}"? Expenses using it will need to be recategorized.`}
      confirmLabel="Delete"
    />
  );
}
