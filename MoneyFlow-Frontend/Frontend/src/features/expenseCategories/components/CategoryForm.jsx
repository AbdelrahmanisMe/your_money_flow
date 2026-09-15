import FormField from "@/components/ui/FormField.jsx";
import Input from "@/components/ui/Input.jsx";
import Button from "@/components/ui/Button.jsx";
import ColorPicker from "@/features/expenseCategories/components/ColorPicker.jsx";

export default function CategoryForm({ onCancel }) {
  return (
    <form className="flex flex-col gap-5">
      <FormField label="Category Name" required>
        <Input placeholder="e.g. Subscriptions" />
      </FormField>
      <FormField label="Color">
        <ColorPicker />
      </FormField>
      <div className="mt-2 flex justify-end gap-3">
        <Button variant="ghost" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save Category</Button>
      </div>
    </form>
  );
}
