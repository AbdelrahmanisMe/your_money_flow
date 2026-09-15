import FormField from "@/components/ui/FormField.jsx";
import Input from "@/components/ui/Input.jsx";
import Select from "@/components/ui/Select.jsx";
import TextArea from "@/components/ui/TextArea.jsx";
import CurrencyInput from "@/components/common/CurrencyInput.jsx";
import Button from "@/components/ui/Button.jsx";

export default function IncomeForm({ onCancel }) {
  return (
    <form className="flex flex-col gap-5">
      <FormField label="Source Name" required>
        <Input placeholder="e.g. Monthly Salary" />
      </FormField>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Type" required>
          <Select defaultValue="salary">
            <option value="salary">Salary</option>
            <option value="freelance">Freelance</option>
            <option value="rent">Rent</option>
            <option value="profit">Profit</option>
            <option value="other">Other</option>
          </Select>
        </FormField>
        <FormField label="Recurrence" required>
          <Select defaultValue="monthly">
            <option value="once">Once</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Amount" required>
          <CurrencyInput />
        </FormField>
        <FormField label="Date Received" required>
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
        <Button type="submit">Save Income</Button>
      </div>
    </form>
  );
}
