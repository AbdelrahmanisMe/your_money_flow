import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table.jsx";

const MOCK_PAYMENTS = [
  { id: 1, date: "Sep 10, 2026", amount: 200, account: "Main Bank" },
  { id: 2, date: "Aug 10, 2026", amount: 200, account: "Main Bank" },
  { id: 3, date: "Jul 12, 2026", amount: 150, account: "Cash on Hand" },
];

export default function PaymentsList() {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Date</TH>
          <TH>Amount</TH>
          <TH>Paid From</TH>
        </TR>
      </THead>
      <TBody>
        {MOCK_PAYMENTS.map((p) => (
          <TR key={p.id}>
            <TD className="text-slate-400">{p.date}</TD>
            <TD className="font-bold text-emerald-400">${p.amount.toLocaleString()}</TD>
            <TD className="text-slate-300">{p.account}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
}
