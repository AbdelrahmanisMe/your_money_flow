import FormField from "@/components/ui/FormField.jsx";
import Input from "@/components/ui/Input.jsx";
import Select from "@/components/ui/Select.jsx";
import CurrencyInput from "@/components/common/CurrencyInput.jsx";
import TextArea from "@/components/ui/TextArea.jsx";
import Button from "@/components/ui/Button.jsx";

export default function DebtForm({ onCancel }) {
  return (
    <form className="flex flex-col gap-5">
      <FormField label="Creditor Name" required>
        <Input placeholder="e.g. Ahmed Hassan" />
      </FormField>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Total Amount" required>
          <CurrencyInput />
        </FormField>
        <FormField label="Currency" required>
          <Select defaultValue="usd">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="egp">EGP</option>
          </Select>
        </FormField>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Date Originated" required>
          <Input type="date" />
        </FormField>
        <FormField label="Expected Payoff Date" required>
          <Input type="date" />
        </FormField>
      </div>
      <FormField label="Notes">
        <TextArea placeholder="Optional notes..." />
      </FormField>
      <div className="mt-2 flex justify-end gap-3">
        <Button variant="ghost" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save Debt</Button>
      </div>
    </form>
  );
}
