import Select from "@/components/ui/Select.jsx";
import SearchInput from "@/components/common/SearchInput.jsx";

export default function ExpenseFilters() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <SearchInput placeholder="Search expenses..." className="sm:max-w-xs" />
      <Select className="sm:w-40" defaultValue="all">
        <option value="all">Time: Any</option>
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
        <option value="custom">Custom</option>
      </Select>
      <Select className="sm:w-40" defaultValue="all">
        <option value="all">Nature: Any</option>
        <option value="daily">Daily</option>
        <option value="fixed">Monthly Fixed</option>
        <option value="emergency">Emergency</option>
      </Select>
      <Select className="sm:w-44" defaultValue="all">
        <option value="all">Category: Any</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="rent">Rent</option>
        <option value="bills">Bills</option>
        <option value="health">Health</option>
      </Select>
      <Select className="sm:w-40" defaultValue="all">
        <option value="all">Account: Any</option>
        <option value="main-bank">Main Bank</option>
        <option value="cash">Cash</option>
      </Select>
    </div>
  );
}
