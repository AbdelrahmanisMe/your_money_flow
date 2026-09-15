import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table.jsx";
import Badge from "@/components/ui/Badge.jsx";

const MOCK = [
  { id: 1, description: "Coffee", category: "Food", date: "Sep 15", amount: 4.5 },
  { id: 2, description: "Taxi ride", category: "Transport", date: "Sep 14", amount: 12 },
  { id: 3, description: "Street snacks", category: "Food", date: "Sep 13", amount: 6.5 },
];

export default function CashExpensesList() {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Description</TH>
          <TH>Category</TH>
          <TH>Date</TH>
          <TH>Amount</TH>
        </TR>
      </THead>
      <TBody>
        {MOCK.map((row) => (
          <TR key={row.id}>
            <TD className="font-semibold text-slate-100">{row.description}</TD>
            <TD>
              <Badge color="amber">{row.category}</Badge>
            </TD>
            <TD className="text-slate-400">{row.date}</TD>
            <TD className="font-bold text-red-400">-${row.amount.toFixed(2)}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
}
