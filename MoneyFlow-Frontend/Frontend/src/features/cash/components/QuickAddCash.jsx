import { FiZap } from "react-icons/fi";
import Card from "@/components/ui/Card.jsx";
import CurrencyInput from "@/components/common/CurrencyInput.jsx";
import Select from "@/components/ui/Select.jsx";
import Button from "@/components/ui/Button.jsx";

export default function QuickAddCash() {
  return (
    <Card>
      <div className="mb-4 flex items-center gap-2.5">
        <FiZap className="text-amber-300" />
        <h3 className="font-bold text-slate-100">Quick Add</h3>
        <span className="ml-auto text-[11px] font-semibold text-slate-500">under 10 seconds</span>
      </div>
      <form className="flex flex-col gap-4">
        <CurrencyInput placeholder="Amount" />
        <Select defaultValue="food">
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="other">Other</option>
        </Select>
        <Button type="submit" fullWidth>
          Add Cash Expense
        </Button>
      </form>
    </Card>
  );
}
