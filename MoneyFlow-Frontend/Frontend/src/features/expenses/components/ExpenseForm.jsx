import FormField from "@/components/ui/FormField.jsx";
import Input from "@/components/ui/Input.jsx";
import Select from "@/components/ui/Select.jsx";
import CurrencyInput from "@/components/common/CurrencyInput.jsx";
import Button from "@/components/ui/Button.jsx";

export default function ExpenseForm({ onCancel }) {
  return (
    <form className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Amount" required>
          <CurrencyInput />
        </FormField>
        <FormField label="Date" required>
          <Input type="date" defaultValue="2026-09-15" />
        </FormField>
      </div>

      <FormField label="Description" required>
        <Input placeholder="e.g. Weekly groceries" />
      </FormField>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Payment Type" required>
          <Select defaultValue="card">
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="wallet">Wallet</option>
          </Select>
        </FormField>
        <FormField label="Account" required>
          <Select defaultValue="main-bank">
            <option value="main-bank">Main Bank</option>
            <option value="wallet">Vodafone Cash</option>
            <option value="cash">Cash on Hand</option>
          </Select>
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Expense Nature" required>
          <Select defaultValue="daily">
            <option value="daily">Daily</option>
            <option value="fixed">Monthly Fixed</option>
            <option value="emergency">Emergency</option>
          </Select>
        </FormField>
        <FormField label="Category" required>
          <Select defaultValue="food">
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="rent">Rent</option>
            <option value="bills">Bills</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </Select>
        </FormField>
      </div>

      <div className="mt-2 flex justify-end gap-3">
        <Button variant="ghost" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save Expense</Button>
      </div>
    </form>
  );
}
