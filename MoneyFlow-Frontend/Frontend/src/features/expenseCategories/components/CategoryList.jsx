import { useState } from "react";
import CategoryItem from "@/features/expenseCategories/components/CategoryItem.jsx";
import DeleteCategoryDialog from "@/features/expenseCategories/components/DeleteCategoryDialog.jsx";

const MOCK_CATEGORIES = [
  { id: 1, name: "Food", color: "#2dd4bf", count: 24, isDefault: true },
  { id: 2, name: "Transport", color: "#6366f1", count: 12, isDefault: true },
  { id: 3, name: "Rent", color: "#22d3ee", count: 1, isDefault: true },
  { id: 4, name: "Bills", color: "#fbbf24", count: 6, isDefault: true },
  { id: 5, name: "Health", color: "#f87171", count: 3, isDefault: true },
  { id: 6, name: "Education", color: "#34d399", count: 2, isDefault: true },
  { id: 7, name: "Entertainment", color: "#a78bfa", count: 8, isDefault: true },
  { id: 8, name: "Subscriptions", color: "#fb923c", count: 5, isDefault: false },
];

export default function CategoryList() {
  const [deleteTarget, setDeleteTarget] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {MOCK_CATEGORIES.map((category) => (
          <CategoryItem key={category.id} category={category} onEdit={() => {}} onDelete={() => setDeleteTarget(category)} />
        ))}
      </div>

      <DeleteCategoryDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => setDeleteTarget(null)}
        categoryName={deleteTarget?.name}
      />
    </>
  );
}
