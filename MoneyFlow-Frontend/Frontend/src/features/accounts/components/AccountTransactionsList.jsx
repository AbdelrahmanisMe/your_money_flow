import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table.jsx";

const MOCK_HISTORY = [
  { id: 1, date: "Sep 15, 2026", description: "Grocery shopping", amount: -84.2, balanceAfter: 8420.5 },
  { id: 2, date: "Sep 10, 2026", description: "Rent payment", amount: -900, balanceAfter: 8504.7 },
  { id: 3, date: "Sep 6, 2026", description: "Freelance payment", amount: 850, balanceAfter: 9404.7 },
  { id: 4, date: "Sep 1, 2026", description: "Monthly salary", amount: 4200, balanceAfter: 8554.7 },
];

export default function AccountTransactionsList() {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Date</TH>
          <TH>Description</TH>
          <TH>Amount</TH>
          <TH>Balance After</TH>
        </TR>
      </THead>
      <TBody>
        {MOCK_HISTORY.map((tx) => (
          <TR key={tx.id}>
            <TD className="text-slate-400">{tx.date}</TD>
            <TD className="font-semibold text-slate-100">{tx.description}</TD>
            <TD className={`font-bold ${tx.amount < 0 ? "text-red-400" : "text-emerald-400"}`}>
              {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </TD>
            <TD className="text-slate-300">${tx.balanceAfter.toLocaleString(undefined, { minimumFractionDigits: 2 })}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
}
