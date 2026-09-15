import FormField from "@/components/ui/FormField.jsx";
import Input from "@/components/ui/Input.jsx";
import Select from "@/components/ui/Select.jsx";
import CurrencyInput from "@/components/common/CurrencyInput.jsx";
import Button from "@/components/ui/Button.jsx";
import ColorPicker from "@/features/expenseCategories/components/ColorPicker.jsx";

export default function AccountForm({ onCancel }) {
  return (
    <form className="flex flex-col gap-5">
      <FormField label="Account Name" required>
        <Input placeholder="e.g. Main Bank" />
      </FormField>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Type" required>
          <Select defaultValue="bank">
            <option value="bank">Bank</option>
            <option value="wallet">Wallet</option>
            <option value="cash">Cash</option>
          </Select>
        </FormField>
        <FormField label="Currency" required>
          <Select defaultValue="usd">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="egp">EGP</option>
          </Select>
        </FormField>
      </div>
      <FormField label="Initial Balance" required>
        <CurrencyInput />
      </FormField>
      <FormField label="Color">
        <ColorPicker />
      </FormField>
      <div className="mt-2 flex justify-end gap-3">
        <Button variant="ghost" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save Account</Button>
      </div>
    </form>
  );
}
