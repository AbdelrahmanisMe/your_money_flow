import { useState } from "react";
import { Table, THead, TBody, TR, TH } from "@/components/ui/Table.jsx";
import IncomeRow from "@/features/income/components/IncomeRow.jsx";
import DeleteIncomeDialog from "@/features/income/components/DeleteIncomeDialog.jsx";

const MOCK_INCOME = [
  { id: 1, name: "Monthly Salary", type: "Salary", amount: 4200, date: "Sep 1, 2026", recurring: true, recurrence: "Monthly" },
  { id: 2, name: "UI Design Contract", type: "Freelance", amount: 850, date: "Sep 6, 2026", recurring: false },
  { id: 3, name: "Apartment Rent", type: "Rent", amount: 500, date: "Sep 1, 2026", recurring: true, recurrence: "Monthly" },
  { id: 4, name: "Stock Dividends", type: "Profit", amount: 50, date: "Sep 10, 2026", recurring: false },
];

export default function IncomeList() {
  const [deleteTarget, setDeleteTarget] = useState(null);

  return (
    <>
      <Table>
        <THead>
          <TR>
            <TH>Source</TH>
            <TH>Type</TH>
            <TH>Date</TH>
            <TH>Amount</TH>
            <TH>Actions</TH>
          </TR>
        </THead>
        <TBody>
          {MOCK_INCOME.map((income) => (
            <IncomeRow key={income.id} income={income} onEdit={() => {}} onDelete={() => setDeleteTarget(income)} />
          ))}
        </TBody>
      </Table>

      <DeleteIncomeDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => setDeleteTarget(null)}
        incomeName={deleteTarget?.name}
      />
    </>
  );
}
