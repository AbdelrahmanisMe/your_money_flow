import { FiCalendar } from "react-icons/fi";
import Select from "@/components/ui/Select.jsx";
import SearchInput from "@/components/common/SearchInput.jsx";

export default function IncomeFilters() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <SearchInput placeholder="Search income sources..." className="sm:max-w-xs" />
      <Select className="sm:w-44" defaultValue="all">
        <option value="all">All Types</option>
        <option value="salary">Salary</option>
        <option value="freelance">Freelance</option>
        <option value="rent">Rent</option>
        <option value="profit">Profit</option>
        <option value="other">Other</option>
      </Select>
      <Select className="sm:w-44" defaultValue="all">
        <option value="all">All Recurrence</option>
        <option value="once">Once</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </Select>
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <FiCalendar /> September 2026
      </div>
    </div>
  );
}
