import { useState } from "react";
import { FiTag, FiPlus } from "react-icons/fi";
import PageHeader from "@/components/common/PageHeader.jsx";
import Button from "@/components/ui/Button.jsx";
import Modal from "@/components/ui/Modal.jsx";
import CategoryForm from "@/features/expenseCategories/components/CategoryForm.jsx";
import CategoryList from "@/features/expenseCategories/components/CategoryList.jsx";

export default function ExpenseCategoriesPage() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div>
      <PageHeader
        icon={FiTag}
        title="Expense Categories"
        description="Organize your spending with categories that fit your life"
        actions={
          <Button icon={FiPlus} onClick={() => setFormOpen(true)}>
            New Category
          </Button>
        }
      />

      <CategoryList />

      <Modal open={formOpen} onClose={() => setFormOpen(false)} title="New Category" size="sm">
        <CategoryForm onCancel={() => setFormOpen(false)} />
      </Modal>
    </div>
  );
}
