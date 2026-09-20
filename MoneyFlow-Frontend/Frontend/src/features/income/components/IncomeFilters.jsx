import Input from "@/components/ui/Input.jsx";
import Select from "@/components/ui/Select.jsx";
import SearchInput from "@/components/common/SearchInput.jsx";

export default function IncomeFilters({ filters, onChange }) {
  return <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
    <Input type="month" value={filters.month} onChange={(event) => onChange({ ...filters, month: event.target.value })} className="sm:w-44" aria-label="Month and year" />
    <SearchInput value={filters.search} onChange={(event) => onChange({ ...filters, search: event.target.value })} placeholder="Search income sources..." className="sm:max-w-xs" />
    <Select value={filters.category} onChange={(event) => onChange({ ...filters, category: event.target.value })} className="sm:w-40"><option value="all">All types</option><option value="salary">Salary</option><option value="freelance">Freelance</option><option value="rental">Rental</option><option value="investment">Investment</option><option value="other">Other</option></Select>
    <Select value={filters.recurrence} onChange={(event) => onChange({ ...filters, recurrence: event.target.value })} className="sm:w-40"><option value="all">All recurrence</option><option value="once">Once</option><option value="weekly">Weekly</option><option value="monthly">Monthly</option><option value="yearly">Yearly</option></Select>
  </div>;
}
